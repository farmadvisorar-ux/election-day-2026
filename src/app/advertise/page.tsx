'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  BarChart3,
  Globe,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Briefcase,
} from 'lucide-react';

const SPONSORSHIP_TIERS = [
  {
    name: 'County & Municipal GOTV Partner',
    price: '$450 / month',
    cpmEquivalent: '~$18 Effective CPM',
    target: 'Local Election Boards, Community Foundations, Campus Civic Hubs & Regional Transit Agencies',
    features: [
      'Exclusive "Sponsored Civic Partner" placement on up to 10 County or City Voting Hubs',
      'Direct CTA link to local Poll Worker Recruitment or Free Election Day Transit programs',
      'Bilingual English + Spanish (/es/estados/[state]) badge inclusion',
      '100% WCAG 2.1 AA accessible, zero-cookie-tracking compliant display unit',
    ],
  },
  {
    name: 'Statewide Exclusive Statutory Sponsor',
    price: '$1,950 / month',
    cpmEquivalent: '~$28 Effective CPM',
    target: '501(c)(3) Voter Education Nonprofits, State Bar Associations, Universities & Labor Unions',
    features: [
      '100% Share-of-Voice across your chosen State Hub + all 6 State Statutory Spoke pages + all Counties in that state',
      'Featured placement inside the Printable 2026 Sample Ballot & Booth Cheat Sheet footer for that state',
      'Co-branded "Official 2026 Voter Deadlines (.ICS)" calendar reminder attribution',
      'Dedicated monthly impression & click-through transparency report',
    ],
    highlighted: true,
  },
  {
    name: 'National B2B & Civic Enterprise Partner',
    price: '$6,500 / month',
    cpmEquivalent: 'Custom Category Exclusivity',
    target: 'HR & Payroll Compliance Platforms, Remote Online Notary Providers, Moving/Relocation Brands & Identity Security',
    features: [
      'Category-exclusive placement across all 4,210+ indexed State, County, City, District & Long-Tail Q&A URLs',
      'Contextual integration inside the Employer Paid-Time-Off-to-Vote Notice Generator (/tools/employer-voting-leave-notice)',
      'Contextual integration inside the Emergency Ballot Problem Solver & Cure Tracker (/ballot-problem-solver)',
      'Custom co-branded whitepaper or 50-State Statutory Compliance API licensing',
    ],
  },
];

