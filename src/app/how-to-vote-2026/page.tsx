import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { CheckCircle2, FileText, MapPin, CreditCard, Vote, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Vote in the 2026 Midterm Elections: Step-by-Step Voter Guide',
  description:
    'Complete step-by-step guide on how to register and vote in the 2026 Midterm Elections. Check registration, select early or mail voting, find your precinct, and know your voter ID.',
  keywords: [
    'how to vote in 2026',
    'how to register to vote 2026',
    'first time voter guide 2026',
    'steps to vote on election day 2026',
    'what do i need to bring to vote',
  ],
};

export default function HowToVotePage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Register and Vote in the 2026 Midterm Elections',
    description:
      'A comprehensive 5-step checklist for eligible U.S. citizens to successfully register, verify ballot requirements, and cast a legally binding vote in the November 3, 2026 general election.',
    totalTime: 'PT15M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Verify Your Voter Registration Status',
        text: 'Check your active voter registration record on your state Secretary of State portal at least 30 days before November 3, 2026.',
        url: 'https://election-day-2026.vercel.app/how-to-vote-2026#step-1',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Choose Your Voting Method',
        text: 'Decide whether to vote early in-person, vote by mail / absentee ballot, or vote in person on Election Day, Tuesday, November 3, 2026.',
        url: 'https://election-day-2026.vercel.app/how-to-vote-2026#step-2',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Prepare Required Identification',
        text: 'Review your state identification laws to confirm whether you need a government-issued photo ID (driver license, passport) or alternative documentation.',
        url: 'https://election-day-2026.vercel.app/how-to-vote-2026#step-3',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Research Your Sample Ballot',
        text: 'Inspect your local sample ballot in advance to review candidate platforms for U.S. Senate, U.S. House, Governor, state legislative seats, and judicial questions.',
        url: 'https://election-day-2026.vercel.app/how-to-vote-2026#step-4',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Cast Your Ballot and Obtain Your Receipt',
        text: 'Locate your designated polling precinct or official secure drop box. Cast your vote before poll closing time.',
        url: 'https://election-day-2026.vercel.app/how-to-vote-2026#step-5',
      },
    ],
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://election-day-2026.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'How to Vote 2026 Step-by-Step',
        item: 'https://election-day-2026.vercel.app/how-to-vote-2026',
      },
    ],
  };

  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-blue-300">How to Vote 2026</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            How to Vote in the 2026 Midterm Elections
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Official step-by-step voting roadmap for first-time voters, returning citizens, and voters who recently moved.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="How do I vote in the 2026 election?"
          directAnswer="To vote in 2026: (1) Confirm you are registered in your state before the cutoff date; (2) Decide between early voting, mail-in absentee, or Election Day voting; (3) Bring your required state ID; and (4) Cast your ballot at your assigned neighborhood precinct before polls close."
          supportingText="47 states offer early voting options. Over 30 states permit no-excuse absentee voting."
          statuteOrSource="National Voter Registration Act (NVRA) 52 U.S. Code § 20501"
          sourceUrl="https://www.justice.gov/crt/national-voter-registration-act-1993-nvra"
        />

        <AdPlacement format="leaderboard" slotId="how-to-top-ad" />

        {/* The 5 Steps */}
        <section className="my-8 space-y-6">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            The 5-Step 2026 Voter Checklist
          </h2>

          <div id="step-1" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Confirm Your Registration 30 Days Early
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                States regularly conduct voter list maintenance. Check your active registration status via your state Secretary of State website or Vote.gov by early October 2026. If you moved, changed your legal name, or haven't voted recently, submit an updated voter registration form.
              </p>
            </div>
          </div>

          <div id="step-2" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-lg flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Select Your Voting Method (Early, Mail, or Nov 3)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                You do not have to wait until Tuesday, November 3:
                <br />• <strong>In-Person Early Voting:</strong> Available in 47 states throughout October.
                <br />• <strong>Mail-in / Absentee Ballot:</strong> Available in all states (request early to ensure postmark compliance).
                <br />• <strong>Election Day Voting:</strong> Tuesday, November 3, 2026, at your designated neighborhood polling precinct.
              </p>
            </div>
          </div>

          <div id="step-3" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-black text-lg flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Verify Your State’s Identification Requirements
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Check whether your state enforces strict photo ID laws (such as Texas, Georgia, Ohio, and Wisconsin) or accepts non-photo documents. Always bring a valid driver's license, state ID, or U.S. passport to avoid having to cast a provisional ballot.
              </p>
            </div>
          </div>

          <div id="step-4" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white font-black text-lg flex items-center justify-center shrink-0">
              4
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Review Your Official Sample Ballot in Advance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Avoid ballot fatigue by looking up your sample ballot before you enter the booth. Midterm ballots feature 34 U.S. Senate seats, all 435 U.S. House seats, 36 Governors, state supreme court justices, and critical statewide constitutional amendments.
              </p>
            </div>
          </div>

          <div id="step-5" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center shrink-0">
              5
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Cast Your Ballot Before Polls Close
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Locate your exact voting location (which can change between election cycles). If voting on Election Day, remember that as long as you are physically in line by the official poll closing time (typically 7:00 PM or 8:00 PM), poll workers are required by law to let you vote.
              </p>
            </div>
          </div>
        </section>

        <AdPlacement format="in-article" slotId="how-to-mid-ad" />

        {/* Affiliate Recommendations */}
        <AffiliatePartners />

        {/* Lead Capture */}
        <LeadCapture />

        <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">
            ← Return to Homepage
          </Link>
          <Link href="/voter-questions" className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1">
            <span>Explore 50+ Long-Tail Voter Questions →</span>
          </Link>
        </div>
      </div>
    </>
  );
}
