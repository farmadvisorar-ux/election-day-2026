'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Building2,
  FileText,
  HelpCircle,
  ArrowRight,
  Scale,
  DollarSign,
  Mail,
  ExternalLink,
  Award,
} from 'lucide-react';
import {
  STUDENT_STATE_RULES,
  STUDENT_CONSTITUTIONAL_FOUNDATION,
  STUDENT_VOTING_MYTHS,
  StudentStateRule,
} from '../../data/studentVoting2026';
import { ALL_STATES_LIST } from '../../data/states';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { JsonLd } from '../../components/JsonLd';

export default function StudentVotingGuidePage() {
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('ohio');

  const selectedRule: StudentStateRule =
    STUDENT_STATE_RULES[selectedStateSlug] || {
      stateSlug: selectedStateSlug,
      stateName: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.name || 'Selected State',
      postalCode: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.postalCode || 'US',
      studentIdAcceptedAtPolls: 'Accepted (Public & Private)',
      studentIdDetails: 'Student photo ID accepted when paired with proof of enrollment or current residence.',
      canRegisterAtDormAddress: true,
      residencyStatuteCitation: 'State Election Code & 26th Amendment',
      absenteeBallotOptionForHomeState: 'Out-of-state students can register locally or vote absentee in their home state.',
      sameDayRegistrationAvailable: false,
      specialCampusRules: 'Check your campus voter registration desk or county board of elections for local polling hours and ID rules.',
    };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentService',
        name: 'College Student and Campus Voting Rights Guide 2026',
        serviceType: 'Civic Voter Education and Student Registration Guidance',
        provider: {
          '@type': 'Organization',
          name: 'ElectionDay2026.org & Campus Civic Coalitions',
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
            name: 'Can college students register and vote using their dorm or campus address?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'YES. Under the U.S. Supreme Court landmark ruling Symm v. United States (1979) and the 26th Amendment, college students have an absolute constitutional right to register and vote in the community where they attend school, using their dorm or off-campus housing address.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does my parent claiming me on their taxes prevent me from voting at college?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NO. IRS tax dependency has zero legal relationship to voting residency. A student can be claimed as a dependent on their parents’ federal Form 1040 and still legally register and vote in their college town.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use my college student ID to vote at the polls in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends on your state statute. In states like Florida and Pennsylvania, student IDs are widely accepted. In Georgia, only public university IDs are accepted. In Wisconsin, student IDs must meet strict 2-year expiration rules. In Ohio and Texas, student IDs are completely prohibited as in-person voter ID.',
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
      <section className="bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-400/30 mb-3">
              <GraduationCap className="w-4 h-4 text-purple-300" />
              26th Amendment &amp; Campus Civic Rights (2026)
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              2026 College Student <span className="text-amber-300">Voting Guide</span>
            </h1>
            <p className="mt-3 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium">
              Dorm vs. home registration rules, 50-state student ID acceptance laws, tax dependency facts, and absentee deadlines for campus voters.
            </p>
          </div>

          {/* Speakable Direct Answer Box */}
          <div className="max-w-4xl mx-auto">
            <DirectAnswerBox
              question="Can college students vote where they go to school?"
              directAnswer="YES. Under the landmark U.S. Supreme Court ruling Symm v. United States (1979), college students have an equal constitutional right under the 26th Amendment to register and vote in the community where they attend school using their campus dorm address."
              supportingText="Parents claiming a student as an IRS dependent has ZERO legal effect on voting residency. While students may register either at their campus address or their permanent home address, you can only register and cast a ballot in ONE location per election."
              statuteOrSource={STUDENT_CONSTITUTIONAL_FOUNDATION.landmarkSupremeCourtCase}
              sourceUrl="https://www.law.cornell.edu/supremecourt/text/439/1105"
            />
          </div>
        </div>
      </section>

      {/* Tax & FAFSA Myth Buster Bar */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
            <div className="text-xs font-bold text-purple-800 uppercase">IRS Tax Dependency</div>
            <div className="text-sm font-black text-slate-900 mt-1">Zero Impact on Voting</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Parents claiming you has no effect</div>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-xs font-bold text-blue-800 uppercase">FAFSA &amp; Pell Grants</div>
            <div className="text-sm font-black text-slate-900 mt-1">100% Protected</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Financial aid is unaffected</div>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="text-xs font-bold text-emerald-800 uppercase">Dorm Address Rule</div>
            <div className="text-sm font-black text-slate-900 mt-1">Legal Residence</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Symm v. United States (1979)</div>
          </div>
          <div className="p-3 bg-rose-50 rounded-xl border border-rose-200">
            <div className="text-xs font-bold text-rose-800 uppercase">One Ballot Limit</div>
            <div className="text-sm font-black text-slate-900 mt-1">Vote Only Once</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Dual voting is a federal felony</div>
          </div>
        </div>
      </section>

      {/* Interactive State Lookup */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-purple-700">
                50-State Student ID &amp; Campus Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Select Your Campus State:
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Check whether your university student ID is accepted as voter ID, and review dorm registration guidelines.
              </p>
            </div>

            <div className="w-full sm:w-72">
              <label htmlFor="state-student-select" className="sr-only">Select State</label>
              <select
                id="state-student-select"
                value={selectedStateSlug}
                onChange={(e) => setSelectedStateSlug(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm font-bold bg-slate-50 border-2 border-purple-500 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
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
              <h3 className="text-xl font-black text-slate-900">
                {selectedRule.stateName} College Student Voting Law (2026)
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-purple-100 text-purple-900 border border-purple-200 font-mono">
                {selectedRule.residencyStatuteCitation}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Student ID at the Polls</div>
                <div className="text-sm font-black mt-1">
                  {selectedRule.studentIdAcceptedAtPolls === 'Banned / Not Accepted' ? (
                    <span className="text-rose-700">❌ Banned / Not Accepted</span>
                  ) : selectedRule.studentIdAcceptedAtPolls === 'Conditional / Strict Criteria' ? (
                    <span className="text-amber-700">⚠️ Conditional / Strict Criteria</span>
                  ) : (
                    <span className="text-emerald-700">✓ Accepted</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">{selectedRule.studentIdDetails}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Dorm Registration</div>
                <div className="text-sm font-black text-emerald-700 mt-1">
                  ✓ 100% Permitted by Law
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Use dorm street address for residence and campus box for mail.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Same-Day Registration</div>
                <div className="text-sm font-black text-slate-900 mt-1">
                  {selectedRule.sameDayRegistrationAvailable ? (
                    <span className="text-emerald-700 font-bold">✓ Yes (Bring Proof of Dorm)</span>
                  ) : (
                    <span className="text-slate-700 font-bold">Advance Cutoff Required</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {selectedRule.sameDayRegistrationAvailable
                    ? 'Register at the campus polling place on Election Day.'
                    : 'Must register 15–30 days before Election Day.'}
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 my-3">
              <div className="text-xs font-bold text-slate-500 uppercase mb-1">
                Out-of-State Student Option:
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedRule.absenteeBallotOptionForHomeState}
              </p>
            </div>

            <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl text-xs text-purple-950 flex items-start gap-2">
              <Building2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
              <div>
                <strong>{selectedRule.stateName} Campus Advisory:</strong> {selectedRule.specialCampusRules}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myths vs Facts Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Campus Myth Buster
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
              The 4 Biggest Myths About College Student Voting
            </h2>
          </div>

          <div className="space-y-4">
            {STUDENT_VOTING_MYTHS.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-rose-800 text-sm">{item.myth}</div>
                <div className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed font-medium">
                  {item.fact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="max-w-5xl mx-auto px-4 my-6">
        <AdPlacement format="leaderboard" slotId="student-voting-mid-ad" />
      </div>

      {/* Next Steps CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/voter-id-validator-2026"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">Document Checker</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Will My Student ID Work?</h3>
              <p className="text-xs text-slate-500 mt-1">Check out-of-state IDs, digital IDs, and expired licenses.</p>
            </div>
            <span className="mt-3 text-xs font-bold text-purple-600 flex items-center gap-1">
              <span>Validate ID</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/sample-ballot-2026"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Sample Ballot</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">What&apos;s on My Campus Ballot?</h3>
              <p className="text-xs text-slate-500 mt-1">Build and print a legal 1-page voting booth cheat sheet.</p>
            </div>
            <span className="mt-3 text-xs font-bold text-blue-600 flex items-center gap-1">
              <span>Build Sample Ballot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/early-voting-calendar-2026"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Campus Vote Centers</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Weekend Early Voting Hours</h3>
              <p className="text-xs text-slate-500 mt-1">Avoid class conflicts with Saturday and Sunday voting.</p>
            </div>
            <span className="mt-3 text-xs font-bold text-amber-600 flex items-center gap-1">
              <span>View Early Calendar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Affiliates */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AffiliatePartners />
      </section>
    </>
  );
}
