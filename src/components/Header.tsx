'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Vote, Menu, X, Clock, Calendar, CheckSquare, ShieldCheck, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top E-E-A-T Civics Bar */}
      <div className="bg-slate-900 text-white text-[11px] font-medium py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Independent Non-Partisan Civic Guide • Tuesday, November 3, 2026 Midterm Elections</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-300">
            <Link href="/es/dia-de-las-elecciones-2026" className="text-amber-300 hover:text-white font-bold">
              🇺🇸/🇪🇸 Español
            </Link>
            <span>•</span>
            <Link href="/cities" className="text-emerald-300 hover:text-white font-bold">
              153 U.S. Cities
            </Link>
            <span>•</span>
            <Link href="/ballot-measures-2026" className="hover:text-white font-semibold">
              2026 Propositions
            </Link>
            <span>•</span>
            <Link
              href="/first-time-voter-guide-2026"
              className="hover:text-white font-semibold"
            >
              First-Time Voter
            </Link>
            <span>•</span>
            <Link
              href="/voter-id-validator-2026"
              className="text-amber-300 hover:text-white font-bold"
            >
              ID Validator
            </Link>
            <span>•</span>
            <Link
              href="/widgets"
              className="text-emerald-300 hover:text-white font-bold"
            >
              Widgets
            </Link>
            <span>•</span>
            <Link href="/advertise" className="text-blue-300 hover:text-white font-bold">
              Sponsor
            </Link>
            <span>•</span>
            <Link href="/editorial-policy" className="hover:text-white flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Editorial Policy</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Vote className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-slate-950 flex items-center gap-1.5">
                <span>ElectionDay</span>
                <span className="text-blue-600">2026</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-1.5 py-0.5 rounded">
                  HUB
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase">
                U.S. Midterms • Polls • Deadlines
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-bold text-slate-700">
            <Link
              href="/is-it-a-holiday"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>Is It A Holiday?</span>
            </Link>

            <Link
              href="/countdown"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <Clock className="w-4 h-4 text-slate-500" />
              <span>Countdown</span>
            </Link>

            <Link
              href="/voter-questions"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <span>Voter Q&A</span>
            </Link>

            <Link
              href="/how-to-vote-2026"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <span>How to Vote</span>
            </Link>

            <Link
              href="/tools/employer-voting-leave-notice"
              className="hover:text-blue-600 transition-colors"
            >
              <span>Work Leave Law</span>
            </Link>

            <Link
              href="/50-state-comparison-matrix"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>50-State Matrix</span>
            </Link>

            <Link
              href="/sample-ballot-2026"
              className="hover:text-blue-600 transition-colors flex items-center gap-1 text-blue-700 font-black"
            >
              <span>Sample Ballot</span>
            </Link>

            <Link
              href="/ballot-problem-solver"
              className="hover:text-red-600 transition-colors flex items-center gap-1 text-red-700 font-black"
            >
              <span>Cure Ballot</span>
            </Link>

            <Link
              href="/majority-calculator-2026"
              className="hover:text-indigo-600 transition-colors flex items-center gap-1 text-indigo-700 font-black"
            >
              <span>2026 Simulator</span>
            </Link>

            <Link
              href="/poll-closing-times-2026"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <span>Poll Closing Times</span>
            </Link>

            <Link
              href="/ask"
              className="hover:text-blue-600 transition-colors flex items-center gap-1 text-amber-600 font-black"
            >
              <span>Ask AI</span>
            </Link>

            <Link
              href="/my-voting-plan"
              className="hover:text-emerald-700 transition-colors flex items-center gap-1 text-emerald-700"
            >
              <span>My Plan</span>
            </Link>

            <Link
              href="/news-and-pulse-2026"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <span>2026 Pulse</span>
            </Link>

            <Link
              href="/counties"
              className="hover:text-blue-600 transition-colors flex items-center gap-1 text-blue-700"
            >
              <span>3,143 Counties</span>
            </Link>

            <Link
              href="/districts"
              className="hover:text-indigo-600 transition-colors flex items-center gap-1 text-indigo-700"
            >
              <span>435 Districts</span>
            </Link>

            <Link
              href="/find-my-district"
              className="hover:text-blue-600 transition-colors flex items-center gap-1 text-blue-700 font-extrabold"
            >
              <span>Find My District</span>
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/#voter-tool"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
            >
              <CheckSquare className="w-4 h-4" />
              <span>Can I Vote?</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/is-it-a-holiday"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Is Election Day a Federal Holiday?
          </Link>
          <Link
            href="/countdown"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Live 2026 Election Countdown
          </Link>
          <Link
            href="/voter-questions"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Voter FAQ & Voice Search (50+ Answers)
          </Link>
          <Link
            href="/how-to-vote-2026"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            How to Register & Vote Step-by-Step
          </Link>
          <Link
            href="/races/senate-2026"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            2026 Senate Races Breakdown
          </Link>
          <Link
            href="/races/governor-2026"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            2026 Governor Races Breakdown
          </Link>
          <Link
            href="/states/pennsylvania"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            State Voting Deadlines & Hubs
          </Link>
          <Link
            href="/editorial-policy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg"
          >
            Non-Partisan Editorial Standards
          </Link>
        </div>
      )}
    </header>
  );
};
