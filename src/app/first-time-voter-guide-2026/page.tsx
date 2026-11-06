import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FirstTimeVoterHub } from '../../components/FirstTimeVoterHub';
import { AffiliatePartners } from '../../components/AffiliatePartners';
import { SITE_URL } from '../../lib/siteConfig';
import { GraduationCap, CheckCircle2, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'First-Time Voter Guide 2026: What Happens Inside a Polling Place + Paid Poll Worker Calculator',
  description:
    'Voting for the first time on Tuesday, November 3, 2026? Step-by-step walkthrough of what happens inside a polling booth, college student dorm vs. home voting rules, turning 18 before Election Day, and our 50-State Paid Poll Worker Stipend Calculator ($175–$350+/day).',
  keywords: [
    'how to vote for the first time 2026',
    'what happens at a polling place step by step',
    'can college students vote at their dorm address',
    'can i bring my phone into the voting booth',
    'what if i make a mistake on my paper ballot',
    'do i have to vote for everything on the ballot',
    'how much do poll workers get paid 2026',
    'high school student poll worker age 16',
  ],
  alternates: {
    canonical: `${SITE_URL}/first-time-voter-guide-2026`,
  },
};

export default function FirstTimeVoterGuide2026Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Vote in Person for the First Time on Election Day 2026',
        description:
          'A 6-step guide explaining what happens from walking into a polling place to casting your paper ballot into the optical tabulator scanner.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Enter the Polling Place & Respect the Buffer Zone',
            text: 'Leave campaign shirts, hats, or buttons outside the 100–300 foot electioneering buffer zone. Bring your acceptable ID and your printed Sample Ballot Cheat Sheet.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Check In at the e-Pollbook Table',
            text: 'Provide your name, residential street address, and ID (where required). Sign the electronic pollbook or paper roster.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Receive Your Paper Ballot or Activation Card',
            text: 'Take your official paper ballot (or touchscreen Ballot Marking Device activation card) inside a privacy folder.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Mark Your Choices in the Privacy Booth',
            text: 'Fill in the ovals completely using the provided pen, and check both sides of the ballot. Leaving an unfamiliar down-ballot race blank is 100% legal and does not affect your other votes.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Request a Replacement If You Make a Mistake',
            text: 'Never cross out an oval on a paper ballot. If you make a mistake, return the spoiled ballot to a poll worker for a fresh replacement ballot.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Insert Your Ballot Into the Optical Scanner',
            text: 'Slide your paper ballot into the optical scanner tabulator, wait for the screen to confirm your ballot was counted, and take your I Voted sticker.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do I have to vote for every single race or judge on my 2026 ballot?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No! You do NOT have to vote in every race on your ballot. Skipping a down-ballot contest or judicial retention question ("undervoting") is 100% legal in all 50 states, and the optical scanner will still count every other race you marked.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I bring my phone or a written cheat sheet into the voting booth?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! In all 50 states, you are allowed to bring a printed Sample Ballot Cheat Sheet or check notes on your smartphone inside the privacy booth. Just keep your phone on silent, do not make voice/video calls inside the polling room, and check your state’s ballot-selfie rules before photographing a marked ballot.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much do poll workers get paid on Election Day 2026, and can 16-year-olds apply?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Counties across the United States pay poll workers between $150 and $350+ for working Election Day (plus paid training and extra stipends for bilingual speakers or early voting shifts). Over 40 states allow 16- and 17-year-old high school students to serve as paid Student Election Judges.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white pt-12 pb-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider mb-5">
            <GraduationCap className="w-4 h-4" />
            <span>Zero-Anxiety Polling Booth Simulator • College, 18-Year-Old &amp; Naturalized Voter Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            First-Time Voter Guide (2026):{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300">
              What Happens Inside the Polling Booth
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed mb-6">
            Walking into a polling place for the first time shouldn’t feel intimidating. Walk through our interactive <strong>6-Step Polling Booth Simulator</strong> below to see exactly how check-in tablets, privacy folders, spoiled-ballot replacements, and optical scanners work—plus calculate how much your county pays <strong>2026 Poll Workers &amp; High School Student Election Judges</strong>.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-12">
        <FirstTimeVoterHub />
        <AffiliatePartners />
      </div>
    </div>
  );
}
