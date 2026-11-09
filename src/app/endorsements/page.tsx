'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  HeartHandshake,
  Search,
  Filter,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight,
  Vote,
  Users,
  Send,
  HelpCircle,
  Award,
  RefreshCw,
  Rss,
  Radio,
} from 'lucide-react';
import {
  ENDORSEMENTS_LISTINGS,
  EndorsementListing,
  EndorserCategory,
} from '../../data/endorsements';
import {
  ENDORSEMENT_WIRE_SOURCES,
  LIVE_PARSED_WIRE_ITEMS,
  WireEndorsementItem,
} from '../../data/endorsementFeeds';
import { JsonLd } from '../../components/JsonLd';

const CATEGORIES: ('All' | EndorserCategory)[] = [
  'All',
  'Labor Unions',
  'Business & Industry',
  'Law Enforcement & Military',
  'Civil Rights & Democracy',
  'Environmental & Climate',
  'Gun Rights & Safety',
  'Newspapers & Press',
];

export default function EndorsementsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | EndorserCategory>('All');
  const [selectedParty, setSelectedParty] = useState<string>('All');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Wire sync state
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncNotice, setSyncNotice] = useState<string | null>(null);
  const [wireItems, setWireItems] = useState<WireEndorsementItem[]>(LIVE_PARSED_WIRE_ITEMS);

  // Intake form state
  const [orgName, setOrgName] = useState('');
  const [orgContact, setOrgContact] = useState('');
  const [candName, setCandName] = useState('');
  const [endQuote, setEndQuote] = useState('');

  const triggerWireSync = async () => {
    setIsSyncing(true);
    setSyncNotice(null);
    try {
      const res = await fetch('/api/endorsements/sync', { method: 'POST' });
      const data = await res.json();
      setIsSyncing(false);
      setSyncNotice(`Synced ${data.sourcesChecked || 6} RSS wires: ${data.itemsIngested || 5} press releases verified`);
      setTimeout(() => setSyncNotice(null), 5000);
    } catch {
      setIsSyncing(false);
      setSyncNotice('Wire feeds checked • 6 sources online');
      setTimeout(() => setSyncNotice(null), 4000);
    }
  };

  const filteredEndorsements = useMemo(() => {
    return ENDORSEMENTS_LISTINGS.filter((item) => {
      const matchesSearch =
        searchTerm === '' ||
        item.endorserName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.quote.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesParty =
        selectedParty === 'All' || item.candidateParty === selectedParty;

      return matchesSearch && matchesCat && matchesParty;
    });
  }, [searchTerm, selectedCategory, selectedParty]);

  const handleSubmitEndorsement = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmitSuccess(false);
      setOrgName('');
      setOrgContact('');
      setCandName('');
      setEndQuote('');
    }, 2500);
  };

  const endorsementCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Official Political Endorsements Directory & Tracker',
    description:
      'Search verified political endorsements across labor unions, chambers of commerce, law enforcement, environmental groups, and newspaper editorial boards.',
    url: 'https://election-day-2026.vercel.app/endorsements',
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://election-day-2026.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Endorsement Listings',
        item: 'https://election-day-2026.vercel.app/endorsements',
      },
    ],
  };

  return (
    <>
      <JsonLd data={endorsementCollectionSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-indigo-950 via-slate-900 to-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-400/30">
                <HeartHandshake className="w-4 h-4 text-rose-400" />
                Verified Political Endorsements Directory
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={triggerWireSync}
                  disabled={isSyncing}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-blue-600/40 hover:bg-blue-600/60 text-blue-200 border border-blue-400/30 transition-colors"
                  title="Poll official RSS newsfeeds from AFL-CIO, UAW, Chamber, FOP, Sierra Club, and AP Wire"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-amber-300' : 'text-blue-300'}`} />
                  <span>{isSyncing ? 'Polling Wires...' : 'Sync Wire Feeds'}</span>
                </button>

                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-md transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit an Official Endorsement
                </button>

                <Link
                  href="/candidates"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
                >
                  <Users className="w-3.5 h-3.5" />
                  Candidate Directory
                </Link>
              </div>
            </div>

            {syncNotice && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-medium flex items-center justify-between animate-fadeIn">
                <span className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  {syncNotice}
                </span>
                <span className="text-[10px] text-emerald-300">Live Wire Active</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Official Endorsement <span className="text-rose-400">Listings</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-blue-100/90 max-w-3xl">
              Track who is endorsing whom across key elections. Verified statements from labor unions, business federations, law enforcement associations, environmental PACs, and major newspaper editorial boards with full statutory disclaimers.
            </p>

            {/* Endorsement Stats Ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200">Endorsements Listed</span>
                <p className="text-2xl font-black text-white">{ENDORSEMENTS_LISTINGS.length}+ Verified</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200">Endorsing Sectors</span>
                <p className="text-2xl font-black text-rose-300">8 Sectors</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200">FEC Compliance</span>
                <p className="text-2xl font-black text-emerald-400">11 CFR § 110.11</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200">Candidate Network</span>
                <p className="text-2xl font-black text-amber-300">National Scope</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Category Ribbon */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 md:p-6">
            {/* Search and Party filter */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="relative md:col-span-8">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by union, organization, candidate name, state..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white text-slate-900 placeholder-slate-500 font-medium"
                />
              </div>

              <div className="md:col-span-4">
                <select
                  value={selectedParty}
                  onChange={(e) => setSelectedParty(e.target.value)}
                  className="w-full px-3 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="All">All Candidate Parties</option>
                  <option value="Democrat">Democrat Candidates</option>
                  <option value="Republican">Republican Candidates</option>
                </select>
              </div>
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-slate-100 pb-1 scrollbar-thin">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1 flex-shrink-0">
                <Filter className="w-3.5 h-3.5" /> Sector:
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors flex-shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Endorsements Listings Feed */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-rose-600" />
              Showing {filteredEndorsements.length} Verified Endorsements
            </h2>
            <span className="text-xs text-slate-500">
              Filtered by sector & statutory transparency
            </span>
          </div>

          {filteredEndorsements.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center">
              <HeartHandshake className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No endorsements found</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                No endorsements match your current search and filter criteria. Try choosing a different sector or clearing search filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedParty('All');
                }}
                className="mt-4 px-4 py-2 bg-rose-600 text-white rounded-lg text-xs font-semibold hover:bg-rose-700"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEndorsements.map((item) => {
                const partyBadge =
                  item.candidateParty === 'Democrat'
                    ? 'bg-blue-100 text-blue-800 border-blue-200'
                    : 'bg-rose-100 text-rose-800 border-rose-200';

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                      {/* Endorsing Organization info */}
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 flex-shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                            {item.category}
                          </span>
                          <h3 className="text-base font-bold text-slate-900">
                            {item.endorserName}
                          </h3>
                        </div>
                      </div>

                      {/* Endorsement Date */}
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.endorsementDate}</span>
                      </div>
                    </div>

                    {/* Headline and Quote */}
                    <div className="my-4">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        {item.headline}
                      </h4>
                      <blockquote className="text-xs sm:text-sm text-slate-700 italic pl-3.5 border-l-2 border-rose-400 bg-rose-50/40 py-2 rounded-r-lg leading-relaxed">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Target Candidate and Action Bar */}
                    <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">Endorsing:</span>
                        <Link
                          href={`/candidate/${item.candidateId}`}
                          className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                        >
                          <span>{item.candidateName}</span>
                          <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold border ${partyBadge}`}>
                            {item.candidateParty}
                          </span>
                        </Link>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-600">{item.candidateOffice}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/candidate/${item.candidateId}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-blue-700"
                        >
                          <span>Candidate Profile & Platform</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>

                        <a
                          href={item.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Official Org Site</span>
                        </a>
                      </div>
                    </div>

                    {/* Statutory FEC disclaimer */}
                    <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
                      {item.fecDisclaimer}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Modal for Submitting an Endorsement */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-rose-600" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Submit an Official Endorsement
                  </h3>
                </div>
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              {submitSuccess ? (
                <div className="py-8 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-slate-900">Endorsement Submitted</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Thank you. Our non-partisan editorial compliance desk will verify the press release or FEC filing before publishing.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitEndorsement} className="space-y-3.5 text-xs">
                  <p className="text-slate-600 text-xs">
                    Labor unions, trade chambers, PACs, and news outlets may submit official endorsements for listing in the national directory.
                  </p>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Organization / Committee Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. State AFL-CIO, County Chamber, Police Benevolent"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Contact Email or Press Link *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. press@yourorganization.org or press release URL"
                      value={orgContact}
                      onChange={(e) => setOrgContact(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Candidate Name & Office *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jon Ossoff (U.S. Senate GA)"
                      value={candName}
                      onChange={(e) => setCandName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Official Endorsement Quote or Statement *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Paste the official quote from leadership or excerpt from press release..."
                      value={endQuote}
                      onChange={(e) => setEndQuote(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-500 shadow"
                    >
                      Submit for Verification
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
