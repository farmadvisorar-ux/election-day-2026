import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DirectAnswerBox } from '../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../components/AdPlacement';
import { LeadCapture } from '../../../components/LeadCapture';
import { AffiliatePartners } from '../../../components/AffiliatePartners';
import { JsonLd } from '../../../components/JsonLd';
import { GOVERNOR_RACES_2026 } from '../../../data/races2026';
import { STATE_PRIMARIES_2026 } from '../../../data/primaries';
import { SITE_URL } from '../../../lib/siteConfig';
import { Building2, ArrowRight, Sparkles, Vote } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 Governor Elections: All 36 State Races, Term-Limited Open Seats & Ratings',
  description:
    'Complete 2026 U.S. Gubernatorial election guide for Tuesday, November 3, 2026. All 36 state governor elections, 15+ term-limited open seats (GA, MI, FL, CA, OH, KS, CO, ME, NM), incumbents, and toss-up ratings.',
  keywords: [
    '2026 governor elections',
    '36 governor races 2026',
    'which governors are term limited in 2026',
    'open governor seats 2026',
    'florida governor election 2026',
    'georgia governor election 2026',
    'michigan governor election 2026',
    'california governor election 2026',
    'arizona governor election 2026',
    'nevada governor election 2026',
    'wisconsin governor election 2026',
    'pennsylvania governor election 2026',
  ],
  alternates: {
    canonical: `${SITE_URL}/races/governor-2026`,
  },
};

function getRatingBadgeStyle(rating: string) {
  if (rating === 'Toss-Up') return 'bg-amber-100 text-amber-900 border-amber-300';
  if (rating.includes('D')) return 'bg-blue-100 text-blue-900 border-blue-300';
  return 'bg-red-100 text-red-900 border-red-300';
}

