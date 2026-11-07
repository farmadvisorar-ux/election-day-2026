import React from 'react';
import { Award, CheckCircle, ExternalLink, Heart, Shield } from 'lucide-react';

export interface CandidateListingData {
  candidateName: string;
  officeSought: string;
  party: 'Democrat' | 'Republican' | 'Independent' | 'Libertarian' | 'Green' | 'Non-Partisan';
  committeeName: string;
  fecOrEthicsId?: string;
  tagline?: string;
  platformPriorities: string[];
  websiteUrl: string;
  donationUrl: string;
  photoUrl?: string;
}

interface SponsoredCandidateCardProps {
  candidate: CandidateListingData;
  badgeText?: string;
}

export const SponsoredCandidateCard: React.FC<SponsoredCandidateCardProps> = ({
  candidate,
  badgeText = 'Verified 2026 Candidate Profile',
}) => {
  const getPartyBadgeStyle = (party: string) => {
    switch (party) {
      case 'Democrat':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'Republican':
        return 'bg-red-100 text-red-900 border-red-300';
      case 'Independent':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'Libertarian':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Green':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-amber-400/80 shadow-md p-5 sm:p-6 my-6 relative overflow-hidden">
      {/* Top Bar with Verified Status and Legal Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>{badgeText}</span>
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-black border ${getPartyBadgeStyle(candidate.party)}`}>
            {candidate.party}
          </span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
          Paid Political Listing • Non-Partisan Directory
        </span>
      </div>

      {/* Main Candidate Info */}
      <div className="mt-4 flex flex-col md:flex-row gap-5 items-start">
        {/* Headshot / Initials Avatar */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 text-white flex items-center justify-center shrink-0 border border-slate-300 shadow-xs font-black text-2xl">
          {candidate.photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={candidate.photoUrl}
              alt={`${candidate.candidateName} for ${candidate.officeSought}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            candidate.candidateName
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)
          )}
        </div>

        {/* Core Text & Platform */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {candidate.candidateName}
            </h3>
            <span className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              <CheckCircle className="w-3.5 h-3.5 mr-1" />
              Verified Ballot Candidate
            </span>
          </div>

          <div className="text-sm font-bold text-blue-700 mt-0.5">
            Candidate for {candidate.officeSought}
          </div>

          {candidate.tagline && (
            <p className="text-xs sm:text-sm text-slate-600 italic mt-1 font-serif">
              &ldquo;{candidate.tagline}&rdquo;
            </p>
          )}

          {/* Key Platform Issues */}
          {candidate.platformPriorities.length > 0 && (
            <div className="mt-3">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1.5">
                Core 2026 Platform Priorities:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {candidate.platformPriorities.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-700 font-medium"
                  >
                    <span className="font-bold text-slate-900 block mb-0.5">#{idx + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons & Donation CTA */}
      <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {candidate.websiteUrl && (
            <a
              href={candidate.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              <span>Official Campaign Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {candidate.donationUrl && (
            <a
              href={candidate.donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Donate to Campaign</span>
            </a>
          )}
        </div>

        {candidate.fecOrEthicsId && (
          <span className="text-[11px] font-mono text-slate-500">
            FEC ID: {candidate.fecOrEthicsId}
          </span>
        )}
      </div>

      {/* Mandatory FEC Legal Disclaimer */}
      <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-start gap-1.5 text-[10px] text-slate-500 leading-normal">
        <Shield className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
        <div>
          <strong>Paid Political Advertisement.</strong> Paid for by {candidate.committeeName}. Not authorized or endorsed by any opposing candidate or election administration agency. Listing provided pursuant to commercial advertising terms on ElectionDay2026.org (11 CFR § 110.11).
        </div>
      </div>
    </div>
  );
};
