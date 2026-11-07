import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DirectAnswerBox } from '../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../components/AdPlacement';
import { LeadCapture } from '../../../components/LeadCapture';
import { AffiliatePartners } from '../../../components/AffiliatePartners';
import { JsonLd } from '../../../components/JsonLd';
import { CandidateClaimBanner } from '../../../components/CandidateClaimBanner';
import { SENATE_RACES_2026 } from '../../../data/races2026';
import { STATE_PRIMARIES_2026 } from '../../../data/primaries';
import { SITE_URL } from '../../../lib/siteConfig';
import { Vote, Shield, ArrowRight, Sparkles, Scale, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 U.S. Senate Elections: All 35 Seats, Incumbents, Open Seats & Toss-Up Map',
  description:
    'Complete 2026 United States Senate election guide for Tuesday, November 3, 2026. All 33 Class II Senate races plus Ohio and Florida special elections, incumbents, open seats (MI, NH, MN, KY, IL), and toss-up battlegrounds.',
  keywords: [
    '2026 senate elections map',
    '2026 senate battlegrounds',
    'senate seats up in 2026',
    'open senate seats 2026',
    'who is running for senate in 2026',
    'georgia senate race 2026',
    'north carolina senate race 2026',
    'michigan senate election 2026',
    'ohio special senate election 2026',
    'maine senate election 2026',
  ],
  alternates: {
    canonical: `${SITE_URL}/races/senate-2026`,
  },
};

function getRatingBadgeStyle(rating: string) {
  if (rating === 'Toss-Up') return 'bg-amber-100 text-amber-900 border-amber-300';
  if (rating.includes('D')) return 'bg-blue-100 text-blue-900 border-blue-300';
  return 'bg-red-100 text-red-900 border-red-300';
}

