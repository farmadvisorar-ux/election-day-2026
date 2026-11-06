import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BallotMeasuresExplorer } from '../../components/BallotMeasuresExplorer';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { SITE_URL } from '../../lib/siteConfig';
import { Scale, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 Ballot Measures, Propositions & Constitutional Amendments Explained (What YES vs. NO Means)',
  description:
    'Plain-English translator for November 3, 2026 statewide ballot propositions, citizen initiatives, and constitutional amendments. See what a YES vote vs. NO vote actually means, state supermajority thresholds (Florida 60%, Colorado 55%, Nevada 2-vote rule), and print your YES/NO booth guide.',
  keywords: [
    '2026 ballot measures by state',
    '2026 ballot propositions explained',
    'what does yes mean on proposition 2026',
    'california propositions 2026',
    'florida constitutional amendments 2026',
    'nevada ballot questions 2026',
    'michigan proposal 1 2026 constitutional convention',
    'ohio ballot issues 2026',
    'colorado ballot measures 2026',
  ],
  alternates: {
    canonical: `${SITE_URL}/ballot-measures-2026`,
  },
};

export default function BallotMeasures2026Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dataset',
        name: '2026 U.S. Statewide Ballot Propositions, Initiatives & Constitutional Amendments Plain-English Guide',
        description:
          'Non-partisan plain-English translation of 2026 statewide ballot measures, constitutional amendments, and state supermajority approval thresholds for the November 3, 2026 General Election.',
        url: `${SITE_URL}/ballot-measures-2026`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why are ballot propositions worded in such a confusing or double-negative way?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'State statutes often require ballot titles to use technical legal terminology, and veto referendums ask whether voters want to uphold or repeal a law passed by the legislature—where voting YES can keep a law and voting NO can repeal it (or vice versa). Our Plain-English Translator breaks down every measure into exact "What a YES Vote Means" vs. "What a NO Vote Means" outcomes.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens if I leave a ballot proposition blank on Election Day 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In 47 states, leaving a ballot measure blank (an "undervote") simply means your vote is not counted toward that specific question, and all your other candidate votes still count 100%. CRITICAL EXCEPTION: In Minnesota and Wyoming, constitutional amendments require a majority of ALL voters casting a ballot in the election—so leaving an amendment blank in Minnesota or Wyoming has the exact same mathematical effect as voting NO.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which states require a 60% or 55% supermajority to pass a constitutional amendment in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'New Hampshire requires 66.67% (two-thirds), Florida requires 60%, Illinois requires 60% of votes on the measure (or 50%+1 of all ballots cast), Colorado requires 55% for constitutional amendments, Arizona requires 60% for any ballot measure that increases taxes, and Nevada requires citizen-initiated constitutional amendments to pass in TWO consecutive general elections (2024 and 2026).',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-slate-950 text-white pt-12 pb-16 px-4 border-b border-slate-800 print:bg-white print:text-slate-950 print:py-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-5 print:hidden">
            <Scale className="w-3.5 h-3.5" />
            <span>Plain-English Propositions Translator • YES vs. NO Decoder</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            2026 Ballot Measures &amp; Propositions:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-300 print:text-slate-900">
              What a &quot;YES&quot; vs. &quot;NO&quot; Vote Actually Means
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed mb-6 print:text-slate-700">
            Ballot propositions and constitutional amendments are often written in dense legal jargon or confusing double-negatives. Use our non-partisan <strong>2026 Propositions Decoder</strong> below to translate official ballot language into plain English, check your state’s supermajority rules, and print your personal <strong>YES/NO Voting Booth Cheat Sheet</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 print:hidden">
            <Link
              href="/sample-ballot-2026"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Open Full 2026 Sample Ballot Builder</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/50-state-comparison-matrix"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors"
            >
              View 50-State Statutory Matrix
            </Link>
          </div>
        </div>
      </section>

      {/* Main Explorer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-12">
        <BallotMeasuresExplorer />
        <div className="print:hidden">
          <AffiliatePartners />
        </div>
      </div>
    </div>
  );
}
