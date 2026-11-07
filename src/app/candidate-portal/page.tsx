'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import {
  Award,
  Shield,
  CheckCircle2,
  Building2,
  DollarSign,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileText,
  Mail,
  Send,
  ExternalLink,
  ChevronRight,
  Vote,
} from 'lucide-react';
import { ALL_STATES_LIST } from '../../data/states';
import { SponsoredCandidateCard, CandidateListingData } from '../../components/SponsoredCandidateCard';
import { JsonLd } from '../../components/JsonLd';

const PACKAGES = [
  {
    id: 'county',
    name: 'County / Municipal Candidate Spotlight',
    price: '$299',
    billing: 'one-time per election cycle',
    audience: 'Local voters in your specific County, Parish, or Municipality',
    bestFor: 'County Sheriff, Commissioner, Clerk, Mayor, City Council & School Board',
    features: [
      'Featured placement on your chosen County Guide (/states/[state]/counties/[county])',
      'Spotlight inside the Printable Sample Ballot for your county',
      'Candidate headshot, 3 platform priorities, and official bio',
      'Direct link to your ActBlue, WinRed, or Anedot campaign donation page',
      'FEC and state ethics compliance disclaimer included',
    ],
  },
  {
    id: 'district',
    name: 'U.S. House Congressional District Exclusive',
    price: '$899',
    billing: 'one-time per election cycle',
    audience: '750,000+ residents in your exact U.S. House District',
    bestFor: 'U.S. House Candidates running in all 435 Congressional Districts',
    features: [
      'Premier Verified Candidate Spotlight on /districts/[district] (e.g., PA-07, TX-21, CA-27)',
      'Triggered on /sample-ballot-2026 whenever any voter enters a ZIP code within your district',
      'Verified Candidate checkmark and priority issue comparison grid',
      'Direct links to campaign website, volunteer signups, and donation portal',
      'Featured in the Zero-Signal Offline PWA booth cheat sheet for your district',
    ],
    highlighted: true,
  },
  {
    id: 'statewide',
    name: 'Statewide U.S. Senate / Gubernatorial Marquee',
    price: '$2,999',
    billing: 'one-time per election cycle',
    audience: 'All voters across your entire state',
    bestFor: 'U.S. Senate (35 races) and Gubernatorial Candidates (36 races)',
    features: [
      'Top-of-page Marquee placement on your Statewide Hub (/states/[state])',
      'Featured in /races/senate-2026 or /races/governor-2026 candidate profiles',
      'Appears on every single County sample ballot across the entire state',
      'Video statement embed support & high-converting volunteer acquisition CTA',
      'Dedicated analytics dashboard with impressions, clicks, and ZIP distribution',
    ],
  },
  {
    id: 'slate',
    name: 'County Slate / Party Committee Bundle',
    price: '$1,499',
    billing: 'one-time per election cycle',
    audience: 'Entire party or coalition slate across all races in a county',
    bestFor: 'County Democratic / Republican Committees & Civic Endorsement Slates',
    features: [
      'Complete unified slate card for up to 10 candidates in your county',
      'Endorsement cheat sheet download link inside the Printable Sample Ballot',
      'Co-branded voter guide with official party headquarters contact info',
      'Free updates through Election Day (Nov 3, 2026) for candidate changes',
    ],
  },
];

