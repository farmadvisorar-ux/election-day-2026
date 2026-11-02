import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { LeadCapture } from '../../components/LeadCapture';
import { JsonLd } from '../../components/JsonLd';
import {
  Calendar,
  Building2,
  GraduationCap,
  Mail,
  DollarSign,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Is Election Day 2026 a Federal Holiday? Banks, Schools & Mail Status',
  description:
    'Is Election Day 2026 a federal holiday? Find out if banks, public schools, post offices, and stock markets are open on Tuesday, November 3, 2026, plus state-by-state holiday laws.',
  keywords: [
    'is election day 2026 a federal holiday',
    'are banks closed on election day 2026',
    'are schools closed on election day 2026',
    'does the mail run on election day 2026',
    'is post office open on election day 2026',
    'election day state holidays list',
  ],
};

export default function IsItAHolidayPage() {
  const holidayFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Election Day 2026 a federal holiday?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, Election Day 2026 (Tuesday, November 3, 2026) is NOT a federal holiday in the United States. Federal offices, the U.S. Postal Service, and federal courts remain open.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are banks open on Election Day 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, banks are open on Election Day. Because Election Day is not on the Federal Reserve holiday schedule, national commercial banks like Chase, Bank of America, Wells Fargo, and Citibank operate during normal business hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are public schools closed on Election Day 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'School closures depend entirely on your local school district. Many public schools close for teacher in-service days or because school gymnasiums serve as neighborhood polling places.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the post office deliver mail on Election Day 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the United States Postal Service (USPS) operates normal mail delivery and regular post office retail window hours on Election Day.',
        },
      },
    ],
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://electionguide2026.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Is Election Day a Federal Holiday?',
        item: 'https://electionguide2026.org/is-it-a-holiday',
      },
    ],
  };

  const stateHolidayData = [
    { state: 'Delaware', status: 'Legal State Holiday', details: 'State offices closed; general election is a legal state holiday.' },
    { state: 'Hawaii', status: 'Legal State Holiday', details: 'Declared an official state holiday across all islands.' },
    { state: 'Illinois', status: 'Civic State Holiday', details: 'State schools and non-essential state government offices closed.' },
    { state: 'Maryland', status: 'Legal State Holiday', details: 'Public offices and banks may close or operate on modified schedules.' },
    { state: 'New York', status: 'Public Holiday', details: 'Public schools frequently closed; state employees receive voting leave.' },
    { state: 'Virginia', status: 'Legal State Holiday', details: 'State agencies closed (replaced former Lee-Jackson Day).' },
    { state: 'West Virginia', status: 'Legal State Holiday', details: 'Declared legal state holiday for general elections.' },
    { state: 'California', status: 'Not a Holiday', details: 'State offices open, but state law grants up to 2 hours paid voting leave.' },
    { state: 'Texas', status: 'Not a Holiday', details: 'State offices open; employers must provide voting accommodation.' },
    { state: 'Florida', status: 'Not a Holiday', details: 'State offices, schools, and private businesses operate on normal schedules.' },
  ];

  return (
    <>
      <JsonLd data={holidayFaqSchema} />
      <JsonLd data={breadcrumbsSchema} />

      {/* Header Breadcrumb & Title */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-blue-300">Holiday Status</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Is Election Day 2026 a Federal Holiday?
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300">
            Official operational status for federal agencies, post offices, banks, Wall Street, and public schools on Tuesday, November 3, 2026.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AEO Direct Answer Box */}
        <DirectAnswerBox
          question="Is Election Day 2026 a federal holiday in the United States?"
          directAnswer="No. Election Day (Tuesday, November 3, 2026) is NOT a federal holiday."
          supportingText="Federal offices, the U.S. Postal Service, federal courts, and national commercial banks remain OPEN and operate on normal schedules. However, several states (including Delaware, Hawaii, Illinois, Maryland, New York, and Virginia) recognize Election Day as an official state holiday."
          statuteOrSource="5 U.S. Code § 6103 - Federal Holidays"
          sourceUrl="https://www.law.cornell.edu/uscode/text/5/6103"
        />

        {/* Top Ad Unit */}
        <AdPlacement format="leaderboard" slotId="holiday-top-ad" />

        {/* Status Breakdown Grid */}
        <section className="my-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            What Is Open and Closed on Election Day 2026?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Banks */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <DollarSign className="w-5 h-5 text-emerald-600" />
                  <span>Banks & Financial Markets</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  OPEN
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Federal Reserve Bank does not observe Election Day as a bank holiday. Major retail branches (Chase, Wells Fargo, BofA, Citibank) and the NYSE and NASDAQ stock exchanges maintain normal trading and operating hours.
              </p>
            </div>

            {/* Post Office */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>USPS Mail Delivery</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  OPEN
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular residential mail carriers run their usual delivery routes, and local post office retail counters remain open. You can mail absentee or mail-in ballots through standard USPS collection boxes on Election Day.
              </p>
            </div>

            {/* Public Schools */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <GraduationCap className="w-5 h-5 text-amber-600" />
                  <span>Public K-12 Schools</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  VARIES
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Individual school districts set their own academic calendars. Hundreds of school districts across the country cancel classes for student safety when campus gymnasiums or auditoriums serve as polling places for the public.
              </p>
            </div>

            {/* Private Workplaces */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                  <span>Workplaces & Private Businesses</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                  OPEN
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Private companies and retail stores operate regular schedules. However, roughly 30 states legally mandate that employers offer employees 1 to 3 hours of paid or unpaid time off to vote if their work shift overlaps polling hours.
              </p>
            </div>
          </div>
        </section>

        {/* In-Article Ad Unit */}
        <AdPlacement format="in-article" slotId="holiday-mid-article" />

        {/* State-by-State Legal Holiday Table */}
        <section className="my-10">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
            State-by-State Election Day Holiday Status (2026)
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            While Congress has not enacted a federal holiday, states have the sovereign constitutional authority to establish their own official holidays.
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-bold text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4">Legal Status</th>
                  <th className="py-3 px-4">Impact on Offices & Workers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {stateHolidayData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">{row.state}</td>
                    <td className="py-3 px-4">
                      {row.status.includes('Holiday') ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                          <CheckCircle2 className="w-3 h-3" />
                          {row.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          <XCircle className="w-3 h-3" />
                          {row.status}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-600">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Legislative Background: Why Isn't It a Federal Holiday? */}
        <article className="prose prose-slate max-w-none my-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Why Isn't Election Day a Federal Holiday?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Congress currently designates 11 official federal holidays under <strong>5 U.S.C. § 6103</strong> (including New Year’s Day, Martin Luther King Jr. Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Veterans Day, Thanksgiving, and Christmas).
          </p>
          <p className="text-slate-700 leading-relaxed">
            Several legislative efforts—such as the <em>Freedom to Vote Act</em> and the <em>Election Day Holiday Act</em>—have been introduced in Congress to designate general election days as national federal holidays. Proponents argue that making Election Day a holiday increases voter turnout by eliminating workplace conflicts, particularly for low-income and hourly workers. Opponents express concerns over the economic cost of closing federal agencies and financial markets, arguing that widespread early in-person voting (available in 47 states) and universal mail-in ballots have already reduced the necessity of voting exclusively on a single Tuesday.
          </p>
        </article>

        {/* Lead Capture */}
        <LeadCapture />

        {/* Return Hub Link */}
        <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1">
            <span>← Return to Election Day 2026 Master Hub</span>
          </Link>
          <Link href="/countdown" className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1">
            <span>Live Countdown Timer →</span>
          </Link>
        </div>
      </div>
    </>
  );
}
