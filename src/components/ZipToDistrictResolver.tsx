'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { COUNTIES_BY_STATE, CountyItem } from '../data/counties';
import { STATES_DATA } from '../data/states';
import { SENATE_RACES_2026, GOVERNOR_RACES_2026 } from '../data/races2026';
import {
  Search,
  MapPin,
  Vote,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Flame,
  FileText,
  AlertCircle,
} from 'lucide-react';

interface MatchedLocation {
  county: CountyItem;
  stateSlug: string;
  districts: string[];
}

export const ZipToDistrictResolver: React.FC = () => {
  const [zipInput, setZipInput] = useState<string>('77002');
  const [hasSearched, setHasSearched] = useState<boolean>(true);

  // Fast client-side ZIP code matcher across all 3,143 counties
  const matchedLocations: MatchedLocation[] = useMemo(() => {
    const cleanZip = zipInput.trim();
    if (!/^\d{5}$/.test(cleanZip)) return [];
    const zipNum = parseInt(cleanZip, 10);

    const matches: MatchedLocation[] = [];

    for (const [stateSlug, counties] of Object.entries(COUNTIES_BY_STATE)) {
      for (const county of counties) {
        if (!county.zipRange) continue;
        const parts = county.zipRange.split(/[–\-]/).map((p) => parseInt(p.trim(), 10));
        if (parts.length >= 2) {
          const [low, high] = parts;
          if (zipNum >= low && zipNum <= high) {
            matches.push({
              county,
              stateSlug,
              districts: county.congressionalDistricts,
            });
          }
        } else if (parts.length === 1 && parts[0] === zipNum) {
          matches.push({
            county,
            stateSlug,
            districts: county.congressionalDistricts,
          });
        }
      }
    }

    return matches;
  }, [zipInput]);

  const primaryMatch = matchedLocations[0] || null;
  const primaryState = primaryMatch ? STATES_DATA[primaryMatch.stateSlug] : null;

  // Aggregate unique districts across all matched counties (handles split ZIPs)
  const allDistricts = useMemo(() => {
    const set = new Set<string>();
    for (const m of matchedLocations) {
      for (const d of m.districts) {
        set.add(d);
      }
    }
    return Array.from(set).sort();
  }, [matchedLocations]);

  // Lookup federal Senate and Governor status for this state
  const senateRaces = useMemo(() => {
    if (!primaryMatch) return [];
    return SENATE_RACES_2026.filter((r) => r.stateSlug === primaryMatch.stateSlug);
  }, [primaryMatch]);

  const governorRace = useMemo(() => {
    if (!primaryMatch) return null;
    return GOVERNOR_RACES_2026.find((r) => r.stateSlug === primaryMatch.stateSlug) || null;
  }, [primaryMatch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="space-y-10">
      {/* Search Bar */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-md">
        <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
          <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2 text-center">
            Enter Any 5-Digit U.S. ZIP Code:
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                maxLength={5}
                value={zipInput}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '');
                  setZipInput(val);
                }}
                placeholder="e.g. 77002, 19104, 60601, 30303, 90012, 85001..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-300 text-slate-900 font-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-center sm:text-left"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Find My District</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-500">
            <span className="font-bold text-slate-700">Popular Quick Lookups:</span>
            {[
              { zip: '77002', label: 'Houston, TX (77002)' },
              { zip: '19104', label: 'Philadelphia, PA (19104)' },
              { zip: '60601', label: 'Chicago, IL (60601)' },
              { zip: '30303', label: 'Atlanta, GA (30303)' },
              { zip: '85001', label: 'Phoenix, AZ (85001)' },
              { zip: '48226', label: 'Detroit, MI (48226)' },
            ].map((quick) => (
              <button
                key={quick.zip}
                type="button"
                onClick={() => setZipInput(quick.zip)}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold transition-colors"
              >
                {quick.label}
              </button>
            ))}
          </div>
        </form>
      </div>

      {/* Results View */}
      {hasSearched && (
        <div className="space-y-6">
          {matchedLocations.length === 0 ? (
            <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-8 text-center max-w-xl mx-auto space-y-3">
              <AlertCircle className="w-10 h-10 text-amber-600 mx-auto" />
              <h3 className="text-lg font-black text-slate-900">
                No Exact County Match for ZIP &quot;{zipInput}&quot;
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Please verify that you entered a valid 5-digit U.S. postal ZIP code. You can also explore our complete{' '}
                <Link href="/districts" className="text-blue-600 font-bold hover:underline">
                  435 Congressional Districts Directory
                </Link>{' '}
                or{' '}
                <Link href="/counties" className="text-blue-600 font-bold hover:underline">
                  3,143 Counties Directory
                </Link>.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-lg space-y-8">
              {/* Header Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-black text-xs uppercase tracking-wider">
                      ZIP Code: {zipInput}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-extrabold text-xs">
                      {primaryState?.name} ({primaryMatch?.county.stateCode})
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Your 2026 Representation &amp; Polling Place Jurisdiction
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/sample-ballot-2026`}
                    className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs inline-flex items-center gap-1.5 shadow-md transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Print 2026 Sample Ballot</span>
                  </Link>
                </div>
              </div>

              {/* 3 Main Representation Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. U.S. House Congressional District(s) */}
                <div className="bg-blue-50/60 rounded-3xl p-6 border-2 border-blue-200 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-xs">
                      <Vote className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 block mb-1">
                      Federal Legislative Representation
                    </span>
                    <h4 className="text-xl font-black text-slate-900">
                      U.S. House District: {allDistricts.join(', ')}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      All 435 U.S. House seats are up for election on Tuesday, November 3, 2026. In areas where a ZIP code or county spans multiple districts, your exact ballot is determined by your residential street precinct.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-blue-200/60">
                    {allDistricts.map((dist) => (
                      <Link
                        key={dist}
                        href={`/districts/${dist.toLowerCase()}`}
                        className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-blue-600 hover:text-white text-blue-900 border border-blue-200 font-extrabold text-xs flex items-center justify-between transition-colors shadow-2xs"
                      >
                        <span>Explore {dist} Voting Profile</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 2. Administering County Board of Elections */}
                <div className="bg-emerald-50/60 rounded-3xl p-6 border-2 border-emerald-200 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-xs">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 block mb-1">
                      Local Polling &amp; Ballot Administrator
                    </span>
                    <h4 className="text-xl font-black text-slate-900">
                      {primaryMatch?.county.name}
                    </h4>
                    <div className="text-xs text-slate-700 space-y-1 mt-2">
                      <div>
                        • <strong>County Seat:</strong> {primaryMatch?.county.countySeat}
                      </div>
                      <div>
                        • <strong>FIPS Code:</strong> {primaryMatch?.county.fips}
                      </div>
                      <div>
                        • <strong>Nov 3 Poll Hours:</strong> {primaryState?.pollingHours}
                      </div>
                      <div>
                        • <strong>Turnout Baseline:</strong>{' '}
                        {primaryMatch?.county.turnout2022Midterm} (2022 Midterm)
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-emerald-200/60">
                    <Link
                      href={`/states/${primaryMatch?.stateSlug}/counties/${primaryMatch?.county.slug}`}
                      className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-emerald-600 hover:text-white text-emerald-900 border border-emerald-200 font-extrabold text-xs flex items-center justify-between transition-colors shadow-2xs"
                    >
                      <span>{primaryMatch?.county.name} Election Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* 3. Statewide Races (Senate & Governor) */}
                <div className="bg-indigo-50/60 rounded-3xl p-6 border-2 border-indigo-200 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-3 shadow-xs">
                      <Flame className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 block mb-1">
                      2026 Statewide Marquee Contests
                    </span>
                    <h4 className="text-xl font-black text-slate-900">
                      Senate &amp; Governor on Ballot
                    </h4>

                    <div className="space-y-2.5 text-xs text-slate-700 mt-2">
                      <div>
                        <strong className="text-slate-900">U.S. Senate (2026):</strong>{' '}
                        {senateRaces.length > 0 ? (
                          <div className="mt-1 space-y-1">
                            {senateRaces.map((sr) => (
                              <div
                                key={sr.incumbent}
                                className="px-2.5 py-1.5 rounded-lg bg-white border border-indigo-200 font-semibold text-slate-800"
                              >
                                {sr.incumbent} ({sr.incumbentParty}) —{' '}
                                <span className="font-extrabold text-indigo-700">{sr.rating}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-500">
                            No regular U.S. Senate seat up in {primaryState?.name} in 2026.
                          </span>
                        )}
                      </div>

                      <div>
                        <strong className="text-slate-900">State Governor (2026):</strong>{' '}
                        {governorRace ? (
                          <div className="mt-1 px-2.5 py-1.5 rounded-lg bg-white border border-indigo-200 font-semibold text-slate-800">
                            {governorRace.incumbent} ({governorRace.incumbentParty}) —{' '}
                            <span className="font-extrabold text-indigo-700">
                              {governorRace.status} ({governorRace.rating})
                            </span>
                          </div>
                        ) : (
                          <span className="text-slate-500">Next governor election not in 2026.</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-indigo-200/60">
                    <Link
                      href={`/voter-id-validator-2026`}
                      className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-indigo-600 hover:text-white text-indigo-900 border border-indigo-200 font-extrabold text-xs flex items-center justify-between transition-colors shadow-2xs"
                    >
                      <span>Check {primaryState?.name} Voter ID Rules</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Multi-County Notice if ZIP crosses boundaries */}
              {matchedLocations.length > 1 && (
                <div className="bg-amber-50 rounded-2xl p-5 border border-amber-300">
                  <div className="flex items-center gap-2 text-amber-900 font-black text-sm mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Boundary Notice: ZIP Code {zipInput} Spans {matchedLocations.length} Counties</span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed mb-3">
                    Postal ZIP codes do not strictly follow county lines. Depending on your street address, you may be in one of the following counties:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {matchedLocations.map((loc) => (
                      <Link
                        key={loc.county.fips}
                        href={`/states/${loc.stateSlug}/counties/${loc.county.slug}`}
                        className="px-3 py-1.5 rounded-xl bg-white border border-amber-300 font-bold text-xs text-slate-800 hover:bg-amber-600 hover:text-white transition-colors"
                      >
                        {loc.county.name} ({loc.districts.join(', ')}) →
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
