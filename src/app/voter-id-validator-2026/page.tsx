import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { VoterIdValidator } from '../../components/VoterIdValidator';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { SITE_URL } from '../../lib/siteConfig';
import { ShieldCheck, ArrowRight, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Will My ID Work to Vote in 2026? 50-State Statutory Document & Expiration Checker',
  description:
    'Instant non-partisan voter ID validator for the November 3, 2026 Midterm Election. Check if your expired driver’s license, college student ID, out-of-state ID, digital wallet ID, or utility bill is legally accepted at your polling place in all 50 states.',
  keywords: [
    'will my id work to vote 2026',
    'can i vote with an expired drivers license',
    'does college student id work to vote',
    'can i use digital id on phone to vote',
    'what id do i need to vote in my state',
    'can i vote with out of state id',
    'voter id requirements by state 2026',
    'strict photo id states 2026',
  ],
  alternates: {
    canonical: `${SITE_URL}/voter-id-validator-2026`,
  },
};

export default function VoterIdValidatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentService',
        name: '50-State Voter Identification Statutory Validator & Expiration Checker',
        serviceType: 'Civic Voter ID Verification Tool',
        provider: {
          '@type': 'CivicStructure',
          name: 'ElectionDay2026.org Civic Educational Initiative',
          url: SITE_URL,
        },
        description:
          'Interactive legal document validator determining whether specific photo and non-photo IDs (including expired licenses, student IDs, and digital wallets) are accepted at polling places for the November 3, 2026 Midterm Elections.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I vote with an expired driver’s license on Election Day 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends entirely on your state. In Texas, voters under 70 can use a license expired up to 4 years (and indefinitely if 70+). In North Carolina, an ID can be expired up to 1 year. In Wisconsin, it must have expired after November 5, 2024. In Ohio, however, photo IDs must be strictly UNEXPIRED with zero grace period. In California, New York, Pennsylvania, and Illinois, regular voters do not need to show ID at all.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can college students use a university student photo ID to vote in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Some states accept student IDs while others ban them. Ohio completely bans student IDs under HB 458. Texas does not recognize student IDs as a primary photo ID. Wisconsin accepts student IDs only if they include a photo, signature, issuance date, 2-year expiration, and separate proof of current enrollment. Georgia and Florida accept student IDs from approved institutions.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I show a digital driver’s license on my phone (Apple Wallet) to vote?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In the vast majority of states (including Texas, Florida, and Georgia), digital driver’s licenses on smartphones are NOT accepted for in-person voting check-in—poll workers require a physical plastic or paper card. Arizona accepts mobile driver’s licenses (mDL) at select equipped Vote Centers in Maricopa and Pima counties.',
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
            <ShieldCheck className="w-4 h-4" />
            <span>Zero-Anxiety Voter ID Checker • 50-State Statutory Rules</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Will Your ID Work at the Polls?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300">
              50-State Voter ID Document Validator
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed mb-6">
            Showing up at the polling place with the wrong ID is one of the leading causes of voting friction in America. Test your driver’s license expiration, student ID, military card, or digital wallet below to get an instant statutory verdict and know your rights before Tuesday, November 3, 2026.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/50-state-comparison-matrix"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <span>View Full 50-State ID Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/ballot-problem-solver"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors"
            >
              Emergency Ballot Problem Solver &amp; Cure
            </Link>
          </div>
        </div>
      </section>

      {/* Main Validator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-12">
        <VoterIdValidator />
        <AffiliatePartners />
      </div>
    </div>
  );
}
