'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { STATES_DATA, ALL_STATES_LIST } from '../data/states';
import {
  COUNTIES_BY_STATE,
  getCountyElectionAuthorityTitle,
  CountyItem,
} from '../data/counties';
import { STATE_PRIMARIES_2026 } from '../data/primaries';
import { SITE_URL } from '../lib/siteConfig';
import {
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Clock,
  CreditCard,
  Briefcase,
  Vote,
  Printer,
  Download,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export function PersonalVotingPlanner() {
  const [stateSlug, setStateSlug] = useState<string>('pennsylvania');
  const [countySlug, setCountySlug] = useState<string>('allegheny-county');
  const [votingMethod, setVotingMethod] = useState<'election-day' | 'early' | 'mail'>('election-day');
  const [selectedIdDoc, setSelectedIdDoc] = useState<string>('first');
  const [workShift, setWorkShift] = useState<'9to5' | '7to7' | 'off'>('9to5');

  const state = STATES_DATA[stateSlug] || STATES_DATA['pennsylvania'];
  const counties: CountyItem[] = useMemo(() => COUNTIES_BY_STATE[stateSlug] || [], [stateSlug]);
  const county: CountyItem | undefined = useMemo(
    () => counties.find((c) => c.slug === countySlug) || counties[0],
    [counties, countySlug]
  );

  const primaryInfo = useMemo(
    () => STATE_PRIMARIES_2026.find((p) => p.stateSlug === stateSlug),
    [stateSlug]
  );

  const authorityTitle = county
    ? getCountyElectionAuthorityTitle(state.postalCode, county.name)
    : state.officialPortal.name;
  const effectiveHours = county?.pollingHoursOverride || state.pollingHours;
  const effectiveTz = county?.timezoneOverride || state.timezone;

  const handleDownloadIcs = () => {
    const cName = county ? `${county.name}, ${state.postalCode}` : state.name;
    const guideUrl = county
      ? `${SITE_URL}/states/${state.slug}/counties/${county.slug}`
      : `${SITE_URL}/states/${state.slug}`;

    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//ElectionDay2026//Personal Voting Gameplan//EN',
      'BEGIN:VEVENT',
      `UID:plan-reg-${state.postalCode}@election-day-2026.vercel.app`,
      'DTSTAMP:20260101T120000Z',
      'DTSTART;VALUE=DATE:20261005',
      'DTEND;VALUE=DATE:20261006',
      `SUMMARY:2026 Voter Registration Cutoff — ${cName}`,
      `DESCRIPTION:Registration Deadline: ${state.registrationDeadline.online}. Guide: ${guideUrl}`,
      'END:VEVENT',
      'BEGIN:VEVENT',
      `UID:plan-vote-${county?.fips || state.postalCode}@election-day-2026.vercel.app`,
      'DTSTAMP:20260101T120000Z',
      'DTSTART;VALUE=DATE:20261103',
      'DTEND;VALUE=DATE:20261104',
      `SUMMARY:Vote in ${cName} (${votingMethod === 'mail' ? 'Mail Ballot Due' : effectiveHours})`,
      `DESCRIPTION:Method: ${votingMethod}. Authority: ${authorityTitle}. Voter ID: ${state.voterId.type}. Work Leave: ${state.workLeaveLaw.statuteCitation}. Full Plan: ${guideUrl}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `my-2026-voting-plan-${county?.slug || state.slug}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Interactive Configuration Steps */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 md:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
          Configure Your 2026 Personal Voting Gameplan
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          Customize the 4 steps below to generate your county-specific Election Day 2026 checklist, ID verification, workplace leave calculation, and sample ballot preview.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 1: Jurisdiction */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-blue-700">
              Step 1: Where Are You Registered to Vote?
            </div>
            <div>
              <label htmlFor="plan-state" className="block text-xs font-bold text-slate-700 mb-1">
                State / Territory:
              </label>
              <select
                id="plan-state"
                value={stateSlug}
                onChange={(e) => {
                  const nextSt = e.target.value;
                  setStateSlug(nextSt);
                  const first = (COUNTIES_BY_STATE[nextSt] || [])[0];
                  if (first) setCountySlug(first.slug);
                  setSelectedIdDoc('first');
                }}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm font-bold text-slate-900"
              >
                {ALL_STATES_LIST.map((st) => (
                  <option key={st.slug} value={st.slug}>
                    {st.name} ({st.postalCode})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="plan-county" className="block text-xs font-bold text-slate-700 mb-1">
                County / Parish / Independent City ({counties.length}):
              </label>
              <select
                id="plan-county"
                value={county?.slug || ''}
                onChange={(e) => setCountySlug(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm font-bold text-slate-900"
              >
                {counties.map((c) => (
                  <option key={c.fips} value={c.slug}>
                    {c.name} — Seat: {c.countySeat} (FIPS {c.fips})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 2: How You Plan to Cast Your Ballot */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-emerald-700">
              Step 2: How Do You Plan to Vote in 2026?
            </div>
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => setVotingMethod('election-day')}
                className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                  votingMethod === 'election-day'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-blue-400'
                }`}
              >
                🗳️ In-Person on Election Day (Tuesday, Nov 3, 2026 • {effectiveHours})
              </button>
              <button
                type="button"
                onClick={() => setVotingMethod('early')}
                className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                  votingMethod === 'early'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-emerald-400'
                }`}
              >
                📅 Early In-Person Voting ({state.earlyVoting.starts} – {state.earlyVoting.ends})
              </button>
              <button
                type="button"
                onClick={() => setVotingMethod('mail')}
                className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                  votingMethod === 'mail'
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-indigo-400'
                }`}
              >
                ✉️ Mail-In / Absentee Ballot (Request by {state.mailInVoting.requestDeadline})
              </button>
            </div>
          </div>

          {/* Step 3: Wallet ID Verification */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-amber-700">
              Step 3: Which Voter ID Will You Bring? ({state.voterId.type})
            </div>
            <select
              value={selectedIdDoc}
              onChange={(e) => setSelectedIdDoc(e.target.value)}
              aria-label="Select the identification document you have"
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-slate-900"
            >
              {state.voterId.acceptableDocs.map((doc, idx) => (
                <option key={idx} value={idx === 0 ? 'first' : doc}>
                  ✓ I have: {doc}
                </option>
              ))}
              <option value="none">⚠️ I do NOT have any of these IDs right now</option>
            </select>

            {selectedIdDoc === 'none' ? (
              <div className="p-3 rounded-lg bg-amber-100 border border-amber-300 text-xs text-amber-950 leading-relaxed">
                <strong>🛡️ Federal HAVA Protection (52 U.S.C. § 21082):</strong> Even without an ID on Election Day, you have the absolute legal right to request and cast a <strong>Provisional Ballot</strong> at your {county?.name} polling place.
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Your selected ID satisfies <strong>{state.name}&apos;s {state.voterId.type}</strong> statutory requirement.
                </span>
              </div>
            )}
          </div>

          {/* Step 4: Tuesday Nov 3 Work Schedule Check */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-indigo-700">
              Step 4: Your Tuesday, Nov 3, 2026 Work Schedule
            </div>
            <select
              value={workShift}
              onChange={(e) => setWorkShift(e.target.value as '9to5' | '7to7' | 'off')}
              aria-label="Select your Election Day work shift"
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-slate-900"
            >
              <option value="9to5">Working Standard Shift (e.g., 8:00 AM – 5:00 PM)</option>
              <option value="7to7">Working Long / Double Shift Across Poll Hours (7:00 AM – 7:00 PM)</option>
              <option value="off">Off Work / Student / Retired on Tuesday, Nov 3</option>
            </select>

            <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 leading-relaxed">
              <strong>{state.workLeaveLaw.statuteCitation}:</strong> {state.workLeaveLaw.hoursAllowed}.{' '}
              {workShift !== 'off' && (
                <Link
                  href={`/tools/employer-voting-leave-notice?state=${state.slug}`}
                  className="font-bold text-indigo-700 underline ml-1"
                >
                  Generate HR Notice →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Printable Personalized 2026 Voting Gameplan Summary Card */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 border-2 border-blue-500 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-800">
          <div>
            <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 text-[11px] font-black rounded uppercase">
              Personalized 2026 Voter Action Plan
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-1.5">
              {county?.name}, {state.postalCode} ({county?.countySeat}) — Nov 3, 2026 Gameplan
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Administered by <strong>{authorityTitle}</strong> • Federal FIPS {county?.fips} • ZIPs {county?.zipRange}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleDownloadIcs}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save to Calendar (.ics)</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3.5 py-2 bg-white text-slate-950 hover:bg-slate-100 text-xs font-black rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print My Voting Plan</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[11px] font-bold uppercase text-blue-400">1. Registration &amp; Primary</div>
            <div className="text-sm font-black text-white mt-1">
              General Cutoff: {state.registrationDeadline.online}
            </div>
            {primaryInfo && (
              <div className="text-xs text-slate-400 mt-1">
                2026 State Primary: <strong className="text-slate-200">{primaryInfo.primaryDate}</strong> ({primaryInfo.primaryType})
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[11px] font-bold uppercase text-emerald-400">
              2. Your Selected Voting Window
            </div>
            <div className="text-sm font-black text-white mt-1">
              {votingMethod === 'election-day' && `Nov 3, 2026: ${effectiveHours}`}
              {votingMethod === 'early' && `Early Voting: ${state.earlyVoting.starts} – ${state.earlyVoting.ends}`}
              {votingMethod === 'mail' && `Mail Return: ${state.mailInVoting.returnDeadline}`}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Timezone: {effectiveTz}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[11px] font-bold uppercase text-amber-400">
              3. Contests on Your {county?.name} Ballot
            </div>
            <div className="text-sm font-black text-white mt-1">
              U.S. House: {county?.congressionalDistricts.join(', ')}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {state.keyRaces2026.senate ? '✓ U.S. Senate Race • ' : ''}
              {state.keyRaces2026.governor ? '✓ State Governor Race • ' : ''}
              State &amp; Judicial Ballot
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {county && (
              <Link
                href={`/states/${state.slug}/counties/${county.slug}`}
                className="text-blue-400 hover:underline font-bold flex items-center gap-1"
              >
                <span>Open Full {county.name} Voter Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
            {county?.congressionalDistricts[0] && (
              <Link
                href={`/districts/${county.congressionalDistricts[0].toLowerCase()}`}
                className="text-indigo-400 hover:underline font-bold flex items-center gap-1"
              >
                <span>{county.congressionalDistricts[0]} Congressional District Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

          <a
            href={state.officialPortal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline font-bold flex items-center gap-1"
          >
            <span>Verify Precinct on {state.officialPortal.name} (.gov)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
