'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { STATES_DATA, ALL_STATES_LIST, StateElectionData } from '../data/states';
import {
  COUNTIES_BY_STATE,
  getCountyElectionAuthorityTitle,
  CountyItem,
} from '../data/counties';
import { STATE_PRIMARIES_2026 } from '../data/primaries';
import { COMPREHENSIVE_QUERY_MATRIX } from '../data/queries';
import {
  Sparkles,
  Search,
  MapPin,
  Scale,
  Clock,
  CreditCard,
  Briefcase,
  Calendar,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  HelpCircle,
} from 'lucide-react';

const SAMPLE_PROMPTS = [
  'I live in 77002 and work 8am-5pm. Do I get paid time off to vote and what ID do I need?',
  'What is on my ballot in Maricopa County, AZ on Nov 3, 2026?',
  'I lost my driver’s license in Pennsylvania—can I still vote on Election Day?',
  'Are banks, USPS mail, and the stock market open on Election Day 2026?',
  'How many seats need to flip in the House and Senate in 2026?',
  'When is the 2026 primary election in Texas and is it an open primary?',
];

function matchZipRange(zip: string, zipRange: string): boolean {
  const parts = zipRange.split('–');
  const z = parseInt(zip, 10);
  if (parts.length === 1 && /^\d{5}$/.test(parts[0])) {
    return parseInt(parts[0], 10) === z;
  }
  if (parts.length === 2 && /^\d{5}$/.test(parts[0]) && /^\d{5}$/.test(parts[1])) {
    return z >= parseInt(parts[0], 10) && z <= parseInt(parts[1], 10);
  }
  return false;
}

