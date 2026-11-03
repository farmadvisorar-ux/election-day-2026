import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '../../lib/siteConfig';
import { CivicAnswerEngine } from '../../components/CivicAnswerEngine';
import { AdPlacement } from '../../components/AdPlacement';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { Sparkles, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ask the 2026 Election AI & Statutory Answer Engine: Instant ZIP, County, ID & Work Leave Answers',
  description:
    'Ask any question about Election Day 2026 in plain English. Instant, zero-hallucination statutory answers for all 50 states, 3,143 counties, 435 House districts, Voter ID laws, paid voting leave, and polling hours.',
  alternates: {
    canonical: `${SITE_URL}/ask`,
  },
  keywords: [
    'election day 2026 ai assistant',
    'ask voting questions 2026',
    'where do i vote by zip code 2026',
    'lost id on election day can i vote',
    'do i get paid time off to vote calculator',
  ],
};

export default function AskCivicEnginePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'ElectionDay2026 Statutory Civic Answer Engine',
    applicationCategory: 'CivicApplication',
    operatingSystem: 'All',
    url: `${SITE_URL}/ask`,
    description:
      'Deterministic natural-language civic answer engine resolving U.S. ZIP codes, cities, 3,143 counties, 435 Congressional Districts, and 50-state election statutes for the November 3, 2026 Midterm Elections.',
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-bold">Ask the 2026 Civic Answer Engine</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-1 bg-amber-400 text-slate-950 text-xs font-black rounded-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Instant Statutory Resolution
            </span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 font-mono text-xs font-bold rounded-md border border-slate-700">
              Zero AI Hallucinations • Cited State &amp; Federal Law
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ask Any Election Day 2026 Question
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl">
            Stop digging through dozens of tabs or risking generic AI hallucinations. Type your city, 5-digit ZIP code, county, work schedule, or ID question below to get an instant answer backed by your state&apos;s exact election statute.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CivicAnswerEngine />

        <AdPlacement format="leaderboard" slotId="ask-engine-top-ad" />

        {/* Emergency Voter Protection Hotline & Pocket Rights Shield */}
        <section className="my-8 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            <PhoneCall className="w-4 h-4" />
            <span>Non-Partisan Election Protection Hotlines &amp; Polling Booth Shield</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black mb-2">
            Need Live Legal Help at the Polls? (Free &amp; Non-Partisan)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            If your registration is challenged, a polling machine is down, or you are told you cannot vote, call the national non-partisan Election Protection coalition hotline staffed by legal volunteers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] font-bold uppercase text-slate-400">English Hotline</div>
              <div className="text-base font-black text-amber-300 font-mono mt-0.5">866-OUR-VOTE</div>
              <div className="text-[11px] text-slate-400">(866-687-8683)</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] font-bold uppercase text-slate-400">Español / Spanish</div>
              <div className="text-base font-black text-emerald-300 font-mono mt-0.5">888-VE-Y-VOTA</div>
              <div className="text-[11px] text-slate-400">(888-839-8682)</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] font-bold uppercase text-slate-400">Asian Languages</div>
              <div className="text-base font-black text-blue-300 font-mono mt-0.5">888-API-VOTE</div>
              <div className="text-[11px] text-slate-400">(888-274-8683)</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[11px] font-bold uppercase text-slate-400">Arabic / العربية</div>
              <div className="text-base font-black text-purple-300 font-mono mt-0.5">844-YALLA-US</div>
              <div className="text-[11px] text-slate-400">(844-925-5287)</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800 text-xs">
            <span className="text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>Federal HAVA Right (52 U.S.C. § 21082):</strong> Never leave a polling place without casting a ballot—always request a Provisional Ballot if challenged.
              </span>
            </span>
            <Link
              href="/my-voting-plan"
              className="text-amber-300 hover:underline font-bold flex items-center gap-1"
            >
              <span>Build Your Personal 2026 Voting Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        <LeadCapture />
      </div>
    </>
  );
}
