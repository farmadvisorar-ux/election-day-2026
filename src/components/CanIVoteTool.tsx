'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { STATES_DATA, ALL_STATES_LIST, StateElectionData } from '../data/states';
import {
  COUNTIES_BY_STATE,
  getCountyElectionAuthorityTitle,
  CountyItem,
} from '../data/counties';
import { SITE_URL } from '../lib/siteConfig';
import {
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Calendar,
  CreditCard,
  ArrowRight,
  MapPin,
  Search,
  Download,
  Building2,
  Clock,
} from 'lucide-react';

function parseZipInRange(zipQuery: string, zipRange: string): boolean {
  if (!/^\d{5}$/.test(zipQuery)) return false;
  const num = parseInt(zipQuery, 10);
  const parts = zipRange.split('–');
  if (parts.length === 1 && /^\d{5}$/.test(parts[0])) {
    return parseInt(parts[0], 10) === num;
  }
  if (parts.length === 2 && /^\d{5}$/.test(parts[0]) && /^\d{5}$/.test(parts[1])) {
    const start = parseInt(parts[0], 10);
    const end = parseInt(parts[1], 10);
    return num >= start && num <= end;
  }
  return false;
}

export const CanIVoteTool: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string>('pennsylvania');
  const [selectedCountySlug, setSelectedCountySlug] = useState<string>('allegheny-county');
  const [quickQuery, setQuickQuery] = useState<string>('');

  const stateData: StateElectionData | undefined = STATES_DATA[selectedSlug];
  const stateCounties: CountyItem[] = useMemo(
    () => COUNTIES_BY_STATE[selectedSlug] || [],
    [selectedSlug]
  );

  const activeCounty: CountyItem | undefined = useMemo(
    () => stateCounties.find((c) => c.slug === selectedCountySlug) || stateCounties[0],
    [stateCounties, selectedCountySlug]
  );

  // Instant search across all 3,143 counties by ZIP, City, County Name, County Seat, or Congressional District
  const quickSearchResults = useMemo(() => {
    const q = quickQuery.trim().toLowerCase();
    if (q.length < 2) return [];

    const results: Array<{ stateSlug: string; stateName: string; county: CountyItem }> = [];
    for (const [stSlug, list] of Object.entries(COUNTIES_BY_STATE)) {
      const st = STATES_DATA[stSlug];
      if (!st) continue;
      for (const c of list) {
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesSeat = c.countySeat.toLowerCase().includes(q);
        const matchesCity = c.topCities.some((city) => city.toLowerCase().includes(q));
        const matchesFips = c.fips === q;
        const matchesCd = c.congressionalDistricts.some((cd) => cd.toLowerCase() === q);
        const matchesZip = parseZipInRange(q, c.zipRange) || c.zipRange.toLowerCase().includes(q);

        if (matchesFips || matchesCd || matchesName || matchesSeat || matchesCity || matchesZip) {
          results.push({ stateSlug: stSlug, stateName: st.name, county: c });
          if (results.length >= 6) break;
        }
      }
      if (results.length >= 6) break;
    }
    return results;
  }, [quickQuery]);

  const handleSelectQuickResult = (stSlug: string, ctySlug: string) => {
    setSelectedSlug(stSlug);
    setSelectedCountySlug(ctySlug);
    setQuickQuery('');
  };

  const handleDownloadIcs = () => {
    if (!stateData) return;
    const cName = activeCounty ? `${activeCounty.name}, ${stateData.postalCode}` : stateData.name;
    const pollHours = activeCounty?.pollingHoursOverride || stateData.pollingHours;
    const authority = activeCounty
      ? getCountyElectionAuthorityTitle(stateData.postalCode, activeCounty.name)
      : stateData.officialPortal.name;
    const guideUrl = activeCounty
      ? `${SITE_URL}/states/${stateData.slug}/counties/${activeCounty.slug}`
      : `${SITE_URL}/states/${stateData.slug}`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//ElectionDay2026//Non-Partisan Civic Voter Calendar//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:reg-cutoff-2026-${stateData.postalCode}@election-day-2026.vercel.app`,
      'DTSTAMP:20260101T120000Z',
      'DTSTART;VALUE=DATE:20261005',
      'DTEND;VALUE=DATE:20261006',
      `SUMMARY:Voter Registration Cutoff Reminder — ${cName}`,
      `DESCRIPTION:Official 2026 Voter Registration Deadline for ${cName}: ${stateData.registrationDeadline.online}. Verify registration at ${stateData.officialPortal.url} or ${guideUrl}`,
      `URL:${guideUrl}`,
      'END:VEVENT',
      'BEGIN:VEVENT',
      `UID:election-day-2026-${activeCounty?.fips || stateData.postalCode}@election-day-2026.vercel.app`,
      'DTSTAMP:20260101T120000Z',
      'DTSTART;VALUE=DATE:20261103',
      'DTEND;VALUE=DATE:20261104',
      `SUMMARY:U.S. Midterm Election Day 2026 — ${cName} (${pollHours})`,
      `DESCRIPTION:Polls Open: ${pollHours}. Local Election Board: ${authority}. Voter ID Rule: ${stateData.voterId.type}. Workplace Voting Leave: ${stateData.workLeaveLaw.statuteCitation} (${stateData.workLeaveLaw.hoursAllowed}). Full guide: ${guideUrl}`,
      `LOCATION:${cName}`,
      `URL:${guideUrl}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `election-day-2026-${activeCounty?.slug || stateData.slug}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const authorityTitle =
    stateData && activeCounty
      ? getCountyElectionAuthorityTitle(stateData.postalCode, activeCounty.name)
      : stateData?.officialPortal.name || '';

  const effectiveHours = activeCounty?.pollingHoursOverride || stateData?.pollingHours || '';

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-md p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span>Universal ZIP, City, County & Congressional District Finder</span>
        </div>
        <span className="px-2.5 py-0.5 bg-blue-50 text-blue-800 border border-blue-200 rounded text-[11px] font-bold">
          50 States + 3,143 Counties + 435 House Districts
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
        Where &amp; When Do I Vote on Election Day 2026?
      </h3>
      <p className="text-sm text-slate-600 mt-1 mb-6">
        Type your <strong>ZIP code, city, county, or House district</strong> (e.g., <span className="font-mono">77002</span>, <span className="font-mono">Pittsburgh</span>, <span className="font-mono">Maricopa</span>, <span className="font-mono">PA-01</span>) or select your state and county below:
      </p>

      {/* Instant Universal Search Bar */}
      <div className="relative mb-6">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={quickQuery}
            onChange={(e) => setQuickQuery(e.target.value)}
            placeholder="Instant lookup: enter 5-digit ZIP code, City name, County, FIPS, or Congressional District (e.g. TX-07)..."
            aria-label="Search by ZIP code, city, county, or congressional district"
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
          />
        </div>

        {quickSearchResults.length > 0 && (
          <div className="absolute z-20 left-0 right-0 mt-1.5 bg-white rounded-xl border-2 border-blue-500 shadow-xl divide-y divide-slate-100 overflow-hidden">
            {quickSearchResults.map((item) => (
              <button
                key={item.county.fips}
                type="button"
                onClick={() => handleSelectQuickResult(item.stateSlug, item.county.slug)}
                className="w-full px-4 py-3 text-left hover:bg-blue-50 flex items-center justify-between gap-3 transition-colors"
              >
                <div>
                  <div className="text-sm font-black text-slate-900">
                    {item.county.name}, {item.county.stateCode}{' '}
                    <span className="text-xs font-normal text-slate-500">
                      (County Seat: {item.county.countySeat} • ZIPs {item.county.zipRange})
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Cities: {item.county.topCities.slice(0, 4).join(', ')} • House CD:{' '}
                    <span className="font-mono font-bold text-indigo-700">
                      {item.county.congressionalDistricts.join(', ')}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg shrink-0">
                  Select County →
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* State & County Cascading Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="state-select" className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
            1. Select Voting State:
          </label>
          <select
            id="state-select"
            value={selectedSlug}
            onChange={(e) => {
              const newState = e.target.value;
              setSelectedSlug(newState);
              const firstCounty = (COUNTIES_BY_STATE[newState] || [])[0];
              if (firstCounty) setSelectedCountySlug(firstCounty.slug);
            }}
            aria-label="Select your voting state"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {ALL_STATES_LIST.map((st) => (
              <option key={st.slug} value={st.slug}>
                {st.name} ({st.postalCode}) {st.battleground ? '⭐ Key Battleground' : ''}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="county-select" className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
            2. Select County / Local Board ({stateCounties.length} Jurisdictions):
          </label>
          <select
            id="county-select"
            value={activeCounty?.slug || ''}
            onChange={(e) => setSelectedCountySlug(e.target.value)}
            aria-label="Select your county election jurisdiction"
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {stateCounties.map((c) => (
              <option key={c.fips} value={c.slug}>
                {c.name} — Seat: {c.countySeat} (FIPS {c.fips})
              </option>
            ))}
          </select>
        </div>
      </div>

      {stateData ? (
        <div className="space-y-5">
          {/* Active County Jurisdiction Banner */}
          {activeCounty && (
            <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base font-black text-white">
                    {activeCounty.name}, {stateData.postalCode}
                  </span>
                  <span className="px-2 py-0.5 bg-blue-600 text-white font-mono text-[11px] font-bold rounded">
                    FIPS {activeCounty.fips}
                  </span>
                  <span className="px-2 py-0.5 bg-slate-800 text-amber-300 text-[11px] font-bold rounded border border-slate-700">
                    Seat: {activeCounty.countySeat}
                  </span>
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Administered by <strong>{authorityTitle}</strong> • Cities: {activeCounty.topCities.slice(0, 4).join(', ')} (ZIPs <span className="font-mono">{activeCounty.zipRange}</span>)
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {activeCounty.congressionalDistricts.slice(0, 2).map((cd) => (
                  <Link
                    key={cd}
                    href={`/districts/${cd.toLowerCase()}`}
                    className="px-2.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold rounded-lg transition-colors"
                  >
                    {cd} →
                  </Link>
                ))}
                <Link
                  href={`/states/${stateData.slug}/counties/${activeCounty.slug}`}
                  className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>{activeCounty.name} Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Box 1: Registration Deadline */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase mb-1">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Registration Cutoff</span>
              </div>
              <div className="text-base font-extrabold text-slate-900 mt-1">
                {stateData.registrationDeadline.online}
              </div>
              <p className="text-xs text-slate-600 mt-1.5">
                {stateData.registrationDeadline.notes}
              </p>
              {stateData.registrationDeadline.sameDayRegistration && (
                <span className="inline-block mt-2 px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded">
                  ✓ Same-Day Registration Available
                </span>
              )}
            </div>

            {/* Box 2: Poll Hours & Early Voting */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase mb-1">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Nov 3 Poll Hours &amp; Early Voting</span>
              </div>
              <div className="text-base font-extrabold text-blue-700 mt-1">
                {effectiveHours}
              </div>
              <p className="text-xs text-slate-700 font-semibold mt-1">
                Early Voting: {stateData.earlyVoting.starts} – {stateData.earlyVoting.ends}
              </p>
              {activeCounty?.timezoneOverride && (
                <span className="inline-block mt-1.5 px-2 py-0.5 bg-amber-100 text-amber-900 text-[10px] font-bold rounded">
                  ⚡ Split-Timezone County: {activeCounty.timezoneOverride}
                </span>
              )}
            </div>

            {/* Box 3: Voter ID Requirement */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase mb-1">
                <CreditCard className="w-4 h-4 text-purple-600" />
                <span>Voter ID &amp; Work Leave</span>
              </div>
              <div className="text-base font-extrabold text-slate-900 mt-1">
                {stateData.voterId.type}
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Work Leave ({stateData.workLeaveLaw.statuteCitation}): <strong>{stateData.workLeaveLaw.hoursAllowed}</strong>
              </p>
            </div>
          </div>

          {/* Quick CTA & .ics Calendar Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <div className="text-left">
              <div className="text-sm font-bold text-blue-950">
                Save Your 2026 Deadlines or Verify Your Official Record
              </div>
              <div className="text-xs text-blue-800">
                Download your county&apos;s 2026 voting calendar (`.ics`) or check your registration on `{stateData.postalCode}.gov`.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
              <button
                type="button"
                onClick={handleDownloadIcs}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Add Deadlines to Calendar (.ics)</span>
              </button>

              <a
                href={stateData.officialPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
              >
                <span>Check Status on {stateData.postalCode}.gov</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href={`/states/${stateData.slug}`}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 transition-colors"
              >
                <span>{stateData.name} Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl text-center">
          <AlertTriangle className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <p className="text-sm text-amber-900 font-medium">
            State guide being compiled. Please refer to Vote.gov for federal voter lookup.
          </p>
        </div>
      )}
    </div>
  );
};