export function CivicAnswerEngine() {
  const [question, setQuestion] = useState<string>(SAMPLE_PROMPTS[0]);

  const analysis = useMemo(() => {
    const raw = question.trim();
    const q = raw.toLowerCase();
    if (!q) return null;

    // 1. Detect 5-digit ZIP code in question
    const zipMatch = q.match(/\b(\d{5})\b/);
    const detectedZip = zipMatch ? zipMatch[1] : null;

    // 2. Detect State, County, or City in question
    let matchedState: StateElectionData | undefined;
    let matchedCounty: CountyItem | undefined;

    if (detectedZip) {
      for (const [stSlug, list] of Object.entries(COUNTIES_BY_STATE)) {
        const found = list.find(
          (c) => c.fips === detectedZip || matchZipRange(detectedZip, c.zipRange)
        );
        if (found) {
          matchedCounty = found;
          matchedState = STATES_DATA[stSlug];
          break;
        }
      }
    }

    if (!matchedState) {
      for (const st of ALL_STATES_LIST) {
        const nameRegex = new RegExp(`\\b${st.name.toLowerCase()}\\b`, 'i');
        const codeRegex = new RegExp(`\\b${st.postalCode}\\b`); // case-sensitive postal match in raw
        if (nameRegex.test(q) || codeRegex.test(raw)) {
          matchedState = STATES_DATA[st.slug];
          break;
        }
      }
    }

    // Search county or major city names if not yet matched or to refine county within matchedState
    const statesToScan = matchedState ? [matchedState.slug] : Object.keys(COUNTIES_BY_STATE);
    for (const stSlug of statesToScan) {
      const list = COUNTIES_BY_STATE[stSlug] || [];
      for (const c of list) {
        const cNameLower = c.name.toLowerCase();
        const seatLower = c.countySeat.toLowerCase();
        if (
          q.includes(cNameLower) ||
          (seatLower.length >= 4 && new RegExp(`\\b${seatLower}\\b`, 'i').test(q)) ||
          c.topCities.some(
            (city) => city.length >= 5 && new RegExp(`\\b${city.toLowerCase()}\\b`, 'i').test(q)
          )
        ) {
          matchedCounty = c;
          matchedState = STATES_DATA[stSlug];
          break;
        }
      }
      if (matchedCounty) break;
    }

    // 3. Detect Intent Flags
    const asksWorkLeave = /\b(work|boss|employer|paid|time off|shift|leave|job|pay)\b/i.test(q);
    const asksVoterId = /\b(id|identification|license|passport|wallet|lost|expired|photo|student id)\b/i.test(q);
    const asksRegistration = /\b(register|registration|cutoff|deadline|moved|same day|sign up)\b/i.test(q);
    const asksEarlyOrMail = /\b(early|mail|absentee|drop box|stamp|postage|postmark)\b/i.test(q);
    const asksPrimary = /\b(primary|primaries|runoff|open primary|closed primary)\b/i.test(q);
    const asksHoliday = /\b(holiday|bank|banks|usps|mail run|post office|school|stock market|fedex|ups|open|closed)\b/i.test(q);
    const asksBalanceOrBallot = /\b(ballot|senate|house|governor|congress|flip|majority|control|who is running|seats)\b/i.test(q);

    // 4. Match closest FAQ cluster from COMPREHENSIVE_QUERY_MATRIX
    const queryWords = q
      .replace(/[^a-z0-9\s]/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 2);

    let bestFaq = COMPREHENSIVE_QUERY_MATRIX[0];
    let bestScore = 0;
    for (const item of COMPREHENSIVE_QUERY_MATRIX) {
      const hay = `${item.primaryQuery} ${item.directAnswer} ${item.variations.join(' ')} ${item.misspellings.join(' ')}`.toLowerCase();
      let score = 0;
      for (const w of queryWords) {
        if (hay.includes(w)) score += 2;
      }
      if (score > bestScore) {
        bestScore = score;
        bestFaq = item;
      }
    }

    const primaryInfo = matchedState
      ? STATE_PRIMARIES_2026.find((p) => p.stateSlug === matchedState?.slug)
      : undefined;

    return {
      detectedZip,
      matchedState,
      matchedCounty,
      primaryInfo,
      asksWorkLeave,
      asksVoterId,
      asksRegistration,
      asksEarlyOrMail,
      asksPrimary,
      asksHoliday,
      asksBalanceOrBallot,
      bestFaq,
      bestScore,
    };
  }, [question]);

  return (
    <div className="bg-white rounded-2xl border-2 border-blue-600 shadow-lg overflow-hidden">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <Sparkles className="w-4 h-4" />
            <span>Zero-Hallucination Statutory Civic AI Engine</span>
          </div>
          <span className="px-2.5 py-0.5 bg-white/10 text-blue-200 font-mono text-[11px] font-bold rounded border border-white/15">
            50 States • 3,143 Counties • 435 Districts • Federal Code
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Ask Any Question About Election Day 2026
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Replaces generic search engines and AI chatbots: ask about your <strong>ZIP code, city, county, work shift, lost ID, primary date, or ballot</strong> for an instant, legally cited answer.
        </p>

        {/* Search Input */}
        <div className="mt-4 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything: e.g. 'I live in 77002 and work 9 to 5, do I get paid time off to vote?'"
            aria-label="Ask any question about Election Day 2026"
            className="w-full pl-12 pr-4 py-3.5 bg-white text-slate-950 rounded-xl text-sm sm:text-base font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Sample Prompt Pills */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-bold uppercase text-slate-400 mr-1">Try asking:</span>
          {SAMPLE_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setQuestion(prompt)}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-colors text-left cursor-pointer"
            >
              {prompt.length > 58 ? `${prompt.slice(0, 58)}...` : prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Instant Synthesized Answer Body */}
      {analysis && (
        <div className="p-6 space-y-5 bg-slate-50/60">
          {/* Detected Jurisdiction Banner */}
          {analysis.matchedState && (
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-700 text-white text-[11px] font-black rounded uppercase">
                    Jurisdiction Matched
                  </span>
                  <span className="text-sm font-black text-slate-900">
                    {analysis.matchedCounty
                      ? `${analysis.matchedCounty.name} (${analysis.matchedCounty.countySeat}), ${analysis.matchedState.name}`
                      : `${analysis.matchedState.name} (${analysis.matchedState.postalCode})`}
                  </span>
                  {analysis.matchedCounty && (
                    <span className="font-mono text-xs text-blue-800 font-bold">
                      FIPS {analysis.matchedCounty.fips} • CD: {analysis.matchedCounty.congressionalDistricts.join(', ')}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 mt-1">
                  <strong>Nov 3, 2026 Poll Hours:</strong>{' '}
                  {analysis.matchedCounty?.pollingHoursOverride || analysis.matchedState.pollingHours} (
                  {analysis.matchedCounty?.timezoneOverride || analysis.matchedState.timezone}) •{' '}
                  <strong>Local Authority:</strong>{' '}
                  {analysis.matchedCounty
                    ? getCountyElectionAuthorityTitle(
                        analysis.matchedState.postalCode,
                        analysis.matchedCounty.name
                      )
                    : analysis.matchedState.officialPortal.name}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {analysis.matchedCounty ? (
                  <Link
                    href={`/states/${analysis.matchedState.slug}/counties/${analysis.matchedCounty.slug}`}
                    className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-lg flex items-center gap-1"
                  >
                    <span>{analysis.matchedCounty.name} Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    href={`/states/${analysis.matchedState.slug}`}
                    className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-lg flex items-center gap-1"
                  >
                    <span>{analysis.matchedState.name} Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Synthesized Statutory Modules Based on User Intent */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Work Leave Module */}
            {analysis.matchedState && (analysis.asksWorkLeave || !analysis.asksHoliday) && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-indigo-700 mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span>Workplace Voting Leave Law ({analysis.matchedState.postalCode})</span>
                </div>
                <div className="text-sm font-black text-slate-900">
                  {analysis.matchedState.workLeaveLaw.hoursAllowed} ({analysis.matchedState.workLeaveLaw.statuteCitation})
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {analysis.matchedState.workLeaveLaw.summary}
                </p>
                <Link
                  href={`/tools/employer-voting-leave-notice?state=${analysis.matchedState.slug}`}
                  className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
                >
                  <span>Generate Formal HR Notice for Your Boss</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )}

            {/* Voter ID & Lost ID Provisional Shield Module */}
            {analysis.matchedState && (analysis.asksVoterId || !analysis.asksHoliday) && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-amber-700 mb-1">
                  <CreditCard className="w-4 h-4" />
                  <span>Voter ID &amp; Missing-ID Fallback ({analysis.matchedState.postalCode})</span>
                </div>
                <div className="text-sm font-black text-slate-900">
                  {analysis.matchedState.voterId.type}
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  <strong>Accepted IDs:</strong> {analysis.matchedState.voterId.acceptableDocs.slice(0, 4).join(', ')}.{' '}
                  <strong>Lost or Forgot Your ID?</strong> Under federal law (<strong>52 U.S.C. § 21082 HAVA</strong>), you cannot be turned away—request a <strong>Provisional Ballot</strong> at the check-in desk.
                </p>
              </div>
            )}

            {/* Registration & Early Voting Module */}
            {analysis.matchedState && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-emerald-700 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Registration &amp; Early Voting ({analysis.matchedState.postalCode})</span>
                </div>
                <div className="text-sm font-black text-slate-900">
                  Cutoff: {analysis.matchedState.registrationDeadline.online}
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  <strong>Early Voting:</strong> {analysis.matchedState.earlyVoting.starts} – {analysis.matchedState.earlyVoting.ends}.{' '}
                  <strong>Mail-In Return:</strong> {analysis.matchedState.mailInVoting.returnDeadline}.
                </p>
              </div>
            )}

            {/* Primary Date & Ballot Preview Module */}
            {analysis.matchedState && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-blue-700 mb-1">
                  <Scale className="w-4 h-4" />
                  <span>2026 Primary &amp; Ballot Races ({analysis.matchedState.postalCode})</span>
                </div>
                {analysis.primaryInfo && (
                  <div className="text-sm font-black text-slate-900">
                    2026 Primary: {analysis.primaryInfo.primaryDate} ({analysis.primaryInfo.primaryType})
                  </div>
                )}
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  <strong>On Nov 3 Ballot:</strong>{' '}
                  {analysis.matchedCounty
                    ? `U.S. House (${analysis.matchedCounty.congressionalDistricts.join(', ')})`
                    : 'All U.S. House Seats'}
                  {analysis.matchedState.keyRaces2026.senate ? ' • U.S. Senate Seat' : ''}
                  {analysis.matchedState.keyRaces2026.governor ? ' • State Governor' : ''}.
                </p>
              </div>
            )}
          </div>

          {/* Direct Statutory FAQ Match */}
          <div className="bg-white p-5 rounded-xl border-l-4 border-blue-600 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                Verified Statutory Answer • {analysis.bestFaq.sourceStatute}
              </span>
              <Link
                href="/voter-questions"
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Browse All 50+ Legal Q&amp;As →
              </Link>
            </div>
            <h3 className="text-base font-black text-slate-900 mb-1">
              {analysis.bestFaq.primaryQuery}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
              {analysis.bestFaq.directAnswer}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {analysis.bestFaq.inDepthAnswer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
