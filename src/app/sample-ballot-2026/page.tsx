import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SampleBallotBuilder } from '../../components/SampleBallotBuilder';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { ALL_STATES_LIST } from '../../data/states';
import { SITE_URL } from '../../lib/siteConfig';
import { Sparkles, Vote, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What’s On My 2026 Ballot? Sample Ballot Lookup by ZIP Code, City & County',
  description:
    'Look up your official November 3, 2026 Sample Ballot by 5-digit ZIP code, city, or county across all 50 states and 3,143 counties. Preview U.S. Senate, U.S. House district, Governor, judges, and ballot measures—and print a legal voting booth cheat sheet.',
  keywords: [
    'sample ballot 2026',
    'what is on my ballot 2026',
    'sample ballot by zip code 2026',
    'view my sample ballot november 3 2026',
    'who is on my ballot 2026',
    'printable sample ballot cheat sheet',
    'sample balot 2026',
    'can i bring a sample ballot into the voting booth',
  ],
  alternates: {
    canonical: `${SITE_URL}/sample-ballot-2026`,
  },
};

export default function SampleBallot2026Page() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: '2026 Interactive Sample Ballot & Voting Booth Cheat Sheet Builder',
        url: `${SITE_URL}/sample-ballot-2026`,
        applicationCategory: 'CivicApplication',
        operatingSystem: 'All',
        description:
          'Interactive 50-state, 3,143-county, and 435-district sample ballot lookup and printable voting booth worksheet for the Tuesday, November 3, 2026 U.S. Midterm General Election.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I see what is on my November 3, 2026 ballot?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Enter your 5-digit ZIP code, city, or county in the 2026 Sample Ballot Builder to view whether your state has one of the 35 U.S. Senate elections or 36 Governor elections in 2026, identify your exact U.S. House Congressional District, and review statewide ballot propositions.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I bring a printed sample ballot or written notes into the voting booth?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! In all 50 states and Washington, D.C., voters are 100% legally permitted to bring a printed paper sample ballot or handwritten cheat sheet into the voting booth to help remember candidates for Congress, Governor, judicial retention, and ballot measures.',
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
            name: '2026 Sample Ballot Lookup & Worksheet',
            item: `${SITE_URL}/sample-ballot-2026`,
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
            <span className="text-blue-300 font-bold">2026 Sample Ballot Lookup</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ZIP Code, County &amp; Congressional District Ballot Preview • Nov 3, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            What’s On My 2026 Ballot? Sample Ballot &amp; Booth Cheat Sheet
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl">
            Look up your exact November 3, 2026 Midterm General Election contests by ZIP code, city, or county—and print a legal 1-page cheat sheet to bring with you into the voting booth.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="What offices are on the November 3, 2026 Midterm General Election ballot?"
          directAnswer="Every voter’s November 3, 2026 ballot includes their U.S. House Representative (all 435 Congressional Districts are up), plus U.S. Senator in 35 states, State Governor in 36 states, state legislators, local judges, and statewide constitutional amendments."
          supportingText="Because local ballots often contain 20 to 45 separate federal, state, judicial, and municipal contests, election officials recommend preparing a printed sample ballot worksheet before heading to your polling place."
          statuteOrSource="U.S. Constitution Art. I, §§ 2–3 & 50-State Election Codes"
        />

        <div className="my-8">
          <SampleBallotBuilder />
        </div>

        <AdPlacement format="leaderboard" slotId="sample-ballot-mid-ad" />

        {/* 50-State Sample Ballot Quick Links */}
        <section className="my-10 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
            Browse 2026 Sample Ballot &amp; Voter Guides by State (All 50 States + D.C.)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-5">
            Select your state to inspect official Secretary of State sample ballot portals, county election boards, and 2026 primary/general election deadlines:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 text-xs">
            {ALL_STATES_LIST.map((st) => (
              <Link
                key={st.slug}
                href={`/states/${st.slug}`}
                className="p-2.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 font-bold text-slate-800 hover:text-blue-700 flex items-center justify-between transition"
              >
                <span>
                  {st.name} ({st.postalCode})
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
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
