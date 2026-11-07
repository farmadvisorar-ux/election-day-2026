'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  DOCUMENT_TYPES,
  STATE_ID_PROFILES,
  evaluateVoterId,
  IdValidationResult,
} from '../data/voterIdRules';
import { ALL_STATES_LIST } from '../data/states';
import {
  ShieldCheck,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  HelpCircle,
  FileText,
  Clock,
  Printer,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const VoterIdValidator: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('texas');
  const [selectedDoc, setSelectedDoc] = useState<string>('drivers-license');
  const [condition, setCondition] = useState<
    'valid' | 'expired-recent' | 'expired-old' | 'digital-phone' | 'no-expiration'
  >('valid');

  const profile = STATE_ID_PROFILES[selectedState] || {
    stateSlug: selectedState,
    stateName: 'Your State',
    stateAbbr: 'US',
    category: 'Non-Strict Photo ID',
    statuteCitation: 'State Election Code',
    generalRuleSummary: 'Verify acceptable documents with your local county board of elections.',
    expirationRuleSummary: 'Check local expiration grace period.',
    studentIdPolicy: 'Check university guidelines.',
    digitalIdPolicy: 'Physical card recommended.',
    provisionalCureDeadline: 'Check county clerk office.',
  };

  const validationResult: IdValidationResult = useMemo(() => {
    return evaluateVoterId(selectedState, selectedDoc, condition);
  }, [selectedState, selectedDoc, condition]);

  return (
    <div className="space-y-10">
      {/* Interactive Tool Card */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-lg">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-extrabold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>50-State Statutory Document Validator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Will Your ID Work at the Polls on Tuesday, November 3, 2026?
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Select your voting state, the document you plan to bring, and its current status (unexpired, expired, or on your phone) for an instant statutory verdict and cure instructions.
          </p>
        </div>

        {/* 3 Step Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Step 1: State */}
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
              Step 1: Select Your State
            </label>
            <select
              aria-label="Select state for Voter ID check"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl border border-slate-300 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {ALL_STATES_LIST.map((st) => (
                <option key={st.slug} value={st.slug}>
                  {st.name} ({st.postalCode})
                </option>
              ))}
            </select>
            <div className="text-[11px] font-semibold text-slate-500">
              Law Category:{' '}
              <span className="font-extrabold text-blue-700">{profile.category}</span>
            </div>
          </div>

          {/* Step 2: Document */}
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
              Step 2: What Document Do You Have?
            </label>
            <select
              aria-label="Select identification document"
              value={selectedDoc}
              onChange={(e) => setSelectedDoc(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl border border-slate-300 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {DOCUMENT_TYPES.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name}
                </option>
              ))}
            </select>
            <div className="text-[11px] font-semibold text-slate-500">
              Choose the exact document in your wallet or pocket.
            </div>
          </div>

          {/* Step 3: Status / Expiration */}
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
              Step 3: Document Status / Expiration
            </label>
            <select
              aria-label="Select document expiration status"
              value={condition}
              onChange={(e) => setCondition(e.target.value as any)}
              className="w-full px-4 py-3.5 rounded-2xl border border-slate-300 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="valid">Currently Valid &amp; Unexpired</option>
              <option value="expired-recent">Expired Recently (Within Past 12 Months)</option>
              <option value="expired-old">Expired Over 1 to 4 Years Ago</option>
              <option value="digital-phone">Digital on Smartphone / Apple Wallet</option>
              <option value="no-expiration">No Expiration Date Printed on Document</option>
            </select>
            <div className="text-[11px] font-semibold text-slate-500">
              Expiration rules vary drastically by state law.
            </div>
          </div>
        </div>

        {/* Dynamic Verdict Card */}
        <div
          className={`rounded-3xl p-6 sm:p-8 border-2 transition-all ${
            validationResult.verdict === 'ACCEPTED'
              ? 'bg-emerald-50/80 border-emerald-400'
              : validationResult.verdict === 'CONDITIONAL'
              ? 'bg-amber-50/80 border-amber-400'
              : 'bg-rose-50/80 border-rose-400'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              {validationResult.verdict === 'ACCEPTED' && (
                <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
              )}
              {validationResult.verdict === 'CONDITIONAL' && (
                <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
              )}
              {validationResult.verdict === 'NOT_ACCEPTED' && (
                <XCircle className="w-8 h-8 text-rose-600 shrink-0" />
              )}
              <div>
                <span
                  className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    validationResult.verdict === 'ACCEPTED'
                      ? 'bg-emerald-200 text-emerald-900'
                      : validationResult.verdict === 'CONDITIONAL'
                      ? 'bg-amber-200 text-amber-900'
                      : 'bg-rose-200 text-rose-900'
                  }`}
                >
                  Statutory Verdict: {validationResult.verdict.replace('_', ' ')}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {validationResult.headline}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-xs print:hidden"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Verdict</span>
            </button>
          </div>

          <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-4">
            {validationResult.details}
          </p>

          {validationResult.cureRules && (
            <div className="bg-white/80 rounded-2xl p-4 border border-slate-200 mb-4 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Provisional Ballot &amp; Cure Procedure:</strong> {validationResult.cureRules}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/60 text-xs">
            <div className="text-slate-600 font-semibold flex items-center gap-1.5">
              <span>Legal Authority:</span>
              <strong className="text-slate-900">{validationResult.sourceStatute}</strong>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={`/states/${selectedState}`}
                className="text-blue-700 font-extrabold hover:underline flex items-center gap-1"
              >
                <span>{profile.stateName} Full Voting Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/ballot-problem-solver"
                className="text-red-700 font-extrabold hover:underline flex items-center gap-1"
              >
                <span>At Polls Without ID? Open Cure Solver</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 50-State Statutory Comparison Matrix on Key ID Issues */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-xl font-black text-slate-900 mb-2">
          Critical 2026 Voter ID Rules: Expirations, Student IDs &amp; Digital Wallets
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          The 4 most common reasons voters get stopped at polling place check-in desks:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="text-xs font-black uppercase text-blue-700 mb-1">
              Expired Driver’s Licenses
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Texas:</strong> Expired up to 4 years (or indefinitely if 70+).
              <br />
              <strong>North Carolina:</strong> Expired up to 1 year.
              <br />
              <strong>Wisconsin:</strong> Expired after Nov 5, 2024.
              <br />
              <strong>Ohio:</strong> MUST be 100% UNEXPIRED.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="text-xs font-black uppercase text-indigo-700 mb-1">
              College Student Photo IDs
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Ohio:</strong> Strictly BANNED under HB 458.
              <br />
              <strong>Texas:</strong> Not a primary ID (use RID form).
              <br />
              <strong>Wisconsin:</strong> Need 2-yr expiry + proof of enrollment.
              <br />
              <strong>Florida/Georgia:</strong> Approved state lists.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="text-xs font-black uppercase text-amber-700 mb-1">
              Digital IDs on Smartphones
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Arizona:</strong> Accepted at equipped Vote Centers in Phoenix/Tucson.
              <br />
              <strong>Texas &amp; Florida:</strong> NOT accepted on screens.
              <br />
              <strong>40+ States:</strong> Physical plastic/paper card required by statute.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div className="text-xs font-black uppercase text-emerald-700 mb-1">
              No ID Whatsoever?
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>CA / NY / IL / PA:</strong> Simply sign the pollbook.
              <br />
              <strong>Michigan:</strong> Sign the Non-Possession Affidavit.
              <br />
              <strong>North Carolina:</strong> Complete ID Exception Form.
              <br />
              <strong>All 50 States:</strong> Federal right to Provisional Ballot.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
