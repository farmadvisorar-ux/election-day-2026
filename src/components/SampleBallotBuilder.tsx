'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { STATES_DATA, ALL_STATES_LIST } from '../data/states';
import {
  COUNTIES_BY_STATE,
  getCountyElectionAuthorityTitle,
  CountyItem,
} from '../data/counties';
import { SENATE_RACE_BY_STATE, GOVERNOR_RACE_BY_STATE } from '../data/races2026';
import { STATE_PRIMARIES_2026 } from '../data/primaries';
import { CandidateClaimBanner } from './CandidateClaimBanner';
import {
  Search,
  MapPin,
  Printer,
  CheckCircle2,
  Vote,
  Scale,
  Building2,
  FileText,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

function matchZipRange(zip: string, zipRange: string): boolean {
  const parts = zipRange.split('–');
  const z = parseInt(zip, 10);
  if (parts.length === 1 && /^\d{5}$/.test(parts[0])) {
    return parseInt(parts[0], 10) === z;
  }
  if (parts.length === 2 && /^\d{5}$/.test(parts[0]) && /^\d{5}$/.test(parts[1])) {
    return z >= parseInt(parts[0], 10) && z <= parseInt(parts[1], 10);
  }
  return false;
}

export function SampleBallotBuilder() {
  const [searchQuery, setSearchQuery] = useState<string>('77002');
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('texas');
  const [selectedCountySlug, setSelectedCountySlug] = useState<string>('harris-county');

  // User interactive ballot selections & notes for printing into the booth
  const [choices, setChoices] = useState<Record<string, string>>({
    senate: '',
    house: '',
    governor: '',
    statewide: '',
    judicial: 'Retain / Researching Local Bar Ratings',
    ballotMeasure: 'Undecided — Reviewing Fiscal Impact',
  });
  const [customNotes, setCustomNotes] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Resolve search input (ZIP code, city, or county name) when user types
  const handleSearch = (val: string) => {
    setSearchQuery(val);
    const q = val.trim().toLowerCase();
    if (q.length < 3) return;

    const isZip = /^\d{5}$/.test(q);
    for (const [stSlug, counties] of Object.entries(COUNTIES_BY_STATE)) {
      for (const c of counties) {
        if (isZip && (c.fips === q || matchZipRange(q, c.zipRange))) {
          setSelectedStateSlug(stSlug);
          setSelectedCountySlug(c.slug);
          return;
        }
        if (
          !isZip &&
          (c.name.toLowerCase().includes(q) ||
            c.countySeat.toLowerCase() === q ||
            c.topCities.some((city) => city.toLowerCase() === q))
        ) {
          setSelectedStateSlug(stSlug);
          setSelectedCountySlug(c.slug);
          return;
        }
      }
    }

    // Fallback: check state name or postal code
    const matchedSt = ALL_STATES_LIST.find(
      (s) => s.name.toLowerCase() === q || s.postalCode.toLowerCase() === q
    );
    if (matchedSt) {
      setSelectedStateSlug(matchedSt.slug);
      const firstCounty = COUNTIES_BY_STATE[matchedSt.slug]?.[0];
      if (firstCounty) setSelectedCountySlug(firstCounty.slug);
    }
  };

  const state = STATES_DATA[selectedStateSlug] || STATES_DATA['texas'];
  const stateCounties = COUNTIES_BY_STATE[state.slug] || [];
  const county: CountyItem =
    stateCounties.find((c) => c.slug === selectedCountySlug) || stateCounties[0];

  const senateRace = SENATE_RACE_BY_STATE[state.slug];
  const governorRace = GOVERNOR_RACE_BY_STATE[state.slug];
  const primaryInfo = STATE_PRIMARIES_2026.find((p) => p.stateSlug === state.slug);
  const authorityTitle = county
    ? getCountyElectionAuthorityTitle(state.postalCode, county.name)
    : state.officialPortal.name;
  const effectiveHours = county?.pollingHoursOverride || state.pollingHours;
  const effectiveTz = county?.timezoneOverride || state.timezone;

  const summaryText = useMemo(() => {
    return [
      `MY 2026 OFFICIAL VOTING BOOTH CHEAT SHEET (${county ? `${county.name}, ` : ''}${state.name})`,
      `Election Date: Tuesday, November 3, 2026 | Poll Hours: ${effectiveHours} (${effectiveTz})`,
      `Voter ID Rule: ${state.voterId.type}`,
      `----------------------------------------`,
      `1. U.S. Senate: ${
        senateRace
          ? `${choices.senate || 'Undecided'} (Incumbent: ${senateRace.incumbent} [${senateRace.incumbentParty}] - ${senateRace.status})`
          : 'No U.S. Senate race in this state in 2026'
      }`,
      `2. U.S. House (${county ? county.congressionalDistricts.join(', ') : 'All Districts'}): ${
        choices.house || 'Undecided'
      }`,
      `3. State Governor: ${
        governorRace
          ? `${choices.governor || 'Undecided'} (${governorRace.status} - Sitting Gov: ${governorRace.incumbent} [${governorRace.incumbentParty}])`
          : 'No Gubernatorial election in this state in 2026'
      }`,
      `4. Down-Ballot State/County Offices: ${choices.statewide || 'Undecided'}`,
      `5. Judicial Retention & Local Judges: ${choices.judicial}`,
      `6. Statewide Ballot Propositions: ${choices.ballotMeasure}`,
      customNotes ? `Notes: ${customNotes}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  }, [state, county, effectiveHours, effectiveTz, senateRace, governorRace, choices, customNotes]);

  const handleCopySummary = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-blue-600 shadow-lg overflow-hidden">
      {/* Top Control Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <Sparkles className="w-4 h-4" />
            <span>Interactive 2026 Sample Ballot &amp; Booth Cheat Sheet Builder</span>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-bold">
            100% Legal Inside All 50 State Voting Booths
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          What’s On My November 3, 2026 Ballot?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
          Enter your <strong>5-digit ZIP code, city, or county</strong> below to load every federal, statewide, congressional, and ballot-measure contest in your jurisdiction—then mark your choices and print your 1-page booth cheat sheet.
        </p>

        {/* Search & Jurisdiction Selectors */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* ZIP / City Search */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-blue-200 mb-1">
              1. Quick Lookup by ZIP Code or City
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="e.g. 77002, 85001, 19107, Miami, Phoenix..."
                className="w-full pl-9 pr-3 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* State Selector */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-blue-200 mb-1">
              2. Select State ({ALL_STATES_LIST.length} Jurisdictions)
            </label>
            <select
              value={selectedStateSlug}
              onChange={(e) => {
                const newSt = e.target.value;
                setSelectedStateSlug(newSt);
                const firstC = COUNTIES_BY_STATE[newSt]?.[0];
                if (firstC) setSelectedCountySlug(firstC.slug);
              }}
              aria-label="Select State for Sample Ballot"
              className="w-full px-3 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {ALL_STATES_LIST.map((st) => (
                <option key={st.slug} value={st.slug}>
                  {st.name} ({st.postalCode})
                </option>
              ))}
            </select>
          </div>

          {/* County Selector */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-blue-200 mb-1">
              3. Select County / Parish ({stateCounties.length})
            </label>
            <select
              value={county?.slug || ''}
              onChange={(e) => setSelectedCountySlug(e.target.value)}
              aria-label="Select County for Sample Ballot"
              className="w-full px-3 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {stateCounties.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} (Seat: {c.countySeat} • ZIP {c.zipRange})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Jurisdiction Official Ballot Header */}
      <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-blue-700 text-white text-xs font-black uppercase">
                2026 General Election Ballot Preview
              </span>
              {county && (
                <span className="font-mono text-xs font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                  FIPS {county.fips} • ZIPs {county.zipRange}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              {county ? `${county.name} (${county.countySeat}), ` : ''}
              {state.name} ({state.postalCode})
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              <strong>Election Date:</strong> Tuesday, November 3, 2026 •{' '}
              <strong>Poll Hours:</strong> {effectiveHours} ({effectiveTz}) •{' '}
              <strong>Election Board:</strong> {authorityTitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold rounded-xl flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Booth Cheat Sheet</span>
            </button>
            <button
              type="button"
              onClick={handleCopySummary}
              className="px-3.5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copy Choices</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Ballot Contests */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* CONTEST 1: U.S. SENATE */}
        <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-900 text-[11px] font-black uppercase rounded">
                Federal Office #1
              </span>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                United States Senator ({state.name})
              </h4>
            </div>
            {senateRace ? (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
                ON YOUR 2026 BALLOT • {senateRace.rating}
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                Not Up in 2026 (Next in 2028/2030)
              </span>
            )}
          </div>

          {senateRace ? (
            <>
              <p className="text-xs sm:text-sm text-slate-700 mb-3">
                <strong>{senateRace.seatClass}</strong> •{' '}
                <strong>{senateRace.status}</strong> • Current Incumbent:{' '}
                <strong>
                  {senateRace.incumbent} ({senateRace.incumbentParty})
                </strong>
                . {senateRace.storyline}
              </p>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Mark Your 2026 U.S. Senate Choice or Candidate Note for Your Cheat Sheet:
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {[
                    `Democratic Nominee (${senateRace.incumbentParty === 'D' ? `Incumbent: ${senateRace.incumbent}` : 'Challenger'})`,
                    `Republican Nominee (${senateRace.incumbentParty === 'R' ? `Incumbent: ${senateRace.incumbent}` : 'Challenger'})`,
                    'Independent / Third-Party / Write-In',
                  ].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setChoices((prev) => ({ ...prev, senate: opt }))}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer ${
                        choices.senate === opt
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={choices.senate}
                  onChange={(e) => setChoices((prev) => ({ ...prev, senate: e.target.value }))}
                  placeholder="Or type specific candidate name after your state primary..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900"
                />
              </div>
            </>
          ) : (
            <p className="text-xs sm:text-sm text-slate-600">
              {state.name}’s two U.S. Senate seats belong to Class I and Class III and are not on the regular November 3, 2026 ballot. However, all U.S. House seats in {state.name} are on your ballot below!
            </p>
          )}
        </div>

        {/* Candidate & Campaign Claim Hook */}
        <CandidateClaimBanner
          jurisdictionType="district"
          jurisdictionName={county?.congressionalDistricts.join('/') || `${state.name} U.S. House`}
          compact={true}
        />

        {/* CONTEST 2: U.S. HOUSE OF REPRESENTATIVES */}
        <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-900 text-[11px] font-black uppercase rounded">
                Federal Office #2
              </span>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                U.S. House of Representatives (120th Congress • 2-Year Term)
              </h4>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-900 border border-emerald-300">
              ON EVERY 2026 BALLOT (All 435 Seats Up)
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 mb-3">
            {county ? (
              <>
                Voters in <strong>{county.name}</strong> ({county.topCities.join(', ')}) vote in Congressional District(s):{' '}
                <strong>{county.congressionalDistricts.join(', ')}</strong>.
              </>
            ) : (
              <>All Congressional Districts in {state.name} are on the November 3, 2026 ballot.</>
            )}
          </p>

          {county && county.congressionalDistricts.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-bold text-slate-600">View District Guides:</span>
              {county.congressionalDistricts.map((cd) => (
                <Link
                  key={cd}
                  href={`/districts/${cd.toLowerCase()}`}
                  className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold inline-flex items-center gap-1"
                >
                  <span>{cd} District Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          )}

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Mark Your 2026 U.S. House Congressional Choice ({county?.congressionalDistricts.join('/') || state.postalCode}):
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {[
                'Democratic U.S. House Candidate',
                'Republican U.S. House Candidate',
                'Independent / Third-Party Candidate',
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setChoices((prev) => ({ ...prev, house: opt }))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer ${
                    choices.house === opt
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={choices.house}
              onChange={(e) => setChoices((prev) => ({ ...prev, house: e.target.value }))}
              placeholder="Type your U.S. House candidate name or district note..."
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900"
            />
          </div>
        </div>

        {/* CONTEST 3: STATE GOVERNOR */}
        <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-900 text-[11px] font-black uppercase rounded">
                Statewide Executive
              </span>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Governor of {state.name}
              </h4>
            </div>
            {governorRace ? (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 text-indigo-900 border border-indigo-300">
                ON YOUR 2026 BALLOT • {governorRace.status}
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                Not Up in 2026 (Elected in 2024/2027/2028)
              </span>
            )}
          </div>

          {governorRace ? (
            <>
              <p className="text-xs sm:text-sm text-slate-700 mb-3">
                <strong>Status: {governorRace.status}</strong> • Sitting Governor:{' '}
                <strong>
                  {governorRace.incumbent} ({governorRace.incumbentParty})
                </strong>{' '}
                • Rating: <strong>{governorRace.rating}</strong>. {governorRace.storyline}
              </p>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Mark Your 2026 Governor Choice for {state.name}:
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {[
                    `Democratic Governor Nominee`,
                    `Republican Governor Nominee`,
                    'Independent / Third-Party Governor Candidate',
                  ].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setChoices((prev) => ({ ...prev, governor: opt }))}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer ${
                        choices.governor === opt
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-indigo-400'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={choices.governor}
                  onChange={(e) => setChoices((prev) => ({ ...prev, governor: e.target.value }))}
                  placeholder="Or type specific Gubernatorial candidate name..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900"
                />
              </div>
            </>
          ) : (
            <p className="text-xs sm:text-sm text-slate-600">
              {state.name} holds its gubernatorial election on a non-midterm cycle (such as 2025/2027 in NJ, VA, KY, LA, MS or presidential years in NC, WA, MO, IN, UT, WV, ND, DE, MT).
            </p>
          )}
        </div>

        {/* CONTEST 4: STATEWIDE PROPOSITIONS, JUDGES & LOCAL CONTESTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-xs">
            <span className="px-2 py-0.5 bg-amber-100 text-amber-900 text-[11px] font-black uppercase rounded">
              Ballot Measures &amp; Constitutional Amendments
            </span>
            <h4 className="text-base font-black text-slate-900 mt-1.5 mb-1">
              {state.name} 2026 Propositions &amp; Referendums
            </h4>
            <p className="text-xs text-slate-600 mb-3">
              {state.keyRaces2026.ballotMeasuresHighlight ||
                `Voters in ${state.name} will vote YES (adopt change) or NO (keep status quo) on certified statewide constitutional amendments and local municipal bond questions.`}
            </p>
            <select
              value={choices.ballotMeasure}
              onChange={(e) =>
                setChoices((prev) => ({ ...prev, ballotMeasure: e.target.value }))
              }
              aria-label="Ballot Measure Strategy"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-900"
            >
              <option value="Undecided — Reviewing Fiscal Impact">
                Undecided — Reviewing Official Fiscal Impact Statement
              </option>
              <option value="Vote YES on Approved Amendments">
                Leaning YES on Certified Propositions
              </option>
              <option value="Vote NO (Keep Existing Law / Status Quo)">
                Leaning NO (Keep Existing Law / Status Quo)
              </option>
            </select>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-xs">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 text-[11px] font-black uppercase rounded">
              State Legislature, Judges &amp; County Offices
            </span>
            <h4 className="text-base font-black text-slate-900 mt-1.5 mb-1">
              {county ? `${county.name} & ` : ''}State Down-Ballot Contests
            </h4>
            <p className="text-xs text-slate-600 mb-3">
              Includes State Senate, State House/Assembly, County Commissioner/Clerk/Sheriff in {county?.countySeat || state.name}, and Judicial Retention / Supreme Court elections.
            </p>
            <input
              type="text"
              value={choices.statewide}
              onChange={(e) =>
                setChoices((prev) => ({ ...prev, statewide: e.target.value }))
              }
              placeholder="Write down local candidates, judges, or school board picks..."
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900"
            />
          </div>
        </div>

        {/* Custom Personal Booth Notes */}
        <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50">
          <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
            Additional Personal Voting Booth Notes (Prop Numbers, Judge Names, Polling Address)
          </label>
          <textarea
            rows={2}
            value={customNotes}
            onChange={(e) => setCustomNotes(e.target.value)}
            placeholder="Type any extra notes to print on your 1-page cheat sheet (e.g., 'Vote YES on Prop 1, NO on Prop 2, bring Texas Driver License')..."
            className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
          />
        </div>

        {/* Statutory Booth Protection Notice + Official Portal Link */}
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-800 leading-relaxed">
              <strong>Voting Booth Legal Guarantee:</strong> Every single state allows voters to bring a printed paper sample ballot or written notes into the voting booth. Note on phones: in {state.name}, ballot selfies are currently <strong>{state.ballotSelfieLaw.allowed}</strong> ({state.ballotSelfieLaw.details}).
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {county && (
              <Link
                href={`/states/${state.slug}/counties/${county.slug}`}
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-1"
              >
                <span>{county.name} Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
            <a
              href={county?.localWebsite || state.officialPortal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl flex items-center gap-1"
            >
              <span>Official {state.postalCode} Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
