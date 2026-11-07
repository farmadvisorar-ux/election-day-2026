import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CivicWidgetStudio } from '../../components/CivicWidgetStudio';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { SITE_URL } from '../../lib/siteConfig';
import { Code2, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Embeddable 2026 Election Widgets: Free Live Countdown, State Poll Hours & Wave Tracker',
  description:
    'Free responsive embeddable civic widgets for newsrooms, campus student newspapers, civic blogs, and Substack newsletters. Copy-paste iframe code for the 2026 Midterm Countdown Clock, 50-State Polling Hours & Voter ID Badges, and Election Night Poll-Closing Tracker.',
  keywords: [
    'election day 2026 countdown widget',
    'embeddable election clock',
    'free election widgets for news websites',
    'voting countdown iframe',
    'poll closing time widget',
    'state voter id embeddable card',
    'civic widgets for campus newspapers',
  ],
  alternates: {
    canonical: `${SITE_URL}/widgets`,
  },
};

export default function WidgetsStudioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Election Day 2026 Embeddable Civic Widget Studio',
        applicationCategory: 'GovernmentApplication',
        operatingSystem: 'All',
        url: `${SITE_URL}/widgets`,
        description:
          'Free non-partisan embeddable HTML iframe widgets providing live countdown timers, state polling hours, and election night wave trackers for media publishers and civic websites.',
        creator: {
          '@type': 'CivicStructure',
          name: 'ElectionDay2026.org Civic Educational Initiative',
          url: SITE_URL,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are these 2026 election widgets completely free to embed on my website or blog?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! All ElectionDay2026.org embeddable widgets are 100% free for newsrooms, student newspapers, civic organizations, labor unions, and personal blogs. There are zero licensing fees or subscription costs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do your embeddable widgets contain advertising or third-party trackers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Our embeddable widget iframes contain zero third-party advertising trackers, cookies, or monetization scripts, ensuring clean privacy compliance and fast sub-second load times on your website.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are the widgets responsive for mobile and desktop screens?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Every widget is built with responsive fluid layouts that automatically adjust from 320px mobile smartphone screens up to full-width desktop monitors.',
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

      {/* Hero Header */}
      <section className="bg-slate-950 text-white pt-12 pb-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-extrabold uppercase tracking-wider mb-5">
            <Code2 className="w-4 h-4" />
            <span>Free Embeddable Civic Tools for Media &amp; Campus Publishers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Embed 2026 Midterm Widgets on Your Site:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300">
              Live Countdown, Poll Hours &amp; Wave Trackers
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed mb-6">
            Empower your readers with verified statutory election deadlines. Copy and paste responsive, ad-free iframe snippets for the <strong>Live 2026 Midterm Countdown Clock</strong>, <strong>State Polling Hours &amp; Voter ID Badges</strong>, and our <strong>Election Night Poll-Closing Wave Tracker</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/advertise"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Civic Sponsorship &amp; Media Kit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/editorial-policy"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 font-bold text-xs transition-colors"
            >
              Non-Partisan Standards
            </Link>
          </div>
        </div>
      </section>

      {/* Main Studio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-12">
        <CivicWidgetStudio />
        <AffiliatePartners />
      </div>
    </div>
  );
}
