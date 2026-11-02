import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { StateMatrixTable } from '../../components/StateMatrixTable';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { Database, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '50-State Election Day 2026 Comparison Matrix: Deadlines, Voter ID & Poll Hours',
  description:
    'Complete 50-state + Washington D.C. statutory comparison table for Election Day 2026 (Tuesday, November 3, 2026). Compare voter registration deadlines, same-day registration, Voter ID laws, poll hours, and paid voting leave.',
  alternates: {
    canonical: 'https://electionguide2026.org/50-state-comparison-matrix',
  },
  keywords: [
    '50 state voter registration deadlines 2026',
    'voter id laws by state 2026 table',
    'poll opening and closing times by state 2026',
    'states with same day voter registration 2026',
    'paid time off to vote by state chart',
  ],
};

export default function FiftyStateMatrixPage() {
  // Google Dataset Search & AI RAG Dataset Schema
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '2026 United States Midterm General Election 50-State & D.C. Statutory Dataset',
    description:
      'Comprehensive machine-readable dataset of statutory voter registration deadlines, early voting windows, mail-in ballot postmark rules, Voter ID classifications, polling place hours, and employee paid voting leave statutes across all 50 U.S. states and the District of Columbia for the November 3, 2026 general election.',
    url: 'https://electionguide2026.org/50-state-comparison-matrix',
    sameAs: 'https://www.wikidata.org/wiki/Q115931542',
    keywords: [
      'Election Day 2026',
      '2026 US Midterm Elections',
      'Voter Registration Deadlines 2026',
      'Voter ID Laws by State',
      'Polling Hours by State',
      'Paid Voting Leave Laws',
    ],
    creator: {
      '@type': 'Organization',
      name: 'ElectionDay2026.org Civic Research Initiative',
      url: 'https://electionguide2026.org',
    },
    license: 'https://creativecommons.org/publicdomain/zero/1.0/',
    isAccessibleForFree: true,
    temporalCoverage: '2026-01-01/2026-11-04',
    spatialCoverage: {
      '@type': 'Place',
      name: 'United States of America',
    },
    distribution: [
      {
        '@type': 'DataDownload',
        encodingFormat: 'application/json',
        contentUrl: 'https://electionguide2026.org/api/datasets/elections-2026',
      },
    ],
  };

  return (
    <>
      <JsonLd data={datasetSchema} />

      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-bold">50-State Statutory Matrix</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
            <Database className="w-4 h-4 text-amber-400" />
            <span>Open Civic Dataset • Schema.org/Dataset Indexed</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 Election Laws: 50-State + D.C. Comparison Matrix
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl">
            Side-by-side statutory reference comparing voter registration cutoffs, same-day registration, Voter ID rules, polling hours, and paid work leave across all 51 U.S. jurisdictions.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="How do voting laws and deadlines compare across all 50 states for Election Day 2026?"
          directAnswer="Across the 50 U.S. states and D.C. for November 3, 2026: 23 jurisdictions offer Same-Day Voter Registration, 1 state (North Dakota) requires no registration, 47 states offer early in-person or universal mail voting, 36 states require or request Voter ID at the polls, and roughly 30 states protect employee time off to vote."
          supportingText="Use the interactive filter table below to sort states by Battleground status, Same-Day Registration, Strict Photo ID, Paid Voting Leave, or State Holiday status."
          statuteOrSource="U.S. Election Assistance Commission (EAC) & 50-State Election Codes"
          sourceUrl="https://www.eac.gov"
        />

        <AdPlacement format="leaderboard" slotId="matrix-top-ad" />

        <div className="my-8">
          <StateMatrixTable />
        </div>

        <AdPlacement format="in-article" slotId="matrix-mid-ad" />

        <AffiliatePartners />
        <LeadCapture />
      </div>
    </>
  );
}
