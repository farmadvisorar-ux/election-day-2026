import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STATES_DATA, TOPIC_SPOKES, ALL_STATES_LIST, StateElectionData } from '../../../data/states';
import { COUNTIES_BY_STATE, getCountyElectionAuthorityTitle } from '../../../data/counties';
import { DirectAnswerBox } from '../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../components/AdPlacement';
import { AffiliatePartners } from '../../../components/AffiliatePartners';
import { LeadCapture } from '../../../components/LeadCapture';
import { JsonLd } from '../../../components/JsonLd';
import {
  Calendar,
  Clock,
  CreditCard,
  Mail,
  CheckCircle2,
  ExternalLink,
  Vote,
  HelpCircle,
  FileText,
  Briefcase,
  Camera,
  ArrowRight,
  MapPin,
  Building2,
} from 'lucide-react';

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return Object.keys(STATES_DATA).map((slug) => ({
    state: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = STATES_DATA[stateSlug.toLowerCase()];

  if (!state) {
    return {
      title: 'State Voting Guide Not Found',
    };
  }

  return {
    title: `${state.name} Election Day 2026: Deadlines, Early Voting, ID Laws & Polling Hours`,
    description: `Official non-partisan voting guide for ${state.name} (${state.postalCode}) on November 3, 2026. Voter registration deadlines (${state.registrationDeadline.online}), early voting dates, paid work leave (${state.workLeaveLaw.statuteCitation}), and ${state.name} Secretary of State portals.`,
    alternates: {
      canonical: `https://election-day-2026.vercel.app/states/${state.slug}`,
    },
    keywords: [
      `${state.name} election day 2026`,
      `when is election day 2026 in ${state.name}`,
      `when election day 2026 ${state.name.toLowerCase()}`,
      `what time polls open close ${state.name.toLowerCase()}`,
      `${state.name} voter registration deadline 2026`,
      `last day register vote ${state.name.toLowerCase()}`,
      `${state.name} early voting dates 2026`,
      `${state.name} voter id requirements`,
      `need id to vote ${state.name.toLowerCase()}`,
      `no id can i vote ${state.name.toLowerCase()}`,
      `${state.name} mail in ballot deadline 2026`,
      `does ${state.name} give paid time off to vote`,
      `${state.name.toLowerCase()} eleciton day 2026`,
      `${state.name.toLowerCase()} sample balot 2026`,
    ],
  };
}

export default async function StatePage({ params }: Props) {
  const { state: stateSlug } = await params;
  const state: StateElectionData | undefined = STATES_DATA[stateSlug.toLowerCase()];

  if (!state) {
    notFound();
  }

  const stateCounties = COUNTIES_BY_STATE[state.slug] || [];
  const sampleCountyAuthority = stateCounties.length > 0
    ? getCountyElectionAuthorityTitle(state.slug, stateCounties[0].name)
    : `${state.name} County Board of Elections`;

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentService',
        name: `${state.name} 2026 Voter Registration and Election Service`,
        serviceType: 'Voter Information and Civic Records',
        provider: {
          '@type': 'GovernmentOrganization',
          name: state.officialPortal.name,
          url: state.officialPortal.url,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: state.name,
          sameAs: `https://www.wikidata.org/wiki/${state.wikidataId}`,
        },
        serviceOperator: {
          '@type': 'GovernmentOrganization',
          name: `${state.name} Secretary of State Elections Division`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: state.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
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
            item: 'https://election-day-2026.vercel.app',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '50-State Directory',
            item: 'https://election-day-2026.vercel.app/50-state-comparison-matrix',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${state.name} 2026 Voting Guide`,
            item: `https://election-day-2026.vercel.app/states/${state.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={graphSchema} />

      {/* State Header Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/50-state-comparison-matrix" className="hover:text-white">50-State Matrix</Link>
            <span>/</span>
            <span className="text-blue-300 font-bold">{state.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {state.name} Election Day 2026
            </h1>
            <span className="px-2.5 py-1 bg-blue-600 text-white font-mono text-xs font-bold rounded-md">
              {state.postalCode}
            </span>
            {state.battleground && (
              <span className="px-2.5 py-1 bg-amber-400 text-slate-950 text-xs font-black rounded-md">
                ⭐ Key 2026 Battleground
              </span>
            )}
          </div>

          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Official voter registration deadlines, early voting calendars, accepted voter IDs, work time-off statutes ({state.workLeaveLaw.statuteCitation}), and polling place hours for Tuesday, November 3, 2026.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Deep Topic Silo Navigation Bar (Links to all 6 dedicated sub-pages for this state) */}
        <nav
          aria-label={`${state.name} Specific Election Guides`}
          className="mb-6 bg-white p-3 rounded-xl border border-slate-200 shadow-xs overflow-x-auto"
        >
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
            Deep-Dive {state.name} ({state.postalCode}) Statutory Guides:
          </div>
          <div className="flex items-center gap-2 text-xs font-bold whitespace-nowrap">
            <a
              href="#counties"
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 transition-colors"
            >
              📍 All {stateCounties.length} {state.postalCode} Counties ↓
            </a>
            {TOPIC_SPOKES.map((spoke) => (
              <Link
                key={spoke.topicSlug}
                href={`/states/${state.slug}/${spoke.topicSlug}`}
                className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 hover:bg-blue-600 hover:text-white border border-slate-200 transition-colors"
              >
                {spoke.shortTitle} →
              </Link>
            ))}
          </div>
        </nav>

        {/* AEO Direct Answer Box */}
        <DirectAnswerBox
          question={`When is Election Day 2026 in ${state.name}?`}
          directAnswer={`Election Day in ${state.name} is Tuesday, November 3, 2026. Polling places are open statewide from ${state.pollingHours} (${state.timezone}).`}
          supportingText={`Early voting in ${state.name} runs from ${state.earlyVoting.starts} through ${state.earlyVoting.ends}. Official voter registration cutoff is ${state.registrationDeadline.online}.`}
          statuteOrSource={`${state.officialPortal.name} (${state.workLeaveLaw.statuteCitation})`}
          sourceUrl={state.officialPortal.url}
        />

        {/* Top Ad Unit */}
        <AdPlacement format="leaderboard" slotId={`state-${state.postalCode}-top-ad`} />

        {/* 6 Pillars Grid: Deadlines, Early Voting, Mail-In, Voter ID, Work Leave, Ballot Selfies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {/* Pillar 1: Registration Deadlines */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase mb-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Voter Registration Cutoffs</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                Registration Deadlines
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  <strong>Online Registration:</strong> {state.registrationDeadline.online}
                </li>
                <li>
                  <strong>Mail Postmark:</strong> {state.registrationDeadline.mailPostmark}
                </li>
                <li>
                  <strong>In-Person Cutoff:</strong> {state.registrationDeadline.inPerson}
                </li>
              </ul>
              <div className="mt-3 text-xs text-slate-500">
                {state.registrationDeadline.notes}
              </div>
              {state.registrationDeadline.sameDayRegistration && (
                <div className="mt-3 px-3 py-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Same-Day Registration Available in {state.name}</span>
                </div>
              )}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                href={`/states/${state.slug}/registration-deadline`}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Full {state.name} Registration Rules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Early Voting Window */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase mb-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>In-Person Early Voting</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                Early Voting Window
              </h2>
              <div className="text-sm font-bold text-slate-900 bg-slate-50 p-3 rounded-lg border border-slate-200 mb-3">
                📅 {state.earlyVoting.starts} – {state.earlyVoting.ends}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {state.earlyVoting.description}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
                <span>Saturday Voting: <strong>{state.earlyVoting.saturdayVoting ? 'Yes' : 'No'}</strong></span>
                <span>•</span>
                <span>Sunday Voting: <strong>{state.earlyVoting.sundayVoting ? 'Yes' : 'No'}</strong></span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                href={`/states/${state.slug}/early-voting`}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Full {state.name} Early Voting Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Mail-In & Absentee Ballots */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase mb-2">
                <Mail className="w-4 h-4 text-purple-600" />
                <span>Vote-By-Mail / Absentee Rules</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                Mail-In Ballot Schedule
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  <strong>Application Request:</strong> {state.mailInVoting.requestDeadline}
                </li>
                <li>
                  <strong>Ballot Return Deadline:</strong> {state.mailInVoting.returnDeadline}
                </li>
                <li>
                  <strong>Excuse Needed?</strong> {state.mailInVoting.excuseRequired ? 'Yes (Strict Criteria)' : 'No (Universal / No-Excuse)'}
                </li>
              </ul>
              <div className="mt-3 text-xs text-slate-600">
                {state.mailInVoting.details}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                href={`/states/${state.slug}/mail-in-ballot`}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Full {state.name} Mail-In Ballot Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 4: Voter ID Requirements */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase mb-2">
                <CreditCard className="w-4 h-4 text-amber-600" />
                <span>Polling Place Identification</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                Voter ID Classification
              </h2>
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-extrabold rounded-md mb-2">
                {state.voterId.type}
              </div>
              <p className="text-xs text-slate-700 mb-3 leading-relaxed">
                {state.voterId.description}
              </p>
              <div className="text-xs font-bold text-slate-900 mb-1">Approved Identification Documents:</div>
              <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                {state.voterId.acceptableDocs.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                href={`/states/${state.slug}/voter-id-rules`}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Full {state.name} Voter ID & Provisional Rules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 5: Paid Time Off Work Law */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase mb-2">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <span>Workplace Voting Leave Rights</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                Time Off to Vote Law
              </h2>
              <div className="inline-block px-2.5 py-0.5 bg-indigo-50 text-indigo-900 font-mono text-xs font-bold rounded border border-indigo-200 mb-2">
                {state.workLeaveLaw.statuteCitation}
              </div>
              <p className="text-xs font-bold text-slate-900 mb-1">
                Entitlement: {state.workLeaveLaw.hoursAllowed}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {state.workLeaveLaw.summary}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/states/${state.slug}/holiday-work-laws`}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Holiday & Work Law Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={`/tools/employer-voting-leave-notice?state=${state.slug}`}
                className="text-[11px] font-bold bg-indigo-600 text-white px-2.5 py-1 rounded hover:bg-indigo-500"
              >
                Generate HR Notice
              </Link>
            </div>
          </div>

          {/* Pillar 6: Polling Hours & Ballot Selfies */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase mb-2">
                <Camera className="w-4 h-4 text-rose-600" />
                <span>Polling Booth Conduct & Hours</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                Poll Hours & Ballot Selfies
              </h2>
              <p className="text-xs sm:text-sm text-slate-800 font-bold mb-2">
                ⏰ Election Day Hours: {state.pollingHours} ({state.timezone})
              </p>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
                <strong>Ballot Selfie Status:</strong>{' '}
                <span className="font-bold text-slate-900">{state.ballotSelfieLaw.allowed}</span>
                <p className="mt-1 text-slate-600">{state.ballotSelfieLaw.details}</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                href={`/states/${state.slug}/polling-hours`}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Full {state.name} Polling Hours & Line Rules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Official Portal Verification Box */}
        <section className="my-8 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-base">
              <FileText className="w-5 h-5 text-blue-700" />
              <span>Official {state.name} State Election Portal</span>
            </div>
            <p className="text-xs text-blue-800 mt-1 max-w-xl">
              Access your personalized sample ballot, find your designated neighborhood polling precinct, or check your registration status directly on official state records.
            </p>
          </div>
          <a
            href={state.officialPortal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Visit {state.postalCode} Secretary of State (.gov)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </section>

        {/* Key 2026 Races in this State */}
        <section className="my-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            <Vote className="w-4 h-4 text-blue-600" />
            <span>2026 Ballot Preview</span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            Key Elections on the 2026 Ballot in {state.name}
          </h2>

          <div className="space-y-4">
            {state.keyRaces2026.senate && (
              <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl">
                <span className="text-xs font-bold text-blue-700 uppercase">U.S. Senate Seat</span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  2026 United States Senate Election in {state.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  {state.keyRaces2026.senateDescription || 'Major statewide federal Senate election.'}
                </p>
              </div>
            )}

            {state.keyRaces2026.governor && (
              <div className="p-4 bg-slate-50 border-l-4 border-indigo-600 rounded-r-xl">
                <span className="text-xs font-bold text-indigo-700 uppercase">State Chief Executive</span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  2026 {state.name} Gubernatorial Election
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  {state.keyRaces2026.governorDescription || 'Election for Governor and statewide executive officers.'}
                </p>
              </div>
            )}

            {state.keyRaces2026.competitiveHouseDistricts.length > 0 && (
              <div>
                <span className="text-xs font-bold text-slate-700 uppercase block mb-1.5">
                  Key Competitive U.S. House Races:
                </span>
                <div className="flex flex-wrap gap-2">
                  {state.keyRaces2026.competitiveHouseDistricts.map((district, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-md border border-slate-200"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* In-Article Ad */}
        <AdPlacement format="in-article" slotId={`state-${state.postalCode}-mid-ad`} />

        {/* Complete County-by-County SEO Directory for this State */}
        {stateCounties.length > 0 && (
          <section
            id="counties"
            className="my-10 bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>County-by-County Election Jurisdiction Directory</span>
              </div>
              <span className="px-2.5 py-1 bg-blue-50 text-blue-800 border border-blue-200 rounded-md text-xs font-bold">
                {stateCounties.length} Official {state.postalCode} Jurisdictions Indexed
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              {state.name} Election Day 2026 by County ({stateCounties.length} Local Boards)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Select your county, parish, borough, or independent city in {state.name} below to view localized November 3, 2026 polling hours ({state.pollingHours}), early voting centers ({state.earlyVoting.starts} – {state.earlyVoting.ends}), ballot drop-box protocols, and official local election authority records (e.g., <strong>{sampleCountyAuthority}</strong>).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[520px] overflow-y-auto pr-1">
              {stateCounties.map((c) => (
                <Link
                  key={c.fips}
                  href={`/states/${state.slug}/counties/${c.slug}`}
                  className="group p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center justify-between gap-2"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 group-hover:text-white truncate">
                      {c.name}
                    </div>
                    <div className="text-[10px] text-slate-600 group-hover:text-blue-100 truncate mt-0.5">
                      Seat: {c.countySeat} • {c.congressionalDistricts.slice(0, 2).join(', ')}
                    </div>
                    <div className="text-[10px] text-slate-500 group-hover:text-blue-200 flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3 shrink-0" />
                      <span className="font-mono">FIPS {c.fips}</span>
                      <span>•</span>
                      <span>Pop. {c.population.toLocaleString()}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white shrink-0" />
                </Link>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-500">
                All {stateCounties.length} {state.name} counties follow state statutory registration cutoff: <strong>{state.registrationDeadline.online}</strong>.
              </span>
              <Link
                href="/counties"
                className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Search All 3,143 U.S. Counties Nationwide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        )}

        {/* Affiliate Toolkit */}
        <AffiliatePartners />

        {/* State FAQs */}
        <section className="my-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>State Voter FAQs</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            {state.name} Election Day 2026 Questions & Answers
          </h2>

          <div className="space-y-4">
            {state.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Localized Shorthand, Voice Search & Typo Matrix */}
          <div className="mt-6 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800">
            <h3 className="text-base font-black text-amber-300 mb-2">
              Quick Voice Search, Shorthand & Common Query Index for {state.name} ({state.postalCode})
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              Direct statutory answers for common mobile, voice, and shorthand voter searches in {state.name}:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="font-mono text-amber-300 font-bold mb-1">
                  &ldquo;when election day 2026 {state.name.toLowerCase()}&rdquo; / &ldquo;what time polls close {state.postalCode.toLowerCase()}&rdquo;
                </div>
                <p className="text-slate-200">
                  Tuesday, Nov 3, 2026 • Polls open <strong>{state.pollingHours}</strong> ({state.timezone}). Stay in line by closing time to vote.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="font-mono text-amber-300 font-bold mb-1">
                  &ldquo;need id to vote {state.name.toLowerCase()}&rdquo; / &ldquo;forgot id can i vote {state.postalCode.toLowerCase()}&rdquo;
                </div>
                <p className="text-slate-200">
                  Rule: <strong>{state.voterId.type}</strong>. Without ID, you have the federal right to cast a HAVA Provisional Ballot (52 U.S.C. § 21082).
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="font-mono text-amber-300 font-bold mb-1">
                  &ldquo;last day register vote {state.name.toLowerCase()}&rdquo; / &ldquo;moved didnt change address {state.postalCode.toLowerCase()}&rdquo;
                </div>
                <p className="text-slate-200">
                  Online cutoff: <strong>{state.registrationDeadline.online}</strong>.{' '}
                  {state.registrationDeadline.sameDayRegistration
                    ? `${state.name} ALSO offers Same-Day Registration at the polls on Nov 3!`
                    : `Moved within the same county? Update your address under NVRA fail-safe rules.`}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="font-mono text-amber-300 font-bold mb-1">
                  &ldquo;boss pay me to vote {state.name.toLowerCase()}&rdquo; / &ldquo;time off work vote {state.postalCode.toLowerCase()}&rdquo;
                </div>
                <p className="text-slate-200">
                  Statute: <strong>{state.workLeaveLaw.statuteCitation}</strong> ({state.workLeaveLaw.hoursAllowed}).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <LeadCapture />

        {/* Footer Navigation Back to All 51 States */}
        <div className="pt-6 border-t border-slate-200">
          <div className="text-xs font-bold uppercase text-slate-500 mb-3">
            Browse All 50 States & D.C. 2026 Guides:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {ALL_STATES_LIST.map((st) => (
              <Link
                key={st.slug}
                href={`/states/${st.slug}`}
                className={`text-[11px] px-2 py-1 rounded border transition-colors ${
                  st.slug === state.slug
                    ? 'bg-blue-600 text-white border-blue-600 font-bold'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400'
                }`}
              >
                {st.postalCode}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
