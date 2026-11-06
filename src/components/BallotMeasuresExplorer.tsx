'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  BALLOT_MEASURES_2026,
  STATE_MEASURE_THRESHOLDS,
  BallotMeasure2026,
} from '../data/ballotMeasures2026';
import {
  Search,
  CheckCircle2,
  XCircle,
  Scale,
  Printer,
  Filter,
  Info,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

const STORAGE_KEY = 'election2026_measure_choices_v1';

export const BallotMeasuresExplorer: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('ALL');
  const [selectedTopic, setSelectedTopic] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [choices, setChoices] = useState<Record<string, 'YES' | 'NO'>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setChoices(JSON.parse(saved));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const toggleChoice = (id: string, vote: 'YES' | 'NO') => {
    setChoices((prev) => {
      const next = { ...prev };
      if (next[id] === vote) {
        delete next[id];
      } else {
        next[id] = vote;
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const clearChoices = () => {
    setChoices({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const statesWithMeasures = useMemo(() => {
    const map = new Map<string, string>();
    for (const m of BALLOT_MEASURES_2026) {
      map.set(m.stateSlug, `${m.stateName} (${m.stateAbbr})`);
    }
    return Array.from(map.entries()).sort((a, b) => a[1].localeCompare(b[1]));
  }, []);

  const topics = useMemo(() => {
    return Array.from(new Set(BALLOT_MEASURES_2026.map((m) => m.topic)));
  }, []);

  const filteredMeasures = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BALLOT_MEASURES_2026.filter((m) => {
      if (selectedState !== 'ALL' && m.stateSlug !== selectedState) return false;
      if (selectedTopic !== 'ALL' && m.topic !== selectedTopic) return false;
      if (!q) return true;
      const haystack = `${m.stateName} ${m.stateAbbr} ${m.measureCode} ${m.title} ${m.topic} ${m.officialBallotLanguage} ${m.whatYesMeans} ${m.whatNoMeans}`.toLowerCase();
      return q.split(/\s+/).every((t) => haystack.includes(t));
    });
  }, [selectedState, selectedTopic, searchQuery]);

  const savedCount = Object.keys(choices).length;

  return (
    <div className="space-y-10">
      {/* Control Bar */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-md print:hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-5 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search proposition, state, or topic (e.g. 'Florida 60%', 'Property Tax', 'Voter ID', 'Nevada')..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="md:col-span-3">
            <select
              aria-label="Filter ballot measures by state"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl border border-slate-300 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="ALL">All Featured States</option>
              {statesWithMeasures.map(([slug, label]) => (
                <option key={slug} value={slug}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-4">
            <select
              aria-label="Filter ballot measures by policy topic"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl border border-slate-300 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="ALL">All Policy Categories</option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Saved YES/NO Booth Cheat Sheet Bar */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-600 font-medium">
            Click <strong className="text-emerald-700">&quot;Mark YES&quot;</strong> or{' '}
            <strong className="text-red-700">&quot;Mark NO&quot;</strong> on any measure below to build your personal{' '}
            <strong className="text-slate-900">Printable Voting Booth Propositions Card</strong> ({savedCount} saved).
          </div>
          <div className="flex items-center gap-2">
            {savedCount > 0 && (
              <button
                type="button"
                onClick={clearChoices}
                className="px-3 py-2 rounded-xl border border-slate-300 text-slate-600 hover:text-slate-900 font-bold text-xs flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Choices ({savedCount})</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print YES/NO Booth Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Plain-English Ballot Measure Cards */}
      <div className="space-y-6">
        {filteredMeasures.map((m: BallotMeasure2026) => {
          const userVote = choices[m.id];
          return (
            <div
              key={m.id}
              className={`bg-white rounded-3xl border-2 p-6 sm:p-8 shadow-xs transition-all ${
                userVote === 'YES'
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                  : userVote === 'NO'
                  ? 'border-red-500 ring-2 ring-red-500/20'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Link
                      href={`/states/${m.stateSlug}`}
                      className="px-3 py-1 rounded-full bg-slate-900 text-white font-extrabold text-xs hover:bg-blue-700 transition-colors"
                    >
                      {m.stateName} ({m.stateAbbr})
                    </Link>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-extrabold text-xs">
                      {m.measureCode}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 font-bold text-xs">
                      {m.topic}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 font-bold text-xs">
                      Threshold: {m.passageRequirement}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">{m.title}</h3>
                </div>

                {/* Interactive YES / NO Selector */}
                <div className="flex items-center gap-2 shrink-0 print:hidden">
                  <button
                    type="button"
                    onClick={() => toggleChoice(m.id, 'YES')}
                    className={`px-4 py-2.5 rounded-xl font-black text-xs flex items-center gap-1.5 border-2 transition-all ${
                      userVote === 'YES'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:border-emerald-500'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{userVote === 'YES' ? 'Saved: VOTE YES' : 'Mark YES'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleChoice(m.id, 'NO')}
                    className={`px-4 py-2.5 rounded-xl font-black text-xs flex items-center gap-1.5 border-2 transition-all ${
                      userVote === 'NO'
                        ? 'bg-red-600 text-white border-red-600 shadow-xs'
                        : 'bg-red-50 text-red-900 border-red-200 hover:border-red-500'
                    }`}
                  >
                    <XCircle className="w-4 h-4" />
                    <span>{userVote === 'NO' ? 'Saved: VOTE NO' : 'Mark NO'}</span>
                  </button>
                </div>
              </div>

              {/* Official Legal Summary */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-5">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
                  Official Ballot Text / Legal Summary ({m.measureType}):
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">{m.officialBallotLanguage}</p>
              </div>

              {/* Side-by-Side Plain-English YES vs. NO Translation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200">
                  <div className="flex items-center gap-2 text-emerald-900 font-black text-sm mb-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>What a &quot;YES&quot; Vote Means in Plain English:</span>
                  </div>
                  <p className="text-sm text-emerald-950 leading-relaxed">{m.whatYesMeans}</p>
                </div>

                <div className="bg-red-50/70 rounded-2xl p-5 border border-red-200">
                  <div className="flex items-center gap-2 text-red-900 font-black text-sm mb-2">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>What a &quot;NO&quot; Vote Means in Plain English:</span>
                  </div>
                  <p className="text-sm text-red-950 leading-relaxed">{m.whatNoMeans}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Supermajority & Special Constitutional Threshold Matrix */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2.5 text-slate-900 font-black text-2xl mb-2">
          <Scale className="w-6 h-6 text-blue-600" />
          <h2>Why 51% Doesn’t Always Win: State Ballot Measure Threshold Rules (2026)</h2>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Before voting on a 2026 proposition or constitutional amendment, know your state’s passage math. In states like <strong>Florida (60%)</strong>, <strong>New Hampshire (66.67%)</strong>, and <strong>Colorado (55%)</strong>, a simple majority is not enough—and in <strong>Minnesota</strong> and <strong>Wyoming</strong>, leaving a ballot question blank counts mathematically the same as voting NO!
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-3.5 rounded-tl-xl font-bold">State</th>
                <th className="p-3.5 font-bold">Citizen Initiative?</th>
                <th className="p-3.5 font-bold">Constitutional Amendment Threshold</th>
                <th className="p-3.5 rounded-tr-xl font-bold">Critical Voter Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {STATE_MEASURE_THRESHOLDS.map((st) => (
                <tr key={st.stateSlug} className="hover:bg-slate-50">
                  <td className="p-3.5 font-black text-slate-900 whitespace-nowrap">
                    <Link href={`/states/${st.stateSlug}`} className="text-blue-600 hover:underline">
                      {st.stateName}
                    </Link>
                  </td>
                  <td className="p-3.5 font-bold">
                    {st.hasCitizenInitiative ? (
                      <span className="text-emerald-700">Yes (Citizen I&amp;R)</span>
                    ) : (
                      <span className="text-slate-500">Legislature Only</span>
                    )}
                  </td>
                  <td className="p-3.5 font-extrabold text-slate-900">{st.constitutionalThreshold}</td>
                  <td className="p-3.5 text-slate-600">{st.specialRuleNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
