import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  DISTRICTS_BY_SLUG,
  DISTRICTS_BY_STATE,
  TOP_COMPETITIVE_HOUSE_DISTRICTS,
} from '../../../data/districts';
import { STATES_DATA, TOPIC_SPOKES } from '../../../data/states';
import { getCountyElectionAuthorityTitle } from '../../../data/counties';
import { SITE_URL } from '../../../lib/siteConfig';
import { DirectAnswerBox } from '../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../components/AdPlacement';
import { AffiliatePartners } from '../../../components/AffiliatePartners';
import { LeadCapture } from '../../../components/LeadCapture';
import { JsonLd } from '../../../components/JsonLd';
import { CandidateClaimBanner } from '../../../components/CandidateClaimBanner';
import {
  Vote,
  MapPin,
  Building2,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  Users,
  Briefcase,
} from 'lucide-react';

interface Props {
  params: Promise<{ district: string }>;
}

export async function generateStaticParams() {
  return TOP_COMPETITIVE_HOUSE_DISTRICTS;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { district: rawSlug } = await params;
  const dist = DISTRICTS_BY_SLUG[rawSlug.toLowerCase()];

  if (!dist) {
    return { title: 'Congressional District Guide Not Found' };
  }

  const state = STATES_DATA[dist.stateSlug];
  const countiesStr = dist.counties
    .slice(0, 4)
    .map((c) => c.name)
    .join(', ');
  const citiesStr = dist.majorCities.slice(0, 4).join(', ');

  return {
    title: `${dist.code} Election Day 2026 (${dist.stateName} District ${dist.districtNumber}): Counties, Cities & Poll Hours`,
    description: `Official 2026 U.S. House midterm voter guide for ${dist.code} (${dist.stateName} Congressional District ${dist.districtNumber}). Covers ${countiesStr} (${citiesStr}), Nov 3, 2026 polling hours (${state?.pollingHours}), registration cutoff (${state?.registrationDeadline.online}), and Voter ID rules.`,
    alternates: {
      canonical: `${SITE_URL}/districts/${dist.slug}`,
    },
    keywords: [
      `${dist.code.toLowerCase()} election 2026`,
      `${dist.stateName.toLowerCase()} congressional district ${dist.districtNumber.toLowerCase()} election 2026`,
      `what counties are in ${dist.code.toLowerCase()}`,
      `${dist.code.toLowerCase()} polling places 2026`,
      `${dist.code.toLowerCase()} sample ballot 2026`,
      ...dist.majorCities.slice(0, 5).map((c) => `${c.toLowerCase()} congressional district 2026`),
    ],
  };
}

