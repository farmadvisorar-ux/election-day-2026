'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { COUNTIES_BY_STATE } from '../data/counties';
import { ALL_STATES_LIST, STATES_DATA } from '../data/states';
import { Search, MapPin, ArrowRight, Filter } from 'lucide-react';

export function NationalCountyDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('all');

  const filteredByState = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return ALL_STATES_LIST.filter((st) => selectedState === 'all' || st.slug === selectedState)
      .map((st) => {
        const counties = COUNTIES_BY_STATE[st.slug] || [];
        const matched = q
          ? counties.filter(
              (c) =>
                c.name.toLowerCase().includes(q) ||
                c.fips.includes(q) ||
                c.countySeat.toLowerCase().includes(q) ||
                c.zipRange.toLowerCase().includes(q) ||
                c.topCities.some((city) => city.toLowerCase().includes(q)) ||
                c.congressionalDistricts.some((cd) => cd.toLowerCase().includes(q)) ||
                st.name.toLowerCase().includes(q) ||
                st.postalCode.toLowerCase() === q
            )
          : counties;

        return {
          state: st,
          counties: matched,
          totalStateCounties: counties.length,
        };
      })
      .filter((group) => group.counties.length > 0);
  }, [searchQuery, selectedState]);

  const totalMatchingCounties = useMemo(
    () => filteredByState.reduce((acc, g) => acc + g.counties.length, 0),
    [filteredByState]
  );

  return (
    <div className="my-6">
      {/* Search & State Filter Bar */}
      <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Input */}
          <div className="md:col-span-2 relative">
            <label htmlFor="county-search" className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
              Search 3,143 Counties by County, City, County Seat, ZIP, House District, or FIPS
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="county-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Maricopa, Houston, Pittsburgh, TX-07, PA-01, 04013, 77001..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>
          </div>

          {/* State Dropdown Filter */}
          <div>
            <label htmlFor="state-filter" className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
              Filter by State (All 50 + D.C.)
            </label>
            <div className="relative">
              <Filter className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                id="state-filter"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              >
                <option value="all">All 50 States & D.C. (3,143 Counties)</option>
                {ALL_STATES_LIST.map((st) => (
                  <option key={st.slug} value={st.slug}>
                    {st.name} ({st.postalCode}) — {(COUNTIES_BY_STATE[st.slug] || []).length} Jurisdictions
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Quick State Jump Pills */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
          <div className="text-xs text-slate-600">
            Showing <strong className="text-slate-900">{totalMatchingCounties.toLocaleString()}</strong> official county election jurisdictions across{' '}
            <strong className="text-slate-900">{filteredByState.length}</strong> states/territories.
          </div>
          {(searchQuery || selectedState !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedState('all');
              }}
              className="text-xs font-bold text-blue-600 hover:text-blue-800"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* State-by-State County Sections */}
      <div className="space-y-8">
        {filteredByState.map(({ state: st, counties, totalStateCounties }) => (
          <section
            key={st.slug}
            id={`state-${st.slug}`}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/states/${st.slug}`}
                    className="text-xl sm:text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {st.name}
                  </Link>
                  <span className="px-2 py-0.5 bg-slate-900 text-white font-mono text-xs font-bold rounded">
                    {st.postalCode}
                  </span>
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold rounded">
                    {counties.length === totalStateCounties
                      ? `${totalStateCounties} Counties`
                      : `${counties.length} of ${totalStateCounties} Counties`}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Nov 3, 2026 Poll Hours: <strong>{st.pollingHours}</strong> • Voter ID: <strong>{st.idType}</strong> • Registration Cutoff:{' '}
                  <strong>{STATES_DATA[st.slug]?.registrationDeadline.online}</strong>
                </p>
              </div>

              <Link
                href={`/states/${st.slug}`}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>{st.name} State Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {counties.map((county) => (
                <Link
                  key={county.fips}
                  href={`/states/${st.slug}/counties/${county.slug}`}
                  className="group p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center justify-between gap-2"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 group-hover:text-white truncate">
                      {county.name}
                    </div>
                    <div className="text-[10px] text-slate-600 group-hover:text-blue-100 truncate mt-0.5">
                      Seat: {county.countySeat} • {county.congressionalDistricts[0]}
                    </div>
                    <div className="text-[10px] text-slate-400 group-hover:text-blue-200 flex items-center gap-1 mt-0.5 truncate">
                      <MapPin className="w-2.5 h-2.5 shrink-0" />
                      <span className="font-mono">FIPS {county.fips}</span>
                      <span>•</span>
                      <span>Pop. {county.population.toLocaleString()}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
