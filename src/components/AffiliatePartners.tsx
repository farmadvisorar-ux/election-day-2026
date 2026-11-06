'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  ShieldAlert,
  Lock,
  FileCheck,
  Headphones,
  ExternalLink,
  Home,
  Briefcase,
  CreditCard,
  Sparkles,
} from 'lucide-react';

export type AffiliateContext = 'general' | 'mover' | 'work-leave' | 'id-notary';

interface AffiliatePartnersProps {
  context?: AffiliateContext;
}

interface OfferCard {
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  subText: string;
  href: string;
  colorClass: string;
}

const OFFER_SUITES: Record<
  AffiliateContext,
  {
    heading: string;
    subheading: string;
    offers: OfferCard[];
  }
> = {
  'id-notary': {
    heading: 'Voter ID, Absentee Notary & Public Record Protection Toolkit',
    subheading:
      'Need to notarize an absentee ballot affidavit, replace a lost birth certificate/ID, or remove your home address from public voter-roll data brokers?',
    offers: [
      {
        badge: '24/7 Ballot & Cure Notary',
        title: 'Instant Online Notary for Absentee & Cure Affidavits',
        description:
          'States like MS, MO, OK, and AL—plus ballot cure and name-change affidavits—often require an official notary seal. Notarize your election form legally on your phone in under 5 minutes.',
        ctaText: 'Notarize Ballot Form Online',
        subText: '24/7 Legal Remote Online Notarization',
        href: 'https://www.notarize.com',
        colorClass: 'bg-emerald-600 hover:bg-emerald-500',
      },
      {
        badge: 'Vital Records & ID Docs',
        title: 'Expedited Birth Certificate & Vital Record Replacement',
        description:
          'Applying for a REAL ID driver’s license, U.S. Passport, or free state Voter ID card before November 3, 2026? Order certified state birth or marriage certificates online.',
        ctaText: 'Order Certified Vital Records',
        subText: 'Official 50-State Vital Document Prep',
        href: 'https://www.vitalchek.com',
        colorClass: 'bg-blue-600 hover:bg-blue-500',
      },
      {
        badge: 'Voter Roll Privacy Shield',
        title: 'Remove Your Home Address from Public Voter Roll Brokers',
        description:
          'In 40+ states, your voter registration address, party, and birth year are public records scraped by people-search sites. Scrub your personal address and phone number automatically.',
        ctaText: 'Activate Privacy Protection',
        subText: 'Special Civic Security Offer (Up to 68% Off)',
        href: 'https://www.nordvpn.com',
        colorClass: 'bg-indigo-600 hover:bg-indigo-500',
      },
    ],
  },
  mover: {
    heading: 'New Mover & Voter Address-Change Concierge Toolkit (2026)',
    subheading:
      'Recently moved to a new apartment, city, or state? Complete your address updates, mail forwarding, and voter roll privacy protection in one place:',
    offers: [
      {
        badge: 'Address & Mail Forwarding',
        title: 'Official Mover Address-Change & Utility Setup Checklist',
        description:
          'Moving within your county or to a new state before Election Day? Ensure your USPS election mail, DMV license address, and utility bills (used for Same-Day Voter Registration proof of residency) match.',
        ctaText: 'Start Mover Address Checklist',
        subText: 'Instant Utility & Residency Proof Setup',
        href: 'https://moversguide.usps.com',
        colorClass: 'bg-blue-600 hover:bg-blue-500',
      },
      {
        badge: 'Voter Roll Privacy',
        title: 'Keep Your New Home Address Off Public Data-Broker Sites',
        description:
          'The moment you update your voter registration at a new residential address, commercial data brokers index it. Protect your household’s new street address and identity online.',
        ctaText: 'Protect New Home Address',
        subText: 'Identity & Public Record Shield',
        href: 'https://www.nordvpn.com',
        colorClass: 'bg-emerald-600 hover:bg-emerald-500',
      },
      {
        badge: 'Remote Lease & Residency Notary',
        title: 'Notarize Residency & Domicile Affidavits Online',
        description:
          'College students, RV full-timers, and recent movers who need a notarized proof-of-residency or absentee forwarding declaration can complete it online in 5 minutes.',
        ctaText: 'Notarize Domicile Form',
        subText: 'Valid Across All 50 U.S. States',
        href: 'https://www.notarize.com',
        colorClass: 'bg-purple-600 hover:bg-purple-500',
      },
    ],
  },
  'work-leave': {
    heading: 'Workplace Voting Leave, HR Compliance & Payroll Toolkit (2026)',
    subheading:
      'For employees exercising statutory paid voting leave and HR managers ensuring 50-state labor law compliance for Tuesday, November 3, 2026:',
    offers: [
      {
        badge: 'HR & Payroll Compliance',
        title: 'Automated 50-State Paid Voting Leave & Payroll Compliance',
        description:
          '29 states mandate employee voting leave (22 paid), and 12 states observe Election Day as a state holiday. Automate multi-state PTO tracking, shift scheduling, and labor compliance.',
        ctaText: 'Explore HR Compliance Suite',
        subText: 'Built for Multi-State Employers & Teams',
        href: 'https://gusto.com',
        colorClass: 'bg-emerald-600 hover:bg-emerald-500',
      },
      {
        badge: 'Mandatory Labor Posters',
        title: '2026 State Voting Leave Notice & Labor Law Posters',
        description:
          'States like California (Cal. Elec. Code § 14001) and New York (N.Y. Elec. Law § 3-110) legally require employers to post a conspicuous Voting Leave Notice 10 days before Election Day.',
        ctaText: 'Download Statutory HR Notices',
        subText: 'Avoid State Labor Code Penalties',
        href: 'https://www.postercompliance.com',
        colorClass: 'bg-blue-600 hover:bg-blue-500',
      },
      {
        badge: 'Employee Legal Protection',
        title: 'On-Demand Employment Rights & Legal Consultation',
        description:
          'Have a question about workplace retaliation, shift deductions, or statutory time-off rights on Election Day? Connect with a licensed labor or civil rights attorney.',
        ctaText: 'Verify Employment Rights',
        subText: '24/7 Legal Protection Access',
        href: 'https://www.legalshield.com',
        colorClass: 'bg-indigo-600 hover:bg-indigo-500',
      },
    ],
  },
  general: {
    heading: 'Essential Tools for Informed & Secure Voters (2026)',
    subheading:
      'Researching candidates, checking public voter registration records, and submitting absentee ballots requires privacy and verification. These trusted independent services assist your civic participation:',
    offers: [
      {
        badge: 'Voter Roll Privacy',
        title: 'Identity Theft & Public Voter File Protection',
        description:
          'In most states, voter registration files (including home addresses, birth years, and phone numbers) are public records harvested by commercial data brokers. Protect your personal records.',
        ctaText: 'Explore Privacy Shield',
        subText: 'Special Civic Security Offer (Up to 68% Off)',
        href: 'https://www.nordvpn.com',
        colorClass: 'bg-blue-600 hover:bg-blue-500',
      },
      {
        badge: 'Ballot Verification',
        title: 'Instant Online Notary & Absentee Affidavits',
        description:
          'Several states require absentee ballot certificate envelopes, cure forms, or change-of-address affidavits to be notarized. Complete legally binding verifications on your phone in 5 minutes.',
        ctaText: 'Verify Ballot Affidavit Online',
        subText: '24/7 Remote Legal Notarization',
        href: 'https://www.notarize.com',
        colorClass: 'bg-emerald-600 hover:bg-emerald-500',
      },
      {
        badge: 'Electoral Literacy',
        title: 'Constitutional & U.S. Midterm History Audiobooks',
        description:
          'Understand the constitutional powers of the 120th U.S. Congress, how midterm elections reshape federal policy, and Supreme Court confirmation history with in-depth political analyses.',
        ctaText: 'Get 2 Free Audiobooks',
        subText: 'Audible 30-Day Free Trial',
        href: 'https://www.audible.com',
        colorClass: 'bg-purple-600 hover:bg-purple-500',
      },
    ],
  },
};

