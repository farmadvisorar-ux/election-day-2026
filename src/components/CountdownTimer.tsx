'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Code2, Check, Share2 } from 'lucide-react';

interface CountdownTimerProps {
  compact?: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ compact = false }) => {
  // Target: November 3, 2026 at 07:00:00 EST (Polls open)
  const targetDate = new Date('2026-11-03T07:00:00-05:00').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  const [copied, setCopied] = useState(false);
  const [showEmbedModal, setShowEmbedModal] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const copyEmbedCode = () => {
    const embedCode = `<iframe src="https://election-day-2026.vercel.app/embed/countdown" width="100%" height="220" frameborder="0" title="Election Day 2026 Countdown" style="border-radius:12px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);"></iframe>`;
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-xs font-semibold text-blue-900">
        <Clock className="w-3.5 h-3.5 text-blue-600" />
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m until Polls Open
        </span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6 md:p-8 text-white shadow-xl">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span>Official Midterm Election Countdown</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-1">
            Tuesday, November 3, 2026
          </h2>
          <p className="text-xs text-blue-200/80">7:00 AM EST (East Coast Poll Opening)</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowEmbedModal(!showEmbedModal)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-xs font-medium rounded-lg transition-colors border border-white/15"
            title="Get embed widget code for your website"
          >
            <Code2 className="w-3.5 h-3.5 text-blue-300" />
            <span>Embed Widget</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-5 text-center my-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-5 border border-white/15 shadow-inner">
          <div className="text-3xl md:text-5xl font-black tracking-tight text-amber-300">
            {timeLeft.days}
          </div>
          <div className="text-[11px] md:text-xs font-medium uppercase tracking-wider text-slate-300 mt-1">
            Days
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-5 border border-white/15 shadow-inner">
          <div className="text-3xl md:text-5xl font-black tracking-tight text-white">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-[11px] md:text-xs font-medium uppercase tracking-wider text-slate-300 mt-1">
            Hours
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-5 border border-white/15 shadow-inner">
          <div className="text-3xl md:text-5xl font-black tracking-tight text-white">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-[11px] md:text-xs font-medium uppercase tracking-wider text-slate-300 mt-1">
            Minutes
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-5 border border-white/15 shadow-inner">
          <div className="text-3xl md:text-5xl font-black tracking-tight text-emerald-400">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-[11px] md:text-xs font-medium uppercase tracking-wider text-slate-300 mt-1">
            Seconds
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-blue-200/70 pt-2 gap-2">
        <span>Target: General Election Day 2026 across 50 U.S. States</span>
        <span className="flex items-center gap-1 font-mono">
          <Clock className="w-3 h-3 text-emerald-400" />
          Live Real-time Synced Clock
        </span>
      </div>

      {showEmbedModal && (
        <div className="mt-4 pt-4 border-t border-white/15 bg-black/30 p-4 rounded-xl text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">
              Embed Countdown Widget on your blog or site:
            </span>
            <button
              onClick={copyEmbedCode}
              className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-blue-600 hover:bg-blue-500 rounded font-medium text-white transition-colors"
            >
              {copied ? <Check className="w-3 h-3" /> : <Share2 className="w-3 h-3" />}
              {copied ? 'Copied HTML!' : 'Copy Code'}
            </button>
          </div>
          <pre className="text-[11px] font-mono bg-slate-950 p-2.5 rounded border border-white/10 overflow-x-auto text-blue-300">
            {`<iframe src="https://election-day-2026.vercel.app/embed/countdown" width="100%" height="220" frameborder="0" title="Election Day 2026 Countdown" style="border-radius:12px;"></iframe>`}
          </pre>
          <p className="text-[10px] text-slate-400 mt-1.5">
            Free to embed for educational, news, and civic websites. Provides live dynamic updates.
          </p>
        </div>
      )}
    </div>
  );
};
