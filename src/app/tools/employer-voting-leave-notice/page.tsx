import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { VotingLeaveGenerator } from '../../../components/VotingLeaveGenerator';
import { DirectAnswerBox } from '../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../components/AdPlacement';
import { AffiliatePartners } from '../../../components/AffiliatePartners';
import { LeadCapture } from '../../../components/LeadCapture';
import { JsonLd } from '../../../components/JsonLd';
import { ALL_STATES_LIST, STATES_DATA } from '../../../data/states';
import { Scale, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Employer Voting Leave Legal Notice Generator (2026) | 50-State Paid Time Off Laws',
  description:
    'Free interactive generator for requesting paid or unpaid time off work to vote on Election Day 2026. Automatically cites your state’s exact voting leave statute (Cal. Elec. Code § 14000, TX Elec. Code § 276.004, NY Elec. Law § 3-110).',
  alternates: {
    canonical: 'https://electionguide2026.org/tools/employer-voting-leave-notice',
  },
  keywords: [
    'do employers have to give time off to vote 2026',
    'paid time off to vote laws by state',
    'voting leave request email template',
    'can my boss fire me for voting',
    'texas election code 276.004',
    'california election code 14000',
    'new york election law 3-110',
  ],
};

export default function EmployerVotingLeaveNoticePage() {
  const appSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: '2026 Statutory Employer Voting Leave Notice Generator',
        url: 'https://electionguide2026.org/tools/employer-voting-leave-notice',
        applicationCategory: 'CivicApplication',
        operatingSystem: 'All',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Generates formal employee voting leave notices citing exact state labor and election statutes for all 50 U.S. states and Washington, D.C.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which states require employers to give paid time off to vote in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Over 20 states mandate paid time off to vote if an employee lacks sufficient non-working hours while polls are open, including California (Cal. Elec. Code § 14000), New York (N.Y. Elec. Law § 3-110), Texas (Tex. Elec. Code § 276.004), Arizona (A.R.S. § 16-402), Colorado (C.R.S. § 1-7-102), Illinois (10 ILCS 5/17-15), Maryland, Minnesota, Missouri, Nevada, and Tennessee.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I have to notify my boss in advance before taking voting leave?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Almost all state voting leave statutes require employees to provide reasonable advance notice—typically between 1 and 3 working days prior to Election Day—so the employer can coordinate shift coverage.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={appSchema} />

      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-bold">Employer Voting Leave Tool</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 Voting Leave Law & HR Notice Generator
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Verify whether your state mandates paid time off to vote on Tuesday, November 3, 2026, and generate a statutory notice for your employer.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="Do employers have to give you paid time off to vote on Election Day 2026?"
          directAnswer="Roughly 30 U.S. states legally require private employers to provide 1 to 3 hours of time off to vote, and over 20 of those states require that the leave be 100% PAID unless the worker already has 2 to 3 consecutive non-working hours while polls are open."
          supportingText="Most state statutes require employees to request voting leave in advance (1 to 3 days before Election Day). Retaliating against or firing an employee for exercising statutory voting leave is a criminal misdemeanor or felony across U.S. jurisdictions."
          statuteOrSource="50-State Labor & Election Code Compilation"
        />

        <div className="my-8">
          <VotingLeaveGenerator />
        </div>

        <AdPlacement format="leaderboard" slotId="leave-tool-top-ad" />

        {/* Complete 51-Jurisdiction Work Leave Statutory Table (Position #0 Table Snippet Target) */}
        <section className="my-10 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 border-b border-slate-200 bg-slate-50">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Complete 50-State + D.C. Voting Leave Statute Matrix (2026)
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Every state's exact statutory citation, paid leave status, and time-off allowance for the November 3, 2026 election.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <caption className="sr-only">
                50-State Statutory Voting Leave Laws and Citations for Election Day 2026
              </caption>
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-bold text-[11px]">
                <tr>
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4">Paid Leave?</th>
                  <th className="py-3 px-4">Statutory Allowance</th>
                  <th className="py-3 px-4">Legal Code Citation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {ALL_STATES_LIST.map((item) => {
                  const st = STATES_DATA[item.slug];
                  return (
                    <tr key={st.slug} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        <Link href={`/states/${st.slug}/holiday-work-laws`} className="text-blue-700 hover:underline">
                          {st.name} ({st.postalCode})
                        </Link>
                      </td>
                      <td className="py-3 px-4">
                        {st.workLeaveLaw.paid ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded">
                            <CheckCircle2 className="w-3 h-3" />
                            Paid Leave
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-700 font-semibold text-[11px] rounded">
                            Protected / Unpaid
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-slate-700">{st.workLeaveLaw.hoursAllowed}</td>
                      <td className="py-3 px-4 font-mono text-xs text-slate-600">{st.workLeaveLaw.statuteCitation}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <AffiliatePartners />
        <LeadCapture />
      </div>
    </>
  );
}
