import React from 'react';
import { CountdownTimer } from '../../../components/CountdownTimer';
import Link from 'next/link';
import { Vote } from 'lucide-react';

export default function EmbedCountdownPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center p-4 antialiased">
      <div className="max-w-xl mx-auto w-full">
        <CountdownTimer compact={false} />
        <div className="mt-2 text-center">
          <a
            href="https://election-day-2026.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <Vote className="w-3 h-3 text-blue-400" />
            <span>Provided by ElectionDay2026.org • Non-Partisan Midterm Guide</span>
          </a>
        </div>
      </div>
    </div>
  );
}
