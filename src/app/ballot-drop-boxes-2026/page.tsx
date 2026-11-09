'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Inbox,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Users,
  Building2,
  FileText,
  Clock,
  Car,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import {
  DROP_BOX_RULES_DATA,
  COMMON_DROP_BOX_FAQS,
  StateDropBoxRule,
} from '../../data/dropBoxes2026';
import { ALL_STATES_LIST } from '../../data/states';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { JsonLd } from '../../components/JsonLd';

export default function BallotDropBoxesPage() {
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('georgia');

  const selectedRule: StateDropBoxRule =
    DROP_BOX_RULES_DATA[selectedStateSlug] || {
      stateSlug: selectedStateSlug,
      stateName: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.name || 'Selected State',
      postalCode: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.postalCode || 'US',
      dropBoxAvailability: 'Clerk Office Drop-Off Only',
      statuteCitation: 'State Election Code (Mail-In Ballot Return Rules)',
      dropOffDeadline: 'Poll closing time on Election Day, Nov 3, 2026',
      whoCanReturn: 'Voter + Immediate Family / Household Only',
      authorizedFamilyMembers: ['Spouse', 'Child', 'Parent', 'Sibling', 'Grandparent'],
      witnessOrNotaryRequirement: 'None',
      curbsideVotingAvailable: true,
      officialDropBoxNotes: 'Check with your local county election office for exact drop-off locations, drop box video surveillance guidelines, and official intake hours.',
    };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentService',
        name: '2026 Ballot Drop Box and Family Return Statutory Regulations',
        serviceType: 'Ballot Return Regulations & Voter Protection',
        provider: {
          '@type': 'Organization',
          name: 'ElectionDay2026.org & State Election Authorities',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: COMMON_DROP_BOX_FAQS.map((q) => ({
          '@type': 'Question',
          name: q.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaGraph} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-3">
              <Inbox className="w-3.5 h-3.5 text-emerald-400" />
              Official 2026 Ballot Return &amp; Third-Party Delivery Laws
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              2026 Ballot Drop Box &amp; <span className="text-amber-300">Family Delivery Guide</span>
            </h1>
            <p className="mt-3 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium">
              Find secure drop box locations, avoid third-party &quot;ballot harvesting&quot; felony traps in strict states, verify witness/notary mandates, and inspect curbside voting rights.
            </p>
          </div>

          {/* Direct Answer Box for Position #0 and AI Engines */}
          <div className="max-w-4xl mx-auto">
            <DirectAnswerBox
              question="Can someone else drop off my mail-in ballot for me in 2026?"
              directAnswer="It depends strictly on your state statute. In most states (CA, CO, NV, MI, WI), an authorized family member or designee can drop off your ballot. However, in Texas and Pennsylvania, you must personally deliver your own ballot unless you have a documented disability with an official agent form. Delivering another voter’s ballot in Texas without statutory authorization is a state jail felony."
              supportingText="In Georgia, under SB 202, drop boxes are restricted to the interior of early voting sites during voting hours and seal on the Friday before Election Day. In Florida, returning more than two ballots for non-family members is a first-degree misdemeanor."
              statuteOrSource="Tex. Elec. Code § 86.006, O.C.G.A. § 21-2-382, Fla. Stat. § 101.69, Cal. Elec. Code § 3025"
              sourceUrl="https://www.ncsl.org/elections-and-campaigns/ballot-drop-box-laws"
            />
          </div>
        </div>
      </section>

      {/* Warning Alert Banner for Felony Traps */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl shadow-lg p-5 sm:p-6 text-amber-950">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
            <ShieldAlert className="w-4 h-4 text-amber-700" />
            <span>Critical Legal Notice for Voters, Volunteers &amp; Campaigns</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-amber-950">
            Avoid Third-Party Ballot Delivery Penalties in Texas, Florida &amp; Georgia
          </h2>
          <p className="text-xs sm:text-sm text-amber-900 mt-1 leading-relaxed">
            Several states enforce severe criminal penalties for unauthorized third-party ballot handling. In <strong>Texas</strong>, delivering another voter’s hand-delivered mail ballot is a state jail felony. In <strong>Florida</strong>, returning more than two ballots per election for non-family members is a misdemeanor. In <strong>Georgia</strong>, drop boxes close on the Friday before Election Day and are NOT accessible on Tuesday, Nov 3.
          </p>
        </div>
      </section>

      {/* Interactive State Lookup Matrix */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                50-State Statutory Drop Box Matrix
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Select Your State to Check Drop Box &amp; Delivery Rules:
              </h2>
            </div>

            <div className="w-full sm:w-72">
              <label htmlFor="state-drop-select" className="sr-only">Select State</label>
              <select
                id="state-drop-select"
                value={selectedStateSlug}
                onChange={(e) => setSelectedStateSlug(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm font-bold bg-slate-50 border-2 border-emerald-500 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                {ALL_STATES_LIST.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} ({s.postalCode})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected State Rules Card */}
          <div className="mt-6 bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-black text-slate-900">
                {selectedRule.stateName} Ballot Drop Box &amp; Return Rules (2026)
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-slate-200 text-slate-800 font-mono">
                {selectedRule.statuteCitation}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Drop Box Availability</div>
                <div className="text-sm font-black text-slate-900 mt-1 flex items-center gap-1.5">
                  <Inbox className="w-4 h-4 text-emerald-600" />
                  <span>{selectedRule.dropBoxAvailability}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Check county election portal for precise addresses.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Who Can Deliver Ballot?</div>
                <div className="text-sm font-black text-slate-900 mt-1 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>{selectedRule.whoCanReturn}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Review authorized family relationships below.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Witness / Notary Requirement</div>
                <div className="text-sm font-black text-slate-900 mt-1">
                  {selectedRule.witnessOrNotaryRequirement === 'None' ? (
                    <span className="text-emerald-700 font-bold">None (Signature Match)</span>
                  ) : (
                    <span className="text-rose-700 font-bold">{selectedRule.witnessOrNotaryRequirement}</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Sign the outer certificate envelope before drop-off.</p>
              </div>
            </div>

            {/* Drop Off Deadline & Details */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 my-3">
              <div className="text-xs font-bold text-slate-500 uppercase mb-1">Drop-Off Cutoff Deadline:</div>
              <div className="text-sm font-bold text-slate-900">{selectedRule.dropOffDeadline}</div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{selectedRule.officialDropBoxNotes}</p>
            </div>

            {/* Authorized Family Members List */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 my-3">
              <div className="text-xs font-bold text-slate-500 uppercase mb-1.5">
                Statutorily Permitted Family / Household Relationships:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedRule.authorizedFamilyMembers.map((fam, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-medium border border-slate-200"
                  >
                    ✓ {fam}
                  </span>
                ))}
              </div>
            </div>

            {/* Third Party Penalty Warning if applicable */}
            {selectedRule.thirdPartyPenaltyWarning && (
              <div className="p-4 bg-rose-50 border border-rose-300 rounded-xl text-xs text-rose-950 flex items-start gap-2 mt-3">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Statutory Penalty Warning:</strong> {selectedRule.thirdPartyPenaltyWarning}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Curbside Voting under ADA Title II */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-8 border border-slate-800">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
              Americans with Disabilities Act (ADA Title II) &amp; State Law
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Curbside Voting: How to Cast Your Ballot from Your Vehicle
            </h2>
            <p className="text-slate-300 mt-2 text-xs sm:text-sm leading-relaxed">
              If you have a physical disability, mobility impairment, or temporary injury that makes entering a polling place difficult, state and federal laws guarantee your right to vote curbside from your car.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Car className="w-4 h-4 text-amber-300" />
                  <span>1. Designated Parking</span>
                </div>
                <p className="text-xs text-slate-300">
                  Drive to the marked &quot;Curbside Voting&quot; parking spot near the entrance of your polling place or early voting site.
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>2. Call or Ring Bell</span>
                </div>
                <p className="text-xs text-slate-300">
                  Call the phone number posted on the curbside sign or ring the wireless doorbell to notify the precinct election judges.
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>3. Bipartisan Delivery</span>
                </div>
                <p className="text-xs text-slate-300">
                  Two poll workers (from opposing parties) bring your ballot or portable electronic voting machine directly to your vehicle window.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/voter-id-validator-2026"
                className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <span>Check Acceptable IDs for Curbside Voting →</span>
              </Link>
              <Link
                href="/cities"
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-colors"
              >
                <span>Search 153 City Polling Locations →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="max-w-5xl mx-auto px-4 my-6">
        <AdPlacement format="leaderboard" slotId="drop-box-mid-ad" />
      </div>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Ballot Return Q&amp;A</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
          Frequently Asked Questions About Ballot Drop Boxes &amp; Delivery
        </h2>
        <div className="space-y-4">
          {COMMON_DROP_BOX_FAQS.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.q}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliates */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AffiliatePartners />
      </section>
    </>
  );
}
