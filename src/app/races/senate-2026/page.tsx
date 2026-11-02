import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DirectAnswerBox } from '../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../components/AdPlacement';
import { LeadCapture } from '../../../components/LeadCapture';
import { JsonLd } from '../../../components/JsonLd';
import { Vote, Shield, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 U.S. Senate Elections: Map, 34 Class II Seats & Key Battlegrounds',
  description:
    'Comprehensive guide to the 2026 United States Senate elections. Breakdown of all 34 Class II Senate seats on the ballot on November 3, 2026, toss-up battlegrounds, and balance of power.',
  keywords: [
    '2026 senate elections map',
    '2026 senate battlegrounds',
    'class II senate seats 2026',
    'senate seats up in 2026',
    'georgia senate race 2026',
    'north carolina senate race 2026',
  ],
};

export default function Senate2026Page() {
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
        name: '2026 Senate Races',
        item: 'https://election-day-2026.vercel.app/races/senate-2026',
      },
    ],
  };

  const battlegroundSenateRaces = [
    {
      state: 'Georgia',
      slug: 'georgia',
      incumbent: 'Jon Ossoff',
      party: 'Democratic',
      rating: 'Toss-Up / Pure Battleground',
      analysis: 'Top-tier national battleground where victory margins have historically hovered under 1%.',
    },
    {
      state: 'North Carolina',
      slug: 'northcarolina',
      incumbent: 'Thom Tillis',
      party: 'Republican',
      rating: 'Toss-Up / High Competitive',
      analysis: 'Marquee Sun Belt clash with high spending and intense statewide voter turnout campaigns.',
    },
    {
      state: 'Michigan',
      slug: 'michigan',
      incumbent: 'Gary Peters',
      party: 'Democratic',
      rating: 'Battleground / Lean Democratic',
      analysis: 'Crucial Upper Midwest industrial heartland seat where manufacturing and economic trends dominate.',
    },
    {
      state: 'Texas',
      slug: 'texas',
      incumbent: 'John Cornyn',
      party: 'Republican',
      rating: 'Lean Republican',
      analysis: 'Fast-growing electorate and massive media markets drive historic financial expenditures.',
    },
    {
      state: 'Maine',
      slug: 'maine',
      incumbent: 'Susan Collins',
      party: 'Republican',
      rating: 'Toss-Up / Lean Republican',
      analysis: 'Ranked-choice voting jurisdiction with independent split-ticket voting history.',
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
            <span className="text-blue-300 font-bold">2026 Senate</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 United States Senate Elections
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Map breakdown, the 34 Class II Senate seats on the ballot, and the key battlegrounds deciding the Senate majority.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="How many Senate seats are up for election in 2026?"
          directAnswer="Exactly 34 Class II seats in the United States Senate are up for regular election on Tuesday, November 3, 2026."
          supportingText="U.S. Senators serve staggered six-year terms. Class II senators were last elected in November 2020. The 2026 contest determines control of the 100-member upper chamber of the 120th United States Congress."
          statuteOrSource="U.S. Constitution, Article I, Section 3"
        />

        <AdPlacement format="leaderboard" slotId="senate-top-ad" />

        {/* Battleground Highlights */}
        <section className="my-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">
            Key 2026 Senate Battleground States
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Political analysts and election prognosticators have pinpointed these key races as deciding factors for Senate majority control:
          </p>

          <div className="space-y-4">
            {battlegroundSenateRaces.map((race, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base font-extrabold text-slate-950">
                      {race.state}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-900 border border-amber-200">
                      {race.rating}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700">
                    Incumbent: <strong>{race.incumbent}</strong> ({race.party})
                  </p>
                  <p className="text-xs text-slate-500 mt-1 max-w-xl">
                    {race.analysis}
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    href={`/states/${race.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold text-xs rounded-lg transition-colors border border-slate-200"
                  >
                    <span>{race.state} Voting Rules</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdPlacement format="in-article" slotId="senate-mid-ad" />

        {/* Class II Overview */}
        <article className="prose prose-slate max-w-none my-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Understanding Senate Class II Staggered Terms
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The Constitution divides the 100 U.S. Senators into three distinct classes to ensure continuity of government, with approximately one-third of the Senate standing for election every two years. 
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>Class II</strong> represents the class originally elected in 1790 and subsequent even years. The Class II senators elected in November 2026 will serve six-year terms expiring in January 2033. Because the Senate confirms presidential appointments, federal judges, and ratifies international treaties, Senate control is a central prize of the 2026 midterms.
          </p>
        </article>

        <LeadCapture />

        <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">
            ← Back to Election Day 2026 Hub
          </Link>
          <Link href="/races/governor-2026" className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1">
            <span>2026 Gubernatorial Races →</span>
          </Link>
        </div>
      </div>
    </>
  );
}
