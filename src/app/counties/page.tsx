import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { NationalCountyDirectory } from '../../components/NationalCountyDirectory';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { MapPin, Building2, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All 3,143 U.S. Counties Election Day 2026 Directory: Polling Places, Early Voting & Local Boards',
  description:
    'Complete county-by-county Election Day 2026 directory covering all 3,143 U.S. counties, parishes, boroughs, and independent cities across all 50 states and D.C. Find local Board of Elections portals, FIPS codes, early voting sites, and November 3, 2026 polling hours.',
  alternates: {
    canonical: 'https://election-day-2026.vercel.app/counties',
  },
  keywords: [
    'election day 2026 by county',
    'county board of elections 2026',
    'county polling places 2026',
    'county early voting locations 2026',
    'county sample ballot 2026',
    'county voter registration deadline 2026',
    'all 3143 us counties election guide',
  ],
};

export default function CountiesDirectoryPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'All 3,143 U.S. Counties Election Day 2026 Voting Directory',
        description:
          'State-by-state and county-by-county index of all 3,143 U.S. local election jurisdictions, FIPS codes, polling hours, and voter registration deadlines for the Tuesday, November 3, 2026 General Midterm Election.',
        url: 'https://election-day-2026.vercel.app/counties',
      },
      {
        '@type': 'Dataset',
        name: '2026 U.S. Midterm Election 3,143-County FIPS & Jurisdiction Dataset',
        description:
          'Comprehensive dataset mapping all 3,143 U.S. counties, parishes, boroughs, census areas, and independent cities to their 2026 state statutory voting deadlines, polling hours, Voter ID classifications, and local election authorities.',
        url: 'https://election-day-2026.vercel.app/counties',
        license: 'https://creativecommons.org/publicdomain/zero/1.0/',
        creator: {
          '@type': 'Organization',
          name: 'ElectionGuide2026.org Non-Partisan Civic Research Desk',
        },
      },
    ],
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
            <span className="text-blue-400 font-bold">3,143 U.S. Counties Directory</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-black rounded-md flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              3,143 County Jurisdictions
            </span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 font-mono text-xs font-bold rounded-md border border-slate-700">
              All 50 States + D.C. Indexed by FIPS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Election Day 2026 County-by-County Directory
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-3xl">
            Every U.S. ballot is administered locally. Browse or search all <strong>3,143 counties, parishes, boroughs, census areas, and independent cities</strong> across all 50 states and Washington, D.C. for localized November 3, 2026 polling hours, early voting centers, and local Board of Elections portals.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="How are Election Day 2026 polling places and early voting sites organized by county?"
          directAnswer="In the United States, while voter registration cutoffs and Voter ID laws are established by state statute, physical polling places, early voting centers, ballot drop-boxes, and sample ballots are administered across 3,143 county and municipal election jurisdictions."
          supportingText="Select your state and county below to inspect your local election authority (County Clerk, Board of Elections, Supervisor of Elections, or Registrar of Voters), 5-digit Federal FIPS code, and November 3, 2026 voting schedule."
          statuteOrSource="U.S. Census Bureau FIPS Codebook & 50-State Secretary of State Directories"
          sourceUrl="https://www.eac.gov/voters/register-and-vote-in-your-state"
        />

        <AdPlacement format="leaderboard" slotId="counties-directory-top-ad" />

        <NationalCountyDirectory />

        <AdPlacement format="in-article" slotId="counties-directory-bottom-ad" />

        <LeadCapture />
      </div>
    </>
  );
}
