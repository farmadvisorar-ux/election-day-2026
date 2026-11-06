import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CITIES_2026_LIST, CITIES_2026_MAP } from '../../../data/cities2026';
import { STATES_DATA } from '../../../data/states';
import { SENATE_RACES_2026, GOVERNOR_RACES_2026 } from '../../../data/races2026';
import { SITE_URL } from '../../../lib/siteConfig';
import { AffiliatePartners } from '../../../components/AffiliatePartners';
import {
  MapPin,
  Clock,
  ShieldCheck,
  Bus,
  AlertTriangle,
  Building2,
  Calendar,
  ExternalLink,
  CheckCircle2,
  FileText,
  ArrowRight,
  Vote,
} from 'lucide-react';

export function generateStaticParams() {
  return CITIES_2026_LIST.map((c) => ({
    city: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = CITIES_2026_MAP[citySlug];
  if (!city) {
    return { title: 'City Election Guide Not Found' };
  }
  const state = STATES_DATA[city.stateSlug];

  const title = `Where to Vote in ${city.cityName}, ${city.stateAbbr} (2026 Election Day Poll Hours, Early Voting & Sample Ballot)`;
  const description = `Official 2026 ${city.cityName}, ${city.stateName} Midterm Election Guide for Tuesday, November 3, 2026. Polling hours (${state?.pollingHours || 'Local Hours'}), ${city.counties.map((k) => k.name).join(' / ')} Vote Centers, Voter ID rules, and ${city.transitAgency} Election Day transit.`;

  return {
    title,
    description,
    keywords: [
      `where to vote in ${city.cityName.toLowerCase()} 2026`,
      `${city.cityName.toLowerCase()} early voting 2026`,
      `${city.cityName.toLowerCase()} election day 2026 hours`,
      `${city.cityName.toLowerCase()} ${city.stateAbbr.toLowerCase()} sample ballot 2026`,
      `what county is ${city.cityName.toLowerCase()} in for voting`,
      `${city.cityName.toLowerCase()} polling places 2026`,
      `can i register to vote on election day in ${city.cityName.toLowerCase()}`,
    ],
    alternates: {
      canonical: `${SITE_URL}/cities/${city.slug}`,
    },
  };
}

export default async function CityElectionHubPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = CITIES_2026_MAP[citySlug];
  if (!city) {
    notFound();
  }

  const state = STATES_DATA[city.stateSlug];
  if (!state) {
    notFound();
  }

  const senateRaces = SENATE_RACES_2026.filter((r) => r.stateSlug === city.stateSlug);
  const govRace = GOVERNOR_RACES_2026.find((r) => r.stateSlug === city.stateSlug);

  // Other cities in the same state for internal link equity
  const siblingCities = CITIES_2026_LIST.filter(
    (c) => c.stateSlug === city.stateSlug && c.slug !== city.slug
  );

  // Shorthand, voice & natural FAQs for this city
  const cityFaqs = [
    {
      q: `Where do I vote in ${city.cityName}, ${city.stateAbbr} on Election Day 2026 (where to vote ${city.cityName.toLowerCase()} today)?`,
      a: `For the Tuesday, November 3, 2026 Midterm General Election, elections in ${city.cityName} are administered by ${city.electionAuthorityName} across ${city.counties.map((k) => k.name).join(', ')}. ${city.splitCountyNote} Polls in ${city.stateName} are open ${state.pollingHours}.`,
    },
    {
      q: `What county is ${city.cityName}, ${city.stateAbbr} in for voting and sample ballots?`,
      a: city.isSplitCounty
        ? `${city.cityName} is a multi-county city spanning ${city.counties.length} counties: ${city.counties.map((k) => k.name).join(', ')}. You must check your residential street address on the official ${city.stateName} voter portal (${state.officialPortal.url}) to confirm which county election board issues your 2026 sample ballot.`
        : `All of ${city.cityName} is located inside ${city.counties[0].name}, ${city.stateName}. Your 2026 sample ballot, early voting centers, and ballot drop boxes are managed by ${city.electionAuthorityName}.`,
    },
    {
      q: `Do I need an ID to vote in ${city.cityName}, ${city.stateAbbr} in 2026 (no id can i vote ${city.cityName.toLowerCase()})?`,
      a: `${city.stateName} enforces a "${state.voterId.type}" rule: ${state.voterId.description}. If you arrive at a ${city.cityName} polling place without required ID, you have the federal right under HAVA to request a Provisional Ballot and follow ${city.stateName}'s cure verification procedure.`,
    },
    {
      q: `When does Early Voting start in ${city.cityName}, ${city.stateAbbr} for the November 3, 2026 election?`,
      a: `In ${city.stateName}, early voting runs from ${state.earlyVoting.starts} through ${state.earlyVoting.ends}. In ${city.cityName}, voting operates under the "${city.votingSystemType}" system.`,
    },
    {
      q: `Can I take public transit to vote in ${city.cityName} on Election Day 2026?`,
      a: `Yes! ${city.transitAgency} serves ${city.cityName} polling places and Vote Centers. ${city.electionDayTransitPolicy}`,
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Election Day 2026', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'U.S. Cities Voting Guide', item: `${SITE_URL}/cities` },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${city.cityName}, ${city.stateAbbr} 2026 Election Hub`,
            item: `${SITE_URL}/cities/${city.slug}`,
          },
        ],
      },
      {
        '@type': 'GovernmentService',
        name: `${city.cityName}, ${city.stateAbbr} 2026 General Election & Voter Information Hub`,
        serviceType: 'Municipal & County Voter Assistance',
        provider: {
          '@type': 'GovernmentOrganization',
          name: city.electionAuthorityName,
          url: state.officialPortal.url,
        },
        areaServed: {
          '@type': 'City',
          name: `${city.cityName}, ${city.stateName}`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: cityFaqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white pt-10 pb-14 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-semibold mb-5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/cities" className="hover:text-white">
              Cities Directory
            </Link>
            <span>/</span>
            <Link href={`/states/${city.stateSlug}`} className="hover:text-white">
              {city.stateName}
            </Link>
            <span>/</span>
            <span className="text-blue-400 font-bold">
              {city.cityName}, {city.stateAbbr}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-extrabold uppercase tracking-wider">
              {city.cityName}, {city.stateAbbr} • Pop. {city.population.toLocaleString()}
            </span>
            {city.isSplitCounty ? (
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Multi-County City ({city.counties.length} Counties)
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Single County ({city.counties[0].name})
              </span>
            )}
            <Link
              href={`/es/estados/${city.stateSlug}`}
              className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold transition-colors"
            >
              🇪🇸 Guía de {city.stateName} en Español →
            </Link>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Where to Vote in {city.cityName}, {city.stateAbbr}:{' '}
            <span className="text-blue-400">2026 Election Day Guide &amp; Poll Hours</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed mb-8">
            Complete 2026 Midterm General Election guide for residents of{' '}
            <strong className="text-white">
              {city.cityName}, {city.stateName}
            </strong>{' '}
            on <strong className="text-white">Tuesday, November 3, 2026</strong>. Verify your administering county election office, early voting window, Vote Center rules, acceptable Voter ID, and public transit options below.
          </p>

          {/* 4 Key Statutory Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-extrabold uppercase mb-1">
                <Clock className="w-4 h-4" />
                <span>Nov 3, 2026 Poll Hours</span>
              </div>
              <div className="text-lg font-black text-white">{state.pollingHours}</div>
              <p className="text-xs text-slate-400 mt-1">
                In line before polls close? Stay in line—you have the legal right to vote.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-extrabold uppercase mb-1">
                <Calendar className="w-4 h-4" />
                <span>Registration Deadline</span>
              </div>
              <div className="text-lg font-black text-white">{state.registrationDeadline.online}</div>
              <p className="text-xs text-slate-400 mt-1">
                Same-Day Registration:{' '}
                <strong className="text-white">
                  {state.registrationDeadline.sameDayRegistration ? 'Available ✅' : 'Not Available ❌'}
                </strong>
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-extrabold uppercase mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>{city.stateAbbr} Voter ID Rule</span>
              </div>
              <div className="text-lg font-black text-white">{state.voterId.type}</div>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">{state.voterId.description}</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-extrabold uppercase mb-1">
                <Vote className="w-4 h-4" />
                <span>Early Voting Window</span>
              </div>
              <div className="text-sm font-black text-white leading-snug">
                {state.earlyVoting.starts} – {state.earlyVoting.ends}
              </div>
              <p className="text-xs text-slate-400 mt-1">Model: {city.votingSystemType}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* County Election Board & Split-County Alert Box */}
        <section
          className={`rounded-3xl p-6 sm:p-8 border-2 ${
            city.isSplitCounty ? 'bg-amber-50 border-amber-300' : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 block mb-1">
                Step 1: Verify Your Administering County Election Board
              </span>
              <h2 className="text-2xl font-black text-slate-900">
                {city.isSplitCounty
                  ? `⚠️ ${city.cityName} Spans ${city.counties.length} Different Counties`
                  : `${city.cityName} Election Administration (${city.counties[0].name})`}
              </h2>
            </div>
            <a
              href={state.officialPortal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-xs transition-colors shrink-0"
            >
              <span>Official {city.stateName} Polling Place Lookup</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-slate-800 leading-relaxed mb-6">{city.splitCountyNote}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.counties.map((county) => (
              <Link
                key={county.slug}
                href={`/states/${city.stateSlug}/counties/${county.slug}`}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">County Election Hub</div>
                  <div className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {county.name}, {city.stateAbbr}
                  </div>
                  <div className="text-xs text-blue-600 font-semibold mt-1">
                    Open {county.name} Poll Sites &amp; Drop Boxes →
                  </div>
                </div>
                <Building2 className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Voting System, Transit & Congressional Districts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Voting Model */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">
              How {city.cityName} Polling Places Work
            </h3>
            <p className="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg inline-block mb-3">
              {city.votingSystemType}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Administered by <strong>{city.electionAuthorityName}</strong>. Absentee/Mail Ballot Deadline:{' '}
              <strong>{state.mailInVoting.requestDeadline}</strong> (Return rule: {state.mailInVoting.returnDeadline}).
            </p>
            <Link
              href={`/sample-ballot-2026`}
              className="text-xs font-extrabold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <span>Build Your Printable {city.cityName} 2026 Sample Ballot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Public Transit to the Polls */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Bus className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">
              Getting to the Polls in {city.cityName}
            </h3>
            <p className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg inline-block mb-3">
              {city.transitAgency}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {city.electionDayTransitPolicy}
            </p>
            <Link
              href={`/tools/employer-voting-leave-notice`}
              className="text-xs font-extrabold text-emerald-700 hover:underline inline-flex items-center gap-1"
            >
              <span>Check {city.stateName} Paid Time-Off-to-Vote Work Law</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* What's on the 2026 Ballot in this City */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">
              On the Nov 3, 2026 Ballot in {city.cityName}
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 mb-4">
              <li>
                • <strong>U.S. House Districts:</strong>{' '}
                <span className="inline-flex flex-wrap gap-1 mt-1">
                  {city.majorCongressionalDistricts.map((dist) => (
                    <Link
                      key={dist}
                      href={`/districts/${dist.toLowerCase()}`}
                      className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-extrabold hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {dist}
                    </Link>
                  ))}
                </span>
              </li>
              <li>
                • <strong>U.S. Senate (2026):</strong>{' '}
                {senateRaces.length > 0
                  ? senateRaces.map((sr) => `${sr.incumbent} (${sr.rating})`).join('; ')
                  : `No regular U.S. Senate seat on ${city.stateAbbr}'s 2026 ballot`}
              </li>
              <li>
                • <strong>{city.stateName} Governor (2026):</strong>{' '}
                {govRace
                  ? `${govRace.incumbent} (${govRace.status} • ${govRace.rating})`
                  : `Next gubernatorial election not in 2026`}
              </li>
              <li>
                • <strong>State Propositions &amp; Local Judges:</strong>{' '}
                <Link href="/ballot-measures-2026" className="text-blue-600 font-bold hover:underline">
                  View {city.stateName} 2026 Ballot Measures →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* City-Specific Natural & Shorthand FAQ Section */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            Frequently Asked Questions: Voting in {city.cityName}, {city.stateAbbr} (2026)
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Direct statutory answers for {city.cityName} voters—including Election Day emergencies, missing ID rules, and split-county precinct checks.
          </p>
          <div className="space-y-4">
            {cityFaqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-black text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Major Cities in This State */}
        {siblingCities.length > 0 && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 mb-4">
              Other Major {city.stateName} Cities in Our 2026 Voting Network
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {siblingCities.map((sc) => (
                <Link
                  key={sc.slug}
                  href={`/cities/${sc.slug}`}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 font-bold text-xs transition-colors"
                >
                  {sc.cityName}, {sc.stateAbbr}
                </Link>
              ))}
              <Link
                href={`/states/${city.stateSlug}`}
                className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-extrabold text-xs transition-colors"
              >
                Full {city.stateName} 2026 Election Hub →
              </Link>
            </div>
          </section>
        )}

        <AffiliatePartners />
      </div>
    </div>
  );
}
