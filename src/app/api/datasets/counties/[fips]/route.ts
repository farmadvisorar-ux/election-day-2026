import { NextResponse } from 'next/server';
import {
  COUNTY_BY_FIPS,
  COUNTIES_BY_STATE,
  getCountyElectionAuthorityTitle,
} from '../../../../../data/counties';
import { STATES_DATA } from '../../../../../data/states';

interface RouteContext {
  params: Promise<{ fips: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { fips: rawParam } = await context.params;
  const query = rawParam.trim();

  // 1. Direct O(1) lookup by 5-digit FIPS code
  const paddedFips = /^\d+$/.test(query) ? query.padStart(5, '0') : query;
  let match = COUNTY_BY_FIPS[paddedFips];

  // 2. Fallback lookup by county slug or city name
  if (!match) {
    const qLower = query.toLowerCase();
    for (const [stateSlug, list] of Object.entries(COUNTIES_BY_STATE)) {
      const found = list.find(
        (c) =>
          c.slug === qLower ||
          c.name.toLowerCase() === qLower ||
          c.countySeat.toLowerCase() === qLower
      );
      if (found) {
        match = { ...found, stateSlug };
        break;
      }
    }
  }

  if (!match) {
    return NextResponse.json(
      {
        error: 'County jurisdiction not found',
        query,
        hint: 'Provide a 5-digit Federal FIPS code (e.g. 48201 for Harris County, TX or 04013 for Maricopa County, AZ) or county slug.',
      },
      { status: 404 }
    );
  }

  const state = STATES_DATA[match.stateSlug];
  const authorityTitle = getCountyElectionAuthorityTitle(match.stateCode, match.name);

  const adjacentJurisdictions = match.adjacentFips
    .map((nf) => COUNTY_BY_FIPS[nf])
    .filter(Boolean)
    .map((n) => ({
      fips: n.fips,
      name: n.name,
      stateCode: n.stateCode,
      countySeat: n.countySeat,
      crossStateBorder: n.stateCode !== match.stateCode,
      canonicalUrl: `https://election-day-2026.vercel.app/states/${n.stateSlug}/counties/${n.slug}`,
    }));

  const payload = {
    countyJurisdiction: {
      fips: match.fips,
      name: match.name,
      slug: match.slug,
      stateCode: match.stateCode,
      stateName: state?.name,
      wikidataId: match.wikidataId,
      wikidataUrl: `https://www.wikidata.org/wiki/${match.wikidataId}`,
      electionAuthorityTitle: authorityTitle,
      countySeat: match.countySeat,
      topCities: match.topCities,
      uspsZipRange: match.zipRange,
      congressionalDistricts120th: match.congressionalDistricts,
      demographicsAndTurnout: {
        censusPopulation: match.population,
        citizenVotingAgePopulation: match.cvap,
        estimatedRegisteredVoters: match.registeredVoters,
        turnout2022Midterm: match.turnout2022Midterm,
        turnout2024General: match.turnout2024General,
      },
      electionDay2026Schedule: {
        electionDate: '2026-11-03',
        pollingHours: match.pollingHoursOverride || state?.pollingHours,
        timezone: match.timezoneOverride || state?.timezone,
        splitTimezoneOverride: Boolean(match.timezoneOverride),
        registrationDeadlineOnline: state?.registrationDeadline.online,
        sameDayRegistration: state?.registrationDeadline.sameDayRegistration,
        earlyVotingStarts: state?.earlyVoting.starts,
        earlyVotingEnds: state?.earlyVoting.ends,
        voterIdClassification: state?.voterId.type,
        workplaceLeaveStatute: state?.workLeaveLaw.statuteCitation,
        workplaceLeaveHours: state?.workLeaveLaw.hoursAllowed,
      },
      officialLinks: {
        canonicalGuideUrl: `https://election-day-2026.vercel.app/states/${match.stateSlug}/counties/${match.slug}`,
        embedWidgetUrl: `https://election-day-2026.vercel.app/embed/county/${match.fips}`,
        localCountyWebsite: match.localWebsite || null,
        stateElectionPortal: state?.officialPortal.url,
      },
      adjacentCounties: adjacentJurisdictions,
    },
  };

  return NextResponse.json(payload, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
