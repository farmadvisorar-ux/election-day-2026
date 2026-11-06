'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ALL_STATES_LIST } from '../data/states';
import { Bell, CheckCircle, Shield, Calendar, Download } from 'lucide-react';

interface LeadCaptureProps {
  stateName?: string;
}

const STORAGE_KEY = 'election2026_subscriber_v1';

export const LeadCapture: React.FC<LeadCaptureProps> = ({ stateName }) => {
  const defaultState =
    ALL_STATES_LIST.find((s) => s.name.toLowerCase() === (stateName || '').toLowerCase())?.slug ||
    'california';

  const [email, setEmail] = useState('');
  const [selectedState, setSelectedState] = useState(defaultState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subData, setSubData] = useState<{
    subscriptionId?: string;
    stateName?: string;
    pollingHours?: string;
    registrationDeadline?: string;
    icsContent?: string;
  } | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.email) {
          setEmail(parsed.email);
          setSubData(parsed);
          setSubmitted(true);
        }
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, stateSlug: selectedState }),
      });
      const data = await res.json();
      if (data.ok) {
        const record = { email, ...data };
        setSubData(record);
        setSubmitted(true);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
        } catch {
          // ignore
        }
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadIcs = () => {
    if (!subData?.icsContent) return;
    const blob = new Blob([subData.icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `election-day-2026-${selectedState}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl border border-blue-800/50 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-4">
          <Bell className="w-3.5 h-3.5 text-amber-400" />
          <span>2026 Civic Deadline Reminder &amp; Calendar Sync</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
          Never Miss Your {stateName ? `${stateName} ` : ''}2026 Voting Deadlines
        </h3>
        <p className="text-blue-200 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
          Get a one-time non-partisan alert 7 days before your state’s voter registration cutoff, early voting start date, and Election Day (November 3, 2026)—plus an instant <strong>.ICS Calendar Sync</strong>.
        </p>

        {submitted ? (
          <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-2xl p-6 max-w-xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3 text-emerald-200 font-bold text-sm">
              <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
              <span>
                Reminder active for <strong>{email}</strong> ({subData?.stateName || stateName || '2026 Midterms'})!
              </span>
            </div>

            {subData?.registrationDeadline && (
              <div className="text-xs text-blue-100 bg-slate-950/50 rounded-xl p-3 border border-white/10">
                <strong>{subData.stateName} Registration Cutoff:</strong> {subData.registrationDeadline} •{' '}
                <strong>Nov 3 Polls:</strong> {subData.pollingHours}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3">
              {subData?.icsContent && (
                <button
                  type="button"
                  onClick={handleDownloadIcs}
                  className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs inline-flex items-center gap-1.5 shadow-md transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download 2026 .ICS Calendar Invite</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  try {
                    localStorage.removeItem(STORAGE_KEY);
                  } catch {
                    // ignore
                  }
                }}
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
              >
                Change State / Email
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
          >
            <select
              aria-label="Select your state for voting deadline alerts"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 sm:w-48"
            >
              {ALL_STATES_LIST.map((st) => (
                <option key={st.slug} value={st.slug} className="text-slate-900">
                  {st.name} ({st.postalCode})
                </option>
              ))}
            </select>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200/60 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm rounded-xl shadow-md transition-colors shrink-0 flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>{loading ? 'Activating...' : 'Get Free Alerts'}</span>
            </button>
          </form>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-blue-300/80 mt-4">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            <span>Zero spam. Zero partisan fundraising.</span>
          </div>
          <span>•</span>
          <Link href="/advertise" className="text-amber-300 hover:underline font-bold">
            Civic Nonprofits &amp; HR Brands: Sponsor a State Guide →
          </Link>
        </div>
      </div>
    </div>
  );
};
