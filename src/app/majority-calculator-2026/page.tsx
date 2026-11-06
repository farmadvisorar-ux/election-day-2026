import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MajoritySimulator2026 } from '../../components/MajoritySimulator2026';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { SITE_URL } from '../../lib/siteConfig';
import { Sparkles, Scale, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 Senate, House & Governor Majority Simulator: Interactive Seat Calculator',
  description:
    'Interactive 2026 U.S. Midterm Election Majority Calculator. Flip the 12 battleground Senate seats (GA, NC, MI, ME, OH, NH, MN, TX, FL, IA), adjust the 435-seat U.S. House slider, and simulate the 36 Governor elections.',
  keywords: [
    '2026 senate majority calculator',
    '2026 midterm election simulator',
    'how many seats to flip the senate in 2026',
    'how many seats to flip the house in 2026',
    '2026 congress balance of power map',
    'interactive 2026 election forecast',
  ],
  alternates: {
    canonical: `${SITE_URL}/majority-calculator-2026`,
  },
};

export default function MajorityCalculator2026Page() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: '2026 U.S. Senate, House & Governor Majority Simulator',
        url: `${SITE_URL}/majority-calculator-2026`,
        applicationCategory: 'CivicApplication',
        operatingSystem: 'All',
        description:
          'Interactive seat calculator for the Tuesday, November 3, 2026 U.S. Midterm Elections across the 100-seat U.S. Senate, 435-seat U.S. House, and 36 Governor contests.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How many seats do Democrats or Republicans need to control the U.S. Senate in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Because Republicans enter the November 3, 2026 election holding a 53–47 Senate majority and Vice President JD Vance casts the tie-breaking vote in a 50–50 Senate (U.S. Constitution Art. I, § 3, cl. 4), Republicans need 50 seats to retain majority control, while Democrats need a net gain of +4 seats (reaching 51 seats) for an outright Senate majority.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many seats are needed for a majority in the U.S. House of Representatives in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'All 435 voting seats in the U.S. House of Representatives are on the ballot on Tuesday, November 3, 2026, requiring 218 seats for a House majority.',
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
            name: '2026 Senate & House Majority Simulator',
            item: `${SITE_URL}/majority-calculator-2026`,
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
            <span className="text-indigo-300 font-bold">2026 Majority Simulator</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 120th U.S. Congress &amp; Governors Seat Calculator</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 U.S. Senate, House &amp; Governor Majority Simulator
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl">
            Click battleground states to simulate how the Tuesday, November 3, 2026 Midterm Elections will decide control of the U.S. Senate (51 needed), U.S. House (218 needed), and 50 State Governorships.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="What is the exact path to a U.S. Senate and U.S. House majority on Election Day 2026?"
          directAnswer="In the U.S. House (all 435 seats up), 218 seats are required for a majority—a net swing of just 3 seats from the 220 R – 215 D baseline. In the U.S. Senate (35 seats up), Republicans hold a 53–47 majority and need 50 seats (with the Vice President’s tie-breaker), meaning Democrats must defend GA, MI, NH, and MN while flipping 4 GOP seats (such as NC, ME, OH, and IA/TX) to reach 51."
          supportingText="Use the interactive calculator below to toggle each battleground state and share your custom 2026 Midterm forecast."
          statuteOrSource="U.S. Constitution Art. I, §§ 2–3 (120th Congress Apportionment)"
        />

        <div className="my-8">
          <MajoritySimulator2026 />
        </div>

        <AdPlacement format="leaderboard" slotId="majority-calc-mid-ad" />

        <AffiliatePartners />
        <LeadCapture />
      </div>
    </>
  );
}
