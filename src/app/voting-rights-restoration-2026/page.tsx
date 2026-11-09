'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Scale,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Building2,
  FileText,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import {
  STATE_RIGHTS_RESTORATION_DATA,
  RIGHTS_RESTORATION_TIERS_OVERVIEW,
  COMMON_RESTORATION_FAQS,
  StateRightsRestorationRule,
} from '../../data/rightsRestoration2026';
import { ALL_STATES_LIST } from '../../data/states';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { JsonLd } from '../../components/JsonLd';

export default function RightsRestorationPage() {
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('pennsylvania');

  const selectedRule: StateRightsRestorationRule =
    STATE_RIGHTS_RESTORATION_DATA[selectedStateSlug] || {
      stateSlug: selectedStateSlug,
      stateName: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.name || 'Selected State',
      postalCode: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.postalCode || 'US',
      restorationTier: 'Automatic Upon Completion of Probation and Parole',
      tierNumber: 3,
      statutorySummary: 'Voting rights restore automatically after completing all imprisonment, probation, and parole terms.',
      statuteCitation: 'State Election Code (Criminal Disenfranchisement & Restoration)',
      probationVotingAllowed: false,
      paroleVotingAllowed: false,
      finesAndFeesMustBePaid: false,
      reRegistrationRequired: true,
      restorationProcessSteps: [
        'Complete all terms of sentence and supervision.',
        'Submit a new voter registration application to your county election authority.',
      ],
      misdemeanorRule: 'Misdemeanor convictions NEVER disqualify you from voting.',
      specialStateNotes: 'Check with your local county election office or state department of corrections for specific discharge documentation.',
    };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentService',
        name: '50-State Voting Rights Restoration for Formerly Incarcerated Citizens (2026)',
        serviceType: 'Civic Legal Re-Enfranchisement and Voter Restoration',
        provider: {
          '@type': 'Organization',
          name: 'ElectionDay2026.org & State Departments of Elections',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: COMMON_RESTORATION_FAQS.map((q) => ({
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
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-3">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              Civil Rights Re-Enfranchisement &amp; Criminal Justice Reform (2026)
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Can I Vote With a Felony? <span className="text-amber-300">50-State Rights Restoration</span>
            </h1>
            <p className="mt-3 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium">
              Statutory restoration rules across all 50 states: automatic release in 25+ states, probation and parole guidelines, re-registration requirements, and the universal misdemeanor rule.
            </p>
          </div>

          {/* Direct Answer Box for Position #0 and AI Engines */}
          <div className="max-w-4xl mx-auto">
            <DirectAnswerBox
              question="Can you vote if you have a felony conviction in the United States?"
              directAnswer="YES. In over 25 states (including CA, NY, PA, MI, OH, MN, NM, IL, CO, NJ, WA), your voting rights are restored automatically the moment you walk out of prison—even while on probation or parole. In states like Texas, Georgia, North Carolina, and Wisconsin, rights restore automatically upon completion of probation and parole."
              supportingText="Misdemeanor convictions NEVER revoke voting rights in any U.S. state. In Maine, Vermont, and Washington D.C., citizens never lose their voting rights at all and can vote from prison. Once eligible, you must submit a new voter registration form."
              statuteOrSource="25 P.S. § 2602(w), Tex. Elec. Code § 11.002, Cal. Elec. Code § 2101, Minn. Stat. § 201.014"
              sourceUrl="https://www.justice.gov/voting-rights-restoration"
            />
          </div>
        </div>
      </section>

      {/* Misdemeanor Golden Rule Alert */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl shadow-lg p-5 sm:p-6 text-emerald-950">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800 mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>The Universal Misdemeanor Rule Across All 50 States</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-emerald-950">
            A Misdemeanor Conviction NEVER Revokes Your Right to Vote in Any U.S. State
          </h2>
          <p className="text-xs sm:text-sm text-emerald-900 mt-1 leading-relaxed">
            Millions of Americans with misdemeanor records mistakenly believe they are disenfranchised. Under federal and state laws, misdemeanors (DUI, minor drug possession, disorderly conduct) do NOT affect your right to vote. Even individuals in county jail serving a misdemeanor sentence or awaiting trial retain the legal right to vote by absentee ballot.
          </p>
        </div>
      </section>

      {/* 4-Tier Nationwide System Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            National Legal Landscape
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
            The 4 Tiers of Voting Rights Restoration in America
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {RIGHTS_RESTORATION_TIERS_OVERVIEW.map((t) => (
            <div key={t.tier} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white mb-2">
                  Tier #{t.tier}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1">{t.name}</h3>
                <div className="text-xs font-bold text-blue-700 mb-2">{t.jurisdictions}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive State Lookup Matrix */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-700">
                50-State Statutory Restoration Matrix
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Select Your State to Check Re-Enfranchisement Rules:
              </h2>
            </div>

            <div className="w-full sm:w-72">
              <label htmlFor="state-rights-select" className="sr-only">Select State</label>
              <select
                id="state-rights-select"
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

          {/* Selected State Rule Box */}
          <div className="mt-6 bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-600" />
                <h3 className="text-xl font-black text-slate-900">
                  {selectedRule.stateName} Restoration Protocol (2026)
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-100 text-indigo-900 border border-indigo-200 font-mono">
                {selectedRule.statuteCitation}
              </span>
            </div>

            {/* Classification Badge */}
            <div className="p-3 bg-white rounded-xl border border-slate-200 mb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">State Category:</span>
                <div className="text-base font-black text-indigo-700">{selectedRule.restorationTier}</div>
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-lg">
                Tier #{selectedRule.tierNumber} of 4
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Voting on Probation?</div>
                <div className="text-sm font-black mt-1">
                  {selectedRule.probationVotingAllowed ? (
                    <span className="text-emerald-700">✓ YES — Eligible to Vote</span>
                  ) : (
                    <span className="text-rose-700">❌ NO — Must Complete First</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {selectedRule.probationVotingAllowed ? 'Probation does not block voting.' : 'Must complete probation ("off paper").'}
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Voting on Parole?</div>
                <div className="text-sm font-black mt-1">
                  {selectedRule.paroleVotingAllowed ? (
                    <span className="text-emerald-700">✓ YES — Eligible to Vote</span>
                  ) : (
                    <span className="text-rose-700">❌ NO — Must Complete First</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {selectedRule.paroleVotingAllowed ? 'Parole does not block voting.' : 'Must complete parole supervision.'}
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Court Fines Required?</div>
                <div className="text-sm font-black mt-1">
                  {selectedRule.finesAndFeesMustBePaid ? (
                    <span className="text-rose-700">⚠️ Yes — Fines Must Be Paid</span>
                  ) : (
                    <span className="text-emerald-700">✓ No — Debt Does Not Block</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {selectedRule.finesAndFeesMustBePaid ? 'Court debt must be satisfied.' : 'You can vote even with unpaid debt.'}
                </p>
              </div>
            </div>

            {/* How to Restore Steps */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 my-3">
              <div className="text-xs font-bold text-slate-500 uppercase mb-2">
                Step-by-Step Restoration Process in {selectedRule.stateName}:
              </div>
              <ol className="list-decimal pl-5 space-y-1 text-xs text-slate-700">
                {selectedRule.restorationProcessSteps.map((step, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <strong>Step {idx + 1}:</strong> {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* State Advisory Alert */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>{selectedRule.stateName} Legal Advisory:</strong> {selectedRule.specialStateNotes}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="max-w-5xl mx-auto px-4 my-6">
        <AdPlacement format="leaderboard" slotId="restoration-mid-ad" />
      </div>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Restoration FAQs</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
          Frequently Asked Questions About Voting After a Conviction
        </h2>
        <div className="space-y-4">
          {COMMON_RESTORATION_FAQS.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.q}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliates */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AffiliatePartners />
      </section>
    </>
  );
}
