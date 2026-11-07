'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ALL_STATES_LIST } from '../data/states';
import { SITE_URL } from '../lib/siteConfig';
import {
  Code2,
  Copy,
  Check,
  Clock,
  MapPin,
  Flame,
  Building2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface WidgetOption {
  id: 'countdown' | 'state' | 'county' | 'poll-closing';
  title: string;
  badge: string;
  description: string;
  defaultHeight: number;
  icon: any;
}

const WIDGETS: WidgetOption[] = [
  {
    id: 'countdown',
    title: 'Live 2026 Midterm Countdown Timer',
    badge: 'Universal Midterm Clock',
    description: 'Precision live countdown clock tracking days, hours, minutes, and seconds until Tuesday, November 3, 2026.',
    defaultHeight: 220,
    icon: Clock,
  },
  {
    id: 'state',
    title: 'State Polling Hours & Voter ID Badge',
    badge: '50-State Statutory Card',
    description: 'Shows official poll hours, registration cutoffs, and voter ID rules for any selected U.S. State.',
    defaultHeight: 280,
    icon: MapPin,
  },
  {
    id: 'poll-closing',
    title: 'Election Night Poll-Closing Wave Tracker',
    badge: 'Election Night Flagship',
    description: 'Interactive timezone-converting wave tracker showing poll closings from 6:00 PM ET to 1:00 AM ET.',
    defaultHeight: 520,
    icon: Flame,
  },
  {
    id: 'county',
    title: 'County Board of Elections Info Card',
    badge: 'Hyper-Local County Card',
    description: 'Embed local county Board of Elections, polling hours, and sample ballot links for major counties.',
    defaultHeight: 290,
    icon: Building2,
  },
];

const MAJOR_COUNTIES = [
  { fips: '06037', name: 'Los Angeles County, CA' },
  { fips: '17031', name: 'Cook County (Chicago), IL' },
  { fips: '48201', name: 'Harris County (Houston), TX' },
  { fips: '04013', name: 'Maricopa County (Phoenix), AZ' },
  { fips: '12086', name: 'Miami-Dade County, FL' },
  { fips: '42101', name: 'Philadelphia County, PA' },
  { fips: '13121', name: 'Fulton County (Atlanta), GA' },
  { fips: '26163', name: 'Wayne County (Detroit), MI' },
  { fips: '55079', name: 'Milwaukee County, WI' },
];

export const CivicWidgetStudio: React.FC = () => {
  const [selectedWidget, setSelectedWidget] = useState<WidgetOption['id']>('countdown');
  const [selectedState, setSelectedState] = useState<string>('pennsylvania');
  const [selectedFips, setSelectedFips] = useState<string>('42101');
  const [copied, setCopied] = useState<boolean>(false);

  const embedUrl = useMemo(() => {
    if (selectedWidget === 'countdown') {
      return `${SITE_URL}/embed/countdown`;
    }
    if (selectedWidget === 'state') {
      return `${SITE_URL}/embed/state/${selectedState}`;
    }
    if (selectedWidget === 'poll-closing') {
      return `${SITE_URL}/embed/poll-closing`;
    }
    if (selectedWidget === 'county') {
      return `${SITE_URL}/embed/county/${selectedFips}`;
    }
    return `${SITE_URL}/embed/countdown`;
  }, [selectedWidget, selectedState, selectedFips]);

  const activeWidgetObj = WIDGETS.find((w) => w.id === selectedWidget) || WIDGETS[0];

  const embedCode = useMemo(() => {
    return `<iframe src="${embedUrl}" width="100%" height="${activeWidgetObj.defaultHeight}" style="border:none;overflow:hidden;border-radius:16px;max-width:650px;display:block;margin:0 auto;" title="${activeWidgetObj.title}" loading="lazy"></iframe>\n<p style="font-size:11px;color:#64748b;text-align:center;margin-top:6px;font-family:system-ui,-apple-system,sans-serif;">2026 Midterm Election Data provided by <a href="${SITE_URL}" target="_blank" rel="noopener" style="color:#2563eb;text-decoration:underline;">ElectionDay2026.org</a></p>`;
  }, [embedUrl, activeWidgetObj]);

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-10">
      {/* Widget Selector Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {WIDGETS.map((widget) => {
          const Icon = widget.icon;
          const isSelected = selectedWidget === widget.id;
          return (
            <button
              key={widget.id}
              type="button"
              onClick={() => setSelectedWidget(widget.id)}
              className={`p-5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-500/30'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-blue-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {widget.badge}
                  </span>
                </div>
                <h3 className="text-sm font-black mt-1">{widget.title}</h3>
                <p
                  className={`text-xs mt-1.5 line-clamp-2 ${
                    isSelected ? 'text-blue-100' : 'text-slate-500'
                  }`}
                >
                  {widget.description}
                </p>
              </div>
              <div
                className={`text-[11px] font-black mt-3 pt-2 border-t ${
                  isSelected ? 'border-blue-500 text-white' : 'border-slate-100 text-blue-600'
                }`}
              >
                {isSelected ? '✓ Selected Widget' : 'Click to Configure →'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Configuration & Code Generator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls & Embed Code Column */}
        <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <h3 className="text-lg font-black text-slate-900 mb-1">
              Configure Your Embed
            </h3>
            <p className="text-xs text-slate-500">
              Customize the parameters and copy your responsive HTML snippet.
            </p>
          </div>

          {/* Conditional Dropdowns based on widget */}
          {selectedWidget === 'state' && (
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Select State to Display:
              </label>
              <select
                aria-label="Select state for widget embed"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {ALL_STATES_LIST.map((st) => (
                  <option key={st.slug} value={st.slug}>
                    {st.name} ({st.postalCode})
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedWidget === 'county' && (
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Select Major County:
              </label>
              <select
                aria-label="Select county for widget embed"
                value={selectedFips}
                onChange={(e) => setSelectedFips(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {MAJOR_COUNTIES.map((c) => (
                  <option key={c.fips} value={c.fips}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Code Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-slate-700">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-blue-600" />
                <span>HTML Embed Snippet</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">
                Responsive • Zero Tracking
              </span>
            </div>

            <div className="relative">
              <textarea
                readOnly
                aria-label="HTML embed code"
                rows={5}
                value={embedCode}
                className="w-full p-3 font-mono text-[11px] bg-slate-950 text-emerald-400 rounded-xl border border-slate-800 focus:outline-none select-all"
              />
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className={`w-full py-3.5 px-4 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all shadow-xs ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Embed Code</span>
                </>
              )}
            </button>
          </div>

          <div className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4 space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Publisher Standards Guaranteed</span>
            </div>
            <p>
              • <strong>100% Free &amp; Non-Partisan:</strong> No paywalls, political endorsements, or partisan fundraising.
            </p>
            <p>
              • <strong>Zero Third-Party Ad Trackers:</strong> Clean, privacy-safe, lightweight iframe with sub-second loading time.
            </p>
            <p>
              • <strong>Self-Updating:</strong> All statutory dates, poll hours, and countdown timers update automatically.
            </p>
          </div>
        </div>

        {/* Live Preview Column */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Live Interactive Preview</span>
            </span>
            <a
              href={embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <span>Open Standalone URL</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-slate-100 p-4 sm:p-6 rounded-3xl border border-slate-300">
            <iframe
              src={embedUrl}
              width="100%"
              height={activeWidgetObj.defaultHeight}
              className="rounded-2xl border border-slate-300 shadow-md w-full bg-slate-950"
              title={activeWidgetObj.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
