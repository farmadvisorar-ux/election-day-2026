import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '../../lib/siteConfig';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import {
  Newspaper,
  Vote,
  TrendingUp,
  Scale,
  Calendar,
  ArrowRight,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 Midterm Election Pulse, Balance of Power & Ballot Measures Tracker (Non-Partisan)',
  description:
    'Live non-partisan 2026 U.S. Midterm Election newsbrief and Balance of Power tracker: U.S. House (218 majority threshold), U.S. Senate (34 Class II + 2 Special seats), 36 Governor races, key statutory milestones, and 2026 state ballot propositions.',
  alternates: {
    canonical: `${SITE_URL}/news-and-pulse-2026`,
  },
  keywords: [
    '2026 midterm election news',
    'balance of power congress 2026',
    'how many seats to flip the house 2026',
    'how many seats to flip the senate 2026',
    '2026 state ballot measures and propositions',
    'midterm election timeline 2026',
  ],
};

const BALLOT_MEASURE_CATEGORIES = [
  {
    category: 'Property Tax Caps, Income Tax Cuts & Fiscal Rules',
    states: ['FL', 'TX', 'CO', 'CA', 'ND', 'OR', 'ID'],
    summary:
      'Voters in several states will decide constitutional amendments capping annual residential property tax assessment increases, requiring supermajorities for new state taxes, or expanding homestead exemptions.',
    yesMeaning: 'Approves the constitutional or statutory tax limitation, exemption, or revenue cap.',
    noMeaning: 'Retains existing state and local tax assessment formulas and legislative taxing authority.',
  },
  {
    category: 'Election Administration, Ranked-Choice Voting & Citizen Initiatives',
    states: ['AK', 'NV', 'MO', 'OH', 'AZ', 'AR', 'UT'],
    summary:
      'Ballot propositions addressing photo Voter ID constitutional codification, nonpartisan primaries / Ranked-Choice Voting (RCV), citizenship verification language, and signature thresholds for future citizen-initiated amendments.',
    yesMeaning: 'Enacts the proposed change to state election procedures, primary structure, or initiative thresholds.',
    noMeaning: 'Preserves the state’s current voting procedures and constitutional amendment signature rules.',
  },
  {
    category: 'Minimum Wage, Paid Sick Leave & Workplace Standards',
    states: ['CA', 'MA', 'MI', 'MO', 'OK', 'WA'],
    summary:
      'Citizen-initiated statutes and referendums indexing state minimum wages to inflation, expanding earned paid sick leave, or modifying independent-contractor and tipped-wage classifications.',
    yesMeaning: 'Adopts the new statutory wage floor or mandatory paid leave schedule.',
    noMeaning: 'Maintains current state labor code wage and leave statutes.',
  },
  {
    category: 'Healthcare, Medicaid Expansion & Constitutional Rights',
    states: ['NV', 'MO', 'FL', 'SD', 'ID', 'VA'],
    summary:
      'Constitutional amendments and statutory referendums governing healthcare coverage, Medicaid work/funding rules, and reproductive or medical autonomy clauses.',
    yesMeaning: 'Amends the state constitution or statute as specified in the ballot title.',
    noMeaning: 'Leaves existing state statutory and constitutional healthcare provisions unchanged.',
  },
  {
    category: 'Education Funding, School Choice & Infrastructure Bonds',
    states: ['CA', 'TX', 'NY', 'NM', 'CO', 'KY', 'ME'],
    summary:
      'Multi-billion-dollar state general obligation bond measures for public schools, water/grid infrastructure, and constitutional amendments regarding education scholarships and public school funding formulas.',
    yesMeaning: 'Authorizes the state bond issuance or constitutional education funding change.',
    noMeaning: 'Rejects the proposed bond debt authorization or constitutional change.',
  },
];

