import React from 'react';
import Link from 'next/link';
import { Award, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CandidateClaimBannerProps {
  jurisdictionType?: 'district' | 'county' | 'senate' | 'governor' | 'general';
  jurisdictionName?: string;
  voterCountEstimate?: string;
  compact?: boolean;
}

export const CandidateClaimBanner: React.FC<CandidateClaimBannerProps> = ({
  jurisdictionType = 'general',
  jurisdictionName = 'your jurisdiction',
  voterCountEstimate,
  compact = false,
}) => {
  const getHeadline = () => {
    switch (jurisdictionType) {
      case 'district':
        return `Running for U.S. House in ${jurisdictionName}?`;
      case 'county':
        return `Candidate for Office in ${jurisdictionName}?`;
      case 'senate':
        return `Candidate in the 2026 ${jurisdictionName} U.S. Senate Race?`;
      case 'governor':
        return `Gubernatorial Campaign in ${jurisdictionName}?`;
      default:
        return `Are You a 2026 Candidate Running for Office?`;
    }
  };

  const getSubhead = () => {
    if (voterCountEstimate) {
      return `Reach ${voterCountEstimate} registered voters researching their ballot, polling places, and candidates on ElectionDay2026.org.`;
    }
    return `Voters in ${jurisdictionName} are downloading their 2026 sample ballots and researching candidates right now.`;
  };

  if (compact) {
    return (
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-xl p-3 sm:p-4 border border-blue-500/40 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-black">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-black text-amber-300 uppercase tracking-wider">
              Candidate &amp; Campaign Notice
            </div>
            <div className="text-xs sm:text-sm font-bold text-white">
              {getHeadline()}
            </div>
          </div>
        </div>
        <Link
          href={`/candidate-portal?geo=${encodeURIComponent(jurisdictionName)}`}
          className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-lg transition-colors"
        >
          <span>Claim Verified Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <aside
      aria-label="Candidate Profile Claim"
      className="my-8 rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white p-6 border border-amber-400/40 shadow-md relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40 mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Official 2026 Candidate &amp; Campaign Registry</span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            {getHeadline()}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
            {getSubhead()} Claim your <strong>Verified Candidate Spotlight</strong> on this page and inside the printable <strong>2026 Sample Ballot Builder</strong>. Feature your photo, 3 core platform issues, and direct ActBlue / WinRed / Anedot donation CTA.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-[11px] text-slate-300">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>FEC Disclaimer Compliant (11 CFR § 110.11)</span>
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Equal Terms for All Certified Candidates</span>
            </span>
          </div>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
          <Link
            href={`/candidate-portal?geo=${encodeURIComponent(jurisdictionName)}`}
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl text-center shadow-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Claim Candidate Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/candidate-portal#rate-card"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl text-center transition-colors border border-white/20"
          >
            <span>View 2026 Rate Card</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};
