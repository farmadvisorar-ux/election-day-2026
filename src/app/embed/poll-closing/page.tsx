import React from 'react';
import { PollClosingWaveTracker } from '../../../components/PollClosingWaveTracker';
import { SITE_URL } from '../../../lib/siteConfig';
import { Vote } from 'lucide-react';

export default function EmbedPollClosingPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen p-4 antialiased font-sans flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              <Vote className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-black text-white">
              2026 Election Night Poll-Closing Tracker
            </span>
          </div>
          <span className="text-[10px] bg-red-500/20 text-red-300 border border-red-400/30 px-2 py-0.5 rounded font-black uppercase tracking-wider animate-pulse">
            Live Waves
          </span>
        </div>

        <PollClosingWaveTracker />
      </div>

      <div className="pt-4 border-t border-slate-800 text-center">
        <a
          href={`${SITE_URL}/poll-closing-times-2026`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-400 hover:text-white font-bold"
        >
          View Full Election Night Interactive Command Center on ElectionDay2026.org →
        </a>
      </div>
    </div>
  );
}
