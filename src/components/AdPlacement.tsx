import React from 'react';

interface AdPlacementProps {
  format?: 'leaderboard' | 'rectangle' | 'in-article' | 'sidebar';
  slotId?: string;
  className?: string;
}

export const AdPlacement: React.FC<AdPlacementProps> = ({
  format = 'leaderboard',
  slotId = 'default-ad-slot',
  className = '',
}) => {
  // Configured with standard IAB formats
  let heightClass = 'h-[90px]';
  let maxWidthClass = 'max-w-[728px]';
  let labelText = 'Leaderboard Ad (728x90) / Responsive Mobile (320x50)';

  if (format === 'rectangle') {
    heightClass = 'h-[250px]';
    maxWidthClass = 'max-w-[300px] md:max-w-[336px]';
    labelText = 'Medium Rectangle (300x250)';
  } else if (format === 'in-article') {
    heightClass = 'h-[280px]';
    maxWidthClass = 'max-w-2xl';
    labelText = 'In-Article Native Display Placement';
  } else if (format === 'sidebar') {
    heightClass = 'h-[600px]';
    maxWidthClass = 'max-w-[300px]';
    labelText = 'Half Page / Sticky Skyscraper (300x600)';
  }

  return (
    <div
      className={`my-6 mx-auto w-full flex flex-col items-center justify-center ${className}`}
      aria-label="Advertisement Container"
    >
      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">
        Advertisement
      </div>
      <div
        id={slotId}
        className={`w-full ${maxWidthClass} ${heightClass} border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 flex flex-col items-center justify-center p-4 text-center transition-colors hover:bg-slate-100/80`}
      >
        <span className="text-xs font-semibold text-slate-500">
          Programmatic Monetization Slot
        </span>
        <span className="text-[11px] text-slate-400 mt-1 font-mono">
          {labelText}
        </span>
        <span className="text-[10px] text-slate-400 mt-0.5">
          (Google AdSense / Mediavine / Raptive Ready)
        </span>
      </div>
    </div>
  );
};
