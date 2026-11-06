'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_STATES_LIST, STATES_DATA } from '../data/states';
import {
  CheckCircle2,
  UserCheck,
  FileText,
  ShieldCheck,
  GraduationCap,
  DollarSign,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  Smartphone,
  RefreshCw,
} from 'lucide-react';

const POLLING_BOOTH_STEPS = [
  {
    step: 1,
    title: 'Walking Through the Door & The Buffer Zone',
    badge: 'Before You Check In',
    summary:
      'Outside the building (beyond the 100–300 ft "No Electioneering" sign), volunteers may hand out sample ballots. Inside the door, campaign hats, buttons, or candidate t-shirts are prohibited—wear neutral clothing!',
    proTip:
      'CAN I BRING MY PHONE OR NOTES? Yes! In all 50 states, you are 100% allowed to bring a printed paper cheat sheet (or look at notes on your phone) inside the voting booth. Just avoid taking a "ballot selfie" in states that restrict photographing marked ballots.',
  },
  {
    step: 2,
    title: 'Checking In at the e-Pollbook Table',
    badge: '60 Seconds',
    summary:
      'A bipartisan team of poll workers will greet you. You will state your name and residential address (and show your ID in Voter ID states). You will sign the electronic tablet (e-Pollbook) or paper roster.',
    proTip:
      'DO I HAVE TO STATE A POLITICAL PARTY? No! November 3, 2026 is a General Election—every voter at your precinct receives the exact same non-partisan general election ballot regardless of party registration.',
  },
  {
    step: 3,
    title: 'Getting Your Paper Ballot or Activation Card',
    badge: 'Hand-Marked vs. Touchscreen',
    summary:
      'Over 98% of U.S. voters in 2026 vote on a verifiable paper trail. Depending on your county, you will receive either (A) a paper ballot and pen inside a privacy folder, or (B) a blank activation card to insert into a Touchscreen Ballot Marking Device (BMD) that prints your paper ballot.',
    proTip:
      'Check that a poll worker has initialed or stamped your ballot if required by your state, and take the privacy sleeve offered to you.',
  },
  {
    step: 4,
    title: 'Marking Your Choices Inside the Privacy Booth',
    badge: 'Take Your Time',
    summary:
      'Step behind the privacy screen. Fill in the oval or box completely next to your chosen candidates and YES/NO ballot propositions. Remember to flip your ballot over—many states (like New York, California, and Arizona) print propositions and judicial retention questions on the BACK!',
    proTip:
      'WHAT IF I DON’T KNOW ONE OF THE RACES? You do NOT have to vote in every single race! Leaving a local judge or water-board race blank ("undervoting") is 100% legal and will NEVER invalidate your votes for Congress, Senate, or Governor.',
  },
  {
    step: 5,
    title: 'What If You Make a Mistake? ("Spoiling a Ballot")',
    badge: 'Never Cross Out on a Ballot!',
    summary:
      'If you accidentally fill in the wrong oval on a hand-marked paper ballot, DO NOT try to cross it out and bubble a second oval—the scanner will read that as an "overvote" and skip that race!',
    proTip:
      'Instead, carry your ballot back to the check-in desk inside your privacy folder and say: "I made a mistake and need a replacement ballot." Every state legally guarantees you a fresh replacement ballot (typically up to 3 replacements) with zero embarrassment.',
  },
  {
    step: 6,
    title: 'Feeding Your Ballot Into the Optical Scanner',
    badge: 'Ballot Cast!',
    summary:
      'Walk over to the optical scanner tabulator (which looks like a large office printer atop a locked ballot box). Slide your paper ballot in either face-up or face-down (both ways work!). Wait 2 seconds until the screen says "Thank You / Ballot Counted (+1)".',
    proTip:
      'Grab your "I Voted" sticker—your vote is officially locked inside the encrypted tabulator memory AND backed up on physical paper for post-election audits!',
  },
];

