'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { COMPREHENSIVE_QUERY_MATRIX } from '../data/queries';
import { Search, HelpCircle, CheckCircle2, ShieldCheck, Tag, Sparkles, ArrowRight } from 'lucide-react';

export const VoterQuestionSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredClusters = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    const tokens = term
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 1 && !['the', 'and', 'for', 'can', 'how', 'what', 'when', 'where', 'who', 'why', 'are', 'does', 'did'].includes(w));

    return COMPREHENSIVE_QUERY_MATRIX.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      if (!term) return true;

      const fullCorpus = [
        item.primaryQuery,
        ...item.variations,
        ...item.misspellings,
        item.directAnswer,
        item.inDepthAnswer,
      ]
        .join(' ')
        .toLowerCase();

      // Direct substring match
      if (fullCorpus.includes(term)) return true;

      // Multi-word ungrammatical / caveman token match (if >= 65% of meaningful words match)
      if (tokens.length > 0) {
        const matchedCount = tokens.filter((tok) => fullCorpus.includes(tok)).length;
        if (matchedCount >= Math.max(1, Math.ceil(tokens.length * 0.65))) {
          return true;
        }
      }

      return false;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 md:p-8">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
        <Sparkles className="w-4 h-4 text-amber-500" />
        <span>AEO Long-Tail, Shorthand & Phonetic Query Resolver</span>
      </div>

      <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
        Instant Voter Questions, Shorthand & Voice Search Directory
      </h3>
      <p className="text-sm text-slate-600 mt-1 mb-6">
        Search any question regarding Election Day 2026 in plain English, quick keyword shorthand (e.g., <em>&ldquo;no id can vote&rdquo;</em>, <em>&ldquo;moved where vote&rdquo;</em>), or common misspellings.
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
          placeholder="Ask anything in any way (e.g. 'moved didnt change address', 'no id can i vote', 'boss pay me to vote')..."
          className="w-full pl-10 pr-16 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition shadow-xs"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-500 hover:text-slate-800 font-bold"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6 text-xs">
        {[
          { id: 'all', label: `All Clusters (${COMPREHENSIVE_QUERY_MATRIX.length} Guides • 550+ Phrasings)` },
          { id: 'logistics', label: 'Hours, Lines, Booth Rules & USPS' },
          { id: 'deadlines', label: 'Registration, Moving & Mail Ballots' },
          { id: 'identification', label: 'Voter ID, Expired License & Rights' },
          { id: 'work-rights', label: 'Paid Work Leave & Poll Worker Pay' },
          { id: 'ballot', label: 'What’s on the Ballot, Judges & Recounts' },
          { id: 'misspellings', label: 'Shorthand & Common Typos' },
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
      <div className="text-xs text-slate-500 mb-4 font-medium flex flex-wrap items-center justify-between gap-2">
        <span>
          Showing <strong>{filteredClusters.length}</strong> verified statutory question guides (covering{' '}
          <strong>
            {filteredClusters.reduce((acc, c) => acc + 1 + c.variations.length + c.misspellings.length, 0)}
          </strong>{' '}
          search phrasings & typos)
        </span>
        <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          AEO-Indexed for Voice, Shorthand & AI Overviews
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
                <Link
                  href={`/voter-questions/${cluster.id}`}
                  className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-blue-700 leading-snug transition-colors"
                >
                  {cluster.primaryQuery}
                </Link>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase rounded shrink-0">
                  {cluster.category}
                </span>
              </div>

              {/* Direct AEO Answer Block */}
              <div className="p-3.5 bg-blue-50/90 border-l-4 border-blue-600 rounded-r-lg text-sm font-bold text-slate-950 mb-3">
                {cluster.directAnswer}
              </div>

              {/* Detailed Breakdown */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 whitespace-pre-line">
                {cluster.inDepthAnswer}
              </p>

              {/* Variations & Misspellings caught */}
              <div className="pt-2.5 border-t border-slate-200/80 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                <Tag className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="font-semibold text-slate-600">Shorthand & typo queries matched:</span>
                {cluster.variations.slice(0, 5).map((v, idx) => (
                  <span key={idx} className="bg-slate-200/70 text-slate-700 px-1.5 py-0.5 rounded">
                    &ldquo;{v}&rdquo;
                  </span>
                ))}
                {cluster.misspellings.slice(0, 3).map((m, idx) => (
                  <span key={idx} className="bg-amber-100/70 text-amber-800 px-1.5 py-0.5 rounded font-mono">
                    &ldquo;{m}&rdquo;
                  </span>
                ))}
              </div>

              {/* Footer: Statutory Citation + Dedicated Guide Link */}
              <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
                <Link
                  href={`/voter-questions/${cluster.id}`}
                  className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900"
                >
                  <span>Full 50-State Rule & All {cluster.variations.length + cluster.misspellings.length} Phrasings</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h5 className="text-base font-bold text-slate-800">No exact match found</h5>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try searching broader terms like &ldquo;moved&rdquo;, &ldquo;work&rdquo;, &ldquo;stamp&rdquo;, &ldquo;ID&rdquo;, &ldquo;hours&rdquo;, or &ldquo;felon&rdquo;, or use our{' '}
              <Link href="/ask" className="text-blue-600 underline font-bold">
                Instant Civic Answer Engine
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
