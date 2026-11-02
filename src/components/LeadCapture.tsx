'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_STATES_LIST, STATES_DATA } from '../data/states';
import { Mail, CheckCircle2, Shield, Bell, Printer, ExternalLink, ArrowRight } from 'lucide-react';

export const LeadCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [stateSlug, setStateSlug] = useState('pennsylvania');
  const [submitted, setSubmitted] = useState(false);

  const selectedState = STATES_DATA[stateSlug] || STATES_DATA['pennsylvania'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <aside
      aria-label="Voter Alert Subscription & Cheat Sheet Generator"
      className="my-10 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-8 text-white shadow-xl border border-blue-900/50"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
          <Bell className="w-4 h-4 text-amber-400" />
          <span>Free 2026 Personalized Voter Cheat Sheet &amp; Alerts</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Unlock Your 2026 State Voter Checklist &amp; Deadline Alerts
        </h3>
        <p className="text-sm md:text-base text-slate-300 mt-2 mb-6">
          Over 35% of non-voters miss deadlines because rules change between election cycles. Select your state and enter your email to unlock your printable <strong>2026 Official State Voter Cheat Sheet</strong> and receive registration cutoff reminders.
        </p>

        {submitted && selectedState ? (
          <div className="bg-white text-slate-900 rounded-2xl p-6 border-2 border-emerald-500 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="text-lg font-black text-slate-900">
                    2026 Official {selectedState.name} ({selectedState.postalCode}) Voter Cheat Sheet
                  </h4>
                  <p className="text-xs text-slate-500">
                    Alerts registered for <strong>{email}</strong> • Tuesday, November 3, 2026 General Election
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => window.print()}
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save Cheat Sheet</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold uppercase text-slate-500 text-[10px]">Election Day Poll Hours</div>
                <div className="text-sm font-black text-blue-700 mt-0.5">
                  {selectedState.pollingHours} ({selectedState.timezone})
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold uppercase text-slate-500 text-[10px]">Voter Registration Cutoff</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">
                  {selectedState.registrationDeadline.online}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold uppercase text-slate-500 text-[10px]">Early In-Person Voting</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">
                  {selectedState.earlyVoting.starts} – {selectedState.earlyVoting.ends}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold uppercase text-slate-500 text-[10px]">Voter ID &amp; Work Leave Law</div>
                <div className="text-sm font-black text-slate-900 mt-0.5">
                  {selectedState.voterId.type} • {selectedState.workLeaveLaw.statuteCitation}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 text-xs">
              <Link
                href={`/states/${selectedState.slug}#counties`}
                className="font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>Select Your {selectedState.name} County Election Board</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={selectedState.officialPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
              >
                <span>Verify on {selectedState.officialPortal.name} (.gov)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />

              <select
                value={stateSlug}
                onChange={(e) => setStateSlug(e.target.value)}
                aria-label="Select your state for voter reminders"
                className="bg-slate-800 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {ALL_STATES_LIST.map((st) => (
                  <option key={st.slug} value={st.slug}>
                    {st.name} ({st.postalCode})
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Unlock Cheat Sheet</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                100% Non-Partisan Guarantee. Zero political campaign spam. Instant printable checklist.
              </span>
            </div>
          </form>
        )}
      </div>
    </aside>
  );
};
