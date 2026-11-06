import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BallotProblemSolver } from '../../components/BallotProblemSolver';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { SITE_URL } from '../../lib/siteConfig';
import { ShieldAlert, Sparkles, PhoneCall, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ballot Problem Solver & Cure Tracker (2026): Signature Mismatch, Provisional & Missing Mail Ballots',
  description:
    'Emergency 50-state statutory helper to cure a rejected mail-in ballot signature, verify a Provisional Ballot cast without ID, replace a spoiled or naked ballot, or resolve polling place delays in 2026.',
  keywords: [
    'how to cure my mail ballot 2026',
    'mail in ballot rejected signature mismatch',
    'how to check if my provisional ballot counted',
    'forgot secrecy envelope mail ballot',
    'requested absentee ballot never arrived',
    'poll worker turned me away',
    '866 our vote election protection hotline',
  ],
  alternates: {
    canonical: `${SITE_URL}/ballot-problem-solver`,
  },
};

export default function BallotProblemSolverPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: '2026 Emergency Ballot Cure & Provisional Ballot Problem Solver',
        url: `${SITE_URL}/ballot-problem-solver`,
        applicationCategory: 'CivicApplication',
        operatingSystem: 'All',
        description:
          'Interactive 50-state statutory ballot curing and provisional ballot verification guide for the November 3, 2026 U.S. Midterm Election.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I fix or "cure" a mail-in ballot flagged for a missing signature or signature mismatch?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Over 30 states enforce mandatory Ballot Cure laws requiring the County Board of Elections to notify voters of a missing or mismatched signature and allow 2 to 8 days after Election Day (November 3, 2026) to submit a signed Cure Affidavit with a copy of an accepted ID.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I make sure my Provisional Ballot is counted after Election Day?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the federal Help America Vote Act (52 U.S.C. § 21082), use the tracking number on your provisional receipt to verify status. If you voted provisional in a Strict Photo ID state due to missing ID, present or email your ID to your County Election Office within the 3–7 day statutory cure window.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Ballot Problem Solver & Cure Tracker',
            item: `${SITE_URL}/ballot-problem-solver`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaGraph} />

      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-300 font-bold">Emergency Ballot Problem Solver &amp; Cure Tracker</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>50-State Statutory Ballot Curing &amp; HAVA Provisional Shield</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 Ballot Problem Solver &amp; Post-Election Cure Tracker
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl">
            Immediate legal steps if your mail-in ballot signature was flagged, you cast a Provisional Ballot without ID, your absentee ballot never arrived, or you encountered an issue at the polls.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="Can I fix my ballot after Election Day if my mail signature was rejected or I voted a Provisional Ballot?"
          directAnswer="Yes! Over 30 states provide a post-election 'Ballot Cure Window' (typically 2 to 8 days after Tuesday, November 3, 2026) where voters can submit a 1-page Signature Cure Affidavit or present their Voter ID to the County Board of Elections so their ballot is counted in full."
          supportingText="Never assume your vote is lost if your ballot status shows 'Challenged' or 'Provisional.' Use the interactive resolver below to print a verification cover sheet and contact your county board immediately."
          statuteOrSource="52 U.S. Code § 21082 (HAVA) & State Ballot Cure Statutes"
        />

        <div className="my-8">
          <BallotProblemSolver />
        </div>

        <AdPlacement format="leaderboard" slotId="ballot-solver-mid-ad" />

        <AffiliatePartners context="id-notary" />
        <LeadCapture />
      </div>
    </>
  );
}
