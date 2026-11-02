'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface StickyMobileAdProps {
  slotId?: string;
}

export const StickyMobileAd: React.FC<StickyMobileAdProps> = ({
  slotId = 'sticky-mobile-anchor',
}) => {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div
      id={slotId}
      role="complementary"
      aria-label="Sponsored Mobile Advertisement"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-300 shadow-2xl p-2 md:hidden transition-all duration-300"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        <div className="w-full flex items-center justify-between text-[9px] font-bold tracking-widest uppercase text-slate-400 mb-1 px-1">
          <span>Sponsored Advertisement • High Viewability Anchor</span>
          <button
            onClick={() => setClosed(true)}
            aria-label="Close advertisement"
            className="text-slate-400 hover:text-slate-700 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 320x50 Mobile Leaderboard Unit */}
        <div className="w-[320px] h-[50px] bg-slate-100 border border-dashed border-slate-300 rounded flex items-center justify-center text-center text-[10px] text-slate-500 font-mono">
          <span>Google AdSense / Mediavine Mobile Sticky Unit (320x50)</span>
        </div>
      </div>
    </div>
  );
};
