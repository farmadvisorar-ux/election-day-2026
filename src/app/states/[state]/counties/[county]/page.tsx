import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STATES_DATA, TOPIC_SPOKES, StateElectionData } from '../../../../../data/states';
import {
  COUNTIES_BY_STATE,
  COUNTY_BY_FIPS,
  TOP_POPULATION_AND_BATTLEGROUND_COUNTIES,
  getCountyElectionAuthorityTitle,
  CountyItem,
} from '../../../../../data/counties';
import { DirectAnswerBox } from '../../../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../../../components/AdPlacement';
import { AffiliatePartners } from '../../../../../components/AffiliatePartners';
import { LeadCapture } from '../../../../../components/LeadCapture';
import { JsonLd } from '../../../../../components/JsonLd';
import {
  MapPin,
  Clock,
  Briefcase,
  ExternalLink,
  Building2,
  HelpCircle,
  ArrowRight,
  Users,
  Vote,
  Compass,
  Code2,
  AlertTriangle,
} from 'lucide-react';

interface Props {
  params: Promise<{ state: string; county: string }>;
}

export async function generateStaticParams() {
  return TOP_POPULATION_AND_BATTLEGROUND_COUNTIES;
}

function findCounty(stateSlug: string, countySlug: string): {
  state: StateElectionData | undefined;
  county: CountyItem | undefined;
  stateCounties: CountyItem[];
} {
  const sSlug = stateSlug.toLowerCase();
  const cSlug = countySlug.toLowerCase();
  const state = STATES_DATA[sSlug];
  const stateCounties = COUNTIES_BY_STATE[sSlug] || [];
  const county = stateCounties.find((c) => c.slug === cSlug);
  return { state, county, stateCounties };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug, county: countySlug } = await params;
  const { state, county } = findCounty(stateSlug, countySlug);

  if (!state || !county) {
    return { title: 'County Voting Guide Not Found' };
  }

  const authorityTitle = getCountyElectionAuthorityTitle(state.postalCode, county.name);
  const effectiveHours = county.pollingHoursOverride || state.pollingHours;
  const cityListStr = county.topCities.slice(0, 3).join(', ');

  return {
    title: `${county.name}, ${state.postalCode} (${county.countySeat}) Election Day 2026: Poll Hours, Early Voting & Ballot`,
    description: `Official 2026 Election Day voter guide for ${county.name}, ${state.name} (FIPS ${county.fips} • County Seat: ${county.countySeat} • ZIPs ${county.zipRange}). Nov 3, 2026 poll hours (${effectiveHours}), ${authorityTitle} deadlines, Congressional Districts (${county.congressionalDistricts.join(', ')}), and Voter ID rules.`,
    alternates: {
      canonical: `https://electionguide2026.org/states/${state.slug}/counties/${county.slug}`,
    },
    keywords: [
      `${county.name.toLowerCase()} ${state.name.toLowerCase()} election day 2026`,
      `${county.name.toLowerCase()} ${state.postalCode.toLowerCase()} polling places 2026`,
      `${county.countySeat.toLowerCase()} ${state.postalCode.toLowerCase()} polling places 2026`,
      ...county.topCities.map((city) => `${city.toLowerCase()} ${state.postalCode.toLowerCase()} sample ballot 2026`),
      `${county.zipRange} sample ballot 2026`,
      `${county.name.toLowerCase()} early voting 2026`,
      `${authorityTitle.toLowerCase()}`,
      ...county.congressionalDistricts.map((cd) => `${cd.toLowerCase()} election 2026`),
      `where to vote in ${county.countySeat.toLowerCase()} ${state.name.toLowerCase()}`,
    ],
  };
}

