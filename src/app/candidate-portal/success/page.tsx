'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  CheckCircle,
  Award,
  ShieldCheck,
  FileText,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Users,
  Building2,
  Calendar,
  Lock,
} from 'lucide-react';

function SuccessCard() {
  const searchParams = useSearchParams();
  const pkgParam = searchParams.get('package');
  const nameParam = searchParams.get('name');
  const officeParam = searchParams.get('office');
  const fecParam = searchParams.get('fec');
  const sessionId = searchParams.get('session_id');
  const isSandbox = searchParams.get('mode') === 'sandbox';

  const packageName =
    pkgParam === 'county'
      ? 'County / Municipal Candidate Spotlight'
      : pkgParam === 'statewide'
      ? 'Statewide U.S. Senate / Gubernatorial Takeover'
      : 'U.S. House Congressional District Exclusive';

  const packagePrice =
    pkgParam === 'county' ? '$299' : pkgParam === 'statewide' ? '$2,499' : '$899';

  const candidateName = nameParam ? decodeURIComponent(nameParam) : 'Campaign Committee';
  const officeTitle = officeParam ? decodeURIComponent(officeParam) : 'U.S. Office';
  const fecId = fecParam ? decodeURIComponent(fecParam) : 'Pending Verification';

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 text-white p-8 text-center relative">
        <div className="w-16 h-16 rounded-2xl bg-white text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
          <CheckCircle className="w-10 h-10" />
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30 mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          Payment Confirmed & Listing Queued
        </span>
        <h1 className="text-2xl sm:text-3xl font-black">
          Campaign Spotlight Reserved!
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-emerald-50 max-w-lg mx-auto">
          Your official candidate listing and high-visibility placement has been received by our non-partisan compliance desk.
        </p>

        {isSandbox && (
          <span className="inline-block mt-3 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/40 text-emerald-200 border border-emerald-400/30">
            Sandbox Test Mode • Session: {sessionId?.slice(0, 16)}...
          </span>
        )}
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Order Details Grid */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs text-slate-500 font-bold uppercase tracking-wider">
            <span>Package Summary</span>
            <span>Amount Paid</span>
          </div>

          <div className="py-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">{packageName}</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Candidate: <strong>{candidateName}</strong> • {officeTitle}
              </p>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                FEC / Ethics Filing: {fecId}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-2xl font-black text-slate-900">{packagePrice}</span>
              <span className="block text-[10px] text-slate-500">Per Election Cycle</span>
            </div>
          </div>
        </div>

        {/* Next Steps Timeline */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            What Happens Next
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  FEC / State Ethics Disclosures Verification (1–2 Hours)
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Our editorial desk verifies candidate committee registration pursuant to 11 CFR § 110.11 non-partisan compliance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-slate-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Profile Activation & Verified Candidate Checkmark
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Your listing appears with the verified badge across the National Candidate Directory, 5-digit ZIP resolver, and District Guide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-slate-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Campaign Portal Access & Live Analytics Dashboard
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Update endorsements, edit policy priorities, and view real-time voter clicks to ActBlue/WinRed donation links.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href="/candidates"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors text-center"
          >
            <Users className="w-3.5 h-3.5" />
            <span>View Candidate Directory</span>
          </Link>

          <Link
            href="/endorsements"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 font-bold text-xs transition-colors text-center"
          >
            <span>Check Endorsement Listings →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CandidateCheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Suspense
          fallback={
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-md">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-3" />
              <p className="text-xs text-slate-600 font-bold">Loading campaign confirmation...</p>
            </div>
          }
        >
          <SuccessCard />
        </Suspense>
      </div>
    </main>
  );
}