export default async function CongressionalDistrictPage({ params }: Props) {
  const { district: rawSlug } = await params;
  const dist = DISTRICTS_BY_SLUG[rawSlug.toLowerCase()];

  if (!dist) {
    notFound();
  }

  const state = STATES_DATA[dist.stateSlug];
  if (!state) {
    notFound();
  }

  const stateDistricts = DISTRICTS_BY_STATE[dist.stateSlug] || [];
  const countyNamesList = dist.counties.map((c) => c.name).join(', ');
  const topCitiesList = dist.majorCities.slice(0, 8).join(', ');

  const districtFaqs = [
    {
      q: `Which counties and cities are in ${dist.code} (${dist.stateName} Congressional District ${dist.districtNumber}) for the 2026 election?`,
      a: `According to the U.S. Census Bureau 119th/120th Congress relationship file, ${dist.code} encompasses all or part of ${dist.counties.length} county jurisdiction(s) in ${dist.stateName}: ${countyNamesList}. Major cities and county seats within ${dist.code} include ${topCitiesList} (USPS ZIP ranges: ${dist.zipRanges.join(', ')}).`,
    },
    {
      q: `What time do polls open and close in ${dist.code} on Election Day 2026?`,
      a: `On Tuesday, November 3, 2026, polling places across ${dist.code} in ${state.name} operate from ${state.pollingHours} (${state.timezone}). Any registered voter in ${dist.code} standing in line by the official poll closing time is legally entitled to cast a ballot.`,
    },
    {
      q: `When is the voter registration deadline to vote in the ${dist.code} U.S. House race in 2026?`,
      a: `Voters residing in ${dist.code} must register by ${state.registrationDeadline.online} (Mail postmark: ${state.registrationDeadline.mailPostmark}). ${
        state.registrationDeadline.sameDayRegistration
          ? `${state.name} also provides Same-Day Voter Registration at polling places and early voting sites across ${dist.code}.`
          : `Advance registration is required prior to the statutory cutoff.`
      }`,
    },
    {
      q: `What Voter ID is required at polling places in ${dist.code} (${state.postalCode})?`,
      a: `All precincts in ${dist.code} follow ${state.name}'s "${state.voterId.type}" law. ${state.voterId.description} Acceptable forms of identification include: ${state.voterId.acceptableDocs.join(', ')}.`,
    },
  ];

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AdministrativeArea',
        '@id': `${SITE_URL}/districts/${dist.slug}#district`,
        name: `${dist.stateName} Congressional District ${dist.districtNumber} (${dist.code})`,
        identifier: dist.code,
        containedInPlace: {
          '@type': 'State',
          name: state.name,
          sameAs: `https://www.wikidata.org/wiki/${state.wikidataId}`,
        },
        containsPlace: dist.counties.map((c) => ({
          '@type': 'AdministrativeArea',
          name: `${c.name}, ${state.postalCode}`,
          identifier: `FIPS:${c.fips}`,
          url: `${SITE_URL}/states/${state.slug}/counties/${c.slug}`,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: districtFaqs.map((f) => ({
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
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '435 U.S. House Districts',
            item: `${SITE_URL}/districts`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${state.name} (${state.postalCode})`,
            item: `${SITE_URL}/states/${state.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: `${dist.code} Election Guide`,
            item: `${SITE_URL}/districts/${dist.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={graphSchema} />

      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/districts" className="hover:text-white">435 U.S. House Districts</Link>
            <span>/</span>
            <Link href={`/states/${state.slug}`} className="hover:text-white">{state.name}</Link>
            <span>/</span>
            <span className="text-amber-300 font-bold">{dist.code}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 bg-indigo-600 text-white font-mono text-xs font-bold rounded">
              120th U.S. Congress • {dist.code}
            </span>
            <span className="px-2.5 py-0.5 bg-slate-800 text-slate-300 text-xs font-semibold rounded border border-slate-700">
              {dist.counties.length} {dist.counties.length === 1 ? 'County' : 'Counties'} Covered
            </span>
            {dist.isBattlegroundState && (
              <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 text-xs font-black rounded">
                ⭐ Key 2026 Midterm Battleground
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            {dist.code} Election Day 2026: {dist.stateName} District {dist.districtNumber}
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Official 2026 U.S. House of Representatives voter guide for <strong>{dist.code}</strong> covering{' '}
            <strong>{topCitiesList}</strong>: November 3, 2026 polling hours, county election boards, and statutory deadlines.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Navigation Bar */}
        <nav
          aria-label={`${dist.code} and ${state.name} Election Guides`}
          className="mb-6 bg-white p-3 rounded-xl border border-slate-200 shadow-xs overflow-x-auto"
        >
          <div className="flex items-center gap-2 text-xs font-bold whitespace-nowrap">
            <Link
              href={`/states/${state.slug}`}
              className="px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              ← {state.name} State Hub
            </Link>
            <Link
              href="/districts"
              className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-800 hover:bg-indigo-600 hover:text-white border border-indigo-200 transition-colors"
            >
              All 435 U.S. House Districts
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

        <DirectAnswerBox
          question={`When and how do I vote in the ${dist.code} Congressional Election in 2026?`}
          directAnswer={`The 2026 U.S. House general election for ${dist.code} (${dist.stateName} District ${dist.districtNumber}) takes place on Tuesday, November 3, 2026. Polling places across ${countyNamesList} are open from ${state.pollingHours} (${state.timezone}).`}
          supportingText={`Early voting in ${dist.code} runs ${state.earlyVoting.starts} – ${state.earlyVoting.ends}. Voter registration cutoff: ${state.registrationDeadline.online}. Voter ID rule: ${state.voterId.type}.`}
          statuteOrSource={`${state.officialPortal.name} & U.S. Census 119th/120th CD Crosswalk`}
          sourceUrl={state.officialPortal.url}
        />

        <AdPlacement format="leaderboard" slotId={`district-${dist.slug}-top-ad`} />

        {/* 2026 Candidate & Campaign Sponsorship Claim Hook */}
        <CandidateClaimBanner
          jurisdictionType="district"
          jurisdictionName={dist.code}
          voterCountEstimate={`over 750,000 residents across ${dist.counties.length} counties in ${dist.stateName}`}
        />

        {/* Counties & Local Election Boards Inside This Congressional District */}
        <section className="my-8 bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
              <MapPin className="w-4 h-4" />
              <span>U.S. Census County-to-Congressional-District Crosswalk</span>
            </div>
            <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-900 border border-indigo-200 rounded text-xs font-bold">
              {dist.counties.length} {dist.counties.length === 1 ? 'County' : 'Counties'} in {dist.code}
            </span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
            Counties, Cities & Local Election Boards in {dist.code}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
            Your physical polling place and sample ballot for the <strong>{dist.code}</strong> U.S. House race are administered by the county election board where you reside. Select your county in {dist.code} below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {dist.counties.map((county) => {
              const auth = getCountyElectionAuthorityTitle(state.postalCode, county.name);
              return (
                <Link
                  key={county.fips}
                  href={`/states/${state.slug}/counties/${county.slug}`}
                  className="group p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-black text-slate-900 group-hover:text-white truncate">
                        {county.name}, {state.postalCode}
                      </span>
                      <span className="px-1.5 py-0.5 bg-slate-200 group-hover:bg-blue-700 text-slate-700 group-hover:text-blue-100 font-mono text-[10px] font-bold rounded">
                        FIPS {county.fips}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 group-hover:text-blue-100 mt-1 truncate">
                      Seat: <strong>{county.countySeat}</strong> • Cities: {county.topCities.slice(0, 3).join(', ')}
                    </div>
                    <div className="text-[11px] text-slate-500 group-hover:text-blue-200 mt-0.5 truncate">
                      {auth} • Pop. {county.population.toLocaleString()} • ZIPs {county.zipRange}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white shrink-0" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Statutory Rules Table for this Congressional District */}
        <section className="my-8 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                {dist.code} ({dist.stateName}) — 2026 Statutory Voting Summary
              </h2>
              <p className="text-xs text-slate-500">
                Official state election rules governing all precincts within {dist.code}
              </p>
            </div>
            <a
              href={state.officialPortal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shrink-0"
            >
              <span>Official {state.postalCode} Sample Ballot (.gov)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-bold text-[11px]">
                <tr>
                  <th className="py-3 px-4">Voting Rule</th>
                  <th className="py-3 px-4">{dist.code} Schedule & Requirement</th>
                  <th className="py-3 px-4">Legal Citation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Congressional District</td>
                  <td className="py-3 px-4 font-bold text-indigo-700">
                    {dist.code} — {dist.stateName} District {dist.districtNumber}
                  </td>
                  <td className="py-3 px-4 text-slate-500">120th U.S. Congress (2-Year Term)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Major Municipalities</td>
                  <td className="py-3 px-4 text-slate-800">{topCitiesList}</td>
                  <td className="py-3 px-4 font-mono text-xs text-slate-500">ZIPs {dist.zipRanges.slice(0, 2).join(', ')}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Election Day Poll Hours</td>
                  <td className="py-3 px-4 font-bold text-blue-700">{state.pollingHours} ({state.timezone})</td>
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
                  <td className="py-3 px-4 text-slate-500">County Early Voting Centers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Voter ID Classification</td>
                  <td className="py-3 px-4 font-bold text-slate-900">{state.voterId.type}</td>
                  <td className="py-3 px-4 text-slate-500">52 U.S.C. § 21082 (HAVA)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Employee Voting Leave</td>
                  <td className="py-3 px-4 text-emerald-800 font-semibold">{state.workLeaveLaw.hoursAllowed}</td>
                  <td className="py-3 px-4 font-mono text-xs text-slate-600">{state.workLeaveLaw.statuteCitation}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section className="my-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Congressional District Voter Q&A</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions: {dist.code} Election Day 2026
          </h2>
          <div className="space-y-4">
            {districtFaqs.map((f, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-2">{f.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AdPlacement format="in-article" slotId={`district-${dist.slug}-mid-ad`} />
        <AffiliatePartners />
        <LeadCapture />

        {/* Sibling Congressional Districts in this State */}
        <section className="my-10 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              All {stateDistricts.length} U.S. House Congressional Districts in {state.name} ({state.postalCode}):
            </h2>
            <Link href="/districts" className="text-xs font-bold text-blue-600 hover:underline">
              All 435 U.S. Districts →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {stateDistricts.map((d) => (
              <Link
                key={d.slug}
                href={`/districts/${d.slug}`}
                className={`text-xs px-3 py-1.5 rounded-lg border font-mono font-bold transition-colors ${
                  d.slug === dist.slug
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-400 hover:text-indigo-700'
                }`}
              >
                {d.code}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
