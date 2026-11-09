'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  PhoneCall,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Camera,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Search,
  ExternalLink,
} from 'lucide-react';
import {
  NATIONAL_LEGAL_HOTLINES,
  STATE_LINE_RIGHTS,
  UNIVERSAL_LINE_RIGHTS_RULES,
  StateLineRightRule,
} from '../../data/lineRights2026';
import { ALL_STATES_LIST } from '../../data/states';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { JsonLd } from '../../components/JsonLd';

export default function LineRightsPage() {
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('pennsylvania');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const currentRule: StateLineRightRule =
    STATE_LINE_RIGHTS[selectedStateSlug] || {
      stateSlug: selectedStateSlug,
      stateName: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.name || 'Your State',
      postalCode: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.postalCode || 'US',
      statuteCitation: 'State Election Code (Statutory Line Right)',
      pollClosingHour: 'Closing Hour (7:00 PM / 8:00 PM)',
      lineGuaranteeText: 'Any qualified elector who is in line at the official closing hour must be allowed to vote.',
      endOfLineMarkingMethod: 'An election official or police officer stands at the end of the line at the closing hour.',
      bufferZoneFeet: 100,
      cellPhoneInBoothPolicy: 'Restricted (No Photography/Calls)',
      emergencyHotlineNote: 'Under state law, as long as you are in line before the poll closing hour, you must be permitted to vote.',
    };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentService',
        name: 'Voter Protection & Polling Place Line Rights 2026',
        serviceType: 'Civic Legal Rights and Emergency Hotline Directory',
        provider: {
          '@type': 'Organization',
          name: 'Election Protection Coalition & ElectionDay2026.org',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I vote if I am still in line when the polls close on Election Day 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'YES. Under statutory law across all 50 states and federal civil rights protections, any voter who is in line at or before the official poll closing time has an absolute legal right to cast their ballot. Polling place workers cannot turn away voters who were in queue prior to the closing hour.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I do if poll workers try to close the line while I am waiting?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Do not leave the line. Politely inform the election worker of your statutory right under state law to vote if in line by closing time. Immediately call the non-partisan Election Protection hotline at 866-OUR-VOTE (866-687-8683) or 888-VE-Y-VOTA (888-839-8682 for Spanish) so dispatch attorneys can contact county election officials.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the electioneering buffer zone around polling places?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'State laws establish a campaign-free boundary around polling place entrances (ranging from 25 feet in Pennsylvania to 150 feet in Florida and Georgia). Partisan campaigning, signs, literature distribution, and voter solicitation are strictly prohibited within this buffer zone.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaGraph} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-400/30 mb-3">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              Statutory Voter Protection &amp; Emergency Line Enforcement
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Can I Vote If I&apos;m In Line <span className="text-amber-300">When Polls Close?</span>
            </h1>
            <p className="mt-3 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium">
              Official 50-state statutory citations guaranteeing your right to vote, end-of-line marking procedures, voter intimidation laws, and 24/7 non-partisan emergency legal hotlines.
            </p>
          </div>

          {/* Direct Answer Box for Position #0 and Voice AI */}
          <div className="max-w-4xl mx-auto">
            <DirectAnswerBox
              question="Can I still vote if I am in line when polls close on Election Day 2026?"
              directAnswer="YES. Under state law in all 50 states, every qualified voter who is in line at or before the statutory poll closing time MUST be permitted to cast their ballot. Polling places are legally prohibited from closing until the last person in line has voted."
              supportingText="Do NOT get out of line. An election official will stand behind the final person in line at the closing hour. If anyone attempts to dismiss the line or deny entry to voters who arrived before the deadline, immediately report it to the non-partisan Election Protection hotline at 866-OUR-VOTE."
              statuteOrSource="52 U.S.C. § 10307 & State Election Codes (Tex. Elec. Code § 41.032, Cal. Elec. Code § 14401, 25 P.S. § 3045, Fla. Stat. § 100.011)"
              sourceUrl="https://www.eac.gov"
            />
          </div>
        </div>
      </section>

      {/* Emergency Click-to-Call Hotline Bar */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border-2 border-rose-500 shadow-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-rose-600 animate-pulse" />
                <span>1-Click Emergency Voting Rights Legal Hotlines</span>
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                Need Immediate Help at Your Polling Place? Call Non-Partisan Dispatch:
              </h2>
            </div>
            <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold">
              Toll-Free • 100% Confidential
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {NATIONAL_LEGAL_HOTLINES.slice(0, 3).map((h, idx) => (
              <a
                key={idx}
                href={`tel:${h.phone}`}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900">{h.name}</span>
                    <PhoneCall className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-base font-black text-blue-700 font-mono mt-1">
                    {h.tollFreeDisplay}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">{h.sponsor}</p>
                </div>
                <div className="mt-2 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  Languages: {h.languages}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
            <span>Also available: <strong>844-YALLA-US</strong> (Arabic) and <strong>1-800-253-3931</strong> (DOJ Voting Rights Section)</span>
            <span className="text-rose-600 font-bold">Save these numbers to your mobile phone before voting</span>
          </div>
        </div>
      </section>

      {/* 5 Universal Rules for Polling Lines */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Universal Civil Rights Protections
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
            The 5 Golden Rules of Polling Place Line Rights
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl mx-auto">
            These statutory principles apply across all 50 states and federal jurisdictions on Tuesday, November 3, 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {UNIVERSAL_LINE_RIGHTS_RULES.map((rule, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm mb-3">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{rule.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{rule.description}</p>
              </div>
            </div>
          ))}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-5 rounded-2xl border border-blue-400/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm mb-3">
                ★
              </div>
              <h3 className="text-base font-black text-white mb-2">Need a Ride or Have a Problem?</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Check our city hubs for free Election Day transit passes (Uber/Lyft vouchers &amp; municipal buses), or use our Emergency Ballot Problem Solver.
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/cities"
                className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl text-center transition-colors"
              >
                Find Free City Transit →
              </Link>
              <Link
                href="/ballot-problem-solver"
                className="px-3 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl text-center transition-colors"
              >
                Emergency Ballot Problem Solver →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 50-State Statutory Matrix */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                50-State Statutory Citations
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Lookup Your State’s Specific Line Right Statute:
              </h2>
            </div>

            <div className="w-full sm:w-72">
              <label htmlFor="state-line-select" className="sr-only">Select State</label>
              <select
                id="state-line-select"
                value={selectedStateSlug}
                onChange={(e) => setSelectedStateSlug(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm font-bold bg-slate-50 border-2 border-indigo-500 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                {ALL_STATES_LIST.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} ({s.postalCode})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected State Rule Display */}
          <div className="mt-6 bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-black text-slate-900">
                {currentRule.stateName} Polling Place Line Protections
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-100 text-indigo-900 border border-indigo-200 font-mono">
                {currentRule.statuteCitation}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Poll Closing Hour</div>
                <div className="text-base font-black text-slate-900 mt-1">{currentRule.pollClosingHour}</div>
                <p className="text-[11px] text-slate-500 mt-1">You must be in line by this exact minute.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Buffer Zone (No Campaigning)</div>
                <div className="text-base font-black text-blue-700 mt-1">{currentRule.bufferZoneFeet} Feet Boundary</div>
                <p className="text-[11px] text-slate-500 mt-1">Prohibits electioneering and solicitation.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Cell Phone / Photo Policy</div>
                <div className="text-base font-black text-slate-900 mt-1 flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-slate-500" />
                  <span>{currentRule.cellPhoneInBoothPolicy}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Check local precinct photography rules.</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 my-3">
              <div className="text-xs font-bold text-slate-500 uppercase mb-1">Official Statutory Guarantee</div>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed italic">
                &ldquo;{currentRule.lineGuaranteeText}&rdquo;
              </p>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>How Line Cutoff Is Enforced in {currentRule.stateName}:</span>
              </div>
              <p>{currentRule.endOfLineMarkingMethod}</p>
              <p className="font-semibold pt-1">Statutory note: {currentRule.emergencyHotlineNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="max-w-5xl mx-auto px-4 my-6">
        <AdPlacement format="leaderboard" slotId="line-rights-mid-ad" />
      </div>

      {/* What to do if workers try to close the line */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-rose-50 border border-rose-300 rounded-2xl p-6 sm:p-8 text-rose-950">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-rose-700 mb-2">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Emergency Action Protocol</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-rose-950">
            What to Do If Poll Workers Dismiss the Line or Announce Polls Are Closed
          </h2>
          <ol className="mt-4 space-y-3 text-xs sm:text-sm list-decimal pl-5">
            <li>
              <strong>Stay in Place:</strong> Politely and firmly state that you were in line before the closing hour and that under state law ({currentRule.statuteCitation}) you have the right to vote.
            </li>
            <li>
              <strong>Document the Time:</strong> Take note of the exact time, the names or badges of the poll workers, and identify other voters who arrived before the closing hour.
            </li>
            <li>
              <strong>Call 866-OUR-VOTE (866-687-8683) Immediately:</strong> Volunteer civil rights attorneys are on dispatch standby. They can contact the county election director or dispatch roving legal monitors to the polling location.
            </li>
            <li>
              <strong>Request a Provisional Ballot if Unlawfully Challenged:</strong> Under 52 U.S.C. § 21082 (HAVA), if an election worker refuses you a standard ballot, you have an absolute federal right to cast a provisional ballot.
            </li>
          </ol>
        </div>
      </section>

      {/* Affiliates & Monetization */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AffiliatePartners />
      </section>
    </>
  );
}
