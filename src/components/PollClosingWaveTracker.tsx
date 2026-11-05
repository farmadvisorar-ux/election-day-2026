'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, Sparkles, AlertTriangle, ArrowRight, CheckCircle2, Zap, Hourglass } from 'lucide-react';

type DisplayTz = 'ET' | 'CT' | 'MT' | 'PT';

interface ClosingWave {
  id: string;
  times: Record<DisplayTz, string>;
  title: string;
  electoralSignificance: string;
  states: {
    name: string;
    slug: string;
    postalCode: string;
    note?: string;
    countingSpeed: 'Fast (Same Night)' | 'Moderate (Late Night / Wed AM)' | 'Slow (Multi-Day Count)';
    keyRaces: string;
  }[];
}

const CLOSING_WAVES: ClosingWave[] = [
  {
    id: '600pm-et',
    times: {
      ET: '6:00 PM ET',
      CT: '5:00 PM CT',
      MT: '4:00 PM MT',
      PT: '3:00 PM PT',
    },
    title: 'Wave 1: First Polls Close in America (Split-Timezone Counties in IN & KY)',
    electoralSignificance:
      'The very first ballot tabulations of the 2026 Midterm Election begin reporting from Indianapolis (Marion County, IN), Louisville (Jefferson County, KY), and Lexington (Fayette County, KY).',
    states: [
      {
        name: 'Indiana (Eastern Time — 80 of 92 Counties)',
        slug: 'indiana',
        postalCode: 'IN',
        note: '12 Western Central Time counties close 1 hour later at 7:00 PM ET (6:00 PM CT)',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: '9 U.S. House Seats (including competitive IN-01)',
      },
      {
        name: 'Kentucky (Eastern Time — 79 of 120 Counties)',
        slug: 'kentucky',
        postalCode: 'KY',
        note: '41 Western Central Time counties close 1 hour later at 7:00 PM ET (6:00 PM CT)',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'Open U.S. Senate Seat (McConnell Retiring) + 6 U.S. House Seats',
      },
    ],
  },
  {
    id: '700pm-et',
    times: {
      ET: '7:00 PM ET',
      CT: '6:00 PM CT',
      MT: '5:00 PM MT',
      PT: '4:00 PM PT',
    },
    title: 'Wave 2: First Major East Coast & Sun Belt Battleground Wave (GA, VA, FL*, SC, VT)',
    electoralSignificance:
      'Massive early test for Senate and House control as all 159 counties in Georgia and all 133 jurisdictions in Virginia close, alongside 85% of Florida’s population in the Eastern Time peninsula.',
    states: [
      {
        name: 'Georgia (All 159 Counties)',
        slug: 'georgia',
        postalCode: 'GA',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'Toss-Up U.S. Senate (Ossoff) + Toss-Up Open Governor (Kemp Term-Limited)',
      },
      {
        name: 'Virginia (All 133 Counties & Cities)',
        slug: 'virginia',
        postalCode: 'VA',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'U.S. Senate (Warner) + Bellwether House Races (VA-02, VA-07)',
      },
      {
        name: 'Florida (Eastern Time Peninsula — 57 of 67 Counties)',
        slug: 'florida',
        postalCode: 'FL',
        note: 'Miami, Orlando, Tampa & Jacksonville close at 7 PM ET; 10 Panhandle CT counties close at 8 PM ET',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'Special U.S. Senate Election + Open Seat Governor (DeSantis Term-Limited)',
      },
      {
        name: 'South Carolina',
        slug: 'southcarolina',
        postalCode: 'SC',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'U.S. Senate (Graham) + Open Seat Governor (McMaster Term-Limited)',
      },
      {
        name: 'Vermont',
        slug: 'vermont',
        postalCode: 'VT',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: '2-Year Term Governor (Scott) + At-Large U.S. House Seat',
      },
    ],
  },
  {
    id: '730pm-et',
    times: {
      ET: '7:30 PM ET',
      CT: '6:30 PM CT',
      MT: '5:30 PM MT',
      PT: '4:30 PM PT',
    },
    title: 'Wave 3: High-Stakes Senate & Governor Battlegrounds (NC, OH, WV)',
    electoralSignificance:
      'North Carolina and Ohio both allow early processing of mail-in ballots and report early/mail totals rapidly after 7:30 PM ET—providing an immediate barometer for the 2026 Senate and House majorities.',
    states: [
      {
        name: 'North Carolina (All 100 Counties)',
        slug: 'northcarolina',
        postalCode: 'NC',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'Toss-Up U.S. Senate (Tillis) + Competitive U.S. House (NC-01)',
      },
      {
        name: 'Ohio (All 88 Counties)',
        slug: 'ohio',
        postalCode: 'OH',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'Special U.S. Senate (Husted) + Open Seat Governor (DeWine Term-Limited) + OH-09 / OH-13',
      },
      {
        name: 'West Virginia',
        slug: 'westvirginia',
        postalCode: 'WV',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'U.S. Senate (Capito) + 2 U.S. House Seats',
      },
    ],
  },
  {
    id: '800pm-et',
    times: {
      ET: '8:00 PM ET',
      CT: '7:00 PM CT',
      MT: '6:00 PM MT',
      PT: '5:00 PM PT',
    },
    title: 'Wave 4: The 18-Jurisdiction Mega Wave (PA, MI*, TX*, FL Panhandle, ME, NH, IL, NJ, MA, MD)',
    electoralSignificance:
      'The largest single poll-closing wave of Election Night: Pennsylvania, Detroit/Lower Peninsula Michigan, Houston/Dallas/San Antonio/Austin Texas, Maine, and New Hampshire all close simultaneously.',
    states: [
      {
        name: 'Pennsylvania (All 67 Counties)',
        slug: 'pennsylvania',
        postalCode: 'PA',
        note: 'State law bans opening mail ballots before 7 AM on Election Day—expect slower mail counts',
        countingSpeed: 'Moderate (Late Night / Wed AM)',
        keyRaces: 'Governor (Shapiro) + 4 Toss-Up House Seats (PA-01, PA-07, PA-08, PA-10)',
      },
      {
        name: 'Michigan (Eastern Time — 79 of 83 Counties)',
        slug: 'michigan',
        postalCode: 'MI',
        note: '4 Upper Peninsula Central Time counties close at 9:00 PM ET',
        countingSpeed: 'Moderate (Late Night / Wed AM)',
        keyRaces: 'Toss-Up Open U.S. Senate (Peters Retiring) + Toss-Up Open Governor (Whitmer Term-Limited)',
      },
      {
        name: 'Texas (Central Time — 252 of 254 Counties)',
        slug: 'texas',
        postalCode: 'TX',
        note: 'El Paso & Hudspeth (Mountain Time) close at 9:00 PM ET; early vote totals drop at 7 PM CT',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'U.S. Senate (Cornyn) + Governor (Abbott) + TX-15, TX-28, TX-34',
      },
      {
        name: 'Maine',
        slug: 'maine',
        postalCode: 'ME',
        note: 'Federal races use Ranked-Choice Voting (RCV) if no candidate exceeds 50%',
        countingSpeed: 'Moderate (Late Night / Wed AM)',
        keyRaces: 'Toss-Up U.S. Senate (Collins) + Open Seat Governor (Mills Term-Limited) + ME-02',
      },
      {
        name: 'New Hampshire',
        slug: 'newhampshire',
        postalCode: 'NH',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'Open U.S. Senate (Shaheen Retiring) + 2-Year Term Governor (Ayotte)',
      },
      {
        name: 'Illinois, New Jersey, Massachusetts, Maryland, Missouri, Tennessee, Alabama, Mississippi, Oklahoma, Connecticut, Delaware, Rhode Island & D.C.',
        slug: 'illinois',
        postalCode: 'MULTI',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'Open IL Senate, Open AL/OK/TN Governors, NJ-07, CT-05, MD-06',
      },
    ],
  },
  {
    id: '830pm-et',
    times: {
      ET: '8:30 PM ET',
      CT: '7:30 PM CT',
      MT: '6:30 PM MT',
      PT: '5:30 PM PT',
    },
    title: 'Wave 5: Arkansas Polls Close',
    electoralSignificance: 'Arkansas is the sole state closing at the 8:30 PM ET half-hour mark.',
    states: [
      {
        name: 'Arkansas (All 75 Counties)',
        slug: 'arkansas',
        postalCode: 'AR',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'U.S. Senate (Cotton) + Governor (Sanders) + 4 U.S. House Seats',
      },
    ],
  },
  {
    id: '900pm-et',
    times: {
      ET: '9:00 PM ET',
      CT: '8:00 PM CT',
      MT: '7:00 PM MT',
      PT: '6:00 PM PT',
    },
    title: 'Wave 6: Upper Midwest, Southwest & New York Battleground Wave (WI, AZ, NY, MN, CO, NM, KS, IA, NE)',
    electoralSignificance:
      'Crucial second-half battlegrounds close across three timezones: Wisconsin, Arizona, New York, Minnesota, Colorado, New Mexico, Kansas, Iowa, and Nebraska’s 2nd District.',
    states: [
      {
        name: 'Wisconsin (All 72 Counties)',
        slug: 'wisconsin',
        postalCode: 'WI',
        note: 'No mail-ballot processing allowed before Election Day morning; Milwaukee central count reports late',
        countingSpeed: 'Moderate (Late Night / Wed AM)',
        keyRaces: 'Toss-Up Governor (Evers) + Toss-Up U.S. House (WI-01, WI-03)',
      },
      {
        name: 'Arizona (All 15 Counties)',
        slug: 'arizona',
        postalCode: 'AZ',
        note: 'First massive batch of early mail ballots drops ~10 PM ET; same-day "late early" drop-offs take 3–5 days to signature-verify',
        countingSpeed: 'Slow (Multi-Day Count)',
        keyRaces: 'Toss-Up Governor (Hobbs) + Toss-Up U.S. House (AZ-01, AZ-06)',
      },
      {
        name: 'New York (All 62 Counties)',
        slug: 'newyork',
        postalCode: 'NY',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'Governor (Hochul) + 6 Battleground U.S. House Seats (NY-04, NY-17, NY-18, NY-19, NY-22)',
      },
      {
        name: 'Minnesota, Colorado, New Mexico, Kansas, Iowa & Nebraska',
        slug: 'minnesota',
        postalCode: 'MULTI',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'Open MN Senate, Open KS/CO/NM/IA Governors, CO-08, IA-01, IA-03, NE-02',
      },
    ],
  },
  {
    id: '1000pm-et',
    times: {
      ET: '10:00 PM ET',
      CT: '9:00 PM CT',
      MT: '8:00 PM MT',
      PT: '7:00 PM PT',
    },
    title: 'Wave 7: Nevada & Mountain West Wave (NV, UT, MT, Southern ID)',
    electoralSignificance:
      'Nevada’s Clark County (Las Vegas) and Washoe County (Reno) close at 7:00 PM PT (10:00 PM ET), alongside Montana, Utah, and Southern Idaho.',
    states: [
      {
        name: 'Nevada (All 17 Counties)',
        slug: 'nevada',
        postalCode: 'NV',
        note: 'Universal mail-in state; postmarked mail ballots arriving up to 4 days after Nov 3 are legally counted',
        countingSpeed: 'Slow (Multi-Day Count)',
        keyRaces: 'Toss-Up Governor (Lombardo) + NV-01, NV-03, NV-04 U.S. House',
      },
      {
        name: 'Montana, Utah & Southern Idaho',
        slug: 'montana',
        postalCode: 'MULTI',
        countingSpeed: 'Moderate (Late Night / Wed AM)',
        keyRaces: 'Montana U.S. Senate (Daines) + MT-01 + Utah & Idaho Congressional Races',
      },
    ],
  },
  {
    id: '1100pm-et',
    times: {
      ET: '11:00 PM ET',
      CT: '10:00 PM CT',
      MT: '9:00 PM MT',
      PT: '8:00 PM PT',
    },
    title: 'Wave 8: West Coast Wave (CA, WA, OR, Northern ID)',
    electoralSignificance:
      'California’s 52 U.S. House seats (including 6 Toss-Ups) often determine the final U.S. House majority—and because California counts ballots postmarked by Nov 3 that arrive up to 7 days later, the closest House seats can take a week to call.',
    states: [
      {
        name: 'California (All 58 Counties)',
        slug: 'california',
        postalCode: 'CA',
        note: 'Universal vote-by-mail; ballots postmarked Nov 3 have a 7-day statutory grace period',
        countingSpeed: 'Slow (Multi-Day Count)',
        keyRaces: 'Open Seat Governor (Newsom Term-Limited) + 6 Toss-Up House Seats (CA-13, CA-22, CA-27, CA-41, CA-45, CA-47)',
      },
      {
        name: 'Washington & Oregon',
        slug: 'washington',
        postalCode: 'WA/OR',
        countingSpeed: 'Slow (Multi-Day Count)',
        keyRaces: 'Oregon U.S. Senate & Governor + Toss-Up House Races (WA-03, OR-05)',
      },
    ],
  },
  {
    id: '1200am-et',
    times: {
      ET: '12:00 AM – 1:00 AM ET (Wed)',
      CT: '11:00 PM – 12:00 AM CT',
      MT: '10:00 PM – 11:00 PM MT',
      PT: '9:00 PM – 10:00 PM PT',
    },
    title: 'Wave 9: Final Polls Close in Hawaii & Alaska',
    electoralSignificance:
      'Hawaii and mainland Alaska close at Midnight ET, with Alaska’s westernmost Aleutian Islands closing at 1:00 AM ET Wednesday morning.',
    states: [
      {
        name: 'Alaska',
        slug: 'alaska',
        postalCode: 'AK',
        note: 'Ranked-Choice Voting second-round instant runoff tabulations occur 15 days after Election Day if no candidate hits 50% in Round 1',
        countingSpeed: 'Slow (Multi-Day Count)',
        keyRaces: 'U.S. Senate (Sullivan) + Open Governor (Dunleavy Term-Limited) + Toss-Up AK-AL House Seat',
      },
      {
        name: 'Hawaii',
        slug: 'hawaii',
        postalCode: 'HI',
        countingSpeed: 'Fast (Same Night)',
        keyRaces: 'Governor (Green) + 2 U.S. House Seats',
      },
    ],
  },
];