function detectContextFromPathname(pathname: string | null): AffiliateContext {
  if (!pathname) return 'general';
  const p = pathname.toLowerCase();
  if (
    p.includes('employer-voting-leave') ||
    p.includes('holiday-work-laws') ||
    p.includes('is-it-a-holiday') ||
    p.includes('paid-time-off') ||
    p.includes('poll-worker')
  ) {
    return 'work-leave';
  }
  if (
    p.includes('registration-deadline') ||
    p.includes('moved-didnt-change') ||
    p.includes('college-student') ||
    p.includes('homeless') ||
    p.includes('my-voting-plan')
  ) {
    return 'mover';
  }
  if (
    p.includes('voter-id') ||
    p.includes('mail-in-ballot') ||
    p.includes('ballot-problem-solver') ||
    p.includes('expired-id') ||
    p.includes('lost-wallet') ||
    p.includes('signature-mismatch') ||
    p.includes('name-changed')
  ) {
    return 'id-notary';
  }
  return 'general';
}

export const AffiliatePartners: React.FC<AffiliatePartnersProps> = ({ context }) => {
  const pathname = usePathname();
  const autoContext = context || detectContextFromPathname(pathname);
  const [activeTab, setActiveTab] = useState<AffiliateContext>(autoContext);

  useEffect(() => {
    setActiveTab(context || detectContextFromPathname(pathname));
  }, [context, pathname]);

  const suite = OFFER_SUITES[activeTab];

  return (
    <section
      aria-label="Recommended Civic & Security Resources"
      className="my-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-8 text-white border border-slate-800 shadow-xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <Sparkles className="w-4 h-4" />
          <span>Intent-Matched Voter Preparation &amp; Compliance Resources</span>
        </div>

        {/* Context Switcher Pills */}
        <div className="flex flex-wrap gap-1.5 text-[11px]">
          {(
            [
              { id: 'general', label: 'General Voter Prep' },
              { id: 'id-notary', label: 'ID, Vital Docs & Notary' },
              { id: 'mover', label: 'Movers & Address Change' },
              { id: 'work-leave', label: 'Work Leave & HR Compliance' },
            ] as { id: AffiliateContext; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
        {suite.heading}
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-6 max-w-3xl leading-relaxed">
        {suite.subheading}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suite.offers.map((offer, idx) => (
          <div
            key={idx}
            className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 flex flex-col justify-between hover:border-blue-400 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 text-amber-300 mb-2">
                <FileCheck className="w-4 h-4 shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wide">
                  {offer.badge}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">{offer.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{offer.description}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700">
              <a
                href={offer.href}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className={`inline-flex items-center justify-between w-full px-3 py-2 text-white text-xs font-bold rounded-lg transition-colors ${offer.colorClass}`}
              >
                <span>{offer.ctaText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="block text-[10px] text-slate-400 mt-1 text-center">
                {offer.subText}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 leading-relaxed">
        <strong>Affiliate Transparency Notice:</strong> ElectionDay2026.org may receive a referral commission when you use partner services linked on this page. All recommendations are selected for non-partisan civic, legal, or compliance utility.
      </div>
    </section>
  );
};