const SPECIAL_VOTER_PROFILES = [
  {
    id: 'college',
    label: 'College Students (Dorm vs. Home)',
    icon: GraduationCap,
    title: 'Can College Students Vote at Their Campus Dorm Address in 2026?',
    points: [
      'YES! Under the U.S. Supreme Court ruling in Symm v. United States (1979), college students have the constitutional right to register and vote at EITHER their college campus address (dorm or off-campus apartment) OR their permanent family home address—whichever they consider their current residence.',
      'You can only vote in ONE location in the November 3, 2026 general election. Registering at your campus address automatically cancels your old registration back home.',
      'Dorm Mail Address Tip: When registering with a dorm address, list your physical Residence Hall building name and room number on the "Residential Street Address" line, and your campus mailbox/PO Box on the "Mailing Address" line.',
      'Voter ID Alert for Out-of-State Students: In strict photo ID states (like Wisconsin, North Carolina, Ohio, Texas, Indiana, and Georgia), check whether your university student ID qualifies or if you should bring a U.S. Passport or request an absentee ballot from your home state.',
    ],
  },
  {
    id: 'turning18',
    label: 'Turning 18 by Nov 3, 2026',
    icon: UserCheck,
    title: 'High School Seniors & Gen-Z Voters Turning 18 on or Before November 3, 2026',
    points: [
      'If your 18th birthday falls on or before Tuesday, November 3, 2026, you are 100% eligible to vote in the 2026 Midterm General Election in all 50 states + D.C.!',
      'Even if you are still 17 years old in September or October 2026 when your state’s voter registration deadline arrives, federal and state law allow you to register in advance because you will be 18 by Election Day.',
      'Pre-Registration at Age 16 or 17: Over 20 states (including California, Florida, New York, Michigan, Colorado, Washington, Oregon, Maryland, Virginia, and North Carolina) allow 16- and 17-year-olds to pre-register right now so their registration automatically activates on their 18th birthday.',
    ],
  },
  {
    id: 'naturalized',
    label: 'Newly Naturalized Citizens',
    icon: ShieldCheck,
    title: 'Voting for the First Time After Your U.S. Citizenship Naturalization Ceremony',
    points: [
      'Congratulations! As soon as you take the Oath of Allegiance and receive your Certificate of Naturalization (Form N-550), you are immediately eligible to register to vote.',
      'Update Social Security & DMV Records: If you register to vote online using your driver’s license the same afternoon as your ceremony, the state DMV database may still flag your old permanent-resident status. If that happens, submit a paper registration form or bring your Certificate of Naturalization to your County Elections Office.',
      'Naturalized After the Registration Deadline? Many states (such as New York, California, Illinois, Massachusetts, Pennsylvania, and all 23+ Same-Day Registration states) have special statutory exceptions allowing citizens naturalized after the voter registration cutoff to register in person at the County Board of Elections right up to Election Day!',
    ],
  },
  {
    id: 'disability',
    label: 'Curbside & Accessible Voting',
    icon: RefreshCw,
    title: 'Curbside Voting, Audio-Tactile Ballots & Bringing a Helper Inside the Booth',
    points: [
      'Federal Right to Assistance (Voting Rights Act Section 208): Any voter who requires assistance due to blindness, disability, or inability to read or write the ballot has the federal right to bring a person of their choice into the voting booth to help them—as long as that helper is NOT the voter’s employer or union agent.',
      'Accessible Ballot Marking Devices (BMDs): Under the Help America Vote Act (HAVA), every single polling place in America is required to have at least one wheelchair-accessible voting station equipped with audio headphones, high-contrast zoom text, and tactile keypad / Sip-and-Puff controls.',
      'Curbside Voting from Your Vehicle: Over 30 states offer Curbside Voting where two bipartisan poll workers bring the pollbook and ballot directly out to your parked car outside the polling place.',
    ],
  },
];

