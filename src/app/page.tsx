import React from 'react';
import Link from 'next/link';
import { CountdownTimer } from '../components/CountdownTimer';
import { DirectAnswerBox } from '../components/DirectAnswerBox';
import { CanIVoteTool } from '../components/CanIVoteTool';
import { CivicAnswerEngine } from '../components/CivicAnswerEngine';
import { AdPlacement } from '../components/AdPlacement';
import { LeadCapture } from '../components/LeadCapture';
import { JsonLd } from '../components/JsonLd';
import { VoterQuestionSearch } from '../components/VoterQuestionSearch';
import { AffiliatePartners } from '../components/AffiliatePartners';
import { SITE_FAQS } from '../data/faq';
import { ALL_STATES_LIST } from '../data/states';
import {
  Calendar,
  CheckCircle,
  HelpCircle,
  Vote,
  MapPin,
  ArrowRight,
  ShieldAlert,
  Building2,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  const electionEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Election Day 2026 (United States General Midterm Elections)',
    startDate: '2026-11-03T07:00:00-05:00',
    endDate: '2026-11-03T20:00:00-05:00',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Polling Stations Across All 50 U.S. States and Territories',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    },
    description:
      'The 2026 United States Midterm General Elections to elect all 435 voting members of the House of Representatives, 34 U.S. Senators, and 36 state Governors.',
    organizer: {
      '@type': 'GovernmentOrganization',
      name: 'State Election Directors & County Election Boards',
      url: 'https://www.vote.gov',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SITE_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${faq.shortAnswer} ${faq.detailedAnswer}`,
      },
    })),
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://election-day-2026.vercel.app',
      },
    ],
  };

  return (
    <>
      <JsonLd data={electionEventSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbsSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Official Statutory Guide • 2026 Midterm General Elections
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Election Day <span className="text-amber-300">2026</span>
            </h1>
            <p className="mt-3 text-base sm:text-xl text-blue-100/90 max-w-3xl mx-auto font-medium">
              Official date, state voter registration deadlines, early voting calendars, voter ID requirements, and holiday closure rules.
            </p>
          </div>

          {/* Direct Answer Box for Instant AEO AI Indexing */}
          <div className="max-w-4xl mx-auto">
            <DirectAnswerBox
              question="When is Election Day 2026?"
              directAnswer="Election Day 2026 is on Tuesday, November 3, 2026."
              supportingText="Under federal law (2 U.S.C. § 7), federal general elections are held on the Tuesday next after the first Monday in November. All 435 seats in the U.S. House of Representatives, 34 U.S. Senate seats, and 36 state Governors will be decided."
              statuteOrSource="2 U.S. Code § 7 - Time of election"
              sourceUrl="https://www.law.cornell.edu/uscode/text/2/7"
            />
          </div>

          {/* Live Countdown Component */}
          <div className="max-w-4xl mx-auto mt-6">
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Ad Unit 1: Top Leaderboard */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <AdPlacement format="leaderboard" slotId="home-top-leaderboard" />
      </div>

      {/* Quick Facts Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Election Day 2026 At A Glance
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Core statutory facts regarding the upcoming November 3, 2026 federal general election.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase mb-1">
              <Calendar className="w-4 h-4" />
              <span>Official Date</span>
            </div>
            <div className="text-lg font-black text-slate-900">Tuesday, Nov 3, 2026</div>
            <p className="text-xs text-slate-500 mt-1">
              Federal law specifies the Tuesday after the first Monday in November.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase mb-1">
              <Building2 className="w-4 h-4" />
              <span>Federal Holiday Status</span>
            </div>
            <div className="text-lg font-black text-slate-900">Not a Federal Holiday</div>
            <p className="text-xs text-slate-500 mt-1">
              USPS mail runs, federal offices open, national banks open. Several states offer state holidays.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-600 uppercase mb-1">
              <Vote className="w-4 h-4" />
              <span>Seats on Ballot</span>
            </div>
            <div className="text-lg font-black text-slate-900">435 House + 35 Senate</div>
            <p className="text-xs text-slate-500 mt-1">
              33 Class II + OH/FL Senate Specials, 36 Governors, 153 City Hubs &amp; statewide propositions.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase mb-1">
              <CheckCircle className="w-4 h-4" />
              <span>Early Voting Period</span>
            </div>
            <div className="text-lg font-black text-slate-900">Sept – Nov 2026</div>
            <p className="text-xs text-slate-500 mt-1">
              47 states offer early in-person or universal mail-in ballot options before Election Day.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-600 uppercase mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>School & Bank Closures</span>
            </div>
            <div className="text-lg font-black text-slate-900">Varies by District</div>
            <p className="text-xs text-slate-500 mt-1">
              Banks remain open. Schools frequently close if their facilities host voting precincts.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase mb-1">
              <ShieldAlert className="w-4 h-4" />
              <span>Voter Registration</span>
            </div>
            <div className="text-lg font-black text-slate-900">Oct 5 – Nov 3, 2026</div>
            <p className="text-xs text-slate-500 mt-1">
              Deadlines vary significantly by state, ranging from 30 days prior to same-day registration.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <section id="voter-tool" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20">
        <CanIVoteTool />
      </section>

      {/* Zero-Hallucination Civic Answer Engine Section */}
      <section id="ask-engine" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 scroll-mt-20">
        <CivicAnswerEngine />
      </section>

      {/* Ad Unit 2: In-Article Placement */}
      <div className="max-w-5xl mx-auto px-4 my-4">
        <AdPlacement format="in-article" slotId="home-mid-article" />
      </div>

      {/* Educational & Semantic Long-Tail Article Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 prose prose-slate max-w-none">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          What Is on the Ballot in the 2026 Midterm Elections?
        </h2>
        <p className="text-slate-700 leading-relaxed">
          The November 3, 2026 general election marks the halfway point of the 2024–2028 presidential administration. Because there is no presidential contest on the ballot, these elections are designated as <strong>midterm elections</strong>. Historically, midterms generate substantial voter interest and determine legislative control of the federal government.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Vote className="w-5 h-5 text-blue-600" />
              <span>United States Congress</span>
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <strong>All 435 U.S. House of Representatives Seats:</strong> Every member of Congress faces re-election every two years. The outcome determines which political party controls the House majority, committee gavels, and legislative docket.
              </li>
              <li>
                <strong>35 U.S. Senate Seats (33 Class II + 2 Specials):</strong> Senators serve staggered six-year terms. The 35 contests up in 2026 include 33 regular Class II seats plus the Ohio and Florida special Senate elections, featuring marquee battlegrounds in Georgia, North Carolina, Michigan, Maine, and Ohio.
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/races/senate-2026"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Explore Full 2026 Senate Map & Key Seats</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-600" />
              <span>36 State Governorships</span>
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Voters across 36 states and 3 U.S. territories will choose their chief executive. Because many states enforce two-consecutive-term limits, the 2026 gubernatorial cycle will feature major open-seat races in Florida, Georgia, Ohio, and Michigan.
            </p>
            <div className="mt-4">
              <Link
                href="/races/governor-2026"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Explore 2026 Gubernatorial Battles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-8">
          Why Is Election Day Always on a Tuesday in November?
        </h3>
        <p className="text-slate-700 leading-relaxed">
          In 1845, the United States Congress passed a federal statute standardizing the date of federal elections to <em>"the Tuesday next after the first Monday in the month of November."</em> This 19th-century decision resolved three practical challenges of an agrarian society:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>
            <strong>Travel Time for Farmers:</strong> Most 19th-century citizens traveled by horse and buggy to county seats to vote. Sunday was reserved for church attendance, and Wednesday was market day. Tuesday provided a full day of travel on Monday without infringing on religious observances.
          </li>
          <li>
            <strong>The Harvest Window:</strong> By early November, the autumn harvest was concluded, but winter weather had not yet made dirt roads impassable.
          </li>
          <li>
            <strong>Avoiding the First Day of the Month:</strong> Congress specifically stipulated the Tuesday <em>after the first Monday</em> to avoid Election Day falling on November 1. November 1 was All Saints Day (a holy day of obligation for Roman Catholics) and the traditional date when merchants balanced their accounting books for the prior month.
          </li>
        </ul>
      </article>

      {/* Interactive Long-Tail Question Search & AEO Directory */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <VoterQuestionSearch />
      </section>

      {/* Recommended Non-Partisan Civic & Security Toolkit */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AffiliatePartners />
      </section>

      {/* Presidential-Grade Civic Utilities & Open Data Command Bar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            2026 Interactive Voter Tools, City Hubs &amp; Election Night Simulators
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/candidate-portal" className="text-xs font-black text-amber-600 hover:underline flex items-center gap-1">
              <span>🏛️ Candidates: Claim 2026 Profile →</span>
            </Link>
            <Link href="/advertise" className="text-xs font-extrabold text-blue-600 hover:underline">
              Sponsor a Civic Tool →
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/sample-ballot-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-900 text-white border border-blue-400/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                Printable Booth Cheat Sheet
              </span>
              <h3 className="text-lg font-black mt-1">
                What&apos;s On My 2026 Ballot? Builder
              </h3>
              <p className="text-xs text-slate-100 mt-1.5 leading-relaxed">
                Preview every federal, gubernatorial, state legislative, and judicial race on your state&apos;s Nov 3, 2026 ballot and print a legal booth guide.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-amber-300 flex items-center gap-1">
              <span>Build Sample Ballot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/cities"
            className="p-5 rounded-2xl bg-gradient-to-br from-emerald-800 to-slate-950 text-white border border-emerald-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                153 Major U.S. Cities • Split-County Resolver
              </span>
              <h3 className="text-lg font-black mt-1">
                Where to Vote in Your City (2026 Hub)
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Search NYC (5 boroughs), Chicago, Houston, LA, Phoenix, Philadelphia, Atlanta &amp; Dallas for city Vote Centers, split-county boundaries, and free transit.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-emerald-300 flex items-center gap-1">
              <span>Search 153 U.S. Cities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/ballot-measures-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-950 text-white border border-indigo-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                Plain-English YES vs. NO Decoder
              </span>
              <h3 className="text-lg font-black mt-1">
                2026 Statewide Propositions &amp; Amendments
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Translate confusing legal ballot wording into plain-English YES vs. NO outcomes, plus 60%/55% supermajority state rules.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-amber-300 flex items-center gap-1">
              <span>Decode 2026 Propositions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/ballot-problem-solver"
            className="p-5 rounded-2xl bg-gradient-to-br from-rose-900 to-slate-950 text-white border border-rose-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300">
                Emergency Election Day Fixer
              </span>
              <h3 className="text-lg font-black mt-1">
                Ballot Problem Solver &amp; Signature Cure
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Mail ballot didn&apos;t arrive? Rejected signature? Forgot Photo ID? Name missing from pollbook? Get your state&apos;s exact cure deadline &amp; cover sheet.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-rose-300 flex items-center gap-1">
              <span>Solve Ballot Emergency</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/first-time-voter-guide-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-purple-900 to-slate-950 text-white border border-purple-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                Polling Booth Simulator + Poll Worker Pay
              </span>
              <h3 className="text-lg font-black mt-1">
                First-Time Voter &amp; Poll Worker Pay Hub
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                6-step inside-the-booth walkthrough, college student dorm rules, and our 50-State Paid Poll Worker Calculator ($175–$350+/day).
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-amber-300 flex items-center gap-1">
              <span>Open First-Time Voter Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/majority-calculator-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white border border-blue-500/40 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                51 Senate • 218 House • 26 Govs
              </span>
              <h3 className="text-lg font-black mt-1">
                2026 Senate, House &amp; Governor Simulator
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Toggle battleground seats in GA, NC, MI, ME, OH &amp; NH and watch the live balance of power shift in real time.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-blue-300 flex items-center gap-1">
              <span>Launch Majority Simulator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/poll-closing-times-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/40 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                6:00 PM ET to 1:00 AM ET Waves
              </span>
              <h3 className="text-lg font-black mt-1">
                Election Night 2026 Poll-Closing Tracker
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Hour-by-hour poll closing waves across ET/CT/MT/PT timezones plus state mail-ballot counting speed badges.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-emerald-300 flex items-center gap-1">
              <span>View Poll-Closing Waves</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/voter-id-validator-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white border border-blue-400/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                50-State Document Checker
              </span>
              <h3 className="text-lg font-black mt-1">
                Will My ID Work to Vote? Validator
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Check whether your expired driver’s license, college student ID, out-of-state ID, or digital wallet is accepted at your state’s polling place.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-amber-300 flex items-center gap-1">
              <span>Validate Your ID</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/widgets"
            className="p-5 rounded-2xl bg-gradient-to-br from-emerald-900 to-slate-950 text-white border border-emerald-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                For Publishers &amp; Newsrooms
              </span>
              <h3 className="text-lg font-black mt-1">
                Free Embeddable Civic Widgets Studio
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Copy-paste live 2026 Countdown Clocks, State Polling Hours Badges, and Poll-Closing Wave Trackers for your campus or news site.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-emerald-300 flex items-center gap-1">
              <span>Grab Free Widgets</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/counties"
            className="p-5 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-950 text-white border border-blue-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                3,143 Local FIPS Boards
              </span>
              <h3 className="text-lg font-black mt-1">
                All 3,143 U.S. Counties Election Directory
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Search every county, parish, borough &amp; independent city across all 50 states for local Board of Elections portals and polling hours.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-amber-300 flex items-center gap-1">
              <span>Browse 3,143 Counties</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/candidate-portal"
            className="p-5 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-950 to-indigo-950 text-white border-2 border-amber-400/80 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                Direct Candidate Ad Network
              </span>
              <h3 className="text-lg font-black mt-1 text-white">
                2026 Candidate Portal &amp; Campaign Advertising
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Running for U.S. Senate, House, Governor, or local office? Claim your verified candidate profile, platform priorities, and direct ActBlue / WinRed donation CTA on your district’s ballot.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-amber-300 flex items-center gap-1">
              <span>Open Candidate Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/find-my-district"
            className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-cyan-950 text-white border border-cyan-400/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                Instant 5-Digit ZIP Code Resolver
              </span>
              <h3 className="text-lg font-black mt-1">
                Find My Congressional District &amp; County
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Type any 5-digit ZIP code to instantly identify your exact U.S. House Congressional District(s), sitting Senators, Governor, and local County Board of Elections.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-cyan-300 flex items-center gap-1">
              <span>Resolve My ZIP Code</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/districts"
            className="p-5 rounded-2xl bg-gradient-to-br from-indigo-800 to-slate-950 text-white border border-indigo-600/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                120th U.S. Congress
              </span>
              <h3 className="text-lg font-black mt-1">
                All 435 U.S. House Congressional Districts
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Lookup every U.S. House district (PA-01, TX-07, CA-27, NY-17) with county crosswalks, cities, ZIPs, and polling hours.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-amber-300 flex items-center gap-1">
              <span>Explore 435 Districts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/early-voting-calendar-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-950 to-blue-950 text-white border-2 border-amber-400/70 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                Weekend &amp; Advance Voting
              </span>
              <h3 className="text-lg font-black mt-1 text-white">
                2026 Early Voting &amp; &quot;Souls to the Polls&quot; Calendar
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Early in-person start dates across 47 states, mandatory Saturday voting, Sunday faith voting hours, and county Vote Center guidelines.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-amber-300 flex items-center gap-1">
              <span>View Early Voting Schedule</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/ballot-drop-boxes-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white border-2 border-emerald-400/70 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300">
                Drop Box Locator &amp; Delivery Laws
              </span>
              <h3 className="text-lg font-black mt-1 text-white">
                Ballot Drop Boxes &amp; Family Delivery Guide
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                Drop box availability, who can legally deliver your ballot (avoiding felony penalties in TX/FL/GA), witness/notary rules, and ADA curbside voting.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-emerald-300 flex items-center gap-1">
              <span>Inspect Drop Box Rules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/line-rights-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-rose-950 via-slate-950 to-indigo-950 text-white border-2 border-rose-500/70 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-300">
                Emergency Polling Place Protections
              </span>
              <h3 className="text-lg font-black mt-1 text-white">
                In Line When Polls Close? 50-State Statutory Rights
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                State laws mandating your right to vote if you are in line before closing time, end-of-line marking procedures, and 1-click legal hotlines (866-OUR-VOTE).
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-rose-300 flex items-center gap-1">
              <span>Know Your Line Rights</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/military-overseas-voting-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white border border-blue-400/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                UOCAVA &amp; FWAB Emergency Guide
              </span>
              <h3 className="text-lg font-black mt-1 text-white">
                Military &amp; Overseas Absentee Voting Guide
              </h3>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                45-day federal ballot dispatch rules (Sept 19, 2026), FPCA registration deadlines, electronic return permissions, and backup write-in ballots.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-blue-300 flex items-center gap-1">
              <span>Open Military &amp; Expat Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/primary-calendar-2026"
            className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-slate-700 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                March – Sept 2026 Schedule
              </span>
              <h3 className="text-lg font-black mt-1">
                2026 State Primary Election Calendar
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Chronological 50-state schedule of 2026 primary election dates, runoff dates, and Open vs. Closed primary rules.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-emerald-300 flex items-center gap-1">
              <span>View 2026 Primary Dates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/tools/employer-voting-leave-notice"
            className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white border border-indigo-700/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                Interactive Legal Tool
              </span>
              <h3 className="text-lg font-black mt-1">
                Paid Time Off to Vote HR Notice Generator
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Generate a legally cited notice for your boss quoting your state&apos;s exact voting leave statute (e.g., TX Elec. Code § 276.004).
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-amber-300 flex items-center gap-1">
              <span>Launch Generator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/50-state-comparison-matrix"
            className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white border border-blue-700/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                Schema.org/Dataset Indexed
              </span>
              <h3 className="text-lg font-black mt-1">
                50-State + D.C. Statutory Matrix
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Filter all 51 jurisdictions by Same-Day Registration, Strict Photo ID, Paid Voting Leave, Poll Hours, and State Holidays.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-emerald-300 flex items-center gap-1">
              <span>Explore 51-State Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/voter-eligibility-guide"
            className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-700 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                Students • Military • Accessibility
              </span>
              <h3 className="text-lg font-black mt-1">
                2026 Special Voter Eligibility Guide
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Campus dorm vs. home-state voting (Symm v. US), overseas military UOCAVA ballots (FVAP), and felon voting restoration.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-blue-300 flex items-center gap-1">
              <span>Read Eligibility Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* State Directory Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              State-By-State 2026 Voting Portals
            </h2>
            <p className="text-sm text-slate-600">
              Select your state to review statutory deadlines, photo ID laws, and official Secretary of State links.
            </p>
          </div>
          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            50 States + D.C.
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {ALL_STATES_LIST.map((state) => (
            <Link
              key={state.slug}
              href={`/states/${state.slug}`}
              className="group p-3.5 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-blue-600">
                    {state.postalCode}
                  </span>
                  {state.battleground && (
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded">
                      Key
                    </span>
                  )}
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 mt-1">
                  {state.name}
                </div>
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-3">
                <span>View Rules</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Common Questions About Election Day 2026
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Verified, non-partisan answers optimized for voice search and answer engines.
          </p>
        </div>

        <div className="space-y-4">
          {SITE_FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-950 flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  Q
                </span>
                <span>{faq.question}</span>
              </h3>
              <div className="mt-3 pl-8">
                <div className="p-3 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-lg text-sm font-bold text-slate-900 mb-2">
                  {faq.shortAnswer}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.detailedAnswer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture / Retention */}
      <div className="max-w-5xl mx-auto px-4">
        <LeadCapture />
      </div>

      {/* Bottom Ad */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <AdPlacement format="leaderboard" slotId="home-bottom-leaderboard" />
      </div>
    </>
  );
}
