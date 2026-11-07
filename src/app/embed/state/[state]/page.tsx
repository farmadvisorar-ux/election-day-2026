import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STATES_DATA } from '../../../../data/states';
import { SITE_URL } from '../../../../lib/siteConfig';
import { Vote, Clock, Calendar, ShieldCheck, ExternalLink } from 'lucide-react';

interface Props {
  params: Promise<{ state: string }>;
}

export function generateStaticParams() {
  return [
    { state: 'pennsylvania' },
    { state: 'texas' },
    { state: 'georgia' },
    { state: 'michigan' },
    { state: 'northcarolina' },
    { state: 'wisconsin' },
    { state: 'arizona' },
    { state: 'nevada' },
    { state: 'florida' },
    { state: 'ohio' },
    { state: 'california' },
    { state: 'newyork' },
  ];
}

export default async function EmbedStateWidgetPage({ params }: Props) {
  const { state: stateSlug } = await params;
  const state = STATES_DATA[stateSlug];

  if (!state) {
    notFound();
  }

  return (
    <div className="bg-slate-950 text-white p-5 rounded-2xl border border-slate-800 shadow-md max-w-xl mx-auto my-2 antialiased font-sans">
      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
            <Vote className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tight leading-none text-white">
              {state.name} 2026 Midterm Election Guide
            </h1>
            <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
              Tuesday, November 3, 2026 • Official Voting Hours &amp; Deadlines
            </p>
          </div>
        </div>
        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
          {state.postalCode}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs mb-3">
        <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
          <div className="flex items-center gap-1.5 text-blue-400 font-bold text-[10px] uppercase mb-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Poll Hours (Nov 3)</span>
          </div>
          <div className="font-black text-white text-xs">{state.pollingHours}</div>
        </div>

        <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px] uppercase mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Registration Cutoff</span>
          </div>
          <div className="font-black text-white text-xs truncate">
            {state.registrationDeadline.online}
          </div>
        </div>

        <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 col-span-2">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] uppercase mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Voter ID Law</span>
          </div>
          <div className="font-bold text-white text-xs">
            {state.voterId.type}: <span className="font-normal text-slate-300">{state.voterId.description}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px]">
        <a
          href={state.officialPortal.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white inline-flex items-center gap-1 font-semibold"
        >
          <span>Official {state.name} Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        <a
          href={`${SITE_URL}/states/${state.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 font-bold"
        >
          View Full {state.name} Guide on ElectionDay2026.org →
        </a>
      </div>
    </div>
  );
}
