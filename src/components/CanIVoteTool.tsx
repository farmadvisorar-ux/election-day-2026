'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { STATES_DATA, ALL_STATES_LIST, StateElectionData } from '../data/states';
import { CheckCircle2, AlertTriangle, ExternalLink, Calendar, CreditCard, ArrowRight, MapPin } from 'lucide-react';

export const CanIVoteTool: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string>('pennsylvania');
  const stateData: StateElectionData | undefined = STATES_DATA[selectedSlug];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
        <MapPin className="w-4 h-4 text-blue-600" />
        <span>Interactive Voter Eligibility & Deadline Finder</span>
      </div>

      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
        Can I Vote in the 2026 Midterm Elections?
      </h3>
      <p className="text-sm text-slate-600 mt-1 mb-6">
        Select your state to instantly inspect your registration deadlines, early voting dates, and voter ID rules.
      </p>

      {/* State Selector Dropdown */}
      <div className="max-w-md mb-6">
        <label htmlFor="state-select" className="block text-xs font-semibold text-slate-700 uppercase mb-2">
          Select Your Voting State:
        </label>
        <select
          id="state-select"
          value={selectedSlug}
          onChange={(e) => setSelectedSlug(e.target.value)}
          aria-label="Select your voting state"
          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
        >
          {ALL_STATES_LIST.map((st) => (
            <option key={st.slug} value={st.slug}>
              {st.name} ({st.postalCode}) {st.battleground ? '⭐ Key Battleground' : ''}
            </option>
          ))}
        </select>
      </div>

      {stateData ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Box 1: Registration Deadline */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase mb-1">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Registration Deadline</span>
              </div>
              <div className="text-base font-extrabold text-slate-900 mt-1">
                {stateData.registrationDeadline.online}
              </div>
              <p className="text-xs text-slate-600 mt-1.5">
                {stateData.registrationDeadline.notes}
              </p>
              {stateData.registrationDeadline.sameDayRegistration && (
                <span className="inline-block mt-2 px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded">
                  ✓ Same-Day Registration Available
                </span>
              )}
            </div>

            {/* Box 2: Early Voting Window */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Early In-Person Voting</span>
              </div>
              <div className="text-base font-extrabold text-slate-900 mt-1">
                {stateData.earlyVoting.starts} – {stateData.earlyVoting.ends}
              </div>
              <p className="text-xs text-slate-600 mt-1.5">
                {stateData.earlyVoting.description}
              </p>
            </div>

            {/* Box 3: Voter ID Requirement */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase mb-1">
                <CreditCard className="w-4 h-4 text-purple-600" />
                <span>Voter ID Law</span>
              </div>
              <div className="text-base font-extrabold text-slate-900 mt-1">
                {stateData.voterId.type}
              </div>
              <p className="text-xs text-slate-600 mt-1.5 line-clamp-3">
                {stateData.voterId.description}
              </p>
            </div>
          </div>

          {/* Quick CTA Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <div className="text-left">
              <div className="text-sm font-bold text-blue-950">
                Official {stateData.name} Secretary of State Portal
              </div>
              <div className="text-xs text-blue-800">
                Verify your personal registration record & sample ballot on official `.gov` systems.
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={stateData.officialPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-lg transition-colors shadow-xs w-full sm:w-auto"
              >
                <span>Check Status on {stateData.postalCode}.gov</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href={`/states/${stateData.slug}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 transition-colors w-full sm:w-auto"
              >
                <span>Full {stateData.name} Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl text-center">
          <AlertTriangle className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <p className="text-sm text-amber-900 font-medium">
            State guide being compiled. Please refer to Vote.gov for federal voter lookup.
          </p>
        </div>
      )}
    </div>
  );
};
