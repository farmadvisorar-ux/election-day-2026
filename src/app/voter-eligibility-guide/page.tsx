import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '../../lib/siteConfig';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import {
  GraduationCap,
  Globe,
  ShieldCheck,
  Accessibility,
  ExternalLink,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 Voter Eligibility Guide: College Students, Military Overseas (UOCAVA), Returning Citizens & Accessibility',
  description:
    'Official non-partisan 2026 midterm voter eligibility guide covering college student campus vs. home-state voting (Symm v. United States), military and overseas UOCAVA ballots (FPCA/FVAP.gov), felon voting rights restoration by state, and curbside disability access.',
  alternates: {
    canonical: `${SITE_URL}/voter-eligibility-guide`,
  },
  keywords: [
    'can college students vote in college state 2026',
    'military overseas voting 2026 uocava',
    'can a felon vote in 2026 by state',
    'curbside voting disability rights 2026',
    'student id voter id states 2026',
  ],
};

export default function VoterEligibilityGuidePage() {
  const faqs = [
    {
      q: 'Can a college student register and vote in their college town instead of their parents’ home state in 2026?',
      a: 'Yes. Under the U.S. Supreme Court ruling in Symm v. United States (439 U.S. 1105), college and university students have the constitutional right to establish voting domicile at either their campus address (including a residence hall/dormitory) or their permanent family home address—provided they only register and vote in one location.',
    },
    {
      q: 'How do active-duty military personnel and U.S. citizens living overseas vote in the 2026 midterms?',
      a: 'Under the Uniformed and Overseas Citizens Absentee Voting Act (UOCAVA, 52 U.S.C. § 20301), military members, their eligible family members, and U.S. citizens residing abroad can register and request an absentee ballot simultaneously using the Federal Post Card Application (FPCA) at FVAP.gov. States are legally required to transmit UOCAVA ballots at least 45 days before the November 3, 2026 election (September 19, 2026).',
    },
    {
      q: 'Can citizens with a past felony conviction vote in the November 3, 2026 midterm elections?',
      a: 'In 48 states and Washington, D.C., voting rights are restored either automatically upon release from prison (23 states + D.C.) or upon completion of parole and probation (16 states), while Maine, Vermont, and D.C. never revoke voting rights even during incarceration. In ~11 states, restoration for certain offenses requires waiting periods, payment of legal financial obligations, or an individual petition.',
    },
    {
      q: 'Do polling places offer curbside voting or accessible voting machines for voters with disabilities?',
      a: 'Yes. Under the Help America Vote Act (HAVA, 52 U.S.C. § 21081) and the Americans with Disabilities Act (ADA), every polling place in a federal election must provide at least one accessible voting system for voters with visual or physical disabilities, and voters may receive assistance from a person of their choice (other than their employer or union agent).',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/how-to-vote-2026" className="hover:text-white">How to Vote</Link>
            <span>/</span>
            <span className="text-emerald-400 font-bold">2026 Voter Eligibility Guide</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 Special Voter Eligibility Guide: Students, Military, Returning Citizens &amp; Accessibility
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-3xl">
            Statutory federal and state rules governing college dormitory registration, overseas military absentee ballots (`UOCAVA`), voting rights restoration after a felony conviction, and polling place disability accommodations for November 3, 2026.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="Who is eligible to vote in the November 3, 2026 U.S. Midterm Election?"
          directAnswer="Any U.S. citizen who will be at least 18 years old on or before Tuesday, November 3, 2026, meets their state's residency requirements, and is registered by their state's statutory cutoff (or via Same-Day Registration in 23 jurisdictions) is eligible to vote."
          supportingText="Federal statutes and Supreme Court precedents protect specific ballot access rights for college students (Symm v. United States), overseas military/expats (UOCAVA, 52 U.S.C. § 20301), and voters with disabilities (HAVA, 52 U.S.C. § 21081)."
          statuteOrSource="U.S. Constitution 26th Amendment, 52 U.S.C. § 20301 & 52 U.S.C. § 21081"
          sourceUrl="https://www.vote.gov"
        />

        <AdPlacement format="leaderboard" slotId="eligibility-top-ad" />

        {/* 4 Pillar Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {/* Pillar 1: College Students */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-700 mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>College &amp; University Voters</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-2">
                Campus Dormitory vs. Home-State Voting
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Under the U.S. Supreme Court decision in <em>Symm v. United States</em> (1979), college students living away from home have the legal right to choose whether to register at their <strong>campus address</strong> (including a university dorm) or remain registered at their <strong>family home address</strong> and request a mail-in ballot.
              </p>
              <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1.5">
                <li>
                  <strong>Out-of-State Driver&apos;s Licenses:</strong> In strict photo ID states (like WI, IN, TX, OH, NC), check whether your university student ID qualifies or if you need a U.S. Passport or free state Voter ID card.
                </li>
                <li>
                  <strong>Same-Day Campus Registration:</strong> 23 states + D.C. allow students to register and vote on the same day using a university housing contract or tuition statement as proof of residence.
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                href="/50-state-comparison-matrix"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Compare Student ID &amp; Same-Day Rules by State</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Military & Overseas (UOCAVA) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-indigo-700 mb-2">
                <Globe className="w-4 h-4" />
                <span>Uniformed &amp; Overseas Citizens (UOCAVA)</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-2">
                Military &amp; Expat Voting Abroad (`FPCA`)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Active-duty members of the Uniformed Services, Merchant Marine, eligible spouses/dependents, and U.S. citizens living outside the United States are protected by <strong>52 U.S.C. § 20301 (UOCAVA)</strong>.
              </p>
              <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1.5">
                <li>
                  <strong>Step 1 — Submit the FPCA:</strong> Complete the Federal Post Card Application (`FPCA`) to register and request your 2026 absentee ballot simultaneously.
                </li>
                <li>
                  <strong>45-Day Transmission Deadline:</strong> States must email or mail UOCAVA ballots by <strong>Saturday, September 19, 2026</strong> (45 days before Nov 3).
                </li>
                <li>
                  <strong>Backup Ballot (`FWAB`):</strong> If your state ballot does not arrive in time, submit the Federal Write-In Absentee Ballot (`FWAB`).
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="https://www.fvap.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>Visit Official Federal Voting Assistance Program (FVAP.gov)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Pillar 3: Returning Citizens (Past Convictions) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-700 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Voting Rights Restoration (50 States)</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-2">
                Voting with a Past Felony Conviction in 2026
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Over 4.6 million Americans have had their voting rights restored following a past conviction. A misdemeanor conviction (or pretrial detention awaiting trial) <strong>never</strong> revokes your constitutional right to vote in any state.
              </p>
              <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1.5">
                <li>
                  <strong>Never Lost (3 Jurisdictions):</strong> Maine, Vermont, and Washington, D.C.
                </li>
                <li>
                  <strong>Restored Immediately Upon Release from Prison (23 States):</strong> CA, CO, CT, HI, IL, IN, IA (exec. order/varied), MD, MA, MI, MN, MT, NV, NH, NJ, NM, NY, ND, OH, OR, PA, RI, UT, WA.
                </li>
                <li>
                  <strong>Restored After Parole &amp; Probation (15 States):</strong> AK, AR, GA, ID, KS, LA, MO, NE, NC, OK, SC, SD, TX, WV, WI.
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                href="/counties"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
              >
                <span>Check Your Local County Registrar Rules</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 4: Accessibility & Curbside Voting */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-700 mb-2">
                <Accessibility className="w-4 h-4" />
                <span>ADA, HAVA &amp; Senior Voter Rights</span>
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-2">
                Accessible Machines, Curbside Voting &amp; Assistance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Federal law guarantees secret, independent ballot access for voters with physical, visual, sensory, or cognitive disabilities.
              </p>
              <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1.5">
                <li>
                  <strong>Right to Chosen Assistant (52 U.S.C. § 10508):</strong> Any voter who requires assistance due to blindness, disability, or inability to read/write may bring any person of their choice into the booth (except their employer or union officer).
                </li>
                <li>
                  <strong>Accessible Ballot Marking Devices:</strong> Every precinct must provide at least one HAVA-compliant audio-tactile or large-print ballot marking device.
                </li>
                <li>
                  <strong>Curbside Voting:</strong> Over 25 states offer curbside vehicle ballot delivery at polling places for voters unable to enter the building.
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <Link
                href="/voter-questions"
                className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1"
              >
                <span>Browse All 50+ Voter Rights Q&amp;As</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="my-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Statutory Eligibility Q&amp;A</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions: Special Voter Eligibility (2026)
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-2">{f.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AdPlacement format="in-article" slotId="eligibility-bottom-ad" />
        <LeadCapture />
      </div>
    </>
  );
}
