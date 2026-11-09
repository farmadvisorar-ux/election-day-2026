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
  FileCheck2,
} from 'lucide-react';
import { RUNOFFS_AND_OFFYEAR_2027 } from '../../data/elections2028';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { JsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: '2026 Runoffs, Recount Rules & 2027 Off-Year Elections Hub',
  description:
    'Comprehensive statutory guide to post-2026 election procedures: canvass & certification deadlines, mandatory recount margins, Georgia December runoff, Louisiana Dec 5 runoff, 120th Congress convening, and 2027 Virginia & New Jersey state elections.',
  openGraph: {
    title: '2026 Runoffs & 2027 Off-Year Elections Hub',
    description:
      'Georgia runoffs, Louisiana general runoff, recount statutory margins, and 2027 state legislative elections.',
    url: 'https://election-day-2026.vercel.app/runoffs-2026-2027',
    type: 'website',
  },
};

export default function RunoffsAndOffYearPage() {
  const runoffsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '2026 Post-Election Runoffs, Recounts & 2027 Off-Year Elections',
    description:
      'Statutory overview of recount thresholds, runoff timelines, and the upcoming 2027 state elections.',
    url: 'https://election-day-2026.vercel.app/runoffs-2026-2027',
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
        name: '2026 Runoffs & 2027 Elections',
        item: 'https://election-day-2026.vercel.app/runoffs-2026-2027',
      },
    ],
  };

  return (
    <>
      <JsonLd data={runoffsSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-950 via-indigo-950 to-blue-950 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-4">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              Post-Election Canvass, Recounts & Upcoming Cycles
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              2026 Runoffs & <span className="text-amber-300">2027 Elections</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 max-w-3xl mx-auto font-medium">
              Statutory guide to December runoffs in Georgia and Louisiana, state recount thresholds, convening of the 120th Congress, and 2027 off-year legislative battles.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <Link
                href="/candidates"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-md transition-colors"
              >
                <Users className="w-4 h-4" />
                Candidate Directory
              </Link>

              <Link
                href="/endorsements"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
              >
                <HeartHandshake className="w-4 h-4 text-rose-300" />
                Endorsement Listings
              </Link>

              <Link
                href="/election-day-2028"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Election Day 2028 Hub →
              </Link>
            </div>
          </div>

          {/* Direct Answer Box */}
          <div className="max-w-4xl mx-auto mt-8">
            <DirectAnswerBox
              question="When are the 2026 post-election runoffs and recounts?"
              directAnswer="Runoffs take place in December 2026: Louisiana holds its general runoff on Saturday, December 5, 2026, and Georgia holds general runoffs 28 days post-election if no candidate exceeds 50% + 1."
              supportingText="Following the November general election, county boards of elections conduct mandatory official canvasses to audit provisional, overseas military, and cure ballots. Mandatory recount laws trigger automatically if margins are within 0.5% in key battleground states like Pennsylvania, Georgia, and Florida."
              statuteOrSource="O.C.G.A. § 21-2-501 & La. R.S. § 18:402"
              sourceUrl="https://law.justia.com"
            />
          </div>
        </section>

        {/* Milestone Schedule */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-blue-600" />
              Statutory Calendar: Runoffs, Certifications & 2027 Off-Year Races
            </h2>

            <div className="space-y-4">
              {RUNOFFS_AND_OFFYEAR_2027.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-900">
                      {item.jurisdiction}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 self-start sm:self-auto">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 50-State Recount Thresholds Guide */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              How Post-Election Recounts Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Recount rules vary by state statute between automatic triggers and candidate-requested petitions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Automatic Trigger ≤ 0.5%
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-1">
                  Pennsylvania, Florida, Georgia
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Under 25 P.S. § 3154 and Fla. Stat. § 102.141, if the margin of victory is 0.5% or less, the Secretary of the Commonwealth must order a statewide machine recount.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Candidate Requested (Bond Paid)
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-1">
                  Wisconsin, North Carolina
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  In Wisconsin (Wis. Stat. § 9.01), a trailing candidate within 1% may request a recount. If the margin is over 0.25%, the candidate must prepay estimated costs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Mandatory Majority Runoff
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-1">
                  Georgia (O.C.G.A. § 21-2-501)
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  If neither candidate earns an absolute majority (50% + 1 vote) in the general election, the top two finishers advance to an immediate December runoff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation CTAs */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/candidates"
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Explore Leaders</span>
                <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                  Candidate Directory
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Browse profiles for declared candidates and incumbents across all 50 states.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </Link>

            <Link
              href="/election-day-2028"
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Next Presidential Cycle</span>
                <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-indigo-600 transition-colors">
                  Election Day 2028 Hub
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tuesday, November 7, 2028 statutory countdown and 33 Class III Senate seats.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
