import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STATES_DATA, ALL_STATES_LIST, StateElectionData } from '../../../data/states';
import { DirectAnswerBox } from '../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../components/AdPlacement';
import { LeadCapture } from '../../../components/LeadCapture';
import { JsonLd } from '../../../components/JsonLd';
import {
  Calendar,
  Clock,
  CreditCard,
  Mail,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Vote,
  MapPin,
  HelpCircle,
  FileText,
  AlertCircle,
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
    description: `Official non-partisan voting guide for ${state.name} on November 3, 2026. Voter registration deadlines, early voting dates, mail-in rules, and ${state.name} Secretary of State portals.`,
    keywords: [
      `${state.name} election day 2026`,
      `when is election day 2026 in ${state.name}`,
      `${state.name} voter registration deadline 2026`,
      `${state.name} early voting dates 2026`,
      `${state.name} voter id requirements`,
      `${state.name} mail in ballot deadline 2026`,
    ],
  };
}

export default async function StatePage({ params }: Props) {
  const { state: stateSlug } = await params;
  const state: StateElectionData | undefined = STATES_DATA[stateSlug.toLowerCase()];

  if (!state) {
    notFound();
  }

  const governmentServiceSchema = {
    '@context': 'https://schema.org',
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
    },
    serviceOperator: {
      '@type': 'GovernmentOrganization',
      name: `${state.name} Secretary of State Elections Division`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: state.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
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
        name: `${state.name} 2026 Voting Guide`,
        item: `https://electionguide2026.org/states/${state.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={governmentServiceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbsSchema} />

      {/* State Header Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-slate-400">States</span>
            <span>/</span>
            <span className="text-blue-300 font-bold">{state.name}</span>
          </nav>

          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {state.name} Election Day 2026
            </h1>
            <span className="px-2.5 py-1 bg-blue-600 text-white font-mono text-xs font-bold rounded-md">
              {state.postalCode}
            </span>
          </div>

          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Official voter registration deadlines, early voting calendars, accepted voter IDs, and polling place hours for Tuesday, November 3, 2026.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AEO Direct Answer Box */}
        <DirectAnswerBox
          question={`When is Election Day 2026 in ${state.name}?`}
          directAnswer={`Election Day in ${state.name} is Tuesday, November 3, 2026. Polling places are open statewide from ${state.pollingHours}.`}
          supportingText={`Early voting in ${state.name} runs from ${state.earlyVoting.starts} through ${state.earlyVoting.ends}. Official voter registration cutoff is ${state.registrationDeadline.online}.`}
          statuteOrSource={`${state.officialPortal.name}`}
          sourceUrl={state.officialPortal.url}
        />

        {/* Top Ad Unit */}
        <AdPlacement format="leaderboard" slotId={`state-${state.postalCode}-top-ad`} />

        {/* 4 Pillars Grid: Deadlines, Early Voting, Mail-In, Voter ID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {/* Pillar 1: Registration Deadlines */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase mb-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Voter Registration Cutoffs</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">
              Registration Deadlines
            </h3>
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
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
              {state.registrationDeadline.notes}
            </div>
            {state.registrationDeadline.sameDayRegistration && (
              <div className="mt-3 px-3 py-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Same-Day Registration Available in {state.name}</span>
              </div>
            )}
          </div>

          {/* Pillar 2: Early Voting Window */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase mb-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>In-Person Early Voting</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">
              Early Voting Window
            </h3>
            <div className="text-sm font-bold text-slate-900 bg-slate-50 p-3 rounded-lg border border-slate-200 mb-3">
              📅 {state.earlyVoting.starts} – {state.earlyVoting.ends}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {state.earlyVoting.description}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600">
              <span>Saturday Voting: <strong>{state.earlyVoting.saturdayVoting ? 'Yes' : 'No'}</strong></span>
              <span>•</span>
              <span>Sunday Voting: <strong>{state.earlyVoting.sundayVoting ? 'Yes' : 'No'}</strong></span>
            </div>
          </div>

          {/* Pillar 3: Mail-In & Absentee Ballots */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase mb-2">
              <Mail className="w-4 h-4 text-purple-600" />
              <span>Vote-By-Mail / Absentee Rules</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">
              Mail-In Ballot Schedule
            </h3>
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
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
              {state.mailInVoting.details}
            </div>
          </div>

          {/* Pillar 4: Voter ID Requirements */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase mb-2">
              <CreditCard className="w-4 h-4 text-amber-600" />
              <span>Polling Place Identification</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">
              Voter ID Classification
            </h3>
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
                <h4 className="text-base font-bold text-slate-900 mt-0.5">
                  Class II United States Senate Election
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  {state.keyRaces2026.senateDescription || 'Major statewide federal Senate election.'}
                </p>
              </div>
            )}

            {state.keyRaces2026.governor && (
              <div className="p-4 bg-slate-50 border-l-4 border-indigo-600 rounded-r-xl">
                <span className="text-xs font-bold text-indigo-700 uppercase">State Chief Executive</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">
                  2026 {state.name} Gubernatorial Election
                </h4>
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
        </section>

        {/* Lead Capture */}
        <LeadCapture />

        {/* Footer Navigation Back to State Directory */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">
            ← Return to 50-State Hub
          </Link>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>Explore other battlegrounds:</span>
            <Link href="/states/texas" className="hover:text-blue-600 font-bold">Texas</Link>
            <Link href="/states/georgia" className="hover:text-blue-600 font-bold">Georgia</Link>
            <Link href="/states/arizona" className="hover:text-blue-600 font-bold">Arizona</Link>
            <Link href="/states/ohio" className="hover:text-blue-600 font-bold">Ohio</Link>
          </div>
        </div>
      </div>
    </>
  );
}