export default function AdvertiseMediaKitPage() {
  const [orgName, setOrgName] = useState('');
  const [orgType, setOrgType] = useState('501(c)(3) Civic Nonprofit / Foundation');
  const [selectedTier, setSelectedTier] = useState('Statewide Exclusive Statutory Sponsor');
  const [targetGeo, setTargetGeo] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-slate-950 text-white pt-12 pb-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Non-Partisan Civic Sponsorship &amp; B2B Media Kit</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Reach High-Intent American Voters Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-blue-400 to-emerald-300">
              4,210+ Statutory Election Hubs
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed mb-8">
            ElectionDay2026.org is built as a strictly non-partisan, statutory civic utility covering every U.S. State, all <strong>3,143 Counties</strong>, all <strong>435 Congressional Districts</strong>, <strong>153 Major U.S. Cities</strong>, and <strong>51 Bilingual Spanish Portals</strong>. Partner with us to sponsor non-partisan voter education, recruit poll workers, or connect voters with essential compliance, ID, notary, and relocation services.
          </p>

          {/* Reach Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="text-xs text-slate-400 font-bold uppercase">Indexed Statutory URLs</div>
              <div className="text-3xl font-black text-white mt-1">4,215+</div>
              <div className="text-xs text-emerald-400 font-semibold mt-1">States, Counties, Cities &amp; Q&amp;A</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="text-xs text-slate-400 font-bold uppercase">Bilingual Coverage</div>
              <div className="text-3xl font-black text-amber-400 mt-1">EN + ES</div>
              <div className="text-xs text-slate-400 mt-1">All 50 States + D.C. in Spanish</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="text-xs text-slate-400 font-bold uppercase">Interactive Civic Tools</div>
              <div className="text-3xl font-black text-blue-400 mt-1">9 Tools</div>
              <div className="text-xs text-slate-400 mt-1">Sample Ballot, Cure, Leave &amp; ID</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="text-xs text-slate-400 font-bold uppercase">Editorial Policy</div>
              <div className="text-3xl font-black text-emerald-400 mt-1">100%</div>
              <div className="text-xs text-slate-400 mt-1">Strictly Non-Partisan &amp; Brand-Safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Strict Non-Partisan Brand Safety Policy */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-extrabold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Strict Non-Partisan Brand Safety Standards</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              We Accept Civic, Educational, Municipal &amp; B2B Utility Sponsors Only
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To protect our E-E-A-T authority and non-partisan trust, ElectionDay2026.org <strong>does not accept</strong> candidate attack ads, PAC persuasion advertisements, or partisan fundraising campaigns. We partner exclusively with non-partisan 501(c)(3) civic organizations, county/state election boards (for poll worker recruitment and voter education), universities, public transit agencies, and high-trust consumer/B2B utilities (HR compliance, identity protection, online notary, and moving services).
            </p>
          </div>
          <Link
            href="/editorial-policy"
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shrink-0 transition-colors"
          >
            Read Full Editorial Policy →
          </Link>
        </section>

        {/* Sponsorship Tiers */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 text-center">
            2026 Midterm Cycle Sponsorship Packages
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SPONSORSHIP_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 ${
                  tier.highlighted
                    ? 'bg-slate-950 text-white border-blue-500 shadow-xl'
                    : 'bg-white text-slate-900 border-slate-200 shadow-xs'
                }`}
              >
                <div>
                  {tier.highlighted && (
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white font-extrabold text-[10px] uppercase tracking-wider mb-3">
                      Most Popular for Civic Orgs &amp; State Partners
                    </span>
                  )}
                  <h3 className="text-xl font-black mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-black">{tier.price}</span>
                    <span
                      className={`text-xs font-bold ${
                        tier.highlighted ? 'text-emerald-400' : 'text-emerald-700'
                      }`}
                    >
                      ({tier.cpmEquivalent})
                    </span>
                  </div>
                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      tier.highlighted ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    <strong>Ideal For:</strong> {tier.target}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.highlighted ? 'text-emerald-400' : 'text-blue-600'
                          }`}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#sponsorship-inquiry"
                  onClick={() => setSelectedTier(tier.name)}
                  className={`w-full py-3.5 px-4 rounded-xl font-black text-xs text-center transition-colors ${
                    tier.highlighted
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Select {tier.name} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Sponsorship Inquiry & Media Kit Request Form */}
        <section
          id="sponsorship-inquiry"
          className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-md max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            Request 2026 Sponsorship Availability &amp; Custom Rate Card
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Select your organization type and target states/cities below to generate an instant sponsorship reservation brief.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-black text-lg">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <span>Sponsorship Reservation Logged for {orgName || email}</span>
              </div>
              <p className="text-sm text-emerald-950 leading-relaxed">
                Package selected: <strong>{selectedTier}</strong> ({orgType}) • Target Geography:{' '}
                <strong>{targetGeo || 'National / Multi-State'}</strong>. Our partnerships desk will send the 2026 placement inventory sheet and insertion order to <strong>{email}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs"
              >
                Modify Reservation Details
              </button>
            </div>
          ) : (
            <form onSubmit={handleInquiry} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1.5">
                  Organization / Brand Name
                </label>
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g. League of Women Voters / Gusto HR / County BOE"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1.5">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="partnerships@organization.org"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1.5">
                  Organization Category
                </label>
                <select
                  aria-label="Organization Category"
                  value={orgType}
                  onChange={(e) => setOrgType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-sm font-bold text-slate-900"
                >
                  <option>501(c)(3) Civic Nonprofit / Foundation</option>
                  <option>State / County Election Board (Poll Worker Recruitment)</option>
                  <option>University / College Civic Engagement Center</option>
                  <option>Public Transit Agency (Free Election Day Rides)</option>
                  <option>HR, Payroll &amp; Employment Law SaaS</option>
                  <option>Identity Verification, Legal, Notary or Relocation Brand</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1.5">
                  Preferred Sponsorship Tier
                </label>
                <select
                  aria-label="Preferred Sponsorship Tier"
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-sm font-bold text-slate-900"
                >
                  {SPONSORSHIP_TIERS.map((t) => (
                    <option key={t.name} value={t.name}>
                      {t.name} ({t.price})
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-extrabold uppercase text-slate-600 mb-1.5">
                  Target State(s), Cities, or Counties
                </label>
                <input
                  type="text"
                  value={targetGeo}
                  onChange={(e) => setTargetGeo(e.target.value)}
                  placeholder="e.g. Pennsylvania, Michigan & Wisconsin State Hubs — or National HR Leave Tool"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900"
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-md transition-colors"
                >
                  Reserve 2026 Sponsorship Inventory &amp; Download Rate Card
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
