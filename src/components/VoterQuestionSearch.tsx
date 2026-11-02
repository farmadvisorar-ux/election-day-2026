'use client';

import React, { useState, useMemo } from 'react';
import { COMPREHENSIVE_QUERY_MATRIX, QueryCluster } from '../data/queries';
import { Search, HelpCircle, CheckCircle2, ShieldCheck, Tag, Sparkles } from 'lucide-react';

export const VoterQuestionSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredClusters = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return COMPREHENSIVE_QUERY_MATRIX.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      if (!term) return true;

      // Match primary query
      if (item.primaryQuery.toLowerCase().includes(term)) return true;

      // Match variations
      if (item.variations.some((v) => v.toLowerCase().includes(term))) return true;

      // Match common misspellings & typos (AEO phonetic matching)
      if (item.misspellings.some((m) => m.toLowerCase().includes(term))) return true;

      // Match direct answer text
      if (item.directAnswer.toLowerCase().includes(term)) return true;

      return false;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
        <Sparkles className="w-4 h-4 text-amber-500" />
        <span>AEO Long-Tail Semantic Query Resolver</span>
      </div>

      <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
        Instant Voter Questions & Voice Search Directory
      </h3>
      <p className="text-sm text-slate-600 mt-1 mb-6">
        Search any question regarding Election Day 2026. Designed with typo tolerance and voice-search semantic matching.
      </p>

      {/* Search Input Bar */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-slate-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Ask anything (e.g. 'can I leave work to vote?', 'bank open?', 'do I need a stamp?')..."
          className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition shadow-xs"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-600 font-bold"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6 text-xs">
        {[
          { id: 'all', label: 'All Queries (50+ Variations)' },
          { id: 'logistics', label: 'Hours, Dates & USPS' },
          { id: 'work-rights', label: 'Work Leave & Employment Laws' },
          { id: 'deadlines', label: 'Registration & Movers' },
          { id: 'identification', label: 'Voter ID & Lost Wallets' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Query Results Count */}
      <div className="text-xs text-slate-500 mb-4 font-medium flex items-center justify-between">
        <span>
          Showing <strong>{filteredClusters.length}</strong> matching verified answers
        </span>
        <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          AEO-Indexed for Voice & AI Overviews
        </span>
      </div>

      {/* Results List */}
      <div className="space-y-6">
        {filteredClusters.length > 0 ? (
          filteredClusters.map((cluster) => (
            <article
              key={cluster.id}
              className="bg-slate-50/70 rounded-xl border border-slate-200 p-5 shadow-xs transition hover:border-blue-300 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  {cluster.primaryQuery}
                </h4>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase rounded shrink-0">
                  {cluster.category}
                </span>
              </div>

              {/* Direct AEO Answer Block */}
              <div className="p-3.5 bg-blue-50/90 border-l-4 border-blue-600 rounded-r-lg text-sm font-bold text-slate-950 mb-3">
                {cluster.directAnswer}
              </div>

              {/* Detailed Breakdown */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {cluster.inDepthAnswer}
              </p>

              {/* Variations & Misspellings caught */}
              <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                <Tag className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="font-semibold text-slate-600">Alternative phrasings & typo targets:</span>
                {cluster.variations.slice(0, 3).map((v, idx) => (
                  <span key={idx} className="bg-slate-200/70 text-slate-700 px-1.5 py-0.5 rounded">
                    "{v}"
                  </span>
                ))}
                {cluster.misspellings.slice(0, 2).map((m, idx) => (
                  <span key={idx} className="bg-amber-100/70 text-amber-800 px-1.5 py-0.5 rounded font-mono">
                    "{m}"
                  </span>
                ))}
              </div>

              {/* Statutory Citation */}
              <div className="mt-2 text-[11px] text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Legal Authority:</span>
                <a
                  href={cluster.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 hover:underline"
                >
                  {cluster.sourceStatute}
                </a>
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h5 className="text-base font-bold text-slate-800">No exact match found</h5>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try searching broader terms like "bank", "work", "stamp", "ID", or "hours", or explore our 50-state guides.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