const CYCLE_MILESTONES = [
  {
    date: 'March 3, 2026',
    title: 'First 2026 Midterm Primaries Open (TX, NC, AR)',
    desc: 'The 2026 primary nomination season officially kicks off with statewide primaries in Texas, North Carolina, and Arkansas.',
    link: '/primary-calendar-2026',
  },
  {
    date: 'May – June 2026',
    title: 'Super Spring Primary Wave (PA, GA, OH, CA, NY, NJ, VA, CO)',
    desc: 'Over 25 states hold Congressional and Gubernatorial primaries across May and June 2026.',
    link: '/primary-calendar-2026',
  },
  {
    date: 'August – Sept 15, 2026',
    title: 'Late-Summer Primary Finale (MI, WI, AZ, WA, FL, MA, NH, DE)',
    desc: 'Final general election matchups are locked in across key battleground states by mid-September.',
    link: '/primary-calendar-2026',
  },
  {
    date: 'September 19, 2026',
    title: 'Federal 45-Day Military & Overseas (UOCAVA) Ballot Mandate',
    desc: 'Under 52 U.S.C. § 20302, all 50 states must transmit absentee ballots to military and overseas voters at least 45 days before Nov 3.',
    link: '/voter-eligibility-guide',
  },
  {
    date: 'October 4 – 5, 2026',
    title: '30-Day Voter Registration Cutoff Wave',
    desc: 'Final voter registration deadline for states enforcing a 30-day advance cutoff (including TX, FL, GA, AZ, OH, SC, TN).',
    link: '/50-state-comparison-matrix',
  },
  {
    date: 'October 15 – 31, 2026',
    title: 'Peak Nationwide Early In-Person Voting Window',
    desc: 'Early voting centers and county ballot drop-boxes open across 47 states and Washington, D.C.',
    link: '/counties',
  },
  {
    date: 'Tuesday, November 3, 2026',
    title: '2026 U.S. Midterm General Election Day',
    desc: 'Polls open across all 3,143 county jurisdictions from 6:00 AM/7:00 AM to 7:00 PM/8:00 PM/9:00 PM local time.',
    link: '/countdown',
  },
  {
    date: 'January 3, 2027',
    title: '120th United States Congress Convenes (Noon ET)',
    desc: 'Under the 20th Amendment to the U.S. Constitution, newly elected Representatives and Senators are sworn in on January 3, 2027.',
    link: '/districts',
  },
];