export default async function CountyElectionPage({ params }: Props) {
  const { state: stateSlug, county: countySlug } = await params;
  const { state, county, stateCounties } = findCounty(stateSlug, countySlug);

  if (!state || !county) {
    notFound();
  }

  const authorityTitle = getCountyElectionAuthorityTitle(state.postalCode, county.name);
  const effectivePollingHours = county.pollingHoursOverride || state.pollingHours;
  const effectiveTimezone = county.timezoneOverride || state.timezone;

  // Resolve adjacent counties via U.S. Census County Adjacency Graph
  const adjacentCounties = county.adjacentFips
    .map((fips) => COUNTY_BY_FIPS[fips])
    .filter((c): c is CountyItem & { stateSlug: string } => Boolean(c));

  const crossStateNeighbors = adjacentCounties.filter((c) => c.stateCode !== state.postalCode);

  const countyFaqs = [
    {
      q: `What time do polls open and close in ${county.name} (${county.countySeat}), ${state.name} on Election Day 2026?`,
      a: `On Tuesday, November 3, 2026, polling places across ${county.name}, ${state.postalCode} (Federal FIPS ${county.fips}, including ${county.topCities.join(', ')}) are open from ${effectivePollingHours} (${effectiveTimezone}). Any eligible ${county.name} voter standing in line by closing time is legally entitled to cast a ballot.`,
    },
    {
      q: `Which cities, ZIP codes, and U.S. Congressional Districts are in ${county.name}, ${state.postalCode}?`,
      a: `${county.name}'s county seat is ${county.countySeat}. Major municipalities and communities served by the ${authorityTitle} include ${county.topCities.join(', ')} (USPS ZIP code range ${county.zipRange}). For the 2026 U.S. House midterm elections, ${county.name} is represented by Congressional District(s): ${county.congressionalDistricts.join(', ')}.`,
    },
    {
      q: `When is the voter registration deadline in ${county.name}, ${state.postalCode} for 2026?`,
      a: `The voter registration cutoff for the ${county.registeredVoters.toLocaleString()} estimated registered voters and residents of ${county.name}, ${state.name} is ${state.registrationDeadline.online}. ${
        state.registrationDeadline.sameDayRegistration
          ? `${county.name} also participates in ${state.name}'s Same-Day Voter Registration program with proof of local residency inside ZIP range ${county.zipRange}.`
          : `Voters must be registered with the ${authorityTitle} prior to the statutory deadline.`
      }`,
    },
    {
      q: `When does early voting start in ${county.name} (${county.countySeat}) for the 2026 midterms?`,
      a: `Early voting in ${county.name}, ${state.postalCode} runs from ${state.earlyVoting.starts} through ${state.earlyVoting.ends}. ${state.earlyVoting.description}`,
    },
    {
      q: `What Voter ID is required at ${county.name}, ${state.postalCode} polling places in 2026?`,
      a: `${county.name} enforces ${state.name}'s "${state.voterId.type}" requirement. ${state.voterId.description} Approved IDs include: ${state.voterId.acceptableDocs.join(', ')}.`,
    },
    {
      q: `Do employees working in ${county.name} (${county.countySeat}), ${state.name} get paid time off work to vote?`,
      a: `Under ${state.workLeaveLaw.statuteCitation}, workers in ${county.name} are protected by ${state.name} state law: ${state.workLeaveLaw.hoursAllowed}. ${state.workLeaveLaw.summary}`,
    },
  ];

  // Presidential-Grade @graph Schema with County Wikidata Q-ID, Federal FIPS Code, Cities, Parent State & FAQPage
  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AdministrativeArea',
        '@id': `https://electionguide2026.org/states/${state.slug}/counties/${county.slug}#jurisdiction`,
        name: `${county.name}, ${state.name}`,
        identifier: `FIPS:${county.fips}`,
        sameAs: `https://www.wikidata.org/wiki/${county.wikidataId}`,
        postalCode: county.zipRange,
        containsPlace: county.topCities.map((city) => ({
          '@type': 'City',
          name: `${city}, ${state.postalCode}`,
        })),
        containedInPlace: {
          '@type': 'State',
          name: state.name,
          sameAs: `https://www.wikidata.org/wiki/${state.wikidataId}`,
        },
      },
      {
        '@type': 'GovernmentService',
        name: `${authorityTitle} — 2026 General Election Voter Services`,
        serviceType: 'County Voter Registration, Absentee Ballots, and Polling Place Administration',
        provider: {
          '@type': 'GovernmentOrganization',
          name: authorityTitle,
          url: county.localWebsite || state.officialPortal.url,
        },
        areaServed: {
          '@id': `https://electionguide2026.org/states/${state.slug}/counties/${county.slug}#jurisdiction`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: countyFaqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://electionguide2026.org',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'All 3,143 U.S. Counties',
            item: 'https://electionguide2026.org/counties',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${state.name} (${state.postalCode})`,
            item: `https://electionguide2026.org/states/${state.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: `${county.name} (FIPS ${county.fips})`,
            item: `https://electionguide2026.org/states/${state.slug}/counties/${county.slug}`,
          },
        ],
      },
    ],
  };

  const embedIframeCode = `<iframe src="https://election-day-2026.vercel.app/embed/county/${county.fips}" width="100%" height="260" style="border:0;border-radius:12px;overflow:hidden;" title="${county.name}, ${state.postalCode} Election Day 2026 Voter Guide & Countdown" loading="lazy"></iframe>`;

  return (
    <>
      <JsonLd data={graphSchema} />

      {/* County Header Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/counties" className="hover:text-white">3,143 U.S. Counties</Link>
            <span>/</span>
            <Link href={`/states/${state.slug}`} className="hover:text-white">{state.name}</Link>
            <span>/</span>
            <span className="text-amber-300 font-bold">{county.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 bg-blue-600 text-white font-mono text-xs font-bold rounded">
              FIPS {county.fips}
            </span>
            <span className="px-2.5 py-0.5 bg-slate-800 text-slate-300 font-mono text-xs font-semibold rounded border border-slate-700">
              Wikidata {county.wikidataId}
            </span>
            <span className="px-2.5 py-0.5 bg-slate-800 text-blue-300 text-xs font-semibold rounded border border-slate-700">
              County Seat: {county.countySeat}
            </span>
            <span className="px-2.5 py-0.5 bg-indigo-950 text-indigo-300 font-mono text-xs font-bold rounded border border-indigo-700">
              CD: {county.congressionalDistricts.join(', ')}
            </span>
            {state.battleground && (
              <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 text-xs font-black rounded">
                ⭐ 2026 Battleground Jurisdiction
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            {county.name}, {state.postalCode} Election Day 2026
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Official {authorityTitle} voting guide for <strong>{county.topCities.join(', ')}</strong> (ZIPs <span className="font-mono">{county.zipRange}</span>): November 3, 2026 polling hours, early voting locations, and Voter ID laws.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Navigation Bar to Parent State & 6 Statutory Topic Guides */}
        <nav
          aria-label={`${county.name} and ${state.name} Election Guides`}
          className="mb-6 bg-white p-3 rounded-xl border border-slate-200 shadow-xs overflow-x-auto"
        >
          <div className="flex items-center gap-2 text-xs font-bold whitespace-nowrap">
            <Link
              href={`/states/${state.slug}`}
              className="px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              ← All {state.name} ({stateCounties.length}) Counties
            </Link>
            {TOPIC_SPOKES.map((spoke) => (
              <Link
                key={spoke.topicSlug}
                href={`/states/${state.slug}/${spoke.topicSlug}`}
                className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors"
              >
                {state.postalCode} {spoke.shortTitle}
              </Link>
            ))}
          </div>
        </nav>

        {/* Split-Timezone County Alert Banner (for the 13 Split-Timezone States) */}
        {county.timezoneOverride && (
          <div className="mb-6 p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-950">
              <div className="font-black uppercase tracking-wider text-amber-800 mb-0.5">
                Split-Timezone County Alert — {county.timezoneOverride}
              </div>
              <p>
                Unlike other parts of {state.name}, <strong>{county.name} (FIPS {county.fips})</strong> operates in <strong>{county.timezoneOverride}</strong>. On Tuesday, November 3, 2026, local polling places in {county.countySeat} and across {county.name} observe hours of <strong>{effectivePollingHours}</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Speakable Position #0 Direct Answer Box */}
        <div className="aeo-speakable-summary">
          <DirectAnswerBox
            question={`When and how do I vote in ${county.name} (${county.countySeat}), ${state.name} on Election Day 2026?`}
            directAnswer={`Election Day in ${county.name}, ${state.postalCode} (FIPS ${county.fips}) is Tuesday, November 3, 2026, with polling places open from ${effectivePollingHours} (${effectiveTimezone}). Elections for ${county.topCities.join(', ')} (ZIPs ${county.zipRange}) are administered locally by the ${authorityTitle}.`}
            supportingText={`Early voting in ${county.name} runs ${state.earlyVoting.starts} – ${state.earlyVoting.ends}. Voter registration deadline: ${state.registrationDeadline.online}. Congressional District(s): ${county.congressionalDistricts.join(', ')}.`}
            statuteOrSource={`${authorityTitle} & ${state.officialPortal.name}`}
            sourceUrl={county.localWebsite || state.officialPortal.url}
          />
        </div>

        <AdPlacement format="leaderboard" slotId={`county-${county.fips}-top-ad`} />

        {/* Position #0 Featured Snippet Table: County Election Reference */}
        <section className="my-8 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                {county.name}, {state.name} — 2026 Voter Quick Reference Table
              </h2>
              <p className="text-xs text-slate-500">
                Verified statutory rules governing {county.countySeat} and all precincts within {county.name} (Federal FIPS {county.fips})
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {county.localWebsite && (
                <a
                  href={county.localWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
                >
                  <span>{county.name} Official Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={state.officialPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl"
              >
                <span>{state.postalCode} Sample Ballot Lookup (.gov)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <caption className="sr-only">
                {county.name}, {state.name} Election Day 2026 Deadlines, Cities, ZIP Codes, and Polling Hours
              </caption>
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-bold text-[11px]">
                <tr>
                  <th className="py-3 px-4">Election Parameter</th>
                  <th className="py-3 px-4">{county.name}, {state.postalCode} Official Rule</th>
                  <th className="py-3 px-4">Authority / Identifier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Local Election Authority</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">{authorityTitle}</td>
                  <td className="py-3 px-4 font-mono text-xs text-slate-500">FIPS {county.fips} • {county.wikidataId}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">County Seat & Major Cities</td>
                  <td className="py-3 px-4 text-slate-800">
                    <strong>{county.countySeat}</strong> (County Seat) • {county.topCities.join(', ')}
                  </td>
                  <td className="py-3 px-4 font-mono text-xs text-slate-500">ZIPs {county.zipRange}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">U.S. House District(s)</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-700">
                    {county.congressionalDistricts.join(', ')}
                  </td>
                  <td className="py-3 px-4 text-slate-500">120th U.S. Congress (2026 Ballot)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Election Day Poll Hours</td>
                  <td className="py-3 px-4 text-blue-700 font-bold">{effectivePollingHours} ({effectiveTimezone})</td>
                  <td className="py-3 px-4 text-slate-500">Tuesday, Nov 3, 2026</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Voter Registration Cutoff</td>
                  <td className="py-3 px-4 text-slate-800">{state.registrationDeadline.online}</td>
                  <td className="py-3 px-4 text-slate-500">
                    {state.registrationDeadline.sameDayRegistration ? '✓ Same-Day Reg Available' : 'Advance Cutoff'}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Early In-Person Voting</td>
                  <td className="py-3 px-4 text-slate-800">{state.earlyVoting.starts} – {state.earlyVoting.ends}</td>
                  <td className="py-3 px-4 text-slate-500">{authorityTitle} Centers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Mail-In / Absentee Return</td>
                  <td className="py-3 px-4 text-slate-800">{state.mailInVoting.returnDeadline}</td>
                  <td className="py-3 px-4 text-slate-500">
                    {state.mailInVoting.excuseRequired ? 'Excuse Required' : 'No-Excuse Mail Voting'}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Voter ID Requirement</td>
                  <td className="py-3 px-4 font-bold text-slate-900">{state.voterId.type}</td>
                  <td className="py-3 px-4 text-slate-500">52 U.S.C. § 21082 (HAVA)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Employee Time-Off to Vote</td>
                  <td className="py-3 px-4 text-emerald-800 font-semibold">{state.workLeaveLaw.hoursAllowed}</td>
                  <td className="py-3 px-4 font-mono text-xs text-slate-600">{state.workLeaveLaw.statuteCitation}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Census Electorate & Historical Turnout Profile Card (Eliminates Thin-Template Risk) */}
        <section className="my-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" />
            <span>U.S. Census Electorate & Turnout Profile (FIPS {county.fips})</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
            {county.name} Voter Demographics, Cities & Historical Turnout
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
            According to U.S. Census Bureau population estimates and state voter file benchmarks, <strong>{county.name}, {state.name}</strong> has a total population of <strong>{county.population.toLocaleString()}</strong> residents across {county.countySeat} and surrounding communities ({county.topCities.join(', ')}), with an estimated Citizen Voting-Age Population (CVAP) of <strong>{county.cvap.toLocaleString()}</strong>.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-bold uppercase text-slate-500">Census Population</div>
              <div className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                {county.population.toLocaleString()}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">FIPS {county.fips} Total</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-bold uppercase text-slate-500">Voting-Age (CVAP)</div>
              <div className="text-lg sm:text-xl font-black text-blue-700 mt-0.5">
                {county.cvap.toLocaleString()}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">~{county.registeredVoters.toLocaleString()} Registered</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-bold uppercase text-slate-500">2022 Midterm Turnout</div>
              <div className="text-lg sm:text-xl font-black text-emerald-700 mt-0.5">
                {county.turnout2022Midterm}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Prior Midterm Benchmark</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-bold uppercase text-slate-500">2024 General Turnout</div>
              <div className="text-lg sm:text-xl font-black text-indigo-700 mt-0.5">
                {county.turnout2024General}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Presidential Benchmark</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-2">
            <div>
              <strong>Municipalities & ZIP Coverage in {county.name}:</strong>{' '}
              {county.topCities.map((c) => `${c}, ${state.postalCode}`).join(' • ')} (USPS ZIPs: <span className="font-mono font-bold">{county.zipRange}</span>)
            </div>
          </div>
        </section>

        {/* 2026 Congressional Districts, Senate & Governor Races on the Ballot in this County */}
        <section className="my-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
            <Vote className="w-4 h-4" />
            <span>What Is on the 2026 Ballot in {county.name}?</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
            2026 Federal & Statewide Contests in {county.name}, {state.postalCode}
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-indigo-600">
              <div className="text-xs font-bold text-indigo-700 uppercase">
                U.S. House of Representatives — {county.congressionalDistricts.join(', ')}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                2026 Congressional Election for {county.name} ({county.congressionalDistricts.join(' & ')})
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Voters in {county.countySeat} and across {county.name} will elect their representative(s) to the 120th United States Congress for {county.congressionalDistricts.join(', ')}.
              </p>
            </div>

            {state.keyRaces2026.senate && (
              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-blue-700 uppercase">U.S. Senate Election on Ballot</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    2026 United States Senate Race in {state.name}
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {state.keyRaces2026.senateDescription || `Statewide U.S. Senate election appearing on all ${county.name} ballots.`}
                  </p>
                </div>
                <Link
                  href="/races/senate-2026"
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 shrink-0 flex items-center gap-1"
                >
                  <span>2026 Senate Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {state.keyRaces2026.governor && (
              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-emerald-700 uppercase">State Governor Election on Ballot</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    2026 {state.name} Gubernatorial Election
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {state.keyRaces2026.governorDescription || `Statewide election for Governor of ${state.name}.`}
                  </p>
                </div>
                <Link
                  href="/races/governor-2026"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 shrink-0 flex items-center gap-1"
                >
                  <span>2026 Governor Races</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* True Geographic Adjacency Mesh: Bordering Counties & Cross-Border Commuter Guide */}
        {adjacentCounties.length > 0 && (
          <section className="my-8 bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" />
              <span>U.S. Census Geographic Adjacency Graph (FIPS {county.fips})</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
              Bordering Counties & Regional Commuter Voting Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              Voters who live in <strong>{county.name}</strong> but commute to a neighboring county—or who recently moved across county lines—must cast their Election Day ballot in the county where they are registered to reside. Compare adjacent county election boards below:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mb-4">
              {adjacentCounties.map((neighbor) => {
                const neighborState = STATES_DATA[neighbor.stateSlug];
                const isCrossState = neighbor.stateCode !== state.postalCode;
                return (
                  <Link
                    key={neighbor.fips}
                    href={`/states/${neighbor.stateSlug}/counties/${neighbor.slug}`}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-2 ${
                      isCrossState
                        ? 'bg-amber-50/70 border-amber-300 hover:bg-amber-100'
                        : 'bg-slate-50 border-slate-200 hover:border-blue-500 hover:bg-blue-50/40'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {neighbor.name}, {neighbor.stateCode}
                        </span>
                        {isCrossState && (
                          <span className="px-1.5 py-0.2 bg-amber-300 text-slate-950 text-[9px] font-black rounded shrink-0">
                            Border State
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5 truncate">
                        Seat: {neighbor.countySeat} • {neighbor.pollingHoursOverride || neighborState?.pollingHours}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </Link>
                );
              })}
            </div>

            {crossStateNeighbors.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                <strong>🚗 Cross-State Commuter Legal Rule ({county.name}, {state.postalCode} ↔ {crossStateNeighbors.map((n) => `${n.name}, ${n.stateCode}`).join(' / ')}):</strong>{' '}
                If you reside in {county.name}, {state.postalCode} (where polls are open <strong>{effectivePollingHours}</strong> and Voter ID is <strong>{state.voterId.type}</strong>) but work across the state border in {crossStateNeighbors[0].name}, {crossStateNeighbors[0].stateCode}, your workplace time-off-to-vote entitlement is governed by your employer&apos;s workplace jurisdiction ({STATES_DATA[crossStateNeighbors[0].stateSlug]?.workLeaveLaw.statuteCitation || state.workLeaveLaw.statuteCitation}), while your ballot and registration cutoff ({state.registrationDeadline.online}) are governed by {state.name} law.
              </div>
            )}
          </section>
        )}

        {/* 2 County Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase mb-1">
              <Building2 className="w-4 h-4" />
              <span>Local Election Administration</span>
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">
              {authorityTitle}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              The {authorityTitle} (headquartered in {county.countySeat}) manages voter rolls, processes mail-in/absentee ballot applications, designates early voting centers, and assigns neighborhood polling precincts across {county.name}.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={state.officialPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Official {state.postalCode} Voter Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              {county.localWebsite && (
                <a
                  href={county.localWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-700 hover:underline inline-flex items-center gap-1"
                >
                  <span>{county.name} Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase mb-1">
              <Briefcase className="w-4 h-4" />
              <span>{county.name} Workplace Rights</span>
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">
              Time Off Work to Vote in {county.countySeat}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Working in {county.name} on Tuesday, November 3, 2026? Under <strong>{state.workLeaveLaw.statuteCitation}</strong>, employees are entitled to: {state.workLeaveLaw.hoursAllowed}.
            </p>
            <Link
              href={`/tools/employer-voting-leave-notice?state=${state.slug}`}
              className="text-xs font-bold text-indigo-600 hover:underline inline-flex items-center gap-1"
            >
              <span>Generate {county.name} Employer Leave Notice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* County FAQ Section */}
        <section className="my-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Hyper-Local County Q&A</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions: Voting in {county.name}, {state.postalCode} (2026)
          </h2>
          <div className="space-y-4">
            {countyFaqs.map((f, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-2">{f.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Embeddable County Civic Widget Box (Organic Local Backlink Generator) */}
        <section className="my-8 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <Code2 className="w-4 h-4" />
              <span>Free Local Civic Embed Widget (FIPS {county.fips})</span>
            </div>
            <Link
              href={`/embed/county/${county.fips}`}
              target="_blank"
              className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <span>Preview Live {county.name} Widget</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <h3 className="text-lg font-black mb-1">
            Embed the {county.name}, {state.postalCode} 2026 Voter Deadlines Card
          </h3>
          <p className="text-xs text-slate-300 mb-3">
            Local journalists, libraries, school districts, and chambers of commerce in {county.countySeat} ({county.zipRange}) can embed this live non-partisan voting schedule widget on any website:
          </p>
          <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto">
            {embedIframeCode}
          </pre>
        </section>

        <AdPlacement format="in-article" slotId={`county-${county.fips}-mid-ad`} />

        <AffiliatePartners />
        <LeadCapture />

        {/* Sibling Counties Internal Linking Grid (Every County in this State) */}
        <section className="my-10 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              All {stateCounties.length} Counties & Jurisdictions in {state.name} ({state.postalCode}):
            </h2>
            <Link href={`/states/${state.slug}`} className="text-xs font-bold text-blue-600 hover:underline">
              {state.name} State Hub →
            </Link>
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-72 overflow-y-auto p-3 bg-slate-100 rounded-xl border border-slate-200">
            {stateCounties.map((c) => (
              <Link
                key={c.slug}
                href={`/states/${state.slug}/counties/${c.slug}`}
                className={`text-[11px] px-2.5 py-1 rounded border transition-colors ${
                  c.slug === county.slug
                    ? 'bg-blue-600 text-white border-blue-600 font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-700'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
