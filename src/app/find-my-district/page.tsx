import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ZipToDistrictResolver } from '../../components/ZipToDistrictResolver';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { SITE_URL } from '../../lib/siteConfig';
import { MapPin, ArrowRight, Vote, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find My Congressional District by ZIP Code (2026 Midterm Election Guide)',
  description:
    'Instant 5-digit ZIP code to Congressional District lookup for the November 3, 2026 Midterm Elections. Discover your U.S. House representative, administering County Board of Elections, U.S. Senate candidates, and polling place hours across all 435 districts.',
  keywords: [
    'find my congressional district by zip code',
    'who is my representative 2026',
    'what district am i in 2026',
    'look up my district by zip code',
    'what congressional district is my zip code',
    'find my county board of elections by zip code',
    '2026 midterms who is on my ballot',
  ],
  alternates: {
    canonical: `${SITE_URL}/find-my-district`,
  },
};

export default function FindMyDistrictPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentService',
        name: '5-Digit ZIP Code to U.S. Congressional District & County Election Resolver',
        serviceType: 'Civic Representative Lookup Tool',
        provider: {
          '@type': 'CivicStructure',
          name: 'ElectionDay2026.org Civic Educational Initiative',
          url: SITE_URL,
        },
        description:
          'Interactive non-partisan lookup resolving 5-digit U.S. postal ZIP codes to their corresponding Congressional Districts (among the 435 U.S. House seats), administering County Election Boards, and 2026 Senate/Governor race statuses.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can a single ZIP code belong to more than one Congressional District?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! U.S. postal ZIP codes are designed for mail delivery logistics and do not conform to congressional or municipal boundaries. In densely populated urban and suburban areas, a single ZIP code can cross multiple U.S. House districts or even county lines. Our resolver highlights all potential districts and directs you to your exact county precinct pollbook.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are all 435 Congressional Districts up for election on Tuesday, November 3, 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Under Article I, Section 2 of the U.S. Constitution, all 435 voting members of the United States House of Representatives serve two-year terms and face general election simultaneously every even-numbered year, including the November 3, 2026 midterms.',
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
            <MapPin className="w-4 h-4" />
            <span>Instant 5-Digit ZIP Code Resolver • All 435 U.S. House Districts</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Find My Congressional District:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300">
              Who Represents You in 2026?
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed mb-6">
            Enter your 5-digit ZIP code below to instantly resolve your <strong>U.S. House District</strong>, your administering <strong>County Board of Elections</strong>, sitting <strong>U.S. Senators</strong> (and whether their seat is on the 2026 ballot), and official polling hours for Tuesday, November 3, 2026.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/districts"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All 435 Districts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/counties"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors"
            >
              Browse 3,143 Counties Directory
            </Link>
          </div>
        </div>
      </section>

      {/* Main Resolver */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-12">
        <ZipToDistrictResolver />
        <AffiliatePartners />
      </div>
    </div>
  );
}
