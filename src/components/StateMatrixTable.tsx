'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { STATES_DATA, ALL_STATES_LIST } from '../data/states';
import { Search, Filter, CheckCircle2, XCircle, ExternalLink, Download } from 'lucide-react';

export const StateMatrixTable: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterMode, setFilterMode] = useState<
    'all' | 'battleground' | 'same-day' | 'strict-id' | 'paid-leave' | 'holiday'
  >('all');

  const filteredStates = useMemo(() => {
    const q = search.toLowerCase().trim();
    return ALL_STATES_LIST.map((s) => STATES_DATA[s.slug]).filter((st) => {
      if (!st) return false;
      if (filterMode === 'battleground' && !st.battleground) return false;
      if (filterMode === 'same-day' && !st.registrationDeadline.sameDayRegistration) return false;
      if (filterMode === 'strict-id' && st.voterId.type !== 'Strict Photo ID') return false;
      if (filterMode === 'paid-leave' && !st.workLeaveLaw.paid) return false;
      if (filterMode === 'holiday' && !st.isStateHoliday) return false;

      if (!q) return true;
      return (
        st.name.toLowerCase().includes(q) ||
        st.postalCode.toLowerCase().includes(q) ||
        st.voterId.type.toLowerCase().includes(q) ||
        st.workLeaveLaw.statuteCitation.toLowerCase().includes(q)
      );
    });
  }, [search, filterMode]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
      {/* Filter Header */}
      <div className="p-6 bg-slate-50 border-b border-slate-200 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Interactive 50-State + D.C. Election Law Matrix (2026)
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Compare registration cutoffs, early voting windows, Voter ID classifications, poll hours, and paid work leave across all 51 jurisdictions.
            </p>
          </div>
          <a
            href="/api/datasets/elections-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs rounded-xl shrink-0 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Open JSON Dataset</span>
          </a>
        </div>

        {/* Search & Filter Pills */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by state name, postal code (e.g. PA, TX), or statute..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs">
            {[
              { id: 'all', label: 'All 51 Jurisdictions' },
              { id: 'battleground', label: '⭐ Battlegrounds' },
              { id: 'same-day', label: 'Same-Day Registration' },
              { id: 'strict-id', label: 'Strict Photo ID' },
              { id: 'paid-leave', label: 'Paid Voting Leave' },
              { id: 'holiday', label: 'State Holiday' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilterMode(btn.id as typeof filterMode)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  filterMode === btn.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-[11px] text-slate-500 font-medium">
          Showing <strong>{filteredStates.length}</strong> of 51 U.S. jurisdictions
        </div>
      </div>

      {/* Master HTML Table (Position #0 Featured Snippet & Dataset Format) */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <caption className="sr-only">
            2026 United States Midterm Elections 50-State Statutory Comparison Table
          </caption>
          <thead className="bg-slate-900 text-white uppercase font-bold text-[10px] tracking-wider">
            <tr>
              <th className="py-3.5 px-4">State / Portal</th>
              <th className="py-3.5 px-4">Registration Cutoff</th>
              <th className="py-3.5 px-4">Same-Day Reg?</th>
              <th className="py-3.5 px-4">Early Voting Window</th>
              <th className="py-3.5 px-4">Voter ID Law</th>
              <th className="py-3.5 px-4">Election Day Hours</th>
              <th className="py-3.5 px-4">Paid Work Leave</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredStates.map((st) => (
              <tr key={st.slug} className="hover:bg-blue-50/40 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-950 whitespace-nowrap">
                  <Link href={`/states/${st.slug}`} className="text-blue-700 hover:underline flex items-center gap-1.5">
                    <span>{st.name}</span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded">
                      {st.postalCode}
                    </span>
                    {st.battleground && <span title="2026 Key Battleground">⭐</span>}
                  </Link>
                  <div className="flex gap-2 mt-1 text-[10px] font-normal text-slate-500">
                    <Link href={`/states/${st.slug}/registration-deadline`} className="hover:text-blue-600 underline">
                      Deadlines
                    </Link>
                    <span>•</span>
                    <Link href={`/states/${st.slug}/voter-id-rules`} className="hover:text-blue-600 underline">
                      ID Rules
                    </Link>
                    <span>•</span>
                    <Link href={`/states/${st.slug}/polling-hours`} className="hover:text-blue-600 underline">
                      Hours
                    </Link>
                  </div>
                </td>

                <td className="py-3.5 px-4 text-slate-700 max-w-[180px]">
                  {st.registrationDeadline.online}
                </td>

                <td className="py-3.5 px-4 whitespace-nowrap">
                  {st.registrationDeadline.sameDayRegistration ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px] rounded">
                      <CheckCircle2 className="w-3 h-3" />
                      Yes
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-600 font-medium text-[10px] rounded">
                      No
                    </span>
                  )}
                </td>

                <td className="py-3.5 px-4 text-slate-700 max-w-[190px]">
                  {st.earlyVoting.starts} – {st.earlyVoting.ends}
                </td>

                <td className="py-3.5 px-4">
                  <span
                    className={`inline-block px-2 py-0.5 rounded font-bold text-[10px] ${
                      st.voterId.type === 'Strict Photo ID'
                        ? 'bg-amber-100 text-amber-900'
                        : st.voterId.type === 'Non-Strict Photo ID'
                        ? 'bg-blue-100 text-blue-900'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {st.voterId.type}
                  </span>
                </td>

                <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">
                  {st.pollingHours}
                </td>

                <td className="py-3.5 px-4">
                  <div className="font-semibold text-slate-800">
                    {st.workLeaveLaw.paid ? (
                      <span className="text-emerald-700">✓ Paid ({st.workLeaveLaw.statuteCitation})</span>
                    ) : (
                      <span className="text-slate-500">{st.workLeaveLaw.statuteCitation}</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
