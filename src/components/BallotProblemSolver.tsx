'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { STATES_DATA, ALL_STATES_LIST } from '../data/states';
import {
  ShieldAlert,
  FileWarning,
  CreditCard,
  MailWarning,
  AlertOctagon,
  Printer,
  PhoneCall,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Scale,
} from 'lucide-react';

type ScenarioId =
  | 'signature-mismatch'
  | 'provisional-no-id'
  | 'naked-or-spoiled-ballot'
  | 'mail-ballot-never-arrived'
  | 'turned-away-or-intimidation';

const SCENARIOS: {
  id: ScenarioId;
  shortLabel: string;
  title: string;
  urgencyBadge: string;
}[] = [
  {
    id: 'signature-mismatch',
    shortLabel: '1. Mail Ballot Signature Issue / Cure',
    title: 'My mail-in ballot was flagged or rejected for a missing signature or signature mismatch',
    urgencyBadge: 'Post-Election Cure Window Active',
  },
  {
    id: 'provisional-no-id',
    shortLabel: '2. Provisional Ballot / Missing ID Cure',
    title: 'I cast a Provisional Ballot because I didn’t have my Voter ID or my name wasn’t on the roll',
    urgencyBadge: '3–7 Day Statutory Verification Window',
  },
  {
    id: 'mail-ballot-never-arrived',
    shortLabel: '3. Mail Ballot Never Arrived / Too Late to Mail',
    title: 'I requested a mail-in ballot, but it never arrived (or it is too close to Nov 3 to mail)',
    urgencyBadge: 'Immediate Action Before Polls Close',
  },
  {
    id: 'naked-or-spoiled-ballot',
    shortLabel: '4. Forgot Secrecy Envelope / Spoiled Ballot',
    title: 'I forgot the inner secrecy envelope ("naked ballot") or bubbled the wrong candidate',
    urgencyBadge: 'Replacement Ballot Protocol',
  },
  {
    id: 'turned-away-or-intimidation',
    shortLabel: '5. Turned Away at Polls / Machine Delay',
    title: 'A poll worker said I cannot vote, machines are down, or someone is intimidating voters',
    urgencyBadge: 'Federal HAVA & VRA Emergency Rights',
  },
];

