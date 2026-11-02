import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTY_BY_FIPS, getCountyElectionAuthorityTitle } from '../../../../data/counties';
import { STATES_DATA } from '../../../../data/states';
import { Vote, ExternalLink, Clock, CreditCard, Calendar } from 'lucide-react';

interface Props {
  params: Promise<{ fips: string }>;
}

export function generateStaticParams() {
  return [
    { fips: '06037' }, // Los Angeles County, CA
    { fips: '17031' }, // Cook County, IL
    { fips: '48201' }, // Harris County, TX
    { fips: '04013' }, // Maricopa County, AZ
    { fips: '12086' }, // Miami-Dade County, FL
    { fips: '42101' }, // Philadelphia County, PA
    { fips: '42003' }, // Allegheny County, PA
    { fips: '13121' }, // Fulton County, GA
    { fips: '26163' }, // Wayne County, MI
    { fips: '55079' }, // Milwaukee County, WI
  ];
}

export default async function EmbedCountyWidgetPage({ params }: Props) {
  const { fips } = await params;
  const cleanFips = fips.padStart(5, '0');
  const county = COUNTY_BY_FIPS[cleanFips];

  if (!county) {
    notFound();
  }

  const state = STATES_DATA[county.stateSlug];
  if (!state) {
    notFound();
  }

  const authorityTitle = getCountyElectionAuthorityTitle(state.postalCode, county.name);
  const pollHours = county.pollingHoursOverride || state.pollingHours;

  return (
    <div className="bg-slate-950 text-white p-5 rounded-2xl border border-slate-800 shadow-lg max-w-2xl mx-auto my-2">
      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
            <Vote className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-black tracking-tight text-white flex items-center gap-1.5">
              <span>{county.name}, {state.postalCode}</span>
              <span className="px-1.5 py-0.5 bg-blue-900/80 text-blue-300 font-mono text-[10px] rounded">
                FIPS {county.fips}
              </span>
            </div>
            <div className="text-[10px] text-slate-400">
              {authorityTitle} • County Seat: {county.countySeat} (ZIPs {county.zipRange})
            </div>
          </div>
        </div>

        <span className="px-2 py-0.5 bg-amber-400 text-slate-950 text-[10px] font-black rounded shrink-0">
          NOV 3, 2026
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs mb-3">
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-blue-400">
            <Clock className="w-3 h-3" />
            <span>Poll Hours</span>
          </div>
          <div className="font-bold text-white mt-0.5">{pollHours}</div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-emerald-400">
            <Calendar className="w-3 h-3" />
            <span>Reg. Cutoff</span>
          </div>
          <div className="font-bold text-white mt-0.5 truncate">{state.registrationDeadline.online}</div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-amber-400">
            <CreditCard className="w-3 h-3" />
            <span>Voter ID Law</span>
          </div>
          <div className="font-bold text-white mt-0.5 truncate">{state.voterId.type}</div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-900 text-[11px] text-slate-400">
        <span>
          U.S. House: <strong className="text-slate-200 font-mono">{county.congressionalDistricts.join(', ')}</strong>
        </span>
        <Link
          href={`/states/${state.slug}/counties/${county.slug}`}
          target="_blank"
          rel="noopener"
          className="text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-1"
        >
          <span>Full {county.name} 2026 Voter Guide</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
