'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { CITIES_2026_LIST } from '../data/cities2026';
import { Search, MapPin, Bus, Building2, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CityElectionSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string>('ALL');
  const [onlySplitCounties, setOnlySplitCounties] = useState(false);

  const statesList = useMemo(() => {
    const map = new Map<string, string>();
    for (const c of CITIES_2026_LIST) {
      map.set(c.stateSlug, `${c.stateName} (${c.stateAbbr})`);
    }
    return Array.from(map.entries()).sort((a, b) => a[1].localeCompare(b[1]));
  }, []);

  const filteredCities = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CITIES_2026_LIST.filter((c) => {
      if (selectedState !== 'ALL' && c.stateSlug !== selectedState) return false;
      if (onlySplitCounties && !c.isSplitCounty) return false;
      if (!q) return true;

      const haystack = [
        c.cityName,
        c.stateName,
        c.stateAbbr,
        c.electionAuthorityName,
        c.votingSystemType,
        c.transitAgency,
        ...c.counties.map((k) => k.name),
        ...c.majorCongressionalDistricts,
      ]
        .join(' ')
        .toLowerCase();

      return q.split(/\s+/).every((token) => haystack.includes(token));
    });
  }, [query, selectedState, onlySplitCounties]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Control Bar */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-6 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search city, county, district, or transit (e.g. 'Chicago', 'Houston', 'Maricopa', 'NYC', 'MARTA')..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="md:col-span-3">
            <select
              aria-label="Filter cities by state"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl border border-slate-300 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="ALL">All 50 States + D.C. ({CITIES_2026_LIST.length} Cities)</option>
              {statesList.map(([slug, label]) => (
                <option key={slug} value={slug}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <button
              type="button"
              onClick={() => setOnlySplitCounties(!onlySplitCounties)}
              className={`w-full px-4 py-3.5 rounded-2xl font-extrabold text-xs border transition-all flex items-center justify-center gap-2 ${
                onlySplitCounties
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
              }`}
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Split-County Cities Only</span>
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
          <span>
            Showing <strong className="text-slate-900">{filteredCities.length}</strong> major U.S. municipal voting hubs
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-700">Quick Jump:</span>
            {['new-york-city-ny', 'los-angeles-ca', 'chicago-il', 'houston-tx', 'phoenix-az', 'philadelphia-pa', 'atlanta-ga', 'dallas-tx', 'miami-fl'].map((slug) => {
              const city = CITIES_2026_LIST.find((c) => c.slug === slug);
              if (!city) return null;
              return (
                <Link
                  key={slug}
                  href={`/cities/${slug}`}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-bold transition-colors"
                >
                  {city.cityName}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCities.map((city) => (
          <div
            key={city.slug}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="text-lg font-black text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>
                      {city.cityName}, {city.stateAbbr}
                    </span>
                  </Link>
                  <p className="text-xs font-semibold text-slate-500">
                    Pop. {city.population.toLocaleString()} •{' '}
                    <Link href={`/states/${city.stateSlug}`} className="text-blue-600 hover:underline">
                      {city.stateName} 2026 Rules
                    </Link>
                  </p>
                </div>
                {city.isSplitCounty ? (
                  <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-extrabold text-[10px] uppercase tracking-wider shrink-0">
                    {city.counties.length}-County Split
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-[10px] uppercase tracking-wider shrink-0 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Single County
                  </span>
                )}
              </div>

              {/* Counties Mapped */}
              <div className="mb-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Election County Jurisdiction(s):</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {city.counties.map((county) => (
                    <Link
                      key={county.slug}
                      href={`/states/${city.stateSlug}/counties/${county.slug}`}
                      className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {county.name}
                    </Link>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {city.splitCountyNote}
              </p>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5 mb-4 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">
                    <strong className="text-slate-900">Voting Model:</strong> {city.votingSystemType}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Bus className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">
                    <strong className="text-slate-900">Transit:</strong> {city.transitAgency}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1">
                {city.majorCongressionalDistricts.slice(0, 3).map((dist) => (
                  <Link
                    key={dist}
                    href={`/districts/${dist.toLowerCase()}`}
                    className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-700 hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    {dist}
                  </Link>
                ))}
                {city.majorCongressionalDistricts.length > 3 && (
                  <span className="text-[10px] font-bold text-slate-400 px-1">
                    +{city.majorCongressionalDistricts.length - 3}
                  </span>
                )}
              </div>

              <Link
                href={`/cities/${city.slug}`}
                className="inline-flex items-center gap-1 text-xs font-extrabold text-blue-600 hover:text-blue-800"
              >
                <span>{city.cityName} Voting Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
