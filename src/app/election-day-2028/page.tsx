import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Calendar,
  Vote,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Building2,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  HeartHandshake,
} from 'lucide-react';
import {
  ELECTION_DAY_2028_DATE,
  STATUTORY_CITATION_2028,
  SENATE_RACES_2028,
  PRESIDENTIAL_PRIMARY_CALENDAR_2028,
} from '../../data/elections2028';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { JsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'When is Election Day 2028? Tuesday, November 7, 2028 | 60th Presidential Election Hub',
  description:
    'Official date and statutory guide for Election Day 2028 (Tuesday, November 7, 2028). 538 Electoral College votes, 33 Class III Senate battlegrounds, 2028 presidential primary calendar, and verified candidate directory.',
  openGraph: {
    title: 'Election Day 2028: Tuesday, November 7, 2028',
    description:
      'The 60th United States Presidential Election. 538 Electoral College votes, 33 Class III U.S. Senate seats, and 435 U.S. House seats.',
    url: 'https://election-day-2026.vercel.app/election-day-2028',
    type: 'website',
  },
};

export default function ElectionDay2028Page() {
  const election2028EventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Election Day 2028 (60th United States Presidential Election)',
    startDate: '2028-11-07T07:00:00-05:00',
    endDate: '2028-11-07T20:00:00-05:00',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Polling Places Across All 50 U.S. States and Washington D.C.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    },
    description:
      'The 60th quadrennial United States presidential election to elect the President and Vice President, all 435 seats in the House of Representatives, and 33 Class III Senate seats.',
    organizer: {
      '@type': 'GovernmentOrganization',
      name: 'State Election Directors & National Association of Secretaries of State',
      url: 'https://www.nass.org',
    },
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
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
        name: 'Election Day 2028',
        item: 'https://election-day-2026.vercel.app/election-day-2028',
      },
    ],
  };

  return (
    <>
      <JsonLd data={election2028EventSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-950 via-indigo-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Official Statutory Guide • 60th U.S. Presidential Election
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Election Day <span className="text-amber-300">2028</span>
            </h1>

            <p className="mt-4 text-base sm:text-xl text-blue-100/90 max-w-3xl mx-auto font-medium">
              Tuesday, November 7, 2028. The 60th United States Presidential Election, 538 Electoral College votes, 33 Class III Senate battlegrounds, and 121st Congress.
            </p>

            {/* Quick Action Navigation Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <Link
                href="/candidates?cycle=2028+Presidential+Cycle"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-md transition-colors"
              >
                <Users className="w-4 h-4" />
                2028 Presidential Candidate Directory
              </Link>

              <Link
                href="/endorsements"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
              >
                <HeartHandshake className="w-4 h-4 text-rose-300" />
                2028 Endorsement Tracker
              </Link>

              <Link
                href="/runoffs-2026-2027"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 text-xs font-semibold border border-blue-400/30 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                2026 Runoffs & 2027 Off-Year Hub
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for Instant AEO / Google AI Overviews */}
          <div className="max-w-4xl mx-auto mt-8">
            <DirectAnswerBox
              question="When is Election Day 2028?"
              directAnswer="Election Day 2028 is on Tuesday, November 7, 2028."
              supportingText="Pursuant to federal law (2 U.S.C. § 7 and 3 U.S.C. § 1), federal general elections are held on the Tuesday next after the first Monday in November. The 2028 election decides the 48th President of the United States (538 Electoral votes; 270 to win), all 435 seats in the U.S. House of Representatives for the 121st Congress, and 33 Class III U.S. Senate seats."
              statuteOrSource="2 U.S. Code § 7 & 3 U.S. Code § 1"
              sourceUrl="https://www.law.cornell.edu/uscode/text/3/1"
            />
          </div>
        </section>

        {/* 2028 Key Numbers Matrix */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200 text-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Electoral College</span>
              <p className="text-3xl font-black text-blue-700 mt-1">538</p>
              <span className="text-[11px] text-slate-500 font-medium">270 to Win Majority</span>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200 text-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">U.S. Senate Seats</span>
              <p className="text-3xl font-black text-indigo-700 mt-1">33</p>
              <span className="text-[11px] text-slate-500 font-medium">Class III Full 6-Yr Terms</span>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200 text-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">U.S. House Seats</span>
              <p className="text-3xl font-black text-slate-900 mt-1">435</p>
              <span className="text-[11px] text-slate-500 font-medium">121st Congress</span>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200 text-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Gubernatorial</span>
              <p className="text-3xl font-black text-emerald-700 mt-1">11</p>
              <span className="text-[11px] text-slate-500 font-medium">States & 2 Territories</span>
            </div>
          </div>
        </section>

        {/* 2028 Presidential Primary Timeline */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Road to 2028</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
                  2028 Presidential Primary & Nomination Calendar
                </h2>
              </div>
              <Calendar className="w-6 h-6 text-blue-600 hidden sm:block" />
            </div>

            <div className="space-y-4">
              {PRESIDENTIAL_PRIMARY_CALENDAR_2028.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/70 gap-2"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{item.milestone}</h3>
                      <p className="text-xs text-slate-600 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-blue-700 sm:text-right flex-shrink-0 pl-9 sm:pl-0">
                    {item.expectedWindow}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2028 Class III Senate Battlegrounds */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Senate Landscape</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
                Key 2028 Class III U.S. Senate Battlegrounds
              </h2>
            </div>
            <Link
              href="/candidates?selectedOffice=U.S.+Senate"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>View All Senate Profiles</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SENATE_RACES_2028.map((race) => {
              const partyBadge =
                race.party === 'Democrat'
                  ? 'bg-blue-100 text-blue-800 border-blue-200'
                  : 'bg-rose-100 text-rose-800 border-rose-200';

              return (
                <div
                  key={race.state}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-bold text-slate-900">{race.state}</h3>
                        <span className="text-xs text-slate-500 font-mono">({race.postalCode})</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Incumbent: <strong className="text-slate-800">{race.incumbent}</strong>
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${partyBadge}`}>
                        {race.party}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                        {race.rating2028}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2 pt-2 border-t border-slate-100">
                    {race.keyIssues}
                  </p>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <Link
                      href={`/candidates?state=${race.postalCode}`}
                      className="text-blue-700 font-bold hover:underline flex items-center gap-1"
                    >
                      <Users className="w-3 h-3" />
                      <span>Candidates & Endorsements</span>
                    </Link>

                    <Link
                      href={`/state/${race.stateSlug}`}
                      className="text-slate-600 hover:text-slate-900 font-medium"
                    >
                      State Voting Rules →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Civic Preparation & Candidate Portal Gateway */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Campaign Headquarters</span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Preparing a 2028 Presidential or Congressional Campaign?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 mt-2 max-w-xl">
                Claim your candidate profile, publish your verified endorsements, and establish early district presence across our national network of 3,143 counties.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/candidate-portal"
                className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-colors text-center"
              >
                Claim Candidate Profile
              </Link>
              <Link
                href="/candidates"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors text-center"
              >
                Browse Candidate Directory
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