export default function NewsAndPulse2026Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '2026 U.S. Midterm Election Balance of Power, Timeline & Ballot Measures Tracker',
    url: `${SITE_URL}/news-and-pulse-2026`,
    description:
      'Non-partisan overview of the 2026 U.S. Congressional and Gubernatorial Balance of Power, statutory election cycle milestones, and statewide ballot propositions.',
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-bold">2026 Midterm Pulse, Balance of Power &amp; Ballot Measures</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-black rounded-md flex items-center gap-1">
              <Newspaper className="w-3.5 h-3.5" />
              Non-Partisan Civic Briefing
            </span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 font-mono text-xs font-bold rounded-md border border-slate-700">
              Zero Partisan Spin • Pure Constitutional Math
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            2026 Midterm Election Pulse: Balance of Power &amp; Ballot Tracker
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-3xl">
            Everything you need to understand the stakes of <strong>Tuesday, November 3, 2026</strong> without partisan noise: exact majority thresholds in Congress, toss-up battleground states, key statutory dates, and 2026 statewide ballot propositions.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DirectAnswerBox
          question="How many seats are needed to win a majority in the U.S. House and U.S. Senate in 2026?"
          directAnswer="In the 435-seat U.S. House of Representatives, 218 seats are required for a majority. In the 100-seat U.S. Senate, 51 seats are required for an outright majority (or 50 seats with the Vice President casting tie-breaking votes). On November 3, 2026, all 435 House seats, 35 Senate seats (33 Class II + 2 Special Elections in OH and FL), and 36 state Governorships are on the ballot."
          supportingText="Historically, the President's party has lost an average of 26 House seats and 4 Senate seats in postwar midterm elections, making 2026 one of the most closely contested cycles in modern history."
          statuteOrSource="U.S. Constitution Art. I, §§ 2–3 & Congressional Research Service Historical Midterm Data"
          sourceUrl="https://www.congress.gov"
        />

        <AdPlacement format="leaderboard" slotId="pulse-top-ad" />

        {/* 3 Chamber Balance of Power Cards */}
        <section className="my-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span>2026 Constitutional Balance of Power</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            What Is at Stake on November 3, 2026?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* U.S. House */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase text-indigo-700">U.S. House (120th Congress)</span>
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-800 font-mono text-xs font-bold rounded">
                    435 Seats Up
                  </span>
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">
                  218 Majority Line
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Every single U.S. Representative serves a 2-year term. Control of the House majority will be decided across ~38 hyper-competitive suburban and split-ticket districts in PA, NY, CA, MI, WI, AZ, TX, OH, and VA.
                </p>
              </div>
              <Link
                href="/districts"
                className="pt-3 border-t border-slate-100 text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>Browse All 435 House Districts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* U.S. Senate */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase text-blue-700">U.S. Senate (Class II)</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-800 font-mono text-xs font-bold rounded">
                    35 Seats Up
                  </span>
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">
                  51 Majority Line
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  33 regular Class II seats plus 2 high-profile Special Elections (Ohio and Florida) are on the 2026 ballot. Key battlegrounds include Georgia, Michigan, North Carolina, Maine, Ohio, and Texas.
                </p>
              </div>
              <Link
                href="/races/senate-2026"
                className="pt-3 border-t border-slate-100 text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>View Full 2026 Senate Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* State Governors */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase text-emerald-700">State Governorships</span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 font-mono text-xs font-bold rounded">
                    36 States Up
                  </span>
                </div>
                <div className="text-2xl font-black text-slate-900 mb-2">
                  36 Chief Executives
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Governors sign or veto state legislation, oversee state election certification, and appoint U.S. Senate vacancies. Open-seat and battleground races headline AZ, GA, MI, NV, PA, WI, FL, and OH.
                </p>
              </div>
              <Link
                href="/races/governor-2026"
                className="pt-3 border-t border-slate-100 text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
              >
                <span>View 36 Gubernatorial Contests</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2026 Statewide Ballot Measures & Propositions Guide */}
        <section className="my-10 bg-white rounded-2xl border-2 border-slate-200 p-6 md:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
            <Scale className="w-4 h-4" />
            <span>Direct Democracy &amp; Constitutional Amendments</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
            2026 Statewide Ballot Measures &amp; Propositions Tracker
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            Confused by complex legal wording on state ballot propositions? Here is a non-partisan breakdown of the major categories of constitutional amendments and citizen initiatives appearing on November 3, 2026 ballots—and what a <strong>YES</strong> vs. <strong>NO</strong> vote actually means:
          </p>

          <div className="space-y-4">
            {BALLOT_MEASURE_CATEGORIES.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-black text-slate-900">{item.category}</h3>
                  <div className="flex flex-wrap gap-1">
                    {item.states.map((st) => (
                      <span
                        key={st}
                        className="px-2 py-0.5 bg-slate-900 text-white font-mono text-[10px] font-bold rounded"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">{item.summary}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
                    <strong>✓ What Voting YES Means:</strong> {item.yesMeaning}
                  </div>
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
                    <strong>✕ What Voting NO Means:</strong> {item.noMeaning}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chronological 2026 Election Cycle Milestones */}
        <section className="my-10 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <Calendar className="w-4 h-4" />
            <span>Master Statutory Timeline</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-5">
            2026–2027 Election Cycle Key Dates &amp; Legal Milestones
          </h2>

          <div className="space-y-4">
            {CYCLE_MILESTONES.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <span className="text-xs font-mono font-black text-blue-700 uppercase">
                    {m.date}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">{m.title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{m.desc}</p>
                </div>
                <Link
                  href={m.link}
                  className="text-xs font-bold text-blue-600 hover:underline shrink-0 flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <AdPlacement format="in-article" slotId="pulse-bottom-ad" />
        <LeadCapture />
      </div>
    </>
  );
}