export function BallotProblemSolver() {
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('pennsylvania');
  const [scenario, setScenario] = useState<ScenarioId>('signature-mismatch');
  const [voterName, setVoterName] = useState<string>('');
  const [voterCounty, setVoterCounty] = useState<string>('');

  const state = STATES_DATA[selectedStateSlug] || STATES_DATA['pennsylvania'];

  return (
    <div className="bg-white rounded-2xl border-2 border-red-600 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-red-950 to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <ShieldAlert className="w-4 h-4" />
            <span>Emergency Ballot Cure, Provisional Recovery &amp; Voter Rights Resolver</span>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-red-500/20 border border-red-400/30 text-red-200 text-[11px] font-bold">
            Live Hotline: 1-866-OUR-VOTE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Fix a Ballot Problem or Cure a Flagged/Provisional Ballot (2026)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
          Select your state and what went wrong below to get the exact statutory recovery steps, county cure deadlines, and a printable verification cover sheet.
        </p>

        {/* Controls */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-bold uppercase text-red-200 mb-1">
              1. Select Your State ({ALL_STATES_LIST.length})
            </label>
            <select
              value={selectedStateSlug}
              onChange={(e) => setSelectedStateSlug(e.target.value)}
              aria-label="Select State for Ballot Problem Solver"
              className="w-full px-3 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-bold"
            >
              {ALL_STATES_LIST.map((st) => (
                <option key={st.slug} value={st.slug}>
                  {st.name} ({st.postalCode})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-red-200 mb-1">
              2. Your Full Legal Name (Optional for Print Form)
            </label>
            <input
              type="text"
              value={voterName}
              onChange={(e) => setVoterName(e.target.value)}
              placeholder="e.g. Jane M. Citizen"
              className="w-full px-3 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-semibold"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-red-200 mb-1">
              3. Your County / City (Optional for Print Form)
            </label>
            <input
              type="text"
              value={voterCounty}
              onChange={(e) => setVoterCounty(e.target.value)}
              placeholder={`e.g. County Board in ${state.name}`}
              className="w-full px-3 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-semibold"
            />
          </div>
        </div>

        {/* Scenario Pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              type="button"
              onClick={() => setScenario(sc.id)}
              className={`px-3 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                scenario === sc.id
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/15'
              }`}
            >
              {sc.shortLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Diagnostic Resolution Body */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="p-5 rounded-2xl bg-red-50/70 border-l-4 border-red-600 border border-red-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <span className="text-xs font-black uppercase text-red-800">
              {SCENARIOS.find((s) => s.id === scenario)?.urgencyBadge} • {state.name} ({state.postalCode})
            </span>
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3.5 py-1.5 bg-red-700 hover:bg-red-800 text-white text-xs font-extrabold rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Cure &amp; Verification Form</span>
            </button>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-950">
            {SCENARIOS.find((s) => s.id === scenario)?.title}
          </h3>
        </div>

        {/* SCENARIO 1: SIGNATURE MISMATCH / MISSING SIGNATURE */}
        {scenario === 'signature-mismatch' && (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <h4 className="text-base font-black text-slate-900 mb-2">
                Step-by-Step Statutory Cure Protocol in {state.name} ({state.postalCode}):
              </h4>
              <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>
                  <strong>Check Your Official {state.postalCode} Ballot Status Online Immediately:</strong> Visit{' '}
                  <a
                    href={state.officialPortal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-bold underline"
                  >
                    {state.officialPortal.name}
                  </a>{' '}
                  to see if your mail-in ballot status says <em>&ldquo;Challenged&rdquo;</em>, <em>&ldquo;Signature Deficient&rdquo;</em>, or <em>&ldquo;Rejected — Cure Required&rdquo;</em>.
                </li>
                <li>
                  <strong>Submit a 1-Page Signature Cure Affidavit:</strong> Over 30 states require County Election Boards to allow voters to cure a missing or mismatched signature within 2 to 8 days after November 3, 2026 by returning a signed Cure Affidavit alongside a copy of their accepted Voter ID ({state.voterId.acceptableDocs.slice(0, 3).join(', ')}).
                </li>
                <li>
                  <strong>If It Is Still On or Before Tuesday, November 3, 2026:</strong> In many states (including PA, NY, GA, NC, MI), if your mail ballot was flagged before Election Day closes, you can appear in person at your County Election Office or polling place to cure the envelope or cast a replacement/provisional ballot before <strong>{state.pollingHours}</strong>.
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* SCENARIO 2: PROVISIONAL BALLOT / MISSING ID */}
        {scenario === 'provisional-no-id' && (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <h4 className="text-base font-black text-slate-900 mb-2">
                How to Ensure Your Provisional Ballot Is Counted in {state.name}:
              </h4>
              <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>
                  <strong>Keep Your Provisional Ballot Receipt &amp; Tracking Number:</strong> Under the federal Help America Vote Act (<strong>52 U.S.C. § 21082</strong>), poll workers are legally required to give you a written provisional receipt with a toll-free number or website to track whether your ballot was counted.
                </li>
                <li>
                  <strong>{state.name} Voter ID Rule ({state.voterId.type}):</strong>{' '}
                  {state.voterId.type === 'Strict Photo ID'
                    ? `Because ${state.name} is a Strict Photo ID state, you MUST present, email, or fax an accepted photo ID (${state.voterId.acceptableDocs.slice(0, 3).join(', ')})—or sign a Religious/Indigence/Reasonable Impediment exemption at your County Election Board—within the statutory post-election cure window (typically 3 to 6 calendar days after November 3, 2026).`
                    : `Because ${state.name} uses "${state.voterId.type}", if you signed the identity/eligibility affidavit on your provisional envelope and the county confirms you are registered, your ballot is counted automatically without needing to visit the county office afterward!`}
                </li>
                <li>
                  <strong>Verify With Your Local County Election Board:</strong> Call your County Clerk / Board of Elections on Wednesday, November 4, 2026 with your provisional receipt number to confirm no additional ID copy is needed.
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* SCENARIO 3: MAIL BALLOT NEVER ARRIVED */}
        {scenario === 'mail-ballot-never-arrived' && (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <h4 className="text-base font-black text-slate-900 mb-2">
                What to Do If Your {state.name} Mail Ballot Never Arrived (or It’s Too Late to Mail):
              </h4>
              <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>
                  <strong>If You Have the Ballot Packet, DO NOT Mail It Within 5 Days of Nov 3:</strong> In {state.name}, the return rule is: <strong>{state.mailInVoting.returnDeadline}</strong> ({state.mailInVoting.details}). Hand-deliver your signed and sealed ballot to an official County Drop Box or your County Election Office before polls close on November 3 ({state.pollingHours}).
                </li>
                <li>
                  <strong>If You Have the Unvoted Ballot Packet and Prefer to Vote at the Booth:</strong> Bring the unvoted mail ballot and its envelopes to your polling place on Election Day. Surrender it to the Chief Election Judge so they can spoil/void it and issue you a regular in-person ballot.
                </li>
                <li>
                  <strong>If Your Mail Ballot Never Arrived in the Mail:</strong> Go to your assigned polling place on Tuesday, November 3, 2026 between <strong>{state.pollingHours}</strong> and tell the poll worker your mail ballot never arrived. Under 52 U.S.C. § 21082, you will cast a <strong>Provisional Ballot</strong> (or in Vote Center states with live electronic poll books, a regular ballot after voiding your unreturned mail record), which counts in full once the county confirms your mail ballot was never returned.
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* SCENARIO 4: FORGOT SECRECY ENVELOPE / SPOILED BALLOT */}
        {scenario === 'naked-or-spoiled-ballot' && (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <h4 className="text-base font-black text-slate-900 mb-2">
                Fixing a "Naked Ballot" (Missing Secrecy Envelope) or Spoiled Ballot in {state.name}:
              </h4>
              <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>
                  <strong>If You Haven’t Mailed or Dropped Off the Ballot Yet:</strong> Do NOT cross out mistakes on a paper ballot. Contact your County Board of Elections for a replacement absentee packet, or bring the spoiled packet with you to your polling place on Election Day to surrender it and vote in person.
                </li>
                <li>
                  <strong>If You Already Mailed a Ballot Without the Inner Secrecy Envelope:</strong> In states with mandatory inner secrecy envelopes (most famously <strong>Pennsylvania</strong>), a "naked ballot" is set aside. Check your online ballot tracker at{' '}
                  <a
                    href={state.officialPortal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-bold underline"
                  >
                    {state.officialPortal.name}
                  </a>
                  —if your county marks your mail ballot as cancelled/defective, you have the right to cast a <strong>Provisional Ballot</strong> in person at your polling place on Tuesday, November 3, 2026 before <strong>{state.pollingHours}</strong>!
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* SCENARIO 5: TURNED AWAY / MACHINE DOWN / INTIMIDATION */}
        {scenario === 'turned-away-or-intimidation' && (
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200">
              <h4 className="text-base font-black text-slate-900 mb-2">
                Emergency Federal Polling Place Protections in {state.name}:
              </h4>
              <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li>
                  <strong>Never Leave the Polling Place Without Casting a Ballot:</strong> If a poll worker claims your name is not in the poll book or challenges your eligibility, invoke your federal right under <strong>Section 302 of the Help America Vote Act (52 U.S.C. § 21082)</strong> and say: <em>&ldquo;I am requesting a HAVA Provisional Ballot under federal law.&rdquo;</em>
                </li>
                <li>
                  <strong>If Voting Machines or Scanners Are Down:</strong> Ask immediately for an <strong>Emergency Paper Ballot</strong> (every precinct is required to stock paper ballots and a locked emergency ballot box so voters never have to wait for a technician).
                </li>
                <li>
                  <strong>Call the Live Legal Election Protection Hotline Before Leaving the Building:</strong> Dial <strong>1-866-OUR-VOTE (1-866-687-8683)</strong> (English) or <strong>1-888-VE-Y-VOTA (1-888-839-8682)</strong> (Spanish) to speak with a nonpartisan election attorney immediately.
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* Printable Statutory Cure & Verification Cover Sheet */}
        <div className="p-5 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700">
              Printable Voter Cure &amp; Provisional Verification Cover Sheet ({state.postalCode})
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Cite: 52 U.S.C. § 21082 (HAVA) &amp; {state.name} Election Code
            </span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 space-y-1.5">
            <div>
              <strong>TO:</strong> County Board of Elections / County Clerk ({voterCounty || `${state.name} County Election Authority`})
            </div>
            <div>
              <strong>FROM VOTER:</strong> {voterName || '[Print Full Legal Name]'}
            </div>
            <div>
              <strong>ELECTION:</strong> November 3, 2026 United States General Midterm Election
            </div>
            <div>
              <strong>MATTER:</strong> Statutory Verification / Cure of Ballot ({SCENARIOS.find((s) => s.id === scenario)?.shortLabel})
            </div>
            <div className="pt-2 text-[11px] leading-relaxed">
              I hereby affirm under penalty of perjury that I am a U.S. citizen, a qualified elector of {state.name}, and that the ballot cast by me in the November 3, 2026 General Election is my single lawful vote. Attached is a copy of my accepted identification ({state.voterId.acceptableDocs.slice(0, 2).join(' / ')}) to cure and verify my ballot record.
            </div>
            <div className="pt-3 flex justify-between text-[11px] text-slate-500 border-t border-slate-200 mt-2">
              <span>Voter Signature: ___________________________</span>
              <span>Date: ____ / Nov / 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
