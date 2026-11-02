import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DirectAnswerBox } from '../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../components/AdPlacement';
import { LeadCapture } from '../../../components/LeadCapture';
import { JsonLd } from '../../../components/JsonLd';
import { Building2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 Governor Elections: 36 State Races, Term Limits & Key Contests',
  description:
    'Comprehensive guide to the 36 U.S. gubernatorial elections on Election Day 2026 (November 3, 2026). Term-limited open seats in Florida, Georgia, Ohio, and Michigan.',
  keywords: [
    '2026 governor elections',
    '36 governor races 2026',
    'florida governor election 2026',
    'georgia governor election 2026',
    'michigan governor election 2026',
    'gubernatorial term limits 2026',
  ],
};

export default function Governor2026Page() {
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
        name: '2026 Governor Races',
        item: 'https://election-day-2026.vercel.app/races/governor-2026',
      },
    ],
  };

  const keyGovernorRaces = [
    {
      state: 'Florida',
      slug: 'florida',
      status: 'Open Seat (Term-Limited)',
      outgoing: 'Ron DeSantis',
      analysis: 'Constitutional term limits create an open gubernatorial field in the third most populous state.',
    },
    {
      state: 'Georgia',
      slug: 'georgia',
      status: 'Open Seat (Term-Limited)',
      outgoing: 'Brian Kemp',
      analysis: 'Critical Sun Belt state experiencing massive economic growth and balanced party competition.',
    },
    {
      state: 'Michigan',
      slug: 'michigan',
      status: 'Open Seat (Term-Limited)',
      outgoing: 'Gretchen Whitmer',
      analysis: 'Open seat contest in a marquee Great Lakes battleground state.',
    },
    {
      state: 'Ohio',
      slug: 'ohio',
      status: 'Open Seat (Term-Limited)',
      outgoing: 'Mike DeWine',
      analysis: 'Open seat following two full four-year terms by the incumbent administration.',
    },
    {
      state: 'Pennsylvania',
      slug: 'pennsylvania',
      status: 'Incumbent Eligible / Contested',
      outgoing: 'Josh Shapiro',
      analysis: 'Major Midwestern-Appalachian battleground where executive authority shapes state election policy.',
    },
    {
      state: 'Texas',
      slug: 'texas',
      status: 'Statewide Executive Contest',
      outgoing: 'Greg Abbott',
      analysis: 'Historic high-turnout contest shaping border governance, state energy policies, and judicial benches.',
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbsSchema} />

      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Races</span>
            <span>/</span>
            <span className="text-blue-300 font-bold">2026 Governors</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 Gubernatorial Elections
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Overview of the 36 state governor races on the ballot on November 3, 2026, highlighted by high-profile open seats due to term limits.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="How many Governor elections are in 2026?"
          directAnswer="Thirty-six (36) U.S. states and three U.S. territories will elect Governors on Tuesday, November 3, 2026."
          supportingText="Most U.S. states elect their chief executives during midterm federal election years. A substantial number of incumbents face mandatory constitutional term limits, guaranteeing open-seat contests across multiple battleground states."
          statuteOrSource="National Governors Association (NGA) Election Roster"
        />

        <AdPlacement format="leaderboard" slotId="gov-top-ad" />

        <section className="my-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">
            Marquee 2026 Gubernatorial Battles
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            State governors wield decisive power over state budgets, veto legislation, appointment of judicial vacancies, and administration of state voting laws:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyGovernorRaces.map((race, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-black text-slate-900">{race.state}</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {race.status}
                  </span>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Incumbent / Outgoing: <strong>{race.outgoing}</strong>
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {race.analysis}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href={`/states/${race.slug}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>{race.state} Voter Guide & Deadlines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdPlacement format="in-article" slotId="gov-mid-ad" />

        <LeadCapture />

        <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">
            ← Back to Election Day 2026 Hub
          </Link>
          <Link href="/races/senate-2026" className="text-blue-600 hover:text-blue-800 font-bold">
            2026 Senate Races Map →
          </Link>
        </div>
      </div>
    </>
  );
}
