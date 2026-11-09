import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  CANDIDATE_DIRECTORY,
  CandidateProfile,
} from '../../../data/candidateDirectory';
import {
  ENDORSEMENTS_LISTINGS,
  EndorsementListing,
} from '../../../data/endorsements';
import { JsonLd } from '../../../components/JsonLd';
import {
  CheckCircle,
  ExternalLink,
  DollarSign,
  HeartHandshake,
  ShieldCheck,
  Calendar,
  MapPin,
  Vote,
  Award,
  ChevronRight,
  ArrowLeft,
  Building2,
  FileCheck2,
  HelpCircle,
  Users,
} from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CANDIDATE_DIRECTORY.map((c) => ({
    slug: c.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const candidate = CANDIDATE_DIRECTORY.find((c) => c.id === slug);

  if (!candidate) {
    return {
      title: 'Candidate Not Found | National Candidate Directory',
    };
  }

  const title = `${candidate.name} (${candidate.party}-${candidate.postalCode}) | Endorsements & Election Guide`;
  const description = `Official candidate profile for ${candidate.name}, ${candidate.officeTitle}. Verified endorsements from labor and business, platform priorities, and how to vote.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      url: `https://election-day-2026.vercel.app/candidate/${candidate.id}`,
    },
  };
}

export default async function CandidateProfilePage({ params }: Props) {
  const { slug } = await params;
  const candidate = CANDIDATE_DIRECTORY.find((c) => c.id === slug);

  if (!candidate) {
    notFound();
  }

  const candidateEndorsements = ENDORSEMENTS_LISTINGS.filter(
    (e) => e.candidateId === candidate.id
  );

  const partyColor =
    candidate.party === 'Democrat'
      ? 'bg-blue-100 text-blue-800 border-blue-300'
      : candidate.party === 'Republican'
      ? 'bg-rose-100 text-rose-800 border-rose-300'
      : 'bg-emerald-100 text-emerald-800 border-emerald-300';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: candidate.name,
    jobTitle: candidate.officeTitle,
    description: candidate.bio,
    url: `https://election-day-2026.vercel.app/candidate/${candidate.id}`,
    sameAs: [candidate.campaignWebsite, candidate.donationUrl].filter(Boolean),
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://election-day-2026.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Candidate Directory',
        item: 'https://election-day-2026.vercel.app/candidates',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: candidate.name,
        item: `https://election-day-2026.vercel.app/candidate/${candidate.id}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbsSchema} />

      <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Navigation Breadcrumb Bar */}
        <div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link
              href="/candidates"
              className="inline-flex items-center gap-1 hover:text-white font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Candidate Directory</span>
            </Link>

            <Link
              href="/endorsements"
              className="hover:text-white font-medium flex items-center gap-1"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
              <span>All Endorsements Tracker</span>
            </Link>
          </div>
        </div>

        {/* Candidate Profile Header Hero */}
        <section className="bg-gradient-to-b from-slate-900 via-indigo-950 to-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Headshot / Initials badge */}
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br ${candidate.headshotColor} text-white flex items-center justify-center font-black text-3xl shadow-xl border-2 border-white/20 flex-shrink-0`}
              >
                {candidate.name
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>

              {/* Title & Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${partyColor}`}
                  >
                    {candidate.party}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
                    {candidate.state}
                  </span>
                  {candidate.district && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
                      {candidate.district}
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {candidate.cycle}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                    {candidate.name}
                  </h1>
                  {candidate.verified && (
                    <span
                      title="Verified Candidate Committee"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold"
                    >
                      <CheckCircle className="w-3.5 h-3.5 fill-blue-400 text-slate-900" />
                      Verified Committee
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm sm:text-base text-blue-200 font-medium">
                  {candidate.officeTitle}
                </p>

                {candidate.fecId && (
                  <p className="mt-1 text-xs text-slate-400 font-mono">
                    FEC Committee ID: <span className="text-amber-300">{candidate.fecId}</span>
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto mt-4 md:mt-0">
                {candidate.campaignWebsite && (
                  <a
                    href={candidate.campaignWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs shadow-md transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Official Campaign Website
                  </a>
                )}

                {candidate.donationUrl && (
                  <a
                    href={candidate.donationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    Donate to Campaign
                  </a>
                )}

                <Link
                  href="/candidate-portal"
                  className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-[11px] text-blue-300 hover:text-white"
                >
                  <Award className="w-3 h-3 text-amber-300" />
                  Are you {candidate.name}? Claim Listing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Bio, Platform, and Endorsements */}
          <div className="lg:col-span-8 space-y-8">
            {/* Biography & Quote */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Candidate Biography & Background
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {candidate.bio}
              </p>

              {candidate.featuredQuote && (
                <blockquote className="mt-4 border-l-4 border-blue-600 pl-4 py-1 text-sm italic text-slate-600 bg-blue-50/50 rounded-r-lg">
                  &ldquo;{candidate.featuredQuote}&rdquo;
                </blockquote>
              )}
            </div>

            {/* Platform Priorities */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-emerald-600" />
                Official Platform Pillars
              </h2>
              <div className="space-y-3">
                {candidate.platformPriorities.map((priority, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{priority}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Endorsements Section */}
            <div id="endorsements" className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-rose-500" />
                  Verified Endorsements ({candidateEndorsements.length})
                </h2>

                <Link
                  href="/endorsements"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  View All National Endorsements →
                </Link>
              </div>

              {candidateEndorsements.length === 0 ? (
                <div className="p-6 bg-slate-50 rounded-xl text-center border border-dashed border-slate-200">
                  <p className="text-xs text-slate-500">
                    No verified organization endorsements filed yet for this candidate profile.
                  </p>
                  <Link
                    href="/candidate-portal"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 mt-2 hover:underline"
                  >
                    Submit an endorsement for review →
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {candidateEndorsements.map((end) => (
                    <div
                      key={end.id}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-50/80 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-800">
                          {end.category}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {end.endorsementDate}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        {end.headline}
                      </h3>

                      <p className="text-xs text-slate-700 italic leading-relaxed mb-3">
                        &ldquo;{end.quote}&rdquo;
                      </p>

                      <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center justify-between text-[10px] text-slate-500 gap-2">
                        <span className="font-mono">{end.fecDisclaimer}</span>
                        <a
                          href={end.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <span>{end.endorserName}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: How to Vote, State Rules & District Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* How to Vote Box */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                <Vote className="w-4 h-4" />
                Voter Toolkit
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                How to Vote in {candidate.state}
              </h3>
              <p className="text-xs text-blue-100/90 leading-relaxed mb-4">
                Verify your voting eligibility, local polling precinct, ID requirements, and ballot drop box rules.
              </p>

              <div className="space-y-2.5">
                <Link
                  href={`/state/${candidate.stateSlug}`}
                  className="w-full flex items-center justify-between p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold text-white border border-white/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-300" />
                    {candidate.state} Election Hub
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
                </Link>

                <Link
                  href="/find-my-district"
                  className="w-full flex items-center justify-between p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold text-white border border-white/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-blue-300" />
                    Find My Exact District
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
                </Link>

                <Link
                  href="/voter-id"
                  className="w-full flex items-center justify-between p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold text-white border border-white/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                    {candidate.state} Voter ID Rules
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
                </Link>

                <Link
                  href="/early-voting-calendar-2026"
                  className="w-full flex items-center justify-between p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-semibold text-white border border-white/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                    Early Voting Schedule
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
                </Link>
              </div>
            </div>

            {/* Campaign Compliance & Disclaimer */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm text-xs text-slate-500 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Statutory & Ethics Transparency</span>
              </div>
              <p>
                Candidate profile information is compiled from official candidate filings, Federal Election Commission records, and verified public endorsements.
              </p>
              <p>
                ElectionDay2026.org is a non-partisan civic platform. Candidate listings and verified badges do not constitute an endorsement by this website.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
