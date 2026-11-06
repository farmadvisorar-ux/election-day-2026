'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SENATE_RACES_2026, GOVERNOR_RACES_2026 } from '../data/races2026';
import {
  Scale,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  ArrowRight,
  TrendingUp,
  Building2,
  Vote,
} from 'lucide-react';

type PartyWinner = 'D' | 'R';

const COMPETITIVE_SENATE_SLUGS = [
  'georgia',
  'northcarolina',
  'michigan',
  'maine',
  'ohio',
  'newhampshire',
  'minnesota',
  'texas',
  'florida',
  'iowa',
  'alaska',
  'nebraska',
];

const COMPETITIVE_GOV_SLUGS = [
  'georgia',
  'michigan',
  'arizona',
  'nevada',
  'wisconsin',
  'kansas',
  'pennsylvania',
  'ohio',
  'florida',
  'maine',
  'newmexico',
  'newhampshire',
];

// Baseline before the 12 competitive Senate seats (65 seats not up in 2026 + 23 safe 2026 seats = 88 seats):
// Republicans hold 31 (not up) + 15 (Safe R in 2026) = 46 seats
// Democrats/Independents hold 34 (not up) + 8 (Safe D in 2026) = 42 seats
const SENATE_BASE_R = 46;
const SENATE_BASE_D = 42;

// Baseline before the 12 competitive Governor seats (14 states not up in 2026 + 24 Safe/Likely 2026 states = 38 states):
// Republicans hold 21, Democrats hold 17
const GOV_BASE_R = 21;
const GOV_BASE_D = 17;

