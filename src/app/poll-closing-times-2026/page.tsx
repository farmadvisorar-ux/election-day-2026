import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PollClosingWaveTracker } from '../../components/PollClosingWaveTracker';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import { ALL_STATES_LIST, STATES_DATA } from '../../data/states';
import { SITE_URL } from '../../lib/siteConfig';
import { Clock, Sparkles, ArrowRight, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What Time Do Polls Close on Election Day 2026? Hour-by-Hour State Schedule',
  description:
    'Complete hour-by-hour poll closing schedule for Election Night 2026 (Tuesday, November 3, 2026) in ET, CT, MT, and PT. See all 9 poll-closing waves (6 PM ET to 1 AM ET), 13 split-timezone states, and mail-ballot counting speeds.',
  keywords: [
    'what time do polls close on election day 2026',
    'poll closing times by state 2026',
    'what time do polls open and close november 3 2026',
    'when do election results start coming in 2026',
    'which states close at 7pm eastern',
    'election night 2026 poll closing map',
    'what time voting closes today',
  ],
  alternates: {
    canonical: `${SITE_URL}/poll-closing-times-2026`,
  },
};

export default function PollClosingTimes2026Page() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What time do the first polls close on Election Night 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The first polls in America close at 6:00 PM Eastern Time (5:00 PM Central Time) on Tuesday, November 3, 2026 in the Eastern Time Zone counties of Indiana (including Indianapolis) and Kentucky (including Louisville and Lexington).',
            },
          },
          {
            '@type': 'Question',
            name: 'What time do key 2026 battleground states close their polls?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In Eastern Time (ET) on Tuesday, November 3, 2026: Georgia and Virginia close at 7:00 PM ET; North Carolina and Ohio close at 7:30 PM ET; Pennsylvania, Michigan (Lower Peninsula), Maine, New Hampshire, and Texas (Central Time counties) close at 8:00 PM ET; Wisconsin, Arizona, New York, and Minnesota close at 9:00 PM ET; Nevada closes at 10:00 PM ET; and California, Washington, and Oregon close at 11:00 PM ET.',
            },
          },
          {
            '@type': 'Question',
            name: 'What if I am still in line when the polls close?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Stay in line! In all 50 states and Washington D.C., any eligible voter who is physically in line by the official poll-closing minute has the absolute legal right to cast their ballot.',
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
            name: '2026 Poll-Closing Times & Election Night Wave Tracker',
            item: `${SITE_URL}/poll-closing-times-2026`,
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
            <span className="text-blue-300 font-bold">2026 Poll-Closing Wave Tracker</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>9 Election Night Waves • 13 Split-Timezone States • Nov 3, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            What Time Do Polls Close on Election Day 2026?
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-3xl">
            Chronological Election Night poll-closing guide (6:00 PM ET to 1:00 AM ET), county split-timezone overrides, and mail-in ballot counting speed across all 50 states.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="What time do polls close on Election Night 2026, and when do results start coming in?"
          directAnswer="On Tuesday, November 3, 2026, the first polls close at 6:00 PM ET in eastern Indiana and Kentucky, followed by major battleground waves at 7:00 PM ET (GA, VA, FL), 7:30 PM ET (NC, OH), 8:00 PM ET (PA, MI, TX, ME, NH), 9:00 PM ET (WI, AZ, NY, MN), 10:00 PM ET (NV), and 11:00 PM ET (CA, WA, OR)."
          supportingText="Remember the golden rule in all 50 states: if you are physically standing in line at your polling place by the exact minute polls close, stay in line—you are legally entitled to vote."
          statuteOrSource="50-State Election Codes & NCSL Ballot Processing Statutes"
        />

        <div className="my-8">
          <PollClosingWaveTracker />
        </div>

        <AdPlacement format="leaderboard" slotId="poll-closing-mid-ad" />

        {/* Complete 50-State + D.C. Official Polling Hours Reference Table */}
        <section className="my-10 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 border-b border-slate-200 bg-slate-50">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Complete 50-State + D.C. Polling Hours &amp; Timezone Directory (Nov 3, 2026)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Local opening and closing hours for every state on Tuesday, November 3, 2026:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4">Official Nov 3, 2026 Polling Hours</th>
                  <th className="py-3 px-4">Timezone</th>
                  <th className="py-3 px-4">Voter ID Rule</th>
                  <th className="py-3 px-4">County Breakdown</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {ALL_STATES_LIST.map((item) => {
                  const st = STATES_DATA[item.slug];
                  return (
                    <tr key={item.slug} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        <Link href={`/states/${item.slug}`} className="hover:text-blue-700">
                          {item.name} ({item.postalCode})
                        </Link>
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-800">
                        {st.pollingHours}
                      </td>
                      <td className="py-3 px-4 text-slate-600">{st.timezone}</td>
                      <td className="py-3 px-4 text-slate-600">{st.voterId.type}</td>
                      <td className="py-3 px-4">
                        <Link
                          href={`/states/${item.slug}#counties`}
                          className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                        >
                          <span>County Hours</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
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
