'use client';

import React, { useState } from 'react';
import { STATES_DATA, ALL_STATES_LIST } from '../data/states';
import { Briefcase, Copy, Check, Mail, Scale, ShieldCheck, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const VotingLeaveGenerator: React.FC<{ initialStateSlug?: string }> = ({
  initialStateSlug = 'texas',
}) => {
  const [selectedSlug, setSelectedSlug] = useState(
    STATES_DATA[initialStateSlug] ? initialStateSlug : 'texas'
  );
  const [employeeName, setEmployeeName] = useState('');
  const [managerName, setManagerName] = useState('');
  const [requestedTime, setRequestedTime] = useState('7:00 AM – 9:00 AM');
  const [copied, setCopied] = useState(false);

  const state = STATES_DATA[selectedSlug] || STATES_DATA['texas'];

  const letterSubject = `Advance Notice of Statutory Voting Leave – Tuesday, November 3, 2026 (${state.workLeaveLaw.statuteCitation})`;

  const letterBody = `Dear ${managerName || '[Manager / HR Department]'},

I am writing to provide advance notification that I will be exercising my right to vote in the General Midterm Election on Tuesday, November 3, 2026, during the window of ${requestedTime}.

In accordance with ${state.name} law (${state.workLeaveLaw.statuteCitation}), eligible voters are protected as follows:
"${state.workLeaveLaw.summary}" (${state.workLeaveLaw.hoursAllowed}).

Official polling hours in ${state.name} on November 3, 2026 are ${state.pollingHours} (${state.timezone}). I have scheduled this time to minimize any disruption to our team's workflow and will return promptly upon casting my ballot.

Thank you for your support of civic participation.

Sincerely,
${employeeName || '[Your Full Name]'}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${letterSubject}\n\n${letterBody}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:?subject=${encodeURIComponent(letterSubject)}&body=${encodeURIComponent(letterBody)}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">
        <Scale className="w-4 h-4 text-indigo-600" />
        <span>50-State Statutory Labor Law Generator</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
        Employer Voting Leave Legal Notice Generator
      </h2>
      <p className="text-sm text-slate-600 mt-1 mb-6">
        Most state voting leave laws require employees to give advance notice before Election Day. Select your state below to generate a compliant HR notice citing your state's exact labor and election statute.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="leave-state" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              1. Select Your State of Employment:
            </label>
            <select
              id="leave-state"
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              {ALL_STATES_LIST.map((st) => (
                <option key={st.slug} value={st.slug}>
                  {st.name} ({st.postalCode}) — {st.paidLeave ? '✓ Paid Leave Statute' : 'Protected Voting Leave'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="emp-name" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              2. Your Full Name (Optional):
            </label>
            <input
              id="emp-name"
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="e.g., Jordan Taylor"
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900"
            />
          </div>

          <div>
            <label htmlFor="mgr-name" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              3. Supervisor or HR Name (Optional):
            </label>
            <input
              id="mgr-name"
              type="text"
              value={managerName}
              onChange={(e) => setManagerName(e.target.value)}
              placeholder="e.g., Alex Morgan / Human Resources"
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900"
            />
          </div>

          <div>
            <label htmlFor="req-window" className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              4. Requested Voting Time Window:
            </label>
            <select
              id="req-window"
              value={requestedTime}
              onChange={(e) => setRequestedTime(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900"
            >
              <option value="7:00 AM – 9:00 AM (Beginning of Shift)">7:00 AM – 9:00 AM (Beginning of Shift)</option>
              <option value="8:00 AM – 10:00 AM (Morning Window)">8:00 AM – 10:00 AM (Morning Window)</option>
              <option value="12:00 PM – 2:00 PM (Midday Window)">12:00 PM – 2:00 PM (Midday Window)</option>
              <option value="3:00 PM – 5:00 PM (End of Shift)">3:00 PM – 5:00 PM (End of Shift)</option>
              <option value="4:00 PM – 6:00 PM (Evening Window)">4:00 PM – 6:00 PM (Evening Window)</option>
            </select>
          </div>

          {/* State Statutory Law Card */}
          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-extrabold text-indigo-950 uppercase">
                {state.name} Statutory Protection
              </span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 bg-white text-indigo-800 rounded border border-indigo-200">
                {state.workLeaveLaw.statuteCitation}
              </span>
            </div>
            <p className="text-xs font-bold text-emerald-800 mt-1">
              Allowance: {state.workLeaveLaw.hoursAllowed}
            </p>
            <p className="text-xs text-indigo-900/80 mt-1 leading-relaxed">
              {state.workLeaveLaw.summary}
            </p>
            <div className="mt-2 pt-2 border-t border-indigo-200/60 flex items-center justify-between text-[11px]">
              <Link
                href={`/states/${state.slug}/holiday-work-laws`}
                className="font-bold text-indigo-700 hover:underline"
              >
                Read Full {state.name} Holiday & Work Law Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Live Preview & Copy Box */}
        <div className="flex flex-col justify-between bg-slate-950 text-slate-100 rounded-xl p-5 border border-slate-800">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Generated Statutory HR Notice
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {state.postalCode} • {state.workLeaveLaw.statuteCitation}
              </span>
            </div>

            <div className="text-xs font-bold text-white mb-2 bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400">Subject:</span> {letterSubject}
            </div>

            <pre className="text-xs font-sans whitespace-pre-wrap text-slate-200 leading-relaxed bg-slate-900/60 p-3.5 rounded-lg border border-slate-800/80">
              {letterBody}
            </pre>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleCopy}
              className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Legal Notice!' : 'Copy Notice Text'}</span>
            </button>

            <a
              href={mailtoUrl}
              className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Open in Email App</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
