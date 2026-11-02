import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '../../lib/siteConfig';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { NationalDistrictDirectory } from '../../components/NationalDistrictDirectory';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { Vote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All 435 U.S. House Congressional Districts Election Day 2026 Directory & County Crosswalk',
  description:
    'Complete 2026 U.S. House of Representatives midterm directory for all 435 Congressional Districts across all 50 states. Search by district code (PA-01, TX-07, CA-27), city, county, or ZIP code for November 3, 2026 polling hours and registration deadlines.',
  alternates: {
    canonical: `${SITE_URL}/districts`,
  },
  keywords: [
    '2026 house elections by district',
    'all 435 congressional districts 2026',
    'what congressional district am i in 2026',
    'us house midterm races 2026',
    'congressional district county lookup 2026',
  ],
};

export default function DistrictsDirectoryPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All 435 U.S. House Congressional Districts Election Day 2026 Directory',
    description:
      'State-by-state and district-by-district directory of all 435 U.S. House of Representatives seats on the Tuesday, November 3, 2026 midterm ballot, mapped to their underlying counties, cities, and polling hours.',
    url: `${SITE_URL}/districts`,
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/50-state-comparison-matrix" className="hover:text-white">50-State Matrix</Link>
            <span>/</span>
            <span className="text-indigo-400 font-bold">435 U.S. House Districts</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-black rounded-md flex items-center gap-1">
              <Vote className="w-3.5 h-3.5" />
              All 435 House Seats + D.C.
            </span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 font-mono text-xs font-bold rounded-md border border-slate-700">
              120th U.S. Congress (2026 Midterms)
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 U.S. House Elections: All 435 Congressional Districts
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-3xl">
            Every voting seat in the U.S. House of Representatives is on the ballot on <strong>Tuesday, November 3, 2026</strong>. Search by Congressional District (<span className="font-mono">PA-01</span>, <span className="font-mono">TX-07</span>, <span className="font-mono">CA-27</span>), city, county, or ZIP code to inspect your district&apos;s counties, polling hours, and voter registration cutoffs.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="How many U.S. House seats are up for election on November 3, 2026?"
          directAnswer="All 435 voting seats in the United States House of Representatives (plus non-voting delegates including Washington, D.C.) are up for election on Tuesday, November 3, 2026, to form the 120th U.S. Congress."
          supportingText="Each Congressional District is composed of one or more county election jurisdictions that administer physical polling places, early voting centers, and absentee ballot drop-boxes."
          statuteOrSource="U.S. Constitution Art. I, § 2 & U.S. Census Bureau 119th/120th Congress Relationship File"
          sourceUrl="https://www.census.gov/geographies/reference-files/time-series/geo/relationship-files.html"
        />

        <AdPlacement format="leaderboard" slotId="districts-directory-top-ad" />

        <NationalDistrictDirectory />

        <AdPlacement format="in-article" slotId="districts-directory-bottom-ad" />

        <LeadCapture />
      </div>
    </>
  );
}
