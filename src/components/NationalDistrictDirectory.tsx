'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DISTRICTS_BY_STATE, ALL_DISTRICTS_LIST } from '../data/districts';
import { ALL_STATES_LIST } from '../data/states';
import { Search, Filter, ArrowRight, Vote } from 'lucide-react';

export function NationalDistrictDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('all');

  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return ALL_STATES_LIST.filter((st) => selectedState === 'all' || st.slug === selectedState)
      .map((st) => {
        const list = DISTRICTS_BY_STATE[st.slug] || [];
        const matched = q
          ? list.filter(
              (d) =>
                d.code.toLowerCase().includes(q) ||
                d.stateName.toLowerCase().includes(q) ||
                d.majorCities.some((city) => city.toLowerCase().includes(q)) ||
                d.counties.some(
                  (c) =>
                    c.name.toLowerCase().includes(q) ||
                    c.fips.includes(q) ||
                    c.zipRange.toLowerCase().includes(q)
                )
            )
          : list;

        return {
          state: st,
          districts: matched,
          totalStateDistricts: list.length,
        };
      })
      .filter((g) => g.districts.length > 0);
  }, [searchQuery, selectedState]);

  const totalMatching = useMemo(
    () => filteredGroups.reduce((acc, g) => acc + g.districts.length, 0),
    [filteredGroups]
  );

  return (
    <div className="my-6">
      <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="district-search" className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
              Search 435+ U.S. House Districts by Code (PA-01, TX-07), City, County, or ZIP
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="district-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. PA-01, TX-07, CA-27, NY-17, Houston, Bucks County..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="district-state-filter" className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
              Filter by State
            </label>
            <div className="relative">
              <Filter className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                id="district-state-filter"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
              >
                <option value="all">All 50 States & D.C. ({ALL_DISTRICTS_LIST.length} Districts)</option>
                {ALL_STATES_LIST.map((st) => (
                  <option key={st.slug} value={st.slug}>
                    {st.name} ({st.postalCode}) — {(DISTRICTS_BY_STATE[st.slug] || []).length} Districts
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-600">
          <div>
            Showing <strong className="text-slate-900">{totalMatching}</strong> U.S. Congressional Districts across{' '}
            <strong className="text-slate-900">{filteredGroups.length}</strong> states/territories.
          </div>
          {(searchQuery || selectedState !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedState('all');
              }}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      <div className="space-y-8">
        {filteredGroups.map(({ state: st, districts, totalStateDistricts }) => (
          <section
            key={st.slug}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/states/${st.slug}`}
                    className="text-xl sm:text-2xl font-black text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    {st.name}
                  </Link>
                  <span className="px-2 py-0.5 bg-slate-900 text-white font-mono text-xs font-bold rounded">
                    {st.postalCode}
                  </span>
                  <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-800 border border-indigo-200 text-xs font-bold rounded">
                    {districts.length === totalStateDistricts
                      ? `${totalStateDistricts} House Seat${totalStateDistricts === 1 ? '' : 's'}`
                      : `${districts.length} of ${totalStateDistricts} Seats`}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Nov 3, 2026 Poll Hours: <strong>{st.pollingHours}</strong> • Voter ID: <strong>{st.idType}</strong>
                </p>
              </div>

              <Link
                href={`/states/${st.slug}`}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>{st.name} State Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {districts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/districts/${d.slug}`}
                  className="group p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-indigo-600 hover:border-indigo-600 transition-all flex items-center justify-between gap-2"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-indigo-700 group-hover:text-amber-300">
                        {d.code}
                      </span>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-white truncate">
                        District {d.districtNumber}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600 group-hover:text-indigo-100 truncate mt-1">
                      {d.majorCities.slice(0, 3).join(', ')}
                    </div>
                    <div className="text-[10px] text-slate-400 group-hover:text-indigo-200 mt-0.5 truncate">
                      {d.counties.length} {d.counties.length === 1 ? 'County' : 'Counties'} ({d.counties.slice(0, 2).map((c) => c.name).join(', ')})
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
