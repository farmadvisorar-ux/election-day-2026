import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_PRIMARIES_2026 } from '../../data/primaries';
import { SITE_URL } from '../../lib/siteConfig';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 Primary Election Dates by State: Open vs. Closed Primary Schedule & Runoff Calendar',
  description:
    'Complete 50-state 2026 Midterm Primary Election Calendar from March 3, 2026 through September 15, 2026. Compare primary election dates, runoff dates, Open vs. Closed primary laws, and party affiliation switch deadlines.',
  alternates: {
    canonical: `${SITE_URL}/primary-calendar-2026`,
  },
  keywords: [
    '2026 primary election dates by state',
    'when are the 2026 primaries',
    'open vs closed primary states 2026',
    'midterm primary schedule 2026',
    'texas primary election 2026 date',
    'pennsylvania primary election 2026 date',
    'california primary election 2026 date',
  ],
};

export default function PrimaryCalendar2026Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dataset',
        name: '2026 United States Midterm Primary Election Dates & Open/Closed Primary Statutory Dataset',
        description:
          'Chronological 50-state + D.C. schedule of 2026 U.S. Congressional and Gubernatorial Primary Elections, primary runoff dates, and partisan affiliation eligibility rules.',
        url: `${SITE_URL}/primary-calendar-2026`,
        license: 'https://creativecommons.org/publicdomain/zero/1.0/',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'When do the 2026 midterm primary elections begin and end?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The 2026 U.S. midterm primary cycle begins on Tuesday, March 3, 2026 (in Texas, North Carolina, and Arkansas) and concludes on Tuesday, September 15, 2026 (in Delaware), ahead of the Tuesday, November 3, 2026 General Election.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between an Open Primary, Closed Primary, and Semi-Closed Primary in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In an Open Primary (such as Texas, Georgia, Michigan, or Wisconsin), any registered voter may vote in any party primary regardless of affiliation. In a Closed Primary (such as Pennsylvania, New York, or Florida), only voters registered with that specific party prior to the deadline may vote in its primary. In a Semi-Closed Primary (such as Arizona, Colorado, Massachusetts, or New Hampshire), unaffiliated/independent voters may choose a party primary ballot at the polls.',
            },
          },
        ],
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
            <span className="text-amber-300 font-bold">2026 Primary Election Calendar</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-2.5 py-1 bg-amber-400 text-slate-950 text-xs font-black rounded-md flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              March – September 2026 Schedule
            </span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 font-mono text-xs font-bold rounded-md border border-slate-700">
              All 50 States + D.C.
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 Primary Election Calendar by State
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-3xl">
            Before the November 3, 2026 General Election, voters across all 50 states nominate U.S. Senate, U.S. House, and Gubernatorial candidates in state primaries between <strong>March 3, 2026</strong> and <strong>September 15, 2026</strong>.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="When are the 2026 Midterm Primary Elections?"
          directAnswer="The 2026 U.S. midterm primary elections begin on Tuesday, March 3, 2026 (Texas, North Carolina, Arkansas), peak in May, June, and August 2026, and conclude on Tuesday, September 15, 2026 (Delaware)."
          supportingText="Whether you can vote in a party's 2026 primary depends on whether your state enforces a Closed Primary (party registration required in advance), Semi-Closed Primary (independents allowed), Open Primary, or Top-Two/Top-Four Nonpartisan Primary."
          statuteOrSource="50-State Secretary of State 2026 Election Calendars & NCSL Primary Classifications"
          sourceUrl="https://www.eac.gov/voters/register-and-vote-in-your-state"
        />

        <AdPlacement format="leaderboard" slotId="primary-calendar-top-ad" />

        {/* Master Chronological Table */}
        <section className="my-8 bg-white rounded-2xl border-2 border-slate-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Chronological 2026 State Primary &amp; Runoff Schedule
              </h2>
              <p className="text-xs text-slate-500">
                Sorted chronologically from March 3, 2026 through September 15, 2026
              </p>
            </div>
            <Link
              href="/50-state-comparison-matrix"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>Compare General Election Rules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white uppercase text-[11px] font-bold">
                <tr>
                  <th className="py-3.5 px-4">State</th>
                  <th className="py-3.5 px-4">2026 Primary Date</th>
                  <th className="py-3.5 px-4">Primary Runoff Date</th>
                  <th className="py-3.5 px-4">Primary System</th>
                  <th className="py-3.5 px-4">Independent &amp; Party Switch Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {STATE_PRIMARIES_2026.map((row) => (
                  <tr key={row.stateSlug} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                      <Link
                        href={`/states/${row.stateSlug}`}
                        className="text-blue-700 hover:underline flex items-center gap-1.5"
                      >
                        <span>{row.stateName}</span>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                          {row.postalCode}
                        </span>
                      </Link>
                    </td>
                    <td className="py-3 px-4 font-black text-slate-900 whitespace-nowrap">
                      {row.primaryDate}
                    </td>
                    <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                      {row.runoffDate || '—'}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                          row.primaryType === 'Open Primary'
                            ? 'bg-emerald-100 text-emerald-900'
                            : row.primaryType === 'Closed Primary'
                            ? 'bg-amber-100 text-amber-900'
                            : 'bg-indigo-100 text-indigo-900'
                        }`}
                      >
                        {row.primaryType}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-600">
                      {row.partyChangeRule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <AdPlacement format="in-article" slotId="primary-calendar-bottom-ad" />
        <LeadCapture />
      </div>
    </>
  );
}