export default function CandidatePortalPage() {
  const [candidateName, setCandidateName] = useState('Jane Smith');
  const [officeSought, setOfficeSought] = useState('U.S. House of Representatives (PA-07)');
  const [party, setParty] = useState<'Democrat' | 'Republican' | 'Independent' | 'Libertarian' | 'Green' | 'Non-Partisan'>('Democrat');
  const [selectedState, setSelectedState] = useState('pennsylvania');
  const [committeeName, setCommitteeName] = useState('Jane Smith for Congress');
  const [fecId, setFecId] = useState('C00849201');
  const [tagline, setTagline] = useState('Fighting for lower costs, stronger public schools, and economic opportunity for working families.');
  const [priority1, setPriority1] = useState('Lowering prescription drug and energy costs for working families');
  const [priority2, setPriority2] = useState('Expanding career technical training and small business infrastructure grants');
  const [priority3, setPriority3] = useState('Protecting voting rights, fair maps, and civic access');
  const [websiteUrl, setWebsiteUrl] = useState('https://example.com');
  const [donationUrl, setDonationUrl] = useState('https://secure.actblue.com');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('district');
  const [paymentPreference, setPaymentPreference] = useState<'card' | 'invoice'>('card');
  const [submitted, setSubmitted] = useState(false);
  const [, startTransition] = useTransition();

  const previewCandidate: CandidateListingData = {
    candidateName: candidateName || 'Candidate Name',
    officeSought: officeSought || 'Office Sought',
    party,
    committeeName: committeeName || 'Committee Name',
    fecOrEthicsId: fecId || undefined,
    tagline: tagline || undefined,
    platformPriorities: [priority1, priority2, priority3].filter(Boolean),
    websiteUrl,
    donationUrl,
  };

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail.includes('@')) return;
    startTransition(() => {
      setSubmitted(true);
    });
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ElectionDay2026.org Verified Candidate Sponsorship Program',
    description: 'Digital advertising and verified candidate profiles for 2026 federal, state, and local political campaigns pursuant to FEC 11 CFR § 110.11.',
    provider: {
      '@type': 'Organization',
      name: 'ElectionDay2026.org',
      url: 'https://election-day-2026.vercel.app',
    },
    serviceType: 'Political Campaign Digital Advertising',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };

  return (
    <>
      <JsonLd data={schemaData} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-4">
            <Award className="w-4 h-4" />
            <span>Official 2026 Campaign &amp; Candidate Advertising Network</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Reach Verified Voters While They <span className="text-amber-300">Mark Their Ballot</span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Connect directly with high-propensity registered voters researching their polling hours, precinct locations, and candidates across all <strong>435 Congressional Districts</strong> and <strong>3,143 U.S. Counties</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Zero-Waste District Targeting</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>FEC 11 CFR § 110.11 Compliant</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>In-The-Booth Offline PWA Presence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">4,215+</div>
            <div className="text-xs font-bold text-slate-500 uppercase mt-1">Indexed Civic URLs</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-600">435 / 435</div>
            <div className="text-xs font-bold text-slate-500 uppercase mt-1">U.S. House Districts Covered</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">3,143</div>
            <div className="text-xs font-bold text-slate-500 uppercase mt-1">U.S. Counties &amp; Parishes</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-600">8.4x</div>
            <div className="text-xs font-bold text-slate-500 uppercase mt-1">Higher CTR than Banner Ads</div>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section id="rate-card" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Published Rate Card • Equal Terms for All Certified Candidates
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            2026 Campaign Sponsorship Packages
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
            Fixed flat-rate pricing per election cycle. Available equally to all candidates legally qualified to appear on the ballot under federal and state campaign finance laws.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-blue-900 to-slate-950 text-white border-2 border-amber-400 shadow-xl ring-2 ring-amber-400/20'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div>
                {pkg.highlighted && (
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 mb-3">
                    Most Popular for House Candidates
                  </div>
                )}
                <h3 className="text-lg font-black">{pkg.name}</h3>
                <p className={`text-xs mt-1 ${pkg.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                  {pkg.bestFor}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200/20">
                  <div className="text-3xl font-black">{pkg.price}</div>
                  <div className={`text-[11px] font-medium ${pkg.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                    {pkg.billing}
                  </div>
                </div>

                <div className={`text-xs font-bold mt-3 p-2 rounded-lg ${pkg.highlighted ? 'bg-white/10 text-amber-300' : 'bg-slate-100 text-slate-700'}`}>
                  {pkg.audience}
                </div>

                <ul className="mt-4 space-y-2 text-xs">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlighted ? 'text-amber-400' : 'text-emerald-600'}`} />
                      <span className={pkg.highlighted ? 'text-slate-200' : 'text-slate-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setSelectedPackage(pkg.id);
                  const el = document.getElementById('builder-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`mt-6 w-full py-2.5 px-4 rounded-xl text-xs font-black transition-colors ${
                  pkg.highlighted
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                Select {pkg.name.split(' ')[0]} Package →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Profile Builder & Live Preview */}
      <section id="builder-form" className="bg-slate-50 border-t border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
              Interactive Campaign Profile Generator
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
              Preview Your Verified Candidate Spotlight in Real Time
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl mx-auto">
              Fill out your campaign platform details below to preview how your verified profile will appear on your district’s sample ballot and county hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Inputs (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-black text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                <span>1. Candidate &amp; Campaign Identity</span>
                <span className="text-xs font-normal text-slate-500">Step 1 of 3</span>
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Candidate Full Name *
                    </label>
                    <input
                      type="text"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="e.g. Jane Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Political Party Affiliation *
                    </label>
                    <select
                      value={party}
                      onChange={(e) => setParty(e.target.value as CandidateListingData['party'])}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="Democrat">Democratic Party</option>
                      <option value="Republican">Republican Party</option>
                      <option value="Independent">Independent</option>
                      <option value="Libertarian">Libertarian Party</option>
                      <option value="Green">Green Party</option>
                      <option value="Non-Partisan">Non-Partisan / Judicial</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      State *
                    </label>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      {ALL_STATES_LIST.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name} ({s.postalCode})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Office Sought (District / Seat) *
                    </label>
                    <input
                      type="text"
                      value={officeSought}
                      onChange={(e) => setOfficeSought(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="e.g. U.S. House of Representatives (PA-07)"
                    />
                  </div>
                </div>

                <h3 className="text-base font-black text-slate-900 mt-6 pt-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                  <span>2. Campaign Credentials &amp; Legal Disclaimers</span>
                  <span className="text-xs font-normal text-slate-500">Step 2 of 3</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Official Campaign Committee Name *
                    </label>
                    <input
                      type="text"
                      value={committeeName}
                      onChange={(e) => setCommitteeName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="e.g. Jane Smith for Congress"
                    />
                    <p className="text-[10px] text-slate-500 mt-0.5">Used in mandatory FEC &quot;Paid for by&quot; box</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      FEC ID / State Ethics ID (Optional)
                    </label>
                    <input
                      type="text"
                      value={fecId}
                      onChange={(e) => setFecId(e.target.value)}
                      className="w-full px-3 py-2 text-sm font-mono border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="e.g. C00849201"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Campaign Tagline / Slogan
                  </label>
                  <input
                    type="text"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Short 1-sentence campaign message"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Top 3 Policy Priorities for 2026:
                  </label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={priority1}
                      onChange={(e) => setPriority1(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Priority #1"
                    />
                    <input
                      type="text"
                      value={priority2}
                      onChange={(e) => setPriority2(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Priority #2"
                    />
                    <input
                      type="text"
                      value={priority3}
                      onChange={(e) => setPriority3(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Priority #3"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Official Campaign Website URL
                    </label>
                    <input
                      type="url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="https://..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Direct Donation URL (ActBlue / WinRed / Anedot)
                    </label>
                    <input
                      type="url"
                      value={donationUrl}
                      onChange={(e) => setDonationUrl(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="https://secure.actblue.com/..."
                    />
                  </div>
                </div>

                <h3 className="text-base font-black text-slate-900 mt-6 pt-4 pb-2 border-b border-slate-200 flex items-center justify-between">
                  <span>3. Campaign Contact &amp; Billing Preference</span>
                  <span className="text-xs font-normal text-slate-500">Step 3 of 3</span>
                </h3>

                <form onSubmit={handleReserve} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Campaign Manager / Digital Dir."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Official Campaign Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="campaign@candidate.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Treasurer / Phone
                      </label>
                      <input
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Payment &amp; Invoicing Preference:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <label
                        className={`p-3 rounded-lg border cursor-pointer flex items-center gap-2 ${
                          paymentPreference === 'card'
                            ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentPreference === 'card'}
                          onChange={() => setPaymentPreference('card')}
                          className="text-blue-600"
                        />
                        <span>Instant Credit Card (Stripe Checkout)</span>
                      </label>
                      <label
                        className={`p-3 rounded-lg border cursor-pointer flex items-center gap-2 ${
                          paymentPreference === 'invoice'
                            ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentPreference === 'invoice'}
                          onChange={() => setPaymentPreference('invoice')}
                          className="text-blue-600"
                        />
                        <span>Campaign Invoice (W-9 / ACH Wire / Check)</span>
                      </label>
                    </div>
                  </div>

                  {submitted ? (
                    <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl text-xs space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Candidate Reservation Received!</span>
                      </div>
                      <p>
                        Our civic advertising desk has received your listing request for <strong>{candidateName}</strong> ({officeSought}). A verification email with your commercial insertion order, W-9, and payment link has been sent to <strong>{contactEmail}</strong>.
                      </p>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Award className="w-4 h-4 text-amber-300" />
                      <span>Submit &amp; Reserve Candidate Listing →</span>
                    </button>
                  )}
                </form>
              </div>
            </div>

            {/* Live Preview (5 cols) */}
            <div className="lg:col-span-5 sticky top-24">
              <div className="bg-slate-900 text-white p-4 rounded-t-2xl flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Live Ballot Placement Preview</span>
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                  Real-Time Mockup
                </span>
              </div>
              <div className="bg-slate-100 p-4 rounded-b-2xl border-x border-b border-slate-300">
                <p className="text-[11px] text-slate-500 mb-2 italic">
                  This is how your verified profile will render on {officeSought || 'your race page'} and inside the 2026 Sample Ballot Builder:
                </p>

                <SponsoredCandidateCard
                  candidate={previewCandidate}
                  badgeText="Official 2026 Candidate Spotlight"
                />

                <div className="mt-4 p-3 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-blue-600" />
                    <span>FEC 11 CFR § 110.11 Compliance Guarantee</span>
                  </div>
                  <p>
                    All political listings must clearly state the committee responsible for the advertisement. ElectionDay2026.org provides commercially reasonable rates equally to all qualified candidates pursuant to federal campaign laws.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Political Ad Agencies & Consultancies */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
              Political Agencies, Super PACs &amp; Media Buyers
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Managing Multiple 2026 House or Senate Races?
            </h2>
            <p className="text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
              We offer turnkey programmatic inventory access, multi-district bundles, and agency volume commissions for political media consultancies (DSPolitical, Targeted Victory, Blueprint, Push Digital, Authentic, etc.).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-lg font-bold text-amber-300">Bulk Multi-Seat Rates</div>
                <div className="text-xs text-slate-300 mt-1">Tiered discounts for agencies booking 5+ districts or statewide slates.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-lg font-bold text-blue-300">W-9 &amp; Agency Wire</div>
                <div className="text-xs text-slate-300 mt-1">Net-30 billing, ACH transfers, and campaign compliance invoices.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-lg font-bold text-emerald-300">Impression Audit Logs</div>
                <div className="text-xs text-slate-300 mt-1">ZIP-level impression delivery reports for FEC filing documentation.</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:campaigns@electionday2026.org?subject=2026%20Agency%20Media%20Kit%20Request"
                className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Campaign Ad Desk: campaigns@electionday2026.org</span>
              </a>
              <Link
                href="/advertise"
                className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-colors"
              >
                <span>Non-Partisan Civic Media Kit →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions by Campaign Treasurers
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Is this legal under Federal Election Commission (FEC) campaign finance rules?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Yes. Under 11 CFR § 110.11 and the Federal Election Campaign Act (FECA), commercial publishers and media platforms may sell advertising space to political committees at commercially reasonable, published rates. ElectionDay2026.org offers standard published rate cards available equally to all certified candidates. Every sponsored listing includes the mandatory FEC disclaimer identifying the committee that paid for the advertisement.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Does ElectionDay2026.org endorse any political candidates or parties?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              No. ElectionDay2026.org is a strictly non-partisan civic operating system and educational reference. We do not endorse candidates, coordinate with campaigns, or contribute to political committees. Candidate listings are commercial advertising spaces clearly marked as &quot;Paid Political Advertisement&quot; to provide voters with direct, unfiltered access to each candidate’s stated platform.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Can both opposing candidates purchase listings in the same Congressional District?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Yes. In fact, voters frequently appreciate comparing candidate statements side by side. When both candidates in a race purchase verified listings, both profiles appear in equal rotation and in side-by-side comparison tables within the district guide and sample ballot.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              What payment methods are accepted by the campaign ad desk?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We accept official campaign credit cards via Stripe, as well as ACH bank wire transfers, electronic checks, and invoice payments. We provide standard W-9 forms, itemized invoices, and compliance documentation for your campaign treasurer’s quarterly FEC or state ethics disclosures.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
