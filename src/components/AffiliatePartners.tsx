import React from 'react';
import { ShieldAlert, Lock, FileCheck, Headphones, ExternalLink } from 'lucide-react';

export const AffiliatePartners: React.FC = () => {
  return (
    <section
      aria-label="Recommended Civic & Security Resources"
      className="my-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-8 text-white border border-slate-800 shadow-xl"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
        <ShieldAlert className="w-4 h-4" />
        <span>Voter Security & Civic Preparation Toolkit</span>
      </div>

      <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
        Essential Tools for Informed & Secure Voters (2026)
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-6 max-w-2xl leading-relaxed">
        Researching candidates, checking public voter registration records, and submitting absentee ballots requires privacy and verification. These trusted independent services assist your civic participation:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Affiliate Partner 1: Voter Roll Privacy & VPN */}
        <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 flex flex-col justify-between hover:border-blue-500 transition-colors">
          <div>
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Lock className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wide">Voter Roll Privacy</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Identity Theft & Public Record Protection
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              In most states, voter registration files (including home addresses, birth years, and phone numbers) are public records harvested by commercial data brokers. Protect your personal records from telemarketers and fraud.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-700">
            <a
              href="https://www.nordvpn.com"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors"
            >
              <span>Explore Privacy Shield</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="block text-[10px] text-slate-400 mt-1 text-center">
              Special Civic Security Offer (Up to 68% Off)
            </span>
          </div>
        </div>

        {/* Affiliate Partner 2: Online Notary & Ballot Affidavits */}
        <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 flex flex-col justify-between hover:border-emerald-500 transition-colors">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <FileCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wide">Ballot Verification</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Instant Online Notary & Affidavits
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Several states require absentee ballot certificate envelopes or change-of-address affidavits to be notarized by an official notary public. Complete legally binding state verifications online from your phone in 5 minutes.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-700">
            <a
              href="https://www.notarize.com"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors"
            >
              <span>Verify Ballot Affidavit Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="block text-[10px] text-slate-400 mt-1 text-center">
              24/7 Remote Legal Notarization
            </span>
          </div>
        </div>

        {/* Affiliate Partner 3: Political Literacy & Audiobooks */}
        <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 flex flex-col justify-between hover:border-purple-500 transition-colors">
          <div>
            <div className="flex items-center gap-2 text-purple-400 mb-2">
              <Headphones className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wide">Electoral Literacy</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Constitutional & Senate History Audiobooks
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Understand the constitutional powers of the U.S. Senate, how midterm elections historically reshape policy, and the mechanics of the Electoral College with in-depth non-fiction political analyses.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-700">
            <a
              href="https://www.audible.com"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-3 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-lg transition-colors"
            >
              <span>Get 2 Free Audiobooks</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="block text-[10px] text-slate-400 mt-1 text-center">
              Audible 30-Day Free Trial
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 leading-relaxed">
        <strong>Affiliate Transparency Notice:</strong> ElectionDay2026.org may receive a referral commission when you purchase through links on this page. All recommendations are evaluated for non-partisan utility and relevance to civic engagement.
      </div>
    </section>
  );
};
