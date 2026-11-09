'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  CheckCircle2,
  MapPin,
  Building2,
  Users,
  Sun,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Filter,
} from 'lucide-react';
import {
  EARLY_VOTING_CALENDAR_DATA,
  EARLY_VOTING_BENEFITS,
  StateEarlyVotingSchedule,
} from '../../data/earlyVoting2026';
import { ALL_STATES_LIST } from '../../data/states';
import { DirectAnswerBox } from '../../components/DirectAnswerBox';
import { AdPlacement } from '../../components/AdPlacement';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { JsonLd } from '../../components/JsonLd';

export default function EarlyVotingCalendarPage() {
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('georgia');
  const [activeFilter, setActiveFilter] = useState<'all' | 'weekend' | 'sunday' | 'voteCenter'>('all');

  const selectedSchedule: StateEarlyVotingSchedule =
    EARLY_VOTING_CALENDAR_DATA[selectedStateSlug] || {
      stateSlug: selectedStateSlug,
      stateName: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.name || 'Selected State',
      postalCode: ALL_STATES_LIST.find((s) => s.slug === selectedStateSlug)?.postalCode || 'US',
      startDate2026: 'Mid-to-Late October 2026',
      endDate2026: 'Friday, October 30 or Monday, November 2, 2026',
      totalDays: 14,
      saturdayVoting: 'County Discretion / Large Counties',
      sundayVoting: 'County Discretion / Permitted',
      soulsToThePollsStatus: 'Check with local county election office for Sunday hours',
      hoursStandard: 'Standard municipal/county clerk business hours',
      voteCenterModel: 'Any County Vote Center',
      statuteCitation: 'State Election Code (Early In-Person Voting Window)',
      idRequiredAtCheckIn: 'State-approved photo ID or personal identification',
      specialRules: 'Check your county board of elections portal for official early voting branch locations, daily hours, and sample ballots.',
    };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentService',
        name: '2026 Early In-Person Voting Calendar and Weekend Voting Directory',
        serviceType: 'Advance In-Person Voting Logistics and Schedules',
        provider: {
          '@type': 'Organization',
          name: 'ElectionDay2026.org & State Boards of Elections',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'When does early voting start for the 2026 Midterm Elections?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Early voting begins as early as Friday, September 18, 2026 in states like Virginia, South Dakota, and Minnesota. Most states launch early in-person voting in mid-to-late October 2026 (typically 2 to 3 weeks before Election Day).',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I vote on weekends during early voting (Souls to the Polls)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. States including Georgia, Florida, North Carolina, Michigan, and Nevada mandate Saturday and/or Sunday early voting. Weekend "Souls to the Polls" voting is widely organized by civic and faith groups on the final two Sundays before Election Day (October 25 and November 1, 2026).',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I vote at any early voting center in my county, or only my neighborhood precinct?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In states using the Vote Center model (such as CA, TX, GA, NV, AZ, CO, and NC), registered voters can cast an early in-person ballot at ANY designated early voting center anywhere in their county. On Election Day, some states require you to vote at your assigned home precinct.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaGraph} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
              <Calendar className="w-3.5 h-3.5" />
              Advance Voting Schedules • 47 Early Voting States
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              2026 Early Voting Calendar &amp; <span className="text-amber-300">Weekend Hours</span>
            </h1>
            <p className="mt-3 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium">
              State-by-state start dates, mandatory Saturday schedules, Sunday &quot;Souls to the Polls&quot; hours, and county Vote Center locations for the November 3, 2026 elections.
            </p>
          </div>

          {/* Direct Answer Box for Position #0 and AI Engines */}
          <div className="max-w-4xl mx-auto">
            <DirectAnswerBox
              question="When can I vote early in person for the 2026 midterms?"
              directAnswer="Early voting opens as early as September 18, 2026 in Virginia, South Dakota, and Minnesota, expanding to 47 states throughout October. 47 states offer early in-person voting or all-mail voting before Election Day, with average windows lasting 10 to 45 days."
              supportingText="States like Georgia, Florida, North Carolina, Michigan, and Nevada mandate early weekend voting on Saturdays and Sundays. In most early voting states, you can vote at any official Vote Center in your county, avoiding Election Day precinct queues."
              statuteOrSource="Fla. Stat. § 101.657, O.C.G.A. § 21-2-385, Tex. Elec. Code § 85.001, Mich. Const. art. II, § 4"
              sourceUrl="https://www.ncsl.org/elections-and-campaigns/early-in-person-voting"
            />
          </div>
        </div>
      </section>

      {/* 4 Benefits Grid */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {EARLY_VOTING_BENEFITS.map((b, idx) => (
            <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs font-black text-indigo-700 uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Benefit #{idx + 1}</span>
              </div>
              <div className="text-sm font-black text-slate-900 mt-1">{b.title}</div>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Interactive State Selector & Schedule Display */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-700">
                50-State Early Voting Directory
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Select Your State for 2026 Early Voting Dates &amp; Weekend Rules:
              </h2>
            </div>

            <div className="w-full sm:w-72">
              <label htmlFor="state-early-select" className="sr-only">Select State</label>
              <select
                id="state-early-select"
                value={selectedStateSlug}
                onChange={(e) => setSelectedStateSlug(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm font-bold bg-slate-50 border-2 border-indigo-600 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-700"
              >
                {ALL_STATES_LIST.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} ({s.postalCode})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected State Schedule Card */}
          <div className="mt-6 bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-600" />
                <h3 className="text-xl font-black text-slate-900">
                  {selectedSchedule.stateName} 2026 Early Voting Schedule
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-100 text-indigo-900 border border-indigo-200 font-mono">
                {selectedSchedule.statuteCitation}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Early Voting Begins</div>
                <div className="text-sm font-black text-slate-900 mt-1">{selectedSchedule.startDate2026}</div>
                <p className="text-[11px] text-slate-500 mt-1">First day of in-person advance voting.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Early Voting Ends</div>
                <div className="text-sm font-black text-slate-900 mt-1">{selectedSchedule.endDate2026}</div>
                <p className="text-[11px] text-slate-500 mt-1">Final day before Election Day.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Saturday Voting Rule</div>
                <div className="text-sm font-black text-slate-900 mt-1">{selectedSchedule.saturdayVoting}</div>
                <p className="text-[11px] text-slate-500 mt-1">Weekend scheduling policy.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">Sunday Voting (Souls to Polls)</div>
                <div className="text-sm font-black text-slate-900 mt-1 flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>{selectedSchedule.sundayVoting}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">{selectedSchedule.soulsToThePollsStatus}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase mb-1">Vote Center Model</div>
                <div className="text-sm font-bold text-indigo-700">{selectedSchedule.voteCenterModel}</div>
                <p className="text-xs text-slate-600 mt-1">
                  In Vote Center jurisdictions, you can cast your ballot at any county early voting hub near your home, job, or campus.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase mb-1">ID Required at Check-In</div>
                <div className="text-sm font-bold text-slate-900">{selectedSchedule.idRequiredAtCheckIn}</div>
                <p className="text-xs text-slate-600 mt-1">
                  Present approved identification to election workers when signing the electronic pollbook.
                </p>
              </div>
            </div>

            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-950 flex items-start gap-2">
              <Building2 className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
              <div>
                <strong>{selectedSchedule.stateName} Early Voting Guidelines:</strong> {selectedSchedule.specialRules}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="max-w-5xl mx-auto px-4 my-6">
        <AdPlacement format="leaderboard" slotId="early-voting-mid-ad" />
      </div>

      {/* Link to Related Tools */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/sample-ballot-2026"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Printable Cheat Sheet</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Build Your 2026 Sample Ballot</h3>
              <p className="text-xs text-slate-500 mt-1">Preview candidates before heading to the early voting booth.</p>
            </div>
            <span className="mt-3 text-xs font-bold text-blue-600 flex items-center gap-1">
              <span>Build Sample Ballot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/voter-id-validator-2026"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Document Checker</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Will My ID Work to Vote Early?</h3>
              <p className="text-xs text-slate-500 mt-1">Verify driver’s licenses, student IDs, and expiration rules.</p>
            </div>
            <span className="mt-3 text-xs font-bold text-amber-600 flex items-center gap-1">
              <span>Validate Your ID</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/ballot-drop-boxes-2026"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Drop Box Locator</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Ballot Drop Boxes &amp; Delivery Rules</h3>
              <p className="text-xs text-slate-500 mt-1">Drop-off locations, authorized family delivery, and curbside rights.</p>
            </div>
            <span className="mt-3 text-xs font-bold text-emerald-600 flex items-center gap-1">
              <span>Drop Box Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Affiliates */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AffiliatePartners />
      </section>
    </>
  );
}