export default function Senate2026Page() {
  const battlegroundRaces = SENATE_RACES_2026.filter((r) => r.battleground);
  const safeAndSolidRaces = SENATE_RACES_2026.filter((r) => !r.battleground);
  const openSeats = SENATE_RACES_2026.filter(
    (r) => r.status.includes('Open') || r.status.includes('Special')
  );

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: '2026 United States Senate Elections (35 Contests)',
        description:
          'All 33 Class II U.S. Senate elections and 2 Class III special elections held on Tuesday, November 3, 2026.',
        numberOfItems: SENATE_RACES_2026.length,
        itemListElement: SENATE_RACES_2026.map((r, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: `2026 ${r.stateName} U.S. Senate Election (${r.incumbent}, ${r.incumbentParty} - ${r.rating})`,
          url: `${SITE_URL}/states/${r.stateSlug}`,
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
            name: '2026 U.S. Senate Elections (All 35 Seats)',
            item: `${SITE_URL}/races/senate-2026`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaGraph} />

      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-400">Races</span>
            <span>/</span>
            <span className="text-blue-300 font-bold">2026 U.S. Senate (35 Seats)</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>33 Class II Seats + 2 Special Elections (OH &amp; FL) • Nov 3, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 United States Senate Elections: Complete 35-Seat Guide
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl">
            Every U.S. Senate seat on the Tuesday, November 3, 2026 ballot—including incumbent Senators, open-seat retirements, special elections, primary dates, and competitive ratings.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="How many U.S. Senate seats are on the ballot on Election Day 2026?"
          directAnswer="A total of 35 U.S. Senate seats (out of 100) are on the ballot on Tuesday, November 3, 2026: all 33 regular Class II six-year seats plus 2 Class III special elections in Ohio and Florida."
          supportingText="Republicans enter the 2026 cycle defending 22 of the 35 seats on the ballot (including Maine, North Carolina, Texas, Iowa, and the Ohio/Florida special elections), while Democrats defend 13 seats (including Toss-Up battlegrounds in Georgia and Michigan, plus open seats in New Hampshire, Minnesota, and Illinois)."
          statuteOrSource="U.S. Constitution, Article I, Section 3 & 17th Amendment"
        />

        {/* Quick Balance of Power Summary */}
        <div className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-[11px] font-bold uppercase text-slate-500">Total 2026 Seats</div>
            <div className="text-2xl font-black text-slate-900 mt-0.5">35 Seats</div>
            <div className="text-xs text-slate-500">33 Class II + 2 Special</div>
          </div>
          <div className="bg-red-50/70 p-4 rounded-xl border border-red-200">
            <div className="text-[11px] font-bold uppercase text-red-800">GOP Defending</div>
            <div className="text-2xl font-black text-red-900 mt-0.5">22 Seats</div>
            <div className="text-xs text-red-700">NC, ME, OH, TX, IA, FL</div>
          </div>
          <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200">
            <div className="text-[11px] font-bold uppercase text-blue-800">Democrats Defending</div>
            <div className="text-2xl font-black text-blue-900 mt-0.5">13 Seats</div>
            <div className="text-xs text-blue-700">GA, MI, NH, MN, VA, NM</div>
          </div>
          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200">
            <div className="text-[11px] font-bold uppercase text-amber-900">Open / Special Seats</div>
            <div className="text-2xl font-black text-amber-950 mt-0.5">{openSeats.length} Seats</div>
            <div className="text-xs text-amber-800">MI, NH, MN, KY, IL, OH, FL</div>
          </div>
        </div>

        <AdPlacement format="leaderboard" slotId="senate-top-ad" />

        <CandidateClaimBanner
          jurisdictionType="senate"
          jurisdictionName="35 U.S. Senate Contests"
          voterCountEstimate="millions of voters across all 35 Senate battleground states"
        />

        {/* Section 1: Battleground & Competitive Senate Races */}
        <section className="my-8">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                1. Top 2026 Senate Battlegrounds &amp; Competitive Contests ({battlegroundRaces.length} States)
              </h2>
              <p className="text-sm text-slate-600">
                These marquee contests will determine majority control of the U.S. Senate in the 120th Congress (2027–2029):
              </p>
            </div>
            <Link
              href="/sample-ballot-2026"
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs"
            >
              <Vote className="w-4 h-4" />
              <span>Build My 2026 Sample Ballot</span>
            </Link>
          </div>

          <div className="space-y-4">
            {battlegroundRaces.map((race) => {
              const prim = STATE_PRIMARIES_2026.find((p) => p.stateSlug === race.stateSlug);
              return (
                <div
                  key={race.stateSlug}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 transition flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        href={`/states/${race.stateSlug}`}
                        className="text-lg font-black text-slate-950 hover:text-blue-700"
                      >
                        {race.stateName} ({race.postalCode})
                      </Link>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-extrabold border ${getRatingBadgeStyle(
                          race.rating
                        )}`}
                      >
                        {race.rating}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">
                        {race.status}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-800 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span>
                        <strong>Incumbent:</strong> {race.incumbent} ({race.incumbentParty})
                      </span>
                      <span>•</span>
                      <span>
                        <strong>Term Class:</strong> {race.seatClass}
                      </span>
                      {prim && (
                        <>
                          <span>•</span>
                          <span className="text-blue-700 font-semibold">
                            2026 Primary: {prim.primaryDate}
                          </span>
                        </>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {race.storyline}
                    </p>
                  </div>

                  <div className="shrink-0 flex md:flex-col gap-2">
                    <Link
                      href={`/states/${race.stateSlug}`}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors"
                    >
                      <span>{race.postalCode} Voting Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/sample-ballot-2026?state=${race.stateSlug}`}
                      className="inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs rounded-xl border border-slate-200"
                    >
                      <span>{race.postalCode} Sample Ballot</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <AdPlacement format="in-article" slotId="senate-mid-ad" />

        {/* Section 2: Complete Table of All 35 Senate Seats */}
        <section className="my-10 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 border-b border-slate-200 bg-slate-50">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              2. Complete Roster: All 35 U.S. Senate Seats on the November 3, 2026 Ballot
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Includes all {safeAndSolidRaces.length} additional Likely/Safe Class II seats where primary elections often decide the November winner:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4">2026 Incumbent</th>
                  <th className="py-3 px-4">Seat Status</th>
                  <th className="py-3 px-4">2026 Rating</th>
                  <th className="py-3 px-4">2026 Primary Date</th>
                  <th className="py-3 px-4">State Voter Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[...SENATE_RACES_2026]
                  .sort((a, b) => a.stateName.localeCompare(b.stateName))
                  .map((r) => {
                    const prim = STATE_PRIMARIES_2026.find((p) => p.stateSlug === r.stateSlug);
                    return (
                      <tr key={r.stateSlug} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          <Link href={`/states/${r.stateSlug}`} className="hover:text-blue-700">
                            {r.stateName} ({r.postalCode})
                          </Link>
                        </td>
                        <td className="py-3 px-4 font-semibold text-slate-800">
                          {r.incumbent}{' '}
                          <span
                            className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-black ${
                              r.incumbentParty === 'D'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {r.incumbentParty}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-600">{r.status}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${getRatingBadgeStyle(
                              r.rating
                            )}`}
                          >
                            {r.rating}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          {prim ? prim.primaryDate : 'Spring/Summer 2026'}
                        </td>
                        <td className="py-3 px-4">
                          <Link
                            href={`/states/${r.stateSlug}`}
                            className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                          >
                            <span>Deadlines &amp; ID</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>

        <AffiliatePartners />
        <LeadCapture />

        <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">
            ← Back to Election Day 2026 Hub
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/sample-ballot-2026" className="text-blue-600 hover:text-blue-800 font-bold">
              What’s On My 2026 Ballot? →
            </Link>
            <Link href="/races/governor-2026" className="text-blue-600 hover:text-blue-800 font-bold">
              36 Governor Races (2026) →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