export function PollClosingWaveTracker() {
  const [tz, setTz] = useState<DisplayTz>('ET');

  return (
    <div className="space-y-6">
      {/* Timezone Selector Bar */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
            <Clock className="w-4 h-4" />
            <span>Interactive Timezone Converter</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black">
            View November 3, 2026 Poll-Closing Waves in Your Local Timezone:
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: 'ET', label: 'Eastern (ET)' },
              { id: 'CT', label: 'Central (CT)' },
              { id: 'MT', label: 'Mountain (MT)' },
              { id: 'PT', label: 'Pacific (PT)' },
            ] as { id: DisplayTz; label: string }[]
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTz(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                tz === item.id
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Wave-by-Wave Timeline Cards */}
      <div className="space-y-6">
        {CLOSING_WAVES.map((wave) => (
          <section
            key={wave.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden"
          >
            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="inline-block px-3 py-1 rounded-lg bg-blue-700 text-white font-mono text-xs sm:text-sm font-black mb-1.5">
                  {wave.times[tz]}
                </span>
                <h4 className="text-lg sm:text-xl font-black text-slate-900">{wave.title}</h4>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                ({wave.times.ET} / {wave.times.CT} / {wave.times.PT})
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                <strong>What to Watch at {wave.times[tz]}:</strong> {wave.electoralSignificance}
              </p>

              <div className="space-y-3">
                {wave.states.map((st, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          href={`/states/${st.slug}`}
                          className="text-sm sm:text-base font-black text-slate-900 hover:text-blue-700"
                        >
                          {st.name}
                        </Link>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
                            st.countingSpeed.includes('Fast')
                              ? 'bg-emerald-100 text-emerald-900'
                              : st.countingSpeed.includes('Moderate')
                              ? 'bg-amber-100 text-amber-900'
                              : 'bg-purple-100 text-purple-900'
                          }`}
                        >
                          {st.countingSpeed.includes('Fast') ? (
                            <Zap className="w-3 h-3" />
                          ) : (
                            <Hourglass className="w-3 h-3" />
                          )}
                          <span>Count Speed: {st.countingSpeed}</span>
                        </span>
                      </div>

                      <p className="text-xs text-slate-700">
                        <strong>Key 2026 Contests:</strong> {st.keyRaces}
                      </p>

                      {st.note && (
                        <p className="text-[11px] text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 inline-block">
                          <strong>Statutory / Timezone Rule:</strong> {st.note}
                        </p>
                      )}
                    </div>

                    <Link
                      href={`/states/${st.slug}`}
                      className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800"
                    >
                      <span>{st.postalCode === 'MULTI' ? 'View State Guides' : `${st.postalCode} Guide`}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
