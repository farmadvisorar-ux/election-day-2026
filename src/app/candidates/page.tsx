'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Users,
  Search,
  Filter,
  CheckCircle,
  Award,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight,
  DollarSign,
  HeartHandshake,
  Vote,
} from 'lucide-react';
import { CANDIDATE_DIRECTORY, CandidateProfile, OfficeLevel, CandidateParty } from '../../data/candidateDirectory';
import { JsonLd } from '../../components/JsonLd';

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOffice, setSelectedOffice] = useState<string>('All');
  const [selectedParty, setSelectedParty] = useState<string>('All');
  const [selectedCycle, setSelectedCycle] = useState<string>('All');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filteredCandidates = useMemo(() => {
    return CANDIDATE_DIRECTORY.filter((c) => {
      const matchesSearch =
        searchTerm === '' ||
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.officeTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.platformPriorities.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesOffice =
        selectedOffice === 'All' || c.office === selectedOffice;

      const matchesParty =
        selectedParty === 'All' || c.party === selectedParty;

      const matchesCycle =
        selectedCycle === 'All' || c.cycle === selectedCycle;

      const matchesVerified = !verifiedOnly || c.verified;

      return matchesSearch && matchesOffice && matchesParty && matchesCycle && matchesVerified;
    });
  }, [searchTerm, selectedOffice, selectedParty, selectedCycle, verifiedOnly]);

  const candidateCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'National Candidate Directory & Official Campaign Listings',
    description:
      'Search verified candidates across U.S. Senate, House of Representatives, Gubernatorial, and 2028 Presidential contests. View platforms, official endorsements, and FEC filing status.',
    url: 'https://election-day-2026.vercel.app/candidates',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: filteredCandidates.map((candidate, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Person',
          name: candidate.name,
          jobTitle: candidate.officeTitle,
          description: candidate.bio,
          url: `https://election-day-2026.vercel.app/candidate/${candidate.id}`,
        },
      })),
    },
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
        name: 'Candidate Directory',
        item: 'https://election-day-2026.vercel.app/candidates',
      },
    ],
  };

  return (
    <>
      <JsonLd data={candidateCollectionSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                Verified Candidate & Campaign Directory
              </div>

              <Link
                href="/candidate-portal"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md transition-colors"
              >
                <Award className="w-3.5 h-3.5" />
                Claim Profile or List Your Campaign
              </Link>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Official Candidate <span className="text-amber-300">Directory</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-blue-100/90 max-w-3xl">
              Research verified candidates running for U.S. Senate, U.S. House, Governor, December 2026 runoffs, and the 2028 Presidential cycle. Compare platforms, verified labor and business endorsements, and campaign finance credentials.
            </p>

            {/* Quick Stats Ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200">Directory Profiles</span>
                <p className="text-2xl font-black text-white">{CANDIDATE_DIRECTORY.length}+ Listed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200">Verified Endorsements</span>
                <p className="text-2xl font-black text-amber-300">500+ Tracked</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200">Electoral Cycles</span>
                <p className="text-2xl font-black text-white">2026 • 2027 • 2028</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200">FEC Transparency</span>
                <p className="text-2xl font-black text-emerald-400">100% Compliant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Search input */}
              <div className="relative md:col-span-5">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by candidate name, state, office, issue..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900 placeholder-slate-500 font-medium"
                />
              </div>

              {/* Office dropdown */}
              <div className="md:col-span-2">
                <select
                  value={selectedOffice}
                  onChange={(e) => setSelectedOffice(e.target.value)}
                  className="w-full px-3 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="All">All Offices</option>
                  <option value="President 2028">President 2028</option>
                  <option value="U.S. Senate">U.S. Senate</option>
                  <option value="U.S. House">U.S. House</option>
                </select>
              </div>

              {/* Party dropdown */}
              <div className="md:col-span-2">
                <select
                  value={selectedParty}
                  onChange={(e) => setSelectedParty(e.target.value)}
                  className="w-full px-3 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="All">All Parties</option>
                  <option value="Democrat">Democrat</option>
                  <option value="Republican">Republican</option>
                  <option value="Independent">Independent</option>
                </select>
              </div>

              {/* Cycle dropdown */}
              <div className="md:col-span-3">
                <select
                  value={selectedCycle}
                  onChange={(e) => setSelectedCycle(e.target.value)}
                  className="w-full px-3 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="All">All Election Cycles</option>
                  <option value="2026 Midterm & Runoffs">2026 Runoffs & Recounts</option>
                  <option value="2028 Presidential Cycle">2028 Presidential Cycle</option>
                </select>
              </div>
            </div>

            {/* Quick toggles row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-semibold select-none">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Verified Campaign Accounts Only</span>
                </label>
              </div>

              <div className="flex items-center gap-2 text-slate-500">
                <Link
                  href="/endorsements"
                  className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-semibold"
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
                  View All Verified Endorsement Listings →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Candidate Directory Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Showing {filteredCandidates.length} Candidates
            </h2>

            <span className="text-xs text-slate-500">
              Sorted by featured status and race relevance
            </span>
          </div>

          {filteredCandidates.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center">
              <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No candidates found</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                No candidates match your current search and filter criteria. Try clearing some filters or searching by state.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedOffice('All');
                  setSelectedParty('All');
                  setSelectedCycle('All');
                  setVerifiedOnly(false);
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCandidates.map((candidate) => {
                const partyColor =
                  candidate.party === 'Democrat'
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : candidate.party === 'Republican'
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200';

                return (
                  <div
                    key={candidate.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden relative"
                  >
                    {/* Top banner / tier badge */}
                    {candidate.tier === 'Featured Sponsor' && (
                      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] font-bold px-3 py-1 flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Featured Spotlight
                        </span>
                        <span className="text-[10px] opacity-90">{candidate.cycle}</span>
                      </div>
                    )}

                    <div className="p-5 flex-1 flex flex-col">
                      {/* Candidate Avatar & Header info */}
                      <div className="flex items-start gap-3.5 mb-4">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${candidate.headshotColor} text-white flex items-center justify-center font-black text-lg shadow-sm flex-shrink-0`}
                        >
                          {candidate.name
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <h3 className="text-base font-bold text-slate-900 truncate">
                              {candidate.name}
                            </h3>
                            {candidate.verified && (
                              <span
                                title="Verified Candidate Committee"
                                className="inline-flex items-center text-blue-600"
                              >
                                <CheckCircle className="w-4 h-4 fill-blue-600 text-white" />
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                            {candidate.officeTitle}
                          </p>

                          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                            <span
                              className={`px-2 py-0.5 rounded text-[11px] font-bold border ${partyColor}`}
                            >
                              {candidate.party}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                              {candidate.state}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bio snippet */}
                      <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                        {candidate.bio}
                      </p>

                      {/* Top platform tags */}
                      <div className="space-y-1.5 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Key Priorities
                        </span>
                        <div className="space-y-1">
                          {candidate.platformPriorities.slice(0, 2).map((priority, i) => (
                            <div
                              key={i}
                              className="text-[11px] text-slate-700 font-medium flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg border border-slate-100 truncate"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                              <span className="truncate">{priority}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Endorsement stats ticker */}
                      <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs mb-3">
                        <span className="text-slate-500 flex items-center gap-1">
                          <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
                          Endorsements
                        </span>
                        <Link
                          href={`/candidate/${candidate.id}#endorsements`}
                          className="font-bold text-blue-700 hover:text-blue-900"
                        >
                          {candidate.endorsementCount} Verified →
                        </Link>
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                        <Link
                          href={`/candidate/${candidate.id}`}
                          className="w-full inline-flex items-center justify-center gap-1 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
                        >
                          <span>Full Profile</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>

                        {candidate.donationUrl ? (
                          <a
                            href={candidate.donationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-1 px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-semibold transition-colors"
                          >
                            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Donate</span>
                          </a>
                        ) : (
                          <a
                            href={candidate.campaignWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Website</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Claim Listing & Monetization Banner */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                For Candidates, Campaigns & PACs
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Are You Running for Office or Managing a Campaign?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-blue-100/90 leading-relaxed">
                Claim your official profile on America’s premier non-partisan civic directory. Display verified endorsements, publish your policy platform, receive direct donations via ActBlue/WinRed, and launch high-visibility District Spotlights.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <Link
                  href="/candidate-portal"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <span>Claim Your Candidate Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/endorsements"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  <HeartHandshake className="w-4 h-4 text-rose-300" />
                  <span>Submit an Endorsement</span>
                </Link>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-amber-400/10 to-transparent pointer-events-none hidden md:block" />
          </div>
        </section>
      </main>
    </>
  );
}
