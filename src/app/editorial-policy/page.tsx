import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, FileText, AlertTriangle, Scale, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Non-Partisan Editorial Policy & Fact-Checking Charter | ElectionDay2026.org',
  description:
    'Our strict non-partisan charter, data verification standards, primary legal sources, and editorial independence guidelines for the 2026 U.S. Midterms.',
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <span className="text-slate-800 font-bold">Editorial Policy</span>
      </nav>

      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>E-E-A-T Civic Trust Framework</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">
        Non-Partisan Charter & Fact-Checking Standards
      </h1>
      <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
        ElectionDay2026.org is an independent, non-partisan educational initiative dedicated to providing transparent, accurate, and statutory election deadlines and voting rules. We adhere to the following principles:
      </p>

      <div className="space-y-8">
        {/* Principle 1: Absolute Non-Partisanship */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">
              1. Non-Partisan Editorial Independence
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            We do not endorse, oppose, fund, or coordinate with any political candidate, party committee, political action committee (PAC), or ballot initiative campaign. Our reporting is strictly informational, non-partisan, and educational. No candidate or political campaign has input into our editorial decisions or timeline data.
          </p>
        </section>

        {/* Principle 2: Primary Sourcing Only (.gov) */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">
              2. Sourced Exclusively from Primary Legal Records (.gov)
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Every voter registration deadline, early voting calendar date, acceptable voter ID list, and polling location hour published on this site is verified directly from state statutes, administrative codes, and official Secretary of State or State Board of Elections documentation. We do not rely on second-hand commentary or partisan blogs.
          </p>
          <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 font-mono">
            Primary Data Hubs: vote.gov • eac.gov • fec.gov • 50 State Secretary of State Portals
          </div>
        </section>

        {/* Principle 3: Correction & Verification Protocol */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-bold text-slate-900">
              3. Continuous Verification & Correction Policy
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Election laws and court rulings (such as injunctions on mail-in ballot receipt deadlines or voter ID rules) evolve continuously. Our legal research team monitors state legislative updates, supreme court decisions, and state board directives weekly. When any deadline or statutory requirement is modified by a court or legislature, our programmatic database is updated within 24 hours with an explicit timestamp notice.
          </p>
        </section>

        {/* Principle 4: Commercial & Advertising Safeguards */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-2">
            <Lock className="w-6 h-6 text-amber-600" />
            <h2 className="text-xl font-bold text-slate-900">
              4. Commercial & Advertising Policy (FEC & AdSense Compliance)
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            To prevent any conflict of interest, ElectionDay2026.org does not accept direct political candidate advertisements, campaign promotional dollars, or dark money contributions. All advertising units are standard programmatic display network units (e.g. Google AdSense, Mediavine) governed by strict Sensitive Events and Better Ads standards. Advertisements are labeled with prominent "ADVERTISEMENT" headers to prevent any visual confusion with civic resources.
          </p>
        </section>
      </div>

      <div className="mt-10 pt-6 border-t border-slate-200 flex justify-between items-center text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold">
          ← Return to Homepage
        </Link>
        <span className="text-xs text-slate-500">
          Last Verified: November 2026
        </span>
      </div>
    </div>
  );
}
