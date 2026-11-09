'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Vote,
  RotateCcw,
  Sparkles,
  Trophy,
  Scale,
  ShieldCheck,
  ChevronRight,
  Info,
  Share2,
  Check,
  MapPin,
  Calendar,
  Users,
  HeartHandshake,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import {
  STATES_ELECTORAL_2028,
  StateElectoralData,
  ElectoralStatus,
  ELECTORAL_VOTES_TO_WIN,
  TOTAL_ELECTORAL_VOTES,
} from '../../data/electoralCollege2028';
import { JsonLd } from '../../components/JsonLd';

export default function ElectoralCollege2028Page() {
  const [stateMap, setStateMap] = useState<Record<string, ElectoralStatus>>(() => {
    const initial: Record<string, ElectoralStatus> = {};
    STATES_ELECTORAL_2028.forEach((s) => {
      initial[s.id] = s.initialStatus;
    });
    return initial;
  });

  const [copied, setCopied] = useState(false);

  // Compute vote totals
  const totals = useMemo(() => {
    let dem = 0;
    let rep = 0;
    let tossup = 0;

    STATES_ELECTORAL_2028.forEach((s) => {
      const status = stateMap[s.id] || s.initialStatus;
      if (status === 'democrat') dem += s.votes;
      else if (status === 'republican') rep += s.votes;
      else tossup += s.votes;
    });

    return { dem, rep, tossup };
  }, [stateMap]);

  // Cycle a state's status on click: tossup -> democrat -> republican -> tossup
  const toggleState = (id: string) => {
    setStateMap((prev) => {
      const current = prev[id] || 'tossup';
      const next: ElectoralStatus =
        current === 'tossup'
          ? 'democrat'
          : current === 'democrat'
          ? 'republican'
          : 'tossup';
      return { ...prev, [id]: next };
    });
  };

  // Preset loaders
  const loadPreset = (preset: string) => {
    const updated: Record<string, ElectoralStatus> = {};
    STATES_ELECTORAL_2028.forEach((s) => {
      if (preset === '2024') {
        updated[s.id] = s.history2024 === 'D' ? 'democrat' : 'republican';
      } else if (preset === '2020') {
        updated[s.id] = s.history2020 === 'D' ? 'democrat' : 'republican';
      } else if (preset === 'blue-wall') {
        if (s.id === 'PA' || s.id === 'MI' || s.id === 'WI' || s.id === 'NE-02') {
          updated[s.id] = 'democrat';
        } else if (s.isBattleground) {
          updated[s.id] = 'republican';
        } else {
          updated[s.id] = s.initialStatus;
        }
      } else if (preset === 'sun-belt') {
        if (s.id === 'GA' || s.id === 'NC' || s.id === 'AZ' || s.id === 'NV') {
          updated[s.id] = 'republican';
        } else if (s.isBattleground) {
          updated[s.id] = 'democrat';
        } else {
          updated[s.id] = s.initialStatus;
        }
      } else if (preset === 'tie-269') {
        // Construct exact 269-269 scenario
        // Dem gets PA(19), MI(15), WI(10), NE-02(1) = 226 + 45 = 271 -> minus WI = 261 + NC(16) = ...
        // Let's set: Dem gets MI(15), PA(19), NV(6), NE-02(1) + baseline 226 = 267 -> + ME-02 flip or exact 269:
        // Dem base 226 + MI(15) + PA(19) + WI(10) - NE-02(1) - ME-AL/01 adjustments = 269
        // Dem: Base 226 + MI(15) + WI(10) + PA(19) = 270 (if Rep wins NE-02, it is 269-269!)
        STATES_ELECTORAL_2028.forEach((st) => {
          if (st.id === 'MI' || st.id === 'WI' || st.id === 'PA') {
            updated[st.id] = 'democrat';
          } else if (st.id === 'GA' || st.id === 'NC' || st.id === 'AZ' || st.id === 'NV' || st.id === 'NE-02') {
            updated[st.id] = 'republican';
          } else {
            updated[st.id] = st.initialStatus;
          }
        });
      } else {
        // Reset to default
        updated[s.id] = s.initialStatus;
      }
    });
    setStateMap(updated);
  };

  const copyScenario = () => {
    const text = `2028 Electoral College Map Simulator: Democrat ${totals.dem} EV • Republican ${totals.rep} EV • Toss-Up ${totals.tossup} EV (270 to Win). Build your map: https://election-day-2026.vercel.app/electoral-college-2028`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Determine winner status
  const demWins = totals.dem >= ELECTORAL_VOTES_TO_WIN;
  const repWins = totals.rep >= ELECTORAL_VOTES_TO_WIN;
  const isTie = totals.dem === 269 && totals.rep === 269 && totals.tossup === 0;

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '2028 Presidential Electoral College Map Simulator',
    url: 'https://election-day-2026.vercel.app/electoral-college-2028',
    description:
      'Interactive 538-vote Electoral College map simulator for the 2028 Presidential Election. Flip battleground states, test paths to 270, and explore 12th Amendment tie scenarios.',
    applicationCategory: 'CivicEducationApplication',
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
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Electoral College Simulator',
        item: 'https://election-day-2026.vercel.app/electoral-college-2028',
      },
    ],
  };

  return (
    <>
      <JsonLd data={appSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-slate-950 via-indigo-950 to-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Vote className="w-4 h-4 text-amber-300" />
                60th U.S. Presidential Election • Interactive Map Simulator
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyScenario}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Scenario Copied!' : 'Share Scenario'}</span>
                </button>

                <Link
                  href="/election-day-2028"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2028 Election Hub</span>
                </Link>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              2028 Electoral College <span className="text-amber-300">Map Simulator</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-blue-100/90 max-w-3xl">
              Build your own 2028 presidential election map. Click any state to toggle between Democratic (Blue), Republican (Red), or Toss-Up (Gray). Track the real-time vote count toward <strong>270 to win</strong> across all 538 electoral votes.
            </p>
          </div>
        </section>

        {/* Dynamic 538-Vote Progress Bar & Scoreboard */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-6 sm:p-8">
            {/* Live Tally Header */}
            <div className="grid grid-cols-3 items-center text-center pb-4 mb-4 border-b border-slate-100">
              <div className="text-left">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Democrat</span>
                <span className="text-3xl sm:text-5xl font-black text-blue-700">{totals.dem}</span>
                <span className="text-xs text-slate-500 block font-medium">
                  {totals.dem >= 270 ? 'Won Majority' : `${270 - totals.dem} needed for 270`}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Toss-Up / Deciding</span>
                <span className="text-2xl sm:text-4xl font-black text-slate-700">{totals.tossup}</span>
                <span className="text-xs text-slate-400 block font-medium">Votes In Play</span>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Republican</span>
                <span className="text-3xl sm:text-5xl font-black text-rose-700">{totals.rep}</span>
                <span className="text-xs text-slate-500 block font-medium">
                  {totals.rep >= 270 ? 'Won Majority' : `${270 - totals.rep} needed for 270`}
                </span>
              </div>
            </div>

            {/* Visual 538 Progress Bar with 270 Marker */}
            <div className="relative pt-6 pb-2">
              {/* 270 Marker Pin */}
              <div
                className="absolute top-0 transform -translate-x-1/2 flex flex-col items-center z-10"
                style={{ left: `${(270 / TOTAL_ELECTORAL_VOTES) * 100}%` }}
              >
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 shadow">
                  270 to Win
                </span>
                <div className="w-0.5 h-6 bg-slate-900" />
              </div>

              {/* Progress Track */}
              <div className="h-8 w-full bg-slate-200 rounded-2xl overflow-hidden flex shadow-inner">
                <div
                  style={{ width: `${(totals.dem / TOTAL_ELECTORAL_VOTES) * 100}%` }}
                  className="bg-blue-600 h-full transition-all duration-300 flex items-center justify-center text-white text-xs font-black"
                >
                  {totals.dem > 40 && `${totals.dem}`}
                </div>

                <div
                  style={{ width: `${(totals.tossup / TOTAL_ELECTORAL_VOTES) * 100}%` }}
                  className="bg-slate-300 h-full transition-all duration-300 flex items-center justify-center text-slate-700 text-xs font-bold"
                >
                  {totals.tossup > 30 && `${totals.tossup}`}
                </div>

                <div
                  style={{ width: `${(totals.rep / TOTAL_ELECTORAL_VOTES) * 100}%` }}
                  className="bg-rose-600 h-full transition-all duration-300 flex items-center justify-center text-white text-xs font-black"
                >
                  {totals.rep > 40 && `${totals.rep}`}
                </div>
              </div>
            </div>

            {/* Winner Alert Banner */}
            {demWins && (
              <div className="mt-4 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-center font-bold flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Democratic Ticket Reaches 270 Majority ({totals.dem} Electoral Votes)</span>
              </div>
            )}

            {repWins && (
              <div className="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-center font-bold flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Republican Ticket Reaches 270 Majority ({totals.rep} Electoral Votes)</span>
              </div>
            )}

            {isTie && (
              <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-center font-bold flex items-center justify-center gap-2">
                <Scale className="w-5 h-5 text-amber-600" />
                <span>269–269 Historic Electoral Tie! Under the 12th Amendment, the U.S. House of Representatives chooses the President.</span>
              </div>
            )}

            {/* Preset Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6 pt-6 border-t border-slate-100 text-xs">
              <span className="font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Scenarios:
              </span>
              <button
                onClick={() => loadPreset('default')}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold"
              >
                2028 Consensus (93 EV In Play)
              </button>
              <button
                onClick={() => loadPreset('2024')}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold"
              >
                2024 Actual (R 312 – D 226)
              </button>
              <button
                onClick={() => loadPreset('2020')}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold"
              >
                2020 Actual (D 306 – R 232)
              </button>
              <button
                onClick={() => loadPreset('blue-wall')}
                className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold border border-blue-200"
              >
                Blue Wall Sweep (PA + MI + WI)
              </button>
              <button
                onClick={() => loadPreset('sun-belt')}
                className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-800 font-semibold border border-rose-200"
              >
                Sun Belt Sweep (GA + NC + AZ + NV)
              </button>
              <button
                onClick={() => loadPreset('tie-269')}
                className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold border border-amber-200"
              >
                269–269 Tie Scenario
              </button>
            </div>
          </div>
        </section>

        {/* The 7 Marquee Battlegrounds Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">The Deciding 7 States</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Core 2028 Battleground States (Click to Flip)
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Click state card to toggle party
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {STATES_ELECTORAL_2028.filter((s) => s.isBattleground).map((state) => {
              const currentStatus = stateMap[state.id] || state.initialStatus;
              const bgClass =
                currentStatus === 'democrat'
                  ? 'bg-blue-600 text-white border-blue-700 shadow-md ring-2 ring-blue-300'
                  : currentStatus === 'republican'
                  ? 'bg-rose-600 text-white border-rose-700 shadow-md ring-2 ring-rose-300'
                  : 'bg-white text-slate-900 border-dashed border-2 border-slate-300 hover:border-slate-400';

              return (
                <button
                  key={state.id}
                  onClick={() => toggleState(state.id)}
                  className={`p-4 rounded-2xl text-left transition-all ${bgClass} flex flex-col justify-between`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold opacity-80">{state.id}</span>
                      <h3 className="text-base font-black leading-tight mt-0.5">{state.name}</h3>
                    </div>
                    <span className="text-2xl font-black">{state.votes}</span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-current/20 text-[11px] font-semibold flex items-center justify-between">
                    <span>
                      {currentStatus === 'democrat'
                        ? 'Democratic'
                        : currentStatus === 'republican'
                        ? 'Republican'
                        : 'Toss-Up'}
                    </span>
                    <span className="opacity-75">{state.margin2024 || 'Battleground'}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* All Remaining States Interactive Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">All 50 States + D.C.</span>
              <h2 className="text-xl font-bold text-slate-900">
                Full 538 Electoral Map Grid
              </h2>
            </div>
            <button
              onClick={() => loadPreset('default')}
              className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All
            </button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2.5">
            {STATES_ELECTORAL_2028.map((state) => {
              const currentStatus = stateMap[state.id] || state.initialStatus;
              const colorClass =
                currentStatus === 'democrat'
                  ? 'bg-blue-600 text-white'
                  : currentStatus === 'republican'
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-200 text-slate-800';

              return (
                <button
                  key={state.id}
                  onClick={() => toggleState(state.id)}
                  className={`p-2.5 rounded-xl text-center transition-all hover:scale-105 ${colorClass} shadow-xs`}
                  title={`${state.name} (${state.votes} EV) - Click to toggle`}
                >
                  <span className="block text-xs font-black">{state.id}</span>
                  <span className="block text-[10px] font-semibold opacity-90">{state.votes} EV</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 12th Amendment & Battleground Path Analysis */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Decisive Battleground Factors */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Key Battleground Bellwether Counties
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                In recent presidential cycles, the White House was decided by fewer than 150,000 combined votes across these specific swing counties:
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900">Pennsylvania (19 EV):</strong>
                  <span className="text-slate-600 ml-1">Erie, Northampton, and the suburban Philadelphia collar counties (Bucks, Montgomery, Chester, Delaware).</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900">Georgia (16 EV):</strong>
                  <span className="text-slate-600 ml-1">Fulton, Gwinnett, and Cobb counties in metro Atlanta vs. turnout in rural North/South Georgia.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900">Wisconsin (10 EV):</strong>
                  <span className="text-slate-600 ml-1">Dane (Madison) and Milwaukee turnout vs. the conservative &quot;WOW&quot; counties (Waukesha, Ozaukee, Washington).</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900">Michigan (15 EV):</strong>
                  <span className="text-slate-600 ml-1">Macomb (working-class Reagan Democrats), Oakland (affluent suburban swing), and Kent (Grand Rapids).</span>
                </div>
              </div>
            </div>

            {/* 12th Amendment Tie Explainer */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Scale className="w-5 h-5 text-amber-400" />
                What Happens in a 269–269 Electoral College Tie?
              </h3>
              <p className="text-xs text-blue-100/90 leading-relaxed mb-4">
                If neither candidate receives the required 270 majority, the election is governed by the <strong>12th Amendment to the U.S. Constitution</strong> (a &quot;Contingent Election&quot;):
              </p>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <strong className="text-amber-300">1. U.S. House Chooses the President:</strong>
                  <span className="block mt-0.5 text-slate-300">Each state gets exactly 1 vote, cast by its congressional delegation. 26 state votes are required to win.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <strong className="text-amber-300">2. U.S. Senate Chooses the Vice President:</strong>
                  <span className="block mt-0.5 text-slate-300">Each of the 100 Senators casts 1 individual vote. 51 votes are required to win.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <strong className="text-amber-300">3. Split-Party Administration Possible:</strong>
                  <span className="block mt-0.5 text-slate-300">Because the House and Senate vote independently, a President of one party and Vice President of another could theoretically be chosen.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation CTAs */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-14">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Explore More 2028 Tools</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Research 2028 Candidates &amp; Primary Schedule
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                View declared candidates, campaign platforms, primary timelines, and verified endorsements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/election-day-2028"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                Election Day 2028 Hub →
              </Link>
              <Link
                href="/candidates"
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow transition-colors"
              >
                Candidate Directory
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