export const FirstTimeVoterHub: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeProfile, setActiveProfile] = useState<string>('college');
  const [selectedStateSlug, setSelectedStateSlug] = useState<string>('california');
  const [isBilingual, setIsBilingual] = useState<boolean>(false);
  const [workEarlyVotingDays, setWorkEarlyVotingDays] = useState<number>(0);

  const selectedState = STATES_DATA[selectedStateSlug] || STATES_DATA['california'];

  // Deterministic realistic state poll worker pay & student age calculation
  const basePay =
    selectedStateSlug === 'california' ||
    selectedStateSlug === 'new-york' ||
    selectedStateSlug === 'new-jersey' ||
    selectedStateSlug === 'massachusetts' ||
    selectedStateSlug === 'washington' ||
    selectedStateSlug === 'district-of-columbia'
      ? 250
      : selectedStateSlug === 'texas' ||
        selectedStateSlug === 'florida' ||
        selectedStateSlug === 'illinois' ||
        selectedStateSlug === 'pennsylvania' ||
        selectedStateSlug === 'michigan' ||
        selectedStateSlug === 'arizona' ||
        selectedStateSlug === 'georgia' ||
        selectedStateSlug === 'colorado' ||
        selectedStateSlug === 'nevada'
      ? 210
      : 175;

  const trainingPay = 45;
  const bilingualBonus = isBilingual ? 50 : 0;
  const earlyDayRate = Math.round(basePay * 0.85);
  const totalEstimatedPay = basePay + trainingPay + bilingualBonus + workEarlyVotingDays * earlyDayRate;

  const currentStepObj = POLLING_BOOTH_STEPS.find((s) => s.step === activeStep) || POLLING_BOOTH_STEPS[0];
  const currentProfileObj =
    SPECIAL_VOTER_PROFILES.find((p) => p.id === activeProfile) || SPECIAL_VOTER_PROFILES[0];

  return (
    <div className="space-y-12">
      {/* Section 1: Interactive 6-Step Polling Booth Walkthrough */}
      <section className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 block mb-1">
              Interactive 6-Step Walkthrough
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              What Happens When You Walk Into a Polling Place?
            </h2>
          </div>
          <Link
            href="/sample-ballot-2026"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-extrabold text-xs transition-colors shrink-0"
          >
            <FileText className="w-4 h-4" />
            <span>Build Your Printable Booth Cheat Sheet →</span>
          </Link>
        </div>

        {/* Stepper Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
          {POLLING_BOOTH_STEPS.map((s) => (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveStep(s.step)}
              className={`p-3 rounded-2xl border-2 text-left transition-all ${
                activeStep === s.step
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400'
              }`}
            >
              <div
                className={`text-[10px] font-extrabold uppercase ${
                  activeStep === s.step ? 'text-blue-200' : 'text-slate-400'
                }`}
              >
                Step {s.step} of 6
              </div>
              <div className="text-xs font-black mt-0.5 line-clamp-2">{s.title}</div>
            </button>
          ))}
        </div>

        {/* Active Step Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-extrabold uppercase">
              Step {currentStepObj.step}: {currentStepObj.badge}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={activeStep === 1}
                onClick={() => setActiveStep((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold"
              >
                ← Previous
              </button>
              <button
                type="button"
                disabled={activeStep === 6}
                onClick={() => setActiveStep((p) => Math.min(6, p + 1))}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-xs font-bold"
              >
                Next Step →
              </button>
            </div>
          </div>

          <h3 className="text-2xl font-black text-white mb-3">{currentStepObj.title}</h3>
          <p className="text-base text-slate-300 leading-relaxed mb-5">{currentStepObj.summary}</p>

          <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-4 flex items-start gap-3">
            <Smartphone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-200 leading-relaxed font-medium">{currentStepObj.proTip}</p>
          </div>
        </div>
      </section>

      {/* Section 2: Special First-Time Voter Scenarios */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-2xl font-black text-slate-900 mb-2">
          Special Voter Rules: College Students, Turning 18, Naturalized Citizens &amp; Accessibility
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Select your situation below for exact federal and state statutory protections.
        </p>

        <div className="flex flex-wrap gap-2.5 mb-6">
          {SPECIAL_VOTER_PROFILES.map((prof) => {
            const Icon = prof.icon;
            return (
              <button
                key={prof.id}
                type="button"
                onClick={() => setActiveProfile(prof.id)}
                className={`px-4 py-3 rounded-2xl font-extrabold text-xs flex items-center gap-2 border-2 transition-all ${
                  activeProfile === prof.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-indigo-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{prof.label}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-indigo-50/60 border border-indigo-200 rounded-2xl p-6">
          <h3 className="text-lg font-black text-slate-900 mb-4">{currentProfileObj.title}</h3>
          <ul className="space-y-3">
            {currentProfileObj.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-800 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: 50-State Paid Poll Worker & Student Election Judge Calculator */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5" /> Get Paid $175–$350+ to Help Run Democracy
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-wider">
            High School Students Age 16–17 Eligible!
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black mb-2">
          2026 Paid Poll Worker &amp; Student Election Judge Stipend Calculator
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed mb-6">
          Counties across all 50 states pay everyday citizens, college students, and 16–17 year old high school students to staff check-in tablets and voting machines on Tuesday, November 3, 2026 (plus Early Voting days). Calculate your estimated stipend in{' '}
          <strong className="text-white">{selectedState.name}</strong> below:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-5">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                1. Select Your State
              </label>
              <select
                aria-label="Select state for poll worker pay calculation"
                value={selectedStateSlug}
                onChange={(e) => setSelectedStateSlug(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                {ALL_STATES_LIST.map((st) => (
                  <option key={st.slug} value={st.slug}>
                    {st.name} ({st.postalCode})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                  2. Extra Early Voting Shifts?
                </label>
                <select
                  aria-label="Number of early voting shifts"
                  value={workEarlyVotingDays}
                  onChange={(e) => setWorkEarlyVotingDays(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold text-sm"
                >
                  <option value={0}>Election Day Only (Nov 3, 2026)</option>
                  <option value={2}>+ 1 Weekend of Early Voting (2 Days)</option>
                  <option value={5}>+ 5 Days of Early Voting</option>
                  <option value={10}>+ Full 10-Day Early Voting Window</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                  3. Bilingual Fluency Bonus?
                </label>
                <button
                  type="button"
                  onClick={() => setIsBilingual(!isBilingual)}
                  className={`w-full px-4 py-3 rounded-xl font-bold text-sm border transition-all ${
                    isBilingual
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  {isBilingual ? '✅ Bilingual Stipend Included (+$50)' : 'Add Bilingual Bonus (ES/ZH/VN/TL)'}
                </button>
              </div>
            </div>

            <div className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
              <strong className="text-white">High School Student Eligibility in {selectedState.name}:</strong> Most counties permit students aged <strong>16 or 17</strong> with a 2.5+ GPA and parent/school permission to serve as paid Student Election Judges on November 3, 2026 (earning both full stipend pay AND an excused civic absence!).
            </div>
          </div>

          {/* Payout Card */}
          <div className="lg:col-span-5 bg-emerald-950/50 border-2 border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-300 mb-1">
                Estimated {selectedState.name} Poll Worker Pay
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                ${totalEstimatedPay.toLocaleString()}
              </div>
              <ul className="space-y-1.5 text-xs text-emerald-200 mb-5">
                <li>• Election Day Base Stipend ({selectedState.pollingHours}): ${basePay}</li>
                <li>• Mandatory Paid Training Class (2–3 hrs): +${trainingPay}</li>
                {workEarlyVotingDays > 0 && (
                  <li>
                    • {workEarlyVotingDays} Early Voting Shifts (${earlyDayRate}/day): +$
                    {(workEarlyVotingDays * earlyDayRate).toLocaleString()}
                  </li>
                )}
                {isBilingual && <li>• Bilingual Voter Assistance Stipend: +${bilingualBonus}</li>}
              </ul>
            </div>

            <div className="space-y-2.5">
              <a
                href={selectedState.officialPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Apply at Official {selectedState.name} Election Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href={`/states/${selectedState.slug}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View {selectedState.name} County Offices</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
