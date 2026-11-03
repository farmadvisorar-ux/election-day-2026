import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '../../lib/siteConfig';
import { PersonalVotingPlanner } from '../../components/PersonalVotingPlanner';
import { AdPlacement } from '../../components/AdPlacement';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'My 2026 Personal Election Day Planner & Ballot Checklist: ID Check, Work Leave & Poll Hours',
  description:
    'Build your personalized 2026 Election Day voting plan in 30 seconds. Select your state and county, verify your Voter ID, calculate paid time off work, preview your Congressional ballot, and download your .ics calendar.',
  alternates: {
    canonical: `${SITE_URL}/my-voting-plan`,
  },
  keywords: [
    '2026 voting plan builder',
    'personal ballot checklist 2026',
    'voter id checker 2026',
    'election day 2026 planner',
  ],
};

export default function MyVotingPlanPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '2026 Personal Election Day Voting Planner & Ballot Checklist',
    applicationCategory: 'CivicApplication',
    operatingSystem: 'All',
    url: `${SITE_URL}/my-voting-plan`,
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-bold">My 2026 Personal Voting Planner</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-1 bg-emerald-500 text-slate-950 text-xs font-black rounded-md flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              All-in-One Voter Gameplan
            </span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 font-mono text-xs font-bold rounded-md border border-slate-700">
              County Board + Wallet ID Check + Work Leave + .ics Export
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Build Your 2026 Election Day Gameplan
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl">
            Replace 5 separate websites with one personalized checklist: lock in your county polling hours, verify the ID in your wallet, check your paid work leave rights, and print or save your plan to your calendar.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PersonalVotingPlanner />

        <AdPlacement format="leaderboard" slotId="voting-plan-mid-ad" />

        {/* 4 Polling Booth Legal Rights Every Voter Should Know */}
        <section className="my-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Federal &amp; State Polling Booth Pocket Shield</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
            4 Legal Rights You Have Inside Every Polling Place on November 3, 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">
                1. Right to Vote If In Line by Closing Time
              </strong>
              <p className="text-slate-600">
                In all 50 states and D.C., if you are standing in the polling place line by the official poll-closing minute, election officials must allow you to cast your ballot—even if the line takes hours.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">
                2. Right to Bring a Printed Cheat Sheet into the Booth
              </strong>
              <p className="text-slate-600">
                Even in states that restrict phone use or ballot selfies inside the voting booth, federal and state law allow you to bring a printed paper sample ballot or written notes into the booth.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">
                3. Right to a Replacement (&quot;Spoiled&quot;) Paper Ballot
              </strong>
              <p className="text-slate-600">
                If you accidentally mark the wrong bubble or tear your paper ballot before casting it into the scanner, ask a poll worker for a replacement ballot (up to 2–3 replacements allowed by state law).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block mb-1">
                4. Right to a HAVA Provisional Ballot (52 U.S.C. § 21082)
              </strong>
              <p className="text-slate-600">
                If your name is missing from the precinct poll book or your ID is challenged, never leave empty-handed—request a Provisional Ballot so your vote is preserved while officials verify your record.
              </p>
            </div>
          </div>
        </section>

        <LeadCapture />
      </div>
    </>
  );
}
