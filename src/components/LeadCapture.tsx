'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Shield, Bell } from 'lucide-react';

export const LeadCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [stateChoice, setStateChoice] = useState('PA');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <aside
      aria-label="Voter Alert Subscription"
      className="my-10 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-8 text-white shadow-xl border border-blue-900/50"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
          <Bell className="w-4 h-4 text-amber-400" />
          <span>Never Miss a DeadLine</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          Get Free 2026 Voter Registration & Ballot Reminders
        </h3>
        <p className="text-sm md:text-base text-slate-300 mt-2 mb-6">
          Over 35% of non-voters miss deadlines because rules change between cycles. Join 85,000+ informed citizens receiving state-specific voting alerts and non-partisan candidate ballot cheat sheets.
        </p>

        {submitted ? (
          <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-xl p-6 text-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <h4 className="text-lg font-bold text-white">You are all set!</h4>
            <p className="text-xs text-emerald-200 mt-1">
              Check your inbox for your 2026 State Voter Preparation Checklist. We will ping you before your state's registration and early voting windows open.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your personal email address..."
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />

              <select
                value={stateChoice}
                onChange={(e) => setStateChoice(e.target.value)}
                aria-label="Select your state for voter reminders"
                className="bg-slate-800 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="PA">Pennsylvania (PA)</option>
                <option value="TX">Texas (TX)</option>
                <option value="GA">Georgia (GA)</option>
                <option value="AZ">Arizona (AZ)</option>
                <option value="OH">Ohio (OH)</option>
                <option value="FL">Florida (FL)</option>
                <option value="MI">Michigan (MI)</option>
                <option value="NV">Nevada (NV)</option>
                <option value="NC">North Carolina (NC)</option>
                <option value="WI">Wisconsin (WI)</option>
                <option value="US">Other / All 50 States</option>
              </select>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>Get Reminders</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                100% Non-Partisan Guarantee. Zero political campaign spam. Unsubscribe in 1 click at any time.
              </span>
            </div>
          </form>
        )}
      </div>
    </aside>
  );
};