export function MajoritySimulator2026() {
  const competitiveSenate = useMemo(
    () => SENATE_RACES_2026.filter((r) => COMPETITIVE_SENATE_SLUGS.includes(r.stateSlug)),
    []
  );
  const competitiveGov = useMemo(
    () => GOVERNOR_RACES_2026.filter((r) => COMPETITIVE_GOV_SLUGS.includes(r.stateSlug)),
    []
  );

  // Default initial picks based on incumbent party
  const [senatePicks, setSenatePicks] = useState<Record<string, PartyWinner>>(() =>
    Object.fromEntries(
      competitiveSenate.map((r) => [r.stateSlug, r.incumbentParty === 'D' ? 'D' : 'R'])
    )
  );

  const [govPicks, setGovPicks] = useState<Record<string, PartyWinner>>(() =>
    Object.fromEntries(
      competitiveGov.map((r) => [r.stateSlug, r.incumbentParty === 'D' ? 'D' : 'R'])
    )
  );

  // House net Democratic gain/loss slider (-25 to +35 from 215 D / 220 R baseline)
  const [houseDemNetSwing, setHouseDemNetSwing] = useState<number>(5);
  const [copied, setCopied] = useState(false);

  const senateTotals = useMemo(() => {
    let dWins = 0;
    let rWins = 0;
    let dFlips: string[] = [];
    let rFlips: string[] = [];

    for (const race of competitiveSenate) {
      const pick = senatePicks[race.stateSlug] || (race.incumbentParty === 'D' ? 'D' : 'R');
      if (pick === 'D') {
        dWins++;
        if (race.incumbentParty !== 'D') dFlips.push(race.postalCode);
      } else {
        rWins++;
        if (race.incumbentParty === 'D') rFlips.push(race.postalCode);
      }
    }

    const totalD = SENATE_BASE_D + dWins;
    const totalR = SENATE_BASE_R + rWins;
    const netDemChange = totalD - 47;

    let majorityLabel = '';
    if (totalD >= 51) {
      majorityLabel = `Democratic Senate Majority (${totalD} D – ${totalR} R)`;
    } else if (totalR >= 51) {
      majorityLabel = `Republican Senate Majority (${totalR} R – ${totalD} D)`;
    } else {
      majorityLabel = `50–50 Tied Senate (GOP Majority via VP Tie-Breaker)`;
    }

    return { totalD, totalR, netDemChange, dFlips, rFlips, majorityLabel };
  }, [competitiveSenate, senatePicks]);

  const houseTotals = useMemo(() => {
    const totalD = Math.min(435, Math.max(0, 215 + houseDemNetSwing));
    const totalR = 435 - totalD;
    const majorityLabel =
      totalD >= 218
        ? `Democratic House Majority (${totalD} D – ${totalR} R)`
        : `Republican House Majority (${totalR} R – ${totalD} D)`;
    return { totalD, totalR, majorityLabel };
  }, [houseDemNetSwing]);

  const govTotals = useMemo(() => {
    let dWins = 0;
    let rWins = 0;
    for (const race of competitiveGov) {
      const pick = govPicks[race.stateSlug] || race.incumbentParty;
      if (pick === 'D') dWins++;
      else rWins++;
    }
    return {
      totalD: GOV_BASE_D + dWins,
      totalR: GOV_BASE_R + rWins,
    };
  }, [competitiveGov, govPicks]);

  const applyPreset = (preset: 'baseline' | 'dem-wave' | 'gop-wave' | '50-50-tie') => {
    if (preset === 'baseline') {
      setSenatePicks(
        Object.fromEntries(
          competitiveSenate.map((r) => [r.stateSlug, r.incumbentParty === 'D' ? 'D' : 'R'])
        )
      );
      setGovPicks(
        Object.fromEntries(competitiveGov.map((r) => [r.stateSlug, r.incumbentParty]))
      );
      setHouseDemNetSwing(5);
    } else if (preset === 'dem-wave') {
      setSenatePicks({
        georgia: 'D',
        michigan: 'D',
        newhampshire: 'D',
        minnesota: 'D',
        northcarolina: 'D',
        maine: 'D',
        ohio: 'D',
        iowa: 'D',
        texas: 'R',
        florida: 'R',
        alaska: 'R',
        nebraska: 'R',
      });
      setGovPicks(
        Object.fromEntries(
          competitiveGov.map((r) => [
            r.stateSlug,
            ['ohio', 'florida'].includes(r.stateSlug) ? 'R' : 'D',
          ])
        )
      );
      setHouseDemNetSwing(18);
    } else if (preset === 'gop-wave') {
      setSenatePicks({
        georgia: 'R',
        michigan: 'R',
        newhampshire: 'R',
        minnesota: 'D',
        northcarolina: 'R',
        maine: 'R',
        ohio: 'R',
        iowa: 'R',
        texas: 'R',
        florida: 'R',
        alaska: 'R',
        nebraska: 'R',
      });
      setGovPicks(
        Object.fromEntries(
          competitiveGov.map((r) => [
            r.stateSlug,
            ['pennsylvania', 'maine', 'newmexico'].includes(r.stateSlug) ? 'D' : 'R',
          ])
        )
      );
      setHouseDemNetSwing(-8);
    } else if (preset === '50-50-tie') {
      setSenatePicks({
        georgia: 'D',
        michigan: 'D',
        newhampshire: 'D',
        minnesota: 'D',
        northcarolina: 'D',
        maine: 'D',
        ohio: 'D',
        iowa: 'R',
        texas: 'R',
        florida: 'R',
        alaska: 'R',
        nebraska: 'R',
      });
      setHouseDemNetSwing(8);
    }
  };

  const handleCopyForecast = () => {
    const text = [
      `MY 2026 MIDTERM ELECTION FORECAST (ElectionDay2026.org):`,
      `• U.S. Senate: ${senateTotals.majorityLabel} (Flips: ${
        [
          ...senateTotals.dFlips.map((s) => `${s}→D`),
          ...senateTotals.rFlips.map((s) => `${s}→R`),
        ].join(', ') || 'None'
      })`,
      `• U.S. House: ${houseTotals.majorityLabel}`,
      `• 50-State Governors: ${govTotals.totalD} D – ${govTotals.totalR} R`,
      `Simulate yours: https://election-day-2026.vercel.app/majority-calculator-2026`,
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-indigo-600 shadow-lg overflow-hidden">
      {/* Header & Preset Controls */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <Sparkles className="w-4 h-4" />
            <span>Interactive 120th U.S. Congress &amp; Governors Balance-of-Power Simulator</span>
          </div>
          <button
            type="button"
            onClick={handleCopyForecast}
            className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Forecast Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy &amp; Share My 2026 Forecast</span>
              </>
            )}
          </button>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Simulate the November 3, 2026 U.S. Senate, House &amp; Governor Majorities
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
          Click any battleground state card below to toggle the winner between <strong>Democrat (D)</strong> and <strong>Republican (R)</strong>, or test a preset wave scenario:
        </p>

        {/* Preset Scenario Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold uppercase text-indigo-200 mr-1">
            Quick Scenarios:
          </span>
          <button
            type="button"
            onClick={() => applyPreset('baseline')}
            className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold border border-white/15 cursor-pointer"
          >
            Incumbent Hold Baseline (53 R – 47 D)
          </button>
          <button
            type="button"
            onClick={() => applyPreset('50-50-tie')}
            className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs font-bold border border-amber-400/30 cursor-pointer"
          >
            50–50 Tied Senate (+3 D Flips: NC, ME, OH)
          </button>
          <button
            type="button"
            onClick={() => applyPreset('dem-wave')}
            className="px-3 py-1.5 rounded-xl bg-blue-500/25 hover:bg-blue-500/35 text-blue-200 text-xs font-bold border border-blue-400/30 cursor-pointer"
          >
            Democratic Wave (51 D – 49 R Senate)
          </button>
          <button
            type="button"
            onClick={() => applyPreset('gop-wave')}
            className="px-3 py-1.5 rounded-xl bg-red-500/25 hover:bg-red-500/35 text-red-200 text-xs font-bold border border-red-400/30 cursor-pointer"
          >
            Republican Wave (56 R – 44 D Senate)
          </button>
        </div>
      </div>

      {/* Live Scoreboard Bars */}
      <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 space-y-6">
        {/* 1. U.S. SENATE BAR (100 SEATS) */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div>
              <span className="text-[11px] font-black uppercase text-slate-500">
                120th U.S. Senate Chamber (100 Seats • 51 For Outright Dem Majority / 50+VP For GOP)
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {senateTotals.majorityLabel}
              </h3>
            </div>
            <div className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800">
              Net Shift vs. 2024: {senateTotals.netDemChange >= 0 ? `+${senateTotals.netDemChange} D` : `${Math.abs(senateTotals.netDemChange)} R`}
            </div>
          </div>

          {/* Visual 100-Seat Progress Bar */}
          <div className="relative h-9 w-full rounded-xl overflow-hidden flex font-black text-xs text-white shadow-inner">
            <div
              style={{ width: `${senateTotals.totalD}%` }}
              className="bg-blue-600 flex items-center justify-start pl-3 transition-all duration-300"
            >
              {senateTotals.totalD} D
            </div>
            <div
              style={{ width: `${senateTotals.totalR}%` }}
              className="bg-red-600 flex items-center justify-end pr-3 transition-all duration-300"
            >
              {senateTotals.totalR} R
            </div>
            {/* 50-Seat Midpoint Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-300 z-10" />
          </div>
          <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-semibold">
            <span>Democrats + Independents: {senateTotals.totalD}</span>
            <span className="text-slate-800 font-bold">▲ 50-Seat Midpoint (51 for Outright Majority)</span>
            <span>Republicans: {senateTotals.totalR}</span>
          </div>
        </div>

        {/* 2. U.S. HOUSE OF REPRESENTATIVES SLIDER (435 SEATS) */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div>
              <span className="text-[11px] font-black uppercase text-slate-500">
                120th U.S. House of Representatives (All 435 Seats Up • 218 For Majority)
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {houseTotals.majorityLabel}
              </h3>
            </div>
            <Link
              href="/districts"
              className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
            >
              <span>Explore All 435 Districts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="mt-2 mb-3">
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Drag Slider to Simulate 2026 U.S. House Net Seat Swing ({houseDemNetSwing >= 0 ? `D +${houseDemNetSwing} Seats` : `R +${Math.abs(houseDemNetSwing)} Seats`} from 220 R – 215 D baseline):
            </label>
            <input
              type="range"
              min={-25}
              max={35}
              value={houseDemNetSwing}
              onChange={(e) => setHouseDemNetSwing(parseInt(e.target.value, 10))}
              aria-label="Simulate U.S. House Net Seat Swing"
              className="w-full accent-indigo-600 cursor-pointer"
            />
          </div>

          <div className="relative h-7 w-full rounded-xl overflow-hidden flex font-black text-xs text-white">
            <div
              style={{ width: `${(houseTotals.totalD / 435) * 100}%` }}
              className="bg-blue-600 flex items-center justify-start pl-3 transition-all"
            >
              {houseTotals.totalD} D
            </div>
            <div
              style={{ width: `${(houseTotals.totalR / 435) * 100}%` }}
              className="bg-red-600 flex items-center justify-end pr-3 transition-all"
            >
              {houseTotals.totalR} R
            </div>
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-300 z-10" />
          </div>
        </div>
      </div>

      {/* Interactive Toggle Grid: 12 Competitive Senate Races */}
      <div className="p-6 sm:p-8 space-y-8">
        <div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1">
            1. Click to Toggle the 12 Competitive 2026 U.S. Senate Seats:
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Click <strong>DEM</strong> or <strong>GOP</strong> on any state below to flip or hold that Senate seat:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {competitiveSenate.map((race) => {
              const currentPick =
                senatePicks[race.stateSlug] || (race.incumbentParty === 'D' ? 'D' : 'R');
              const isFlipped = currentPick !== race.incumbentParty;

              return (
                <div
                  key={race.stateSlug}
                  className={`p-4 rounded-xl border-2 transition ${
                    currentPick === 'D'
                      ? 'bg-blue-50/60 border-blue-500'
                      : 'bg-red-50/60 border-red-500'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <Link
                      href={`/states/${race.stateSlug}`}
                      className="font-black text-sm text-slate-900 hover:underline"
                    >
                      {race.stateName} ({race.postalCode})
                    </Link>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      {race.rating}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-600 mb-3">
                    Incumbent: <strong>{race.incumbent} ({race.incumbentParty})</strong> • {race.status}
                    {isFlipped && (
                      <span className="ml-1.5 px-1.5 py-0.5 rounded bg-amber-300 text-slate-950 font-black text-[10px]">
                        FLIP TO {currentPick}!
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setSenatePicks((prev) => ({ ...prev, [race.stateSlug]: 'D' }))
                      }
                      className={`py-1.5 rounded-lg text-xs font-black transition cursor-pointer ${
                        currentPick === 'D'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-400'
                      }`}
                    >
                      DEM WIN
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSenatePicks((prev) => ({ ...prev, [race.stateSlug]: 'R' }))
                      }
                      className={`py-1.5 rounded-lg text-xs font-black transition cursor-pointer ${
                        currentPick === 'R'
                          ? 'bg-red-600 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-300 hover:border-red-400'
                      }`}
                    >
                      GOP WIN
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Toggle Grid: 12 Competitive Governor Races */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                2. Click to Toggle the 12 Competitive 2026 Governor Races:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                National 50-State Governors Balance: <strong>{govTotals.totalD} Democratic Governors – {govTotals.totalR} Republican Governors</strong>
              </p>
            </div>
            <Link
              href="/races/governor-2026"
              className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
            >
              <span>All 36 Governor Contests</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {competitiveGov.map((race) => {
              const currentPick = govPicks[race.stateSlug] || race.incumbentParty;
              const isFlipped = currentPick !== race.incumbentParty;

              return (
                <div
                  key={race.stateSlug}
                  className={`p-4 rounded-xl border-2 transition ${
                    currentPick === 'D'
                      ? 'bg-blue-50/60 border-blue-500'
                      : 'bg-red-50/60 border-red-500'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <Link
                      href={`/states/${race.stateSlug}`}
                      className="font-black text-sm text-slate-900 hover:underline"
                    >
                      {race.stateName} ({race.postalCode})
                    </Link>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      {race.status}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-600 mb-3">
                    Outgoing/Incumbent: <strong>{race.incumbent} ({race.incumbentParty})</strong>
                    {isFlipped && (
                      <span className="ml-1.5 px-1.5 py-0.5 rounded bg-amber-300 text-slate-950 font-black text-[10px]">
                        FLIP TO {currentPick}!
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setGovPicks((prev) => ({ ...prev, [race.stateSlug]: 'D' }))
                      }
                      className={`py-1.5 rounded-lg text-xs font-black transition cursor-pointer ${
                        currentPick === 'D'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-400'
                      }`}
                    >
                      DEM GOV
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setGovPicks((prev) => ({ ...prev, [race.stateSlug]: 'R' }))
                      }
                      className={`py-1.5 rounded-lg text-xs font-black transition cursor-pointer ${
                        currentPick === 'R'
                          ? 'bg-red-600 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-300 hover:border-red-400'
                      }`}
                    >
                      GOP GOV
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
