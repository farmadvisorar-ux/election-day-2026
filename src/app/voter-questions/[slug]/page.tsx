import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COMPREHENSIVE_QUERY_MATRIX } from '../../../data/queries';
import { STATES_DATA } from '../../../data/states';
import { DirectAnswerBox } from '../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../components/AdPlacement';
import { AffiliatePartners } from '../../../components/AffiliatePartners';
import { LeadCapture } from '../../../components/LeadCapture';
import { JsonLd } from '../../../components/JsonLd';
import { SITE_URL } from '../../../lib/siteConfig';
import {
  Sparkles,
  ShieldCheck,
  Tag,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Search,
  AlertCircle,
  Scale,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPREHENSIVE_QUERY_MATRIX.map((cluster) => ({
    slug: cluster.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cluster = COMPREHENSIVE_QUERY_MATRIX.find((c) => c.id === slug);

  if (!cluster) {
    return { title: 'Voter Question Not Found' };
  }

  const topShorthand = cluster.variations.slice(0, 2).join(' • ');
  const pageUrl = `${SITE_URL}/voter-questions/${cluster.id}`;

  return {
    title: `${cluster.primaryQuery} (2026 Statutory Answer & Rules)`,
    description: `${cluster.directAnswer} Matches common voter searches: "${topShorthand}". Cited authority: ${cluster.sourceStatute}.`,
    keywords: [
      cluster.primaryQuery,
      ...cluster.variations,
      ...cluster.misspellings,
      'election day 2026',
      'november 3 2026 voting rules',
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: cluster.primaryQuery,
      description: cluster.directAnswer,
      url: pageUrl,
      type: 'article',
    },
  };
}

export default async function VoterQuestionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cluster = COMPREHENSIVE_QUERY_MATRIX.find((c) => c.id === slug);

  if (!cluster) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/voter-questions/${cluster.id}`;

  // Related questions in the same category or adjacent
  const relatedClusters = COMPREHENSIVE_QUERY_MATRIX.filter(
    (c) => c.id !== cluster.id && (c.category === cluster.category || c.category === 'logistics')
  ).slice(0, 8);

  // Build multi-variant FAQPage JSON-LD so Google & AI Answer Engines match BOTH
  // grammatical AND ungrammatical/shorthand/voice variations of this question!
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: cluster.primaryQuery,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${cluster.directAnswer} ${cluster.inDepthAnswer} (Statutory Citation: ${cluster.sourceStatute})`,
            },
          },
          ...cluster.variations.slice(0, 8).map((variation) => ({
            '@type': 'Question',
            name: variation,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${cluster.directAnswer} (Legal Authority: ${cluster.sourceStatute})`,
            },
          })),
        ],
      },
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: cluster.primaryQuery,
        description: cluster.directAnswer,
        keywords: [...cluster.variations, ...cluster.misspellings].join(', '),
        dateModified: '2026-04-04',
        author: {
          '@type': 'Organization',
          name: 'Election Day 2026 Statutory Research Desk',
          url: SITE_URL,
        },
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
            name: 'Voter Questions & AEO Directory',
            item: `${SITE_URL}/voter-questions`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: cluster.primaryQuery,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaGraph} />

      {/* Header */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-4 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/voter-questions" className="hover:text-white">
              Voter Questions Directory
            </Link>
            <span>/</span>
            <span className="text-blue-400 font-semibold">{cluster.id}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Statutory Answer • Nov 3, 2026
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase">
              Category: {cluster.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            {cluster.primaryQuery}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Also answers common voter searches:{' '}
            <span className="text-white font-semibold italic">
              &ldquo;{cluster.variations.slice(0, 3).join('”, “')}&rdquo;
            </span>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Direct Statutory Answer Box */}
        <DirectAnswerBox
          question={cluster.primaryQuery}
          directAnswer={cluster.directAnswer}
          supportingText={cluster.inDepthAnswer}
          statuteOrSource={cluster.sourceStatute}
          sourceUrl={cluster.sourceUrl}
        />

        {/* In-depth statutory explanation */}
        <section className="my-8 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <Scale className="w-4 h-4" />
            <span>Complete Legal & Practical Breakdown for 2026</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
            How This Rule Works on Election Day (Tuesday, November 3, 2026)
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
            {cluster.inDepthAnswer}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Primary Statutory Citation:</span>
              <a
                href={cluster.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-700 hover:underline"
              >
                {cluster.sourceStatute}
              </a>
            </div>
            <Link
              href="/my-voting-plan"
              className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900"
            >
              <span>Build Your Personal 2026 Voting Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Ad Placement */}
        <AdPlacement format="leaderboard" slotId="question-detail-top-ad" />

        {/* ALL WAYS PEOPLE ASK THIS QUESTION (Ungrammatical, Shorthand, Voice Search & Misspellings) */}
        <section className="my-8 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Search className="w-4 h-4" />
            <span>Long-Tail Shorthand, Voice Search & Phonetic Indexing</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
            All Ways People Ask This Question (Including Shorthand & Typos)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-5">
            Real voters rarely type formal legal terminology when hurrying to the polls. Whether you searched using quick keyword shorthand, spoken voice search, or a mobile keyboard typo, every phrase below resolves to the verified statutory rule on this page:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Conversational & Ungrammatical Shorthand Queries */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-3 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                <span>Conversational, Voice & Shorthand Searches ({cluster.variations.length})</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {cluster.variations.map((v, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      &ldquo;<strong>{v}</strong>&rdquo; —{' '}
                      <span className="text-slate-400">
                        {cluster.directAnswer.split('.')[0]}.
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Misspellings & Phonetic Variants */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Common Mobile Typos & Phonetic Spellings Matched ({cluster.misspellings.length})</span>
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cluster.misspellings.map((m, idx) => (
                    <code
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-400/30 text-amber-200 text-xs font-mono"
                    >
                      &ldquo;{m}&rdquo;
                    </code>
                  ))}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our semantic resolver indexes phonetic transpositions (such as <em>eleciton</em>, <em>electon</em>, <em>voteing</em>, <em>absentie</em>, <em>provisonal</em>, <em>regester</em>, and <em>balot</em>) so voters never hit a dead end due to spelling.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Have another specific question?</span>
                <Link
                  href="/ask"
                  className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <span>Open Instant Civic Answer Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 50-State Statutory Lookup Grid for This Question */}
        <section className="my-8 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <MapPin className="w-4 h-4" />
            <span>50-State + D.C. Statutory Rule Matrix</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
            Check How This Rule Applies in Your State (2026)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Select your state below to view exact November 3, 2026 polling hours, Voter ID laws, registration deadlines, paid work-leave statutes, and county-by-county polling locations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {Object.values(STATES_DATA)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((st) => {
              let badgeText = st.pollingHours;
              if (cluster.category === 'identification') {
                badgeText = st.voterId.type.replace(' (Signature Verification)', '');
              } else if (cluster.category === 'deadlines') {
                badgeText = st.registrationDeadline.sameDayRegistration
                  ? 'Same-Day Reg Allowed'
                  : `Cutoff: ${st.registrationDeadline.online}`;
              } else if (cluster.category === 'work-rights') {
                badgeText = st.workLeaveLaw.mandated
                  ? st.workLeaveLaw.paid
                    ? `Paid Leave (${st.workLeaveLaw.hoursAllowed})`
                    : 'Unpaid Leave Prot.'
                  : 'No State Leave Mandate';
              }

              return (
                <Link
                  key={st.slug}
                  href={`/states/${st.slug}`}
                  className="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-sm text-slate-900 group-hover:text-blue-700">
                      {st.name} ({st.postalCode})
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                  </div>
                  <span className="mt-1 text-[11px] font-medium text-slate-500 truncate">
                    {badgeText}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Related Questions */}
        <section className="my-8 bg-slate-50 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span>Related 2026 Voter Questions & Scenarios</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedClusters.map((rel) => (
              <Link
                key={rel.id}
                href={`/voter-questions/${rel.id}`}
                className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition flex flex-col justify-between group"
              >
                <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 leading-snug">
                  {rel.primaryQuery}
                </span>
                <span className="mt-2 text-[11px] text-slate-500 font-medium">
                  Matches: &ldquo;{rel.variations[0]}&rdquo; →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AffiliatePartners />
        <LeadCapture />
      </div>
    </>
  );
}