export default function Governor2026Page() {
  const battlegroundGovRaces = GOVERNOR_RACES_2026.filter((r) => r.battleground);
  const termLimitedOpenRaces = GOVERNOR_RACES_2026.filter((r) => r.status.includes('Open Seat'));
  const repDefendingCount = GOVERNOR_RACES_2026.filter((r) => r.incumbentParty === 'R').length;
  const demDefendingCount = GOVERNOR_RACES_2026.filter((r) => r.incumbentParty === 'D').length;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: '2026 United States Gubernatorial Elections (36 States)',
        description:
          'All 36 state Governor elections held on Tuesday, November 3, 2026, including term-limited open seats and incumbent re-election contests.',
        numberOfItems: GOVERNOR_RACES_2026.length,
        itemListElement: GOVERNOR_RACES_2026.map((r, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: `2026 ${r.stateName} Governor Election (${r.status} - Incumbent: ${r.incumbent}, ${r.incumbentParty} - ${r.rating})`,
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
            name: '2026 Governor Elections (All 36 States)',
            item: `${SITE_URL}/races/governor-2026`,
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
            <span className="text-blue-300 font-bold">2026 Governors (36 States)</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>36 State Governorships + {termLimitedOpenRaces.length} Open Seats • Nov 3, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 Gubernatorial Elections: All 36 State Governor Races
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl">
            Complete breakdown of all 36 U.S. state governor elections on Tuesday, November 3, 2026—featuring {termLimitedOpenRaces.length} open-seat contests caused by constitutional term limits and retirements.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="How many states elect a Governor on Election Day 2026, and which Governors are term-limited?"
          directAnswer={`Thirty-six (36) U.S. states elect Governors on Tuesday, November 3, 2026 (${demDefendingCount} currently held by Democrats and ${repDefendingCount} held by Republicans), including ${termLimitedOpenRaces.length} open-seat governorships where the sitting Governor is term-limited or retiring.`}
          supportingText="High-profile term-limited open seats in 2026 include Georgia (Brian Kemp), Michigan (Gretchen Whitmer), Florida (Ron DeSantis), California (Gavin Newsom), Ohio (Mike DeWine), Kansas (Laura Kelly), Colorado (Jared Polis), Maine (Janet Mills), and New Mexico (Michelle Lujan Grisham), plus an open seat in Iowa (Kim Reynolds)."
          statuteOrSource="National Governors Association (NGA) & State Constitutional Term Limit Provisions"
        />

        {/* Quick Summary Cards */}
        <div className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-[11px] font-bold uppercase text-slate-500">Total 2026 Races</div>
            <div className="text-2xl font-black text-slate-900 mt-0.5">36 States</div>
            <div className="text-xs text-slate-500">+ 3 U.S. Territories</div>
          </div>
          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200">
            <div className="text-[11px] font-bold uppercase text-amber-900">Open Seats (2026)</div>
            <div className="text-2xl font-black text-amber-950 mt-0.5">
              {termLimitedOpenRaces.length} States
            </div>
            <div className="text-xs text-amber-800">Term-Limited / Retiring</div>
          </div>
          <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200">
            <div className="text-[11px] font-bold uppercase text-blue-800">Democrats Defending</div>
            <div className="text-2xl font-black text-blue-900 mt-0.5">{demDefendingCount} States</div>
            <div className="text-xs text-blue-700">MI, AZ, WI, KS, PA, ME, NM</div>
          </div>
          <div className="bg-red-50/70 p-4 rounded-xl border border-red-200">
            <div className="text-[11px] font-bold uppercase text-red-800">GOP Defending</div>
            <div className="text-2xl font-black text-red-900 mt-0.5">{repDefendingCount} States</div>
            <div className="text-xs text-red-700">GA, NV, OH, FL, NH, IA, TX</div>
          </div>
        </div>

        <AdPlacement format="leaderboard" slotId="gov-top-ad" />

        {/* Section 1: Battleground Governor Races */}
        <section className="my-8">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                1. Top 2026 Gubernatorial Battlegrounds ({battlegroundGovRaces.length} Contests)
              </h2>
              <p className="text-sm text-slate-600">
                State governors exercise veto power over state legislation, redistricting, judicial appointments, and election administration:
              </p>
            </div>
            <Link
              href="/sample-ballot-2026"
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs"
            >
              <Vote className="w-4 h-4" />
              <span>Check My 2026 Sample Ballot</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {battlegroundGovRaces.map((race) => {
              const prim = STATE_PRIMARIES_2026.find((p) => p.stateSlug === race.stateSlug);
              return (
                <div
                  key={race.stateSlug}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Link
                        href={`/states/${race.stateSlug}`}
                        className="text-lg font-black text-slate-900 hover:text-blue-700"
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
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 mb-2">
                      <span className="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-800 border border-slate-200">
                        {race.status}
                      </span>
                      <span>
                        Current Gov: <strong>{race.incumbent}</strong> ({race.incumbentParty})
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {race.storyline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      Primary: <strong>{prim ? prim.primaryDate : '2026'}</strong>
                    </span>
                    <Link
                      href={`/states/${race.stateSlug}`}
                      className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>{race.stateName} Voter Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <AdPlacement format="in-article" slotId="gov-mid-ad" />

        {/* Section 2: Full Table of All 36 Governor Races */}
        <section className="my-10 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 border-b border-slate-200 bg-slate-50">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              2. Complete Roster: All 36 State Governor Elections on November 3, 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every state holding a gubernatorial election in 2026, sorted alphabetically with incumbent status, term limits, and primary dates:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4">Sitting Governor</th>
                  <th className="py-3 px-4">2026 Seat Status</th>
                  <th className="py-3 px-4">Rating</th>
                  <th className="py-3 px-4">2026 Primary Date</th>
                  <th className="py-3 px-4">State Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[...GOVERNOR_RACES_2026]
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
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              r.status.includes('Open')
                                ? 'bg-amber-100 text-amber-900'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {r.status}
                          </span>
                        </td>
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
                            <span>Voter Rules</span>
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
            <Link href="/races/senate-2026" className="text-blue-600 hover:text-blue-800 font-bold">
              35 U.S. Senate Races (2026) →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
