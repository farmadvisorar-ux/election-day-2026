import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CountdownTimer } from '../../components/CountdownTimer';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { Clock, Calendar, Code2, Globe, Shield, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Election Day 2026 Countdown: Days, Hours & Seconds Until the Midterms',
  description:
    'Live real-time countdown to Election Day 2026 (Tuesday, November 3, 2026). Check exactly how many days, hours, and minutes remain until polls open across the United States.',
  keywords: [
    'election day 2026 countdown',
    'how many days until election day 2026',
    'days until 2026 midterms',
    'midterm election countdown clock',
    'embed election countdown timer',
  ],
};

export default function CountdownPage() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Election Day 2026 Countdown to Polls Opening',
    startDate: '2026-11-03T07:00:00-05:00',
    endDate: '2026-11-03T20:00:00-05:00',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'United States of America',
    },
    description:
      'Official statutory countdown to the 2026 United States Midterm General Elections.',
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://electionguide2026.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '2026 Countdown',
        item: 'https://electionguide2026.org/countdown',
      },
    ],
  };

  return (
    <>
      <JsonLd data={eventSchema} />
      <JsonLd data={breadcrumbsSchema} />

      {/* Header */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-blue-300">Live Countdown</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Election Day 2026 Countdown Timer
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Real-time atomic clock countdown tracking every day, hour, minute, and second until polls open on Tuesday, November 3, 2026.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Direct Answer Box for AI Answer Engines */}
        <DirectAnswerBox
          question="How many days until Election Day 2026?"
          directAnswer="Election Day takes place on Tuesday, November 3, 2026. Polls open on the East Coast at 7:00 AM EST."
          supportingText="Depending on your home state, early in-person voting and mail-in absentee voting begin weeks earlier, starting in late September and mid-October 2026."
          statuteOrSource="2 U.S. Code § 7"
          sourceUrl="https://www.law.cornell.edu/uscode/text/2/7"
        />

        {/* Live Countdown Main Widget */}
        <div className="my-8">
          <CountdownTimer />
        </div>

        {/* Top Ad Unit */}
        <AdPlacement format="leaderboard" slotId="countdown-top-ad" />

        {/* Polling Opening Times by Timezone */}
        <section className="my-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Poll Opening Times by Time Zone</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
            When Do Polls Open on November 3, 2026?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm">Eastern Time (EST)</span>
              <span className="text-blue-700 font-extrabold text-lg block mt-1">6:00 AM – 7:00 AM</span>
              <span className="text-slate-500 mt-1 block">PA, GA, NC, OH, FL, MI, NY</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm">Central Time (CST)</span>
              <span className="text-blue-700 font-extrabold text-lg block mt-1">7:00 AM</span>
              <span className="text-slate-500 mt-1 block">TX, WI, IL, MN, MO, TN</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm">Mountain Time (MST)</span>
              <span className="text-blue-700 font-extrabold text-lg block mt-1">6:00 AM – 7:00 AM</span>
              <span className="text-slate-500 mt-1 block">AZ (No DST), CO, UT, NM, MT</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm">Pacific Time (PST)</span>
              <span className="text-blue-700 font-extrabold text-lg block mt-1">7:00 AM</span>
              <span className="text-slate-500 mt-1 block">CA, WA, OR, NV</span>
            </div>
          </div>
        </section>

        {/* Free Embeddable Widget Section (Backlink Engine) */}
        <section className="my-10 bg-gradient-to-br from-slate-900 to-indigo-950 p-6 md:p-8 rounded-2xl text-white shadow-lg">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
            <Code2 className="w-4 h-4 text-amber-400" />
            <span>Free Backlink Engine / Embed Tool</span>
          </div>

          <h2 className="text-2xl font-black text-white tracking-tight">
            Embed This Countdown on Your Website or Blog
          </h2>
          <p className="text-sm text-slate-300 mt-2 mb-4 leading-relaxed">
            Civic organizations, university student newspapers, local news blogs, and political educators can embed our responsive live ticking clock widget for free.
          </p>

          <div className="bg-slate-950 p-4 rounded-xl border border-white/10 font-mono text-xs text-blue-200 overflow-x-auto">
            {`<iframe src="https://electionguide2026.org/embed/countdown" width="100%" height="220" frameborder="0" title="Election Day 2026 Countdown" style="border-radius:12px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>`}
          </div>

          <p className="text-xs text-slate-400 mt-3">
            Responsive on all mobile screens and updates in real time using local client hardware clocks.
          </p>
        </section>

        {/* In-Article Ad */}
        <AdPlacement format="in-article" slotId="countdown-mid-ad" />

        {/* Lead Magnet */}
        <LeadCapture />

        {/* Links */}
        <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">
            ← Back to Homepage
          </Link>
          <Link href="/states/pennsylvania" className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1">
            <span>Explore State Voting Guides →</span>
          </Link>
        </div>
      </div>
    </>
  );
}
