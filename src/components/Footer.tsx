import React from 'react';
import Link from 'next/link';
import { Vote, Shield, ExternalLink, CheckCircle } from 'lucide-react';
import { ALL_STATES_LIST } from '../data/states';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Vote className="w-5 h-5" />
              </div>
              <span className="text-lg font-black text-white">ElectionDay2026.org</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated to non-partisan voter education, statutory deadlines, ballot requirements, and civic transparency for the November 3, 2026 U.S. Midterm General Elections.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <Shield className="w-4 h-4" />
              <span>100% Non-Partisan & Unaffiliated</span>
            </div>
          </div>

          {/* Core Hub Guides */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Essential 2026 Guides
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/is-it-a-holiday" className="hover:text-white transition-colors">
                  Is Election Day a Federal Holiday?
                </Link>
              </li>
              <li>
                <Link href="/countdown" className="hover:text-white transition-colors">
                  Live Midterm Countdown Timer
                </Link>
              </li>
              <li>
                <Link href="/races/senate-2026" className="hover:text-white transition-colors">
                  2026 Senate Map & Key Seats
                </Link>
              </li>
              <li>
                <Link href="/races/governor-2026" className="hover:text-white transition-colors">
                  2026 Gubernatorial Contests
                </Link>
              </li>
              <li>
                <Link href="/ask" className="text-amber-300 hover:text-white font-bold transition-colors">
                  Ask the 2026 Statutory Civic Answer Engine
                </Link>
              </li>
              <li>
                <Link href="/my-voting-plan" className="text-emerald-400 hover:text-white font-bold transition-colors">
                  My 2026 Personal Voting Plan &amp; ID Checker
                </Link>
              </li>
              <li>
                <Link href="/news-and-pulse-2026" className="text-blue-300 hover:text-white font-bold transition-colors">
                  2026 Midterm Pulse, Balance of Power &amp; Propositions
                </Link>
              </li>
              <li>
                <Link href="/counties" className="text-blue-400 hover:text-white font-bold transition-colors">
                  All 3,143 U.S. Counties Directory
                </Link>
              </li>
              <li>
                <Link href="/districts" className="text-indigo-400 hover:text-white font-bold transition-colors">
                  All 435 U.S. House Districts Directory
                </Link>
              </li>
              <li>
                <Link href="/primary-calendar-2026" className="text-amber-300 hover:text-white font-bold transition-colors">
                  2026 State Primary Election Calendar
                </Link>
              </li>
              <li>
                <Link href="/voter-eligibility-guide" className="hover:text-white transition-colors">
                  Student, Military (UOCAVA) &amp; Eligibility Guide
                </Link>
              </li>
              <li>
                <Link href="/50-state-comparison-matrix" className="hover:text-white transition-colors">
                  50-State Master Comparison Matrix
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy" className="hover:text-white transition-colors">
                  Editorial & Fact-Checking Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmatic State Hubs */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              State-Specific Voting Guides & Deadlines
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {ALL_STATES_LIST.map((st) => (
                <Link
                  key={st.slug}
                  href={`/states/${st.slug}`}
                  className="text-slate-400 hover:text-white transition-colors truncate"
                >
                  {st.name} 2026 {st.battleground ? '⭐' : ''}
                </Link>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-3">
              Every state guide links directly to official state Secretary of State election portals.
            </p>
          </div>
        </div>

        {/* Official Verified Sources Bar */}
        <div className="border-t border-slate-800 pt-6 pb-6 my-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">
              Official Federal Civic Partners & Primary Sources:
            </span>
            <div className="flex flex-wrap items-center gap-4 text-[11px]">
              <a
                href="https://www.vote.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline flex items-center gap-1"
              >
                <span>Vote.gov</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.eac.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline flex items-center gap-1"
              >
                <span>U.S. Election Assistance Commission (EAC)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.fec.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline flex items-center gap-1"
              >
                <span>Federal Election Commission (FEC)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Compliance */}
        <div className="border-t border-slate-900 pt-6 text-[11px] text-slate-500 leading-relaxed flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="max-w-3xl">
            <strong>Disclaimer:</strong> ElectionDay2026.org is an independent, non-partisan educational website. We are not owned by, affiliated with, or endorsed by the U.S. Federal Government, the Federal Election Commission (FEC), or any political party, candidate, or campaign committee. All voting deadlines, early voting dates, and identification laws are compiled directly from state statutes and official Secretary of State public records.
          </p>
          <div className="text-right shrink-0">
            <div>© 2026 ElectionDay2026.org</div>
            <div className="text-slate-600 text-[10px]">All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
