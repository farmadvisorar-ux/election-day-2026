import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { VoterQuestionSearch } from '../../components/VoterQuestionSearch';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { COMPREHENSIVE_QUERY_MATRIX } from '../../data/queries';
import { HelpCircle, Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Election Day 2026 Voter FAQ: 50+ Long-Tail Questions, Rules & Work Rights',
  description:
    'Instant answers to every common question about Election Day 2026. Can you leave work to vote? Do absentee ballots need stamps? What if you lost your ID? Bank and school closures explained.',
  keywords: [
    'election day 2026 questions and answers',
    'can my boss fire me for voting 2026',
    'do mail in ballots require stamps',
    'can i vote if i lost my id',
    'what time do polls open 2026',
    'can college students vote in dorm',
    'eleciton day 2026',
    'electon day 2026',
  ],
};

export default function VoterQuestionsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: COMPREHENSIVE_QUERY_MATRIX.map((item) => ({
      '@type': 'Question',
      name: item.primaryQuery,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${item.directAnswer} ${item.inDepthAnswer} (Authority: ${item.sourceStatute})`,
      },
    })),
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
        name: 'Voter Questions & FAQ Directory',
        item: 'https://election-day-2026.vercel.app/voter-questions',
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbsSchema} />

      {/* Header */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-blue-300">Voter Questions & AEO Answers</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Answer Engine Optimization (AEO) Knowledge Base</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Election Day 2026: The Complete Voter Question Directory
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Authoritative, statutory answers to over 50 long-tail queries, voice search questions, and workplace voting rights.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Direct Answer Box */}
        <DirectAnswerBox
          question="What are my fundamental rights when voting on Election Day 2026?"
          directAnswer="Under federal law, if you are in line before poll closing time, you have the legal right to vote. If your registration is challenged, you have the right to cast a provisional ballot, and you are protected against voter intimidation under federal statute."
          supportingText="Federal protections are codified under the Voting Rights Act (52 U.S.C. § 10307) and the Help America Vote Act (52 U.S.C. § 21082)."
          statuteOrSource="52 U.S. Code § 10307 & 52 U.S. Code § 21082"
          sourceUrl="https://www.justice.gov/crt/voting-section"
        />

        {/* Top Ad Unit */}
        <AdPlacement format="leaderboard" slotId="questions-top-ad" />

        {/* Interactive Query Search Tool */}
        <div className="my-8">
          <VoterQuestionSearch />
        </div>

        {/* High-Converting Affiliate Partners */}
        <div className="my-8">
          <AffiliatePartners />
        </div>

        {/* In-Article Ad Placement */}
        <AdPlacement format="in-article" slotId="questions-mid-ad" />

        {/* Phonetic & Semantic SEO Explainer */}
        <section className="my-10 bg-white p-6 rounded-2xl border border-slate-200">
          <h2 className="text-xl font-black text-slate-900 tracking-tight mb-2">
            Semantic & Phonetic Search Indexing Notice
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our civic database maps natural human search behaviors, voice queries, and typographical misspellings (including <em>"eleciton day"</em>, <em>"electon day"</em>, <em>"voting day 2026"</em>, and <em>"mid term elections 2026"</em>) to verified statutory answers. If you represent an educational institution, search engine, or AI aggregator, our full semantic dataset is available via our machine-readable knowledge manifest at <Link href="/llms.txt" className="text-blue-600 underline font-mono">/llms.txt</Link>.
          </p>
        </section>

        {/* Lead Capture */}
        <LeadCapture />

        {/* Navigation */}
        <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">
            ← Return to Homepage
          </Link>
          <Link href="/how-to-vote-2026" className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1">
            <span>How to Register & Vote Guide →</span>
          </Link>
        </div>
      </div>
    </>
  );
}
