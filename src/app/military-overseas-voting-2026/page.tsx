'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield,
  Plane,
  Mail,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  FileText,
  Clock,
  Printer,
  Globe,
} from 'lucide-react';
import {
  UOCAVA_STATE_RULES,
  UOCAVA_FEDERAL_STANDARDS,
  COMMON_UOCAVA_QUESTIONS,
  UocavaStateRule,
} from '../../data/uocava2026';
import { ALL_STATES_LIST } from '../../data/states';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { JsonLd } from '../../components/JsonLd';

export default function MilitaryOverseasVotingPage() {
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('texas');

  const selectedRule: UocavaStateRule =
    UOCAVA_STATE_RULES[selectedStateSlug] || {
      stateSlug: selectedStateSlug,
      stateName: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.name || 'Selected State',
      postalCode: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.postalCode || 'US',
      fpcaRegistrationDeadline: 'Recommended received by August 1, 2026; state cutoffs range from 15 to 30 days prior',
      fpcaBallotRequestDeadline: 'Received 7–14 days before election',
      electronicReturnAllowed: false,
      electronicReturnMethods: ['Physical Mail (Electronic blank ballot delivery)'],
      mailPostmarkDeadline: 'Postmarked on or before Tuesday, Nov 3, 2026',
      mailReceiptDeadline: 'Check local election clerk for exact post-election receipt window',
      fwabAccepted: true,
      witnessOrNotaryRequired: false,
      officialUocavaUrl: 'https://www.fvap.gov',
      specialInstructions: 'UOCAVA voters are covered under federal statute 52 U.S.C. § 20302. Use Federal Post Card Application (FPCA) to register and request ballot.',
    };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentService',
        name: 'Military and Overseas UOCAVA Absentee Voting Assistance 2026',
        serviceType: 'Federal Absentee Voting Registration and Ballot Submission',
        provider: {
          '@type': 'GovernmentOrganization',
          name: 'Federal Voting Assistance Program (FVAP) & State Election Divisions',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'UOCAVA Voter Resources',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Federal Post Card Application (FPCA)',
                description: 'Voter registration and absentee ballot request form for active-duty military and overseas U.S. citizens.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Federal Write-In Absentee Ballot (FWAB)',
                description: 'Emergency backup ballot under 52 U.S.C. § 20303 when regular state absentee ballots do not arrive on time.',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: COMMON_UOCAVA_QUESTIONS.map((q) => ({
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
              <Shield className="w-3.5 h-3.5 text-amber-300" />
              Uniformed and Overseas Citizens Absentee Voting Act (UOCAVA)
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              2026 Military &amp; Overseas <span className="text-amber-300">Voter Guide</span>
            </h1>
            <p className="mt-3 text-base sm:text-xl text-blue-100 max-w-3xl mx-auto font-medium">
              Statutory deadlines, Federal Post Card Application (FPCA) filings, 45-day ballot transmission rules, and Federal Write-In Absentee Ballot (FWAB) emergency backup procedures for active-duty armed forces and U.S. citizens living abroad.
            </p>
          </div>

          {/* Speakable Direct Answer Box */}
          <div className="max-w-4xl mx-auto">
            <DirectAnswerBox
              question="When must 2026 military and overseas absentee ballots be sent and returned?"
              directAnswer="Under federal law (52 U.S.C. § 20302), all state election officials must transmit absentee ballots to UOCAVA voters at least 45 days before the general election, by Saturday, September 19, 2026. Marked ballots must be postmarked on or before Tuesday, November 3, 2026."
              supportingText="Active-duty military personnel, their dependents, and civilian citizens living overseas should submit their Federal Post Card Application (FPCA) early in 2026. If your official state ballot has not arrived by October 19, 2026, submit a Federal Write-In Absentee Ballot (FWAB) as an emergency backup."
              statuteOrSource={UOCAVA_FEDERAL_STANDARDS.federalLawCitation}
              sourceUrl="https://www.fvap.gov"
            />
          </div>
        </div>
      </section>

      {/* Key Dates Timeline */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-xs font-bold text-slate-500 uppercase">Recommended FPCA Filing</div>
            <div className="text-base font-black text-slate-900 mt-1">August 1, 2026</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Establishes absentee status</div>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-xs font-bold text-blue-800 uppercase">45-Day Federal Ballot Dispatch</div>
            <div className="text-base font-black text-blue-900 mt-1">Sept 19, 2026</div>
            <div className="text-[11px] text-blue-700 mt-0.5">Mandatory state transmission</div>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
            <div className="text-xs font-bold text-amber-800 uppercase">Emergency FWAB Backup</div>
            <div className="text-base font-black text-amber-900 mt-1">October 19, 2026</div>
            <div className="text-[11px] text-amber-700 mt-0.5">If official ballot is delayed</div>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="text-xs font-bold text-emerald-800 uppercase">Postmark Cutoff</div>
            <div className="text-base font-black text-emerald-900 mt-1">Tuesday, Nov 3, 2026</div>
            <div className="text-[11px] text-emerald-700 mt-0.5">Label 11-DoD Free Postage</div>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-700">
                50-State Statutory UOCAVA Matrix
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Select Your Home Voting State / Legal Residence:
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Inspect registration cutoffs, electronic return permissions, postmark rules, and receipt grace periods.
              </p>
            </div>

            <div className="w-full sm:w-72">
              <label htmlFor="state-select" className="sr-only">Select State</label>
              <select
                id="state-select"
                value={selectedStateSlug}
                onChange={(e) => setSelectedStateSlug(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm font-bold bg-slate-50 border-2 border-blue-500 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {ALL_STATES_LIST.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} ({s.postalCode})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* State Specific Breakdown Box */}
          <div className="mt-6 bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600" />
                <h3 className="text-xl font-black text-slate-900">
                  {selectedRule.stateName} Military &amp; Overseas Voting Protocol (2026)
                </h3>
              </div>
              <a
                href={selectedRule.officialUocavaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                <span>Official {selectedRule.postalCode} Military Voting Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">FPCA Registration Deadline</div>
                <div className="text-sm font-black text-slate-900 mt-1">{selectedRule.fpcaRegistrationDeadline}</div>
                <p className="text-[11px] text-slate-500 mt-1">Submit via Federal Voting Assistance Program (FVAP.gov).</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Ballot Request Deadline</div>
                <div className="text-sm font-black text-slate-900 mt-1">{selectedRule.fpcaBallotRequestDeadline}</div>
                <p className="text-[11px] text-slate-500 mt-1">Blank ballots sent electronically or by airmail on Sept 19, 2026.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Electronic Ballot Return Allowed?</div>
                <div className="text-sm font-black mt-1 flex items-center gap-1.5">
                  {selectedRule.electronicReturnAllowed ? (
                    <span className="text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>YES — {selectedRule.electronicReturnMethods.join(', ')}</span>
                    </span>
                  ) : (
                    <span className="text-rose-700 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" />
                      <span>NO — Physical Mail Return Strictly Required</span>
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {selectedRule.electronicReturnAllowed
                    ? 'State allows electronic submission of marked ballot.'
                    : 'Marked ballots cannot be emailed or faxed; physical ballot must be returned.'}
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Postmark &amp; Receipt Deadlines</div>
                <div className="text-sm font-black text-slate-900 mt-1">{selectedRule.mailPostmarkDeadline}</div>
                <p className="text-[11px] text-slate-600 mt-1">
                  <strong>Receipt Window:</strong> {selectedRule.mailReceiptDeadline}
                </p>
              </div>
            </div>

            {selectedRule.specialInstructions && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong>{selectedRule.stateName} Statutory Note:</strong> {selectedRule.specialInstructions}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Emergency FWAB Step-by-Step Guide */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-8 border border-slate-800">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950 mb-3">
              Federal Emergency Backup Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Ballot Didn&apos;t Arrive? How to Cast a Federal Write-In Absentee Ballot (FWAB)
            </h2>
            <p className="text-slate-300 mt-2 text-xs sm:text-sm leading-relaxed">
              Under <strong>52 U.S.C. § 20303</strong>, the Federal Write-In Absentee Ballot (FWAB) serves as a legal emergency ballot for UOCAVA voters who applied for an official state ballot that has not arrived in time for Election Day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs mb-2">
                  1
                </div>
                <div className="font-bold text-white text-sm">Download the FWAB</div>
                <p className="text-xs text-slate-300 mt-1">
                  Obtain the official online fillable PDF from FVAP.gov or your installation Voting Assistance Officer (VAO).
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs mb-2">
                  2
                </div>
                <div className="font-bold text-white text-sm">Write In Your Choices</div>
                <p className="text-xs text-slate-300 mt-1">
                  You can write candidate names or political party designations (e.g. &quot;Democratic Candidate for U.S. Senate&quot; or &quot;Jane Smith&quot;).
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs mb-2">
                  3
                </div>
                <div className="font-bold text-white text-sm">Mail or Upload</div>
                <p className="text-xs text-slate-300 mt-1">
                  Package inside the security envelope and mailing envelope. If your regular state ballot arrives later, complete it too; officials count only one.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.fvap.gov/fwab-online-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5"
              >
                <span>Launch Official FVAP FWAB Assistant (.gov)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/sample-ballot-2026"
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-colors"
              >
                <span>Preview Your 2026 Contests First →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="max-w-5xl mx-auto px-4 my-6">
        <AdPlacement format="leaderboard" slotId="uocava-mid-ad" />
      </div>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Military &amp; Overseas Voter FAQs</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
          Frequently Asked Questions About 2026 UOCAVA Voting
        </h2>
        <div className="space-y-4">
          {COMMON_UOCAVA_QUESTIONS.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.q}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Monetization & Affiliates */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AffiliatePartners />
      </section>
    </>
  );
}
