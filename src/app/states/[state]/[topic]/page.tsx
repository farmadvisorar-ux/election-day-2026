import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  STATES_DATA,
  TOPIC_SPOKES,
  ALL_STATES_LIST,
  StateElectionData,
  TopicSpokeSlug,
} from '../../../../data/states';
import { DirectAnswerBox } from '../../../../components/DirectAnswerBox';
import { AdPlacement } from '../../../../components/AdPlacement';
import { AffiliatePartners } from '../../../../components/AffiliatePartners';
import { LeadCapture } from '../../../../components/LeadCapture';
import { JsonLd } from '../../../../components/JsonLd';
import {
  Calendar,
  Clock,
  CreditCard,
  Mail,
  Briefcase,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Scale,
  Camera,
} from 'lucide-react';

interface Props {
  params: Promise<{ state: string; topic: string }>;
}

export async function generateStaticParams() {
  const paths: { state: string; topic: string }[] = [];
  for (const stateSlug of Object.keys(STATES_DATA)) {
    for (const spoke of TOPIC_SPOKES) {
      paths.push({
        state: stateSlug,
        topic: spoke.topicSlug,
      });
    }
  }
  return paths;
}

function getTopicContent(state: StateElectionData, topic: TopicSpokeSlug) {
  switch (topic) {
    case 'registration-deadline':
      return {
        title: `${state.name} Voter Registration Deadline 2026: Online, Mail & Same-Day Rules`,
        metaDesc: `When is the last day to register to vote in ${state.name} for 2026? Official ${state.postalCode} online cutoff (${state.registrationDeadline.online}), mail postmark rules, and same-day registration guide.`,
        h1: `${state.name} Voter Registration Deadline 2026`,
        subtitle: `Statutory book-closing cutoff dates, online registration eligibility, and residency requirements for the November 3, 2026 general election in ${state.name}.`,
        directQuestion: `When is the voter registration deadline in ${state.name} for 2026?`,
        directAnswer: `The voter registration deadline in ${state.name} for the November 3, 2026 general election is ${state.registrationDeadline.online}. ${
          state.registrationDeadline.sameDayRegistration
            ? `${state.name} ALSO offers Same-Day Voter Registration for eligible residents with proof of residency.`
            : `${state.name} does NOT offer Election Day registration; you must register before the cutoff.`
        }`,
        supportingText: state.registrationDeadline.notes,
        faqs: [
          {
            q: `What is the last day to register to vote in ${state.name} in 2026?`,
            a: `Online registration in ${state.name}: ${state.registrationDeadline.online}. By mail postmark: ${state.registrationDeadline.mailPostmark}. In-person cutoff: ${state.registrationDeadline.inPerson}.`,
          },
          {
            q: `Does ${state.name} allow Same-Day Voter Registration on Election Day 2026?`,
            a: state.registrationDeadline.sameDayRegistration
              ? `Yes. ${state.name} permits eligible citizens to register and cast a ballot on the same day. Bring a valid photo ID and proof of residency (such as a utility bill, bank statement, or lease agreement showing your current ${state.name} address).`
              : `No. ${state.name} law requires voters to complete registration prior to the statutory cutoff (${state.registrationDeadline.mailPostmark}).`,
          },
          {
            q: `How do I check if I am registered to vote in ${state.name}?`,
            a: `Visit the official ${state.officialPortal.name} at ${state.officialPortal.url} to verify your active voter status, party affiliation, and assigned precinct.`,
          },
        ],
      };

    case 'early-voting':
      return {
        title: `${state.name} Early Voting Dates 2026: Schedule, Hours & Weekend Locations`,
        metaDesc: `When does early voting start and end in ${state.name} for 2026? Complete ${state.postalCode} in-person early voting calendar (${state.earlyVoting.starts} – ${state.earlyVoting.ends}) and weekend hours.`,
        h1: `${state.name} Early Voting Dates & Schedule 2026`,
        subtitle: `Official in-person advance voting window, Saturday/Sunday polling availability, and county early vote center rules in ${state.name}.`,
        directQuestion: `When does early voting start in ${state.name} for the 2026 election?`,
        directAnswer: `Early voting in ${state.name} for the 2026 Midterm Elections begins on ${state.earlyVoting.starts} and ends on ${state.earlyVoting.ends}.`,
        supportingText: `${state.earlyVoting.description} Saturday voting: ${state.earlyVoting.saturdayVoting ? 'Available' : 'Not Available'}. Sunday voting: ${state.earlyVoting.sundayVoting ? 'Available in participating counties' : 'Not Available'}.`,
        faqs: [
          {
            q: `What are the early voting dates in ${state.name} for November 2026?`,
            a: `The early voting window in ${state.name} runs from ${state.earlyVoting.starts} through ${state.earlyVoting.ends}.`,
          },
          {
            q: `Can anyone vote early in person in ${state.name}?`,
            a: `${state.earlyVoting.description} Verify your nearest county early voting center at ${state.officialPortal.url}.`,
          },
          {
            q: `Are early voting centers open on weekends in ${state.name}?`,
            a: `Saturday early voting is ${state.earlyVoting.saturdayVoting ? 'offered' : 'not statewide'} in ${state.name}, and Sunday voting is ${state.earlyVoting.sundayVoting ? 'available in designated counties' : 'generally closed'}.`,
          },
        ],
      };

    case 'voter-id-rules':
      return {
        title: `${state.name} Voter ID Laws 2026: Do You Need a Photo ID to Vote in ${state.postalCode}?`,
        metaDesc: `What ID is required to vote in ${state.name} in 2026? Official ${state.postalCode} classification (${state.voterId.type}), list of accepted IDs, expired license rules, and ballot selfie laws.`,
        h1: `${state.name} Voter ID Requirements & Laws 2026`,
        subtitle: `Statutory identification requirements at polling places, acceptable photo and non-photo documents, and provisional ballot procedures in ${state.name}.`,
        directQuestion: `Do I need a photo ID to vote in ${state.name} in 2026?`,
        directAnswer: `${state.name} enforces a "${state.voterId.type}" law for the 2026 election. ${state.voterId.description}`,
        supportingText: `Accepted documents in ${state.name} include: ${state.voterId.acceptableDocs.join(', ')}.`,
        faqs: [
          {
            q: `What forms of ID are accepted to vote in ${state.name}?`,
            a: `Approved identification in ${state.name} includes: ${state.voterId.acceptableDocs.join('; ')}.`,
          },
          {
            q: `What happens if I forget or lose my ID on Election Day in ${state.name}?`,
            a: `Under federal HAVA law (52 U.S.C. § 21082), you have the absolute legal right to cast a provisional ballot in ${state.name}. Depending on ${state.postalCode} law (${state.voterId.type}), you may sign an identity affidavit at the polls or cure your provisional ballot at the county election office within days of the election.`,
          },
          {
            q: `Are ballot selfies legal in ${state.name}?`,
            a: `Ballot selfie status in ${state.name}: ${state.ballotSelfieLaw.allowed}. ${state.ballotSelfieLaw.details}`,
          },
        ],
      };

    case 'mail-in-ballot':
      return {
        title: `${state.name} Mail-In & Absentee Ballot Rules 2026: Deadlines & Postage`,
        metaDesc: `How to vote by mail in ${state.name} in 2026. Official ${state.postalCode} absentee request deadline (${state.mailInVoting.requestDeadline}), return deadline (${state.mailInVoting.returnDeadline}), and postmark rules.`,
        h1: `${state.name} Mail-In & Absentee Ballot Guide 2026`,
        subtitle: `Application cutoffs, witness/notary requirements, drop box rules, and postmark vs. physical receipt deadlines in ${state.name}.`,
        directQuestion: `When is the mail-in ballot deadline in ${state.name} for 2026?`,
        directAnswer: `In ${state.name}, absentee/mail-in ballot applications must be requested by ${state.mailInVoting.requestDeadline}, and completed ballots must be returned by: ${state.mailInVoting.returnDeadline}.`,
        supportingText: `${state.mailInVoting.details} Excuse required: ${state.mailInVoting.excuseRequired ? 'Yes (Statutory Excuse Required)' : 'No (Universal No-Excuse Mail Voting)'}.`,
        faqs: [
          {
            q: `Do I need an excuse to request an absentee ballot in ${state.name}?`,
            a: state.mailInVoting.excuseRequired
              ? `Yes. ${state.name} requires a valid statutory excuse (such as age 65+, disability, or absence from your county on Election Day) to vote by mail.`
              : `No. ${state.name} permits any registered voter to request and cast a mail-in ballot without needing an excuse.`,
          },
          {
            q: `Does a postmark count for mail-in ballots in ${state.name}?`,
            a: state.mailInVoting.postmarkMatters
              ? `Yes, ${state.name} accepts timely postmarked ballots provided they arrive within the statutory receipt window (${state.mailInVoting.returnDeadline}).`
              : `No! In ${state.name}, postmarks do NOT extend the deadline. Your mail ballot must be physically received by election officials by ${state.mailInVoting.returnDeadline}.`,
          },
          {
            q: `Will USPS deliver my ${state.name} mail ballot if I forget a stamp?`,
            a: `Yes. Under USPS Postal Operations Manual § 171, the Postal Service never delays or returns official election mail for insufficient postage, though voters are encouraged to use official county drop boxes within 7 days of November 3, 2026.`,
          },
        ],
      };

    case 'polling-hours':
      return {
        title: `${state.name} Polling Hours 2026: What Time Do Polls Open & Close in ${state.postalCode}?`,
        metaDesc: `What time do polls open and close in ${state.name} on Election Day, November 3, 2026? Official ${state.postalCode} polling hours (${state.pollingHours}), line protection rights, and precinct finder.`,
        h1: `${state.name} Polling Place Hours & Locations 2026`,
        subtitle: `Official opening and closing times across ${state.timezone} time zones, in-line voter protection statutes, and polling location lookup for ${state.name}.`,
        directQuestion: `What time do polls open and close in ${state.name} on Election Day 2026?`,
        directAnswer: `On Tuesday, November 3, 2026, polling places in ${state.name} are open from ${state.pollingHours} (${state.timezone}).`,
        supportingText: `Legal Right Protection: If you are standing in line at your ${state.name} polling place before the official closing time, poll workers must permit you to cast your ballot.`,
        faqs: [
          {
            q: `What time do voting booths open in ${state.name} on November 3, 2026?`,
            a: `Polls in ${state.name} operate during ${state.pollingHours} (${state.timezone}).`,
          },
          {
            q: `What happens if I am still in line when polls close in ${state.name}?`,
            a: `Stay in line! Under federal and ${state.name} election law, every eligible voter who is in line by the scheduled closing time is legally entitled to vote, no matter how long the line takes.`,
          },
          {
            q: `Where is my polling place in ${state.name}?`,
            a: `Precinct locations can change between elections. Look up your exact assigned neighborhood polling station on the official ${state.officialPortal.name} (${state.officialPortal.url}).`,
          },
        ],
      };

    case 'holiday-work-laws':
    default:
      return {
        title: `Is Election Day 2026 a State Holiday in ${state.name}? Paid Time Off to Vote Laws`,
        metaDesc: `Is Election Day 2026 a public holiday in ${state.name}? Does your employer have to give you paid time off to vote under ${state.workLeaveLaw.statuteCitation}? Full ${state.postalCode} labor & closure guide.`,
        h1: `${state.name} Election Day Holiday & Paid Voting Leave Laws 2026`,
        subtitle: `Statutory employee voting leave rights (${state.workLeaveLaw.statuteCitation}), state government office closures, bank schedules, and school status in ${state.name}.`,
        directQuestion: `Does ${state.name} require employers to give paid time off to vote in 2026?`,
        directAnswer: `${
          state.workLeaveLaw.paid
            ? `Yes! Under ${state.workLeaveLaw.statuteCitation}, employers in ${state.name} must provide ${state.workLeaveLaw.hoursAllowed.toLowerCase()}.`
            : `${state.workLeaveLaw.summary}`
        } Election Day is ${state.isStateHoliday ? 'an official legal state holiday' : 'NOT a statewide government holiday'} in ${state.name}.`,
        supportingText: state.holidayStatusNotes,
        faqs: [
          {
            q: `Is Election Day 2026 a legal state holiday in ${state.name}?`,
            a: state.isStateHoliday
              ? `Yes! General Election Day (Tuesday, November 3, 2026) is an official state holiday in ${state.name}. State government agencies close, though banks and USPS mail delivery remain open.`
              : `No. Election Day is not a statewide public holiday in ${state.name}; state agencies, banks, and post offices operate regular hours.`,
          },
          {
            q: `What is the exact law for taking time off work to vote in ${state.name}?`,
            a: `Under ${state.workLeaveLaw.statuteCitation}: ${state.workLeaveLaw.summary} (${state.workLeaveLaw.hoursAllowed}).`,
          },
          {
            q: `Are schools closed on Election Day 2026 in ${state.name}?`,
            a: `School closures in ${state.name} are determined by local school district boards. Many public K-12 schools schedule teacher in-service days on November 3, 2026, when school buildings serve as active polling places.`,
          },
        ],
      };
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug, topic } = await params;
  const state = STATES_DATA[stateSlug.toLowerCase()];
  const validSpoke = TOPIC_SPOKES.find((s) => s.topicSlug === topic);

  if (!state || !validSpoke) {
    return { title: 'State Election Topic Not Found' };
  }

  const content = getTopicContent(state, validSpoke.topicSlug);

  return {
    title: content.title,
    description: content.metaDesc,
    alternates: {
      canonical: `https://electionguide2026.org/states/${state.slug}/${validSpoke.topicSlug}`,
    },
    keywords: [
      `${state.name.toLowerCase()} ${validSpoke.label.toLowerCase()} 2026`,
      `${state.postalCode.toLowerCase()} election day 2026 ${validSpoke.shortTitle.toLowerCase()}`,
      `when is election day 2026 in ${state.name.toLowerCase()}`,
      `${state.workLeaveLaw.statuteCitation}`,
      `${state.name.toLowerCase()} voting rules 2026`,
    ],
  };
}

export default async function StateTopicSpokePage({ params }: Props) {
  const { state: stateSlug, topic } = await params;
  const state = STATES_DATA[stateSlug.toLowerCase()];
  const validSpoke = TOPIC_SPOKES.find((s) => s.topicSlug === topic);

  if (!state || !validSpoke) {
    notFound();
  }

  const content = getTopicContent(state, validSpoke.topicSlug);

  // Presidential-Grade @graph JSON-LD with Wikidata Entity Co-Citation, Speakable, GovernmentService & FAQPage
  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `https://electionguide2026.org/states/${state.slug}/${validSpoke.topicSlug}`,
        url: `https://electionguide2026.org/states/${state.slug}/${validSpoke.topicSlug}`,
        name: content.title,
        description: content.metaDesc,
        inLanguage: 'en-US',
        about: {
          '@type': 'AdministrativeArea',
          name: state.name,
          sameAs: `https://www.wikidata.org/wiki/${state.wikidataId}`,
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.aeo-speakable-summary', 'h1'],
        },
      },
      {
        '@type': 'GovernmentService',
        name: `${state.name} ${validSpoke.label} (2026 General Election)`,
        serviceType: validSpoke.searchIntent,
        provider: {
          '@type': 'GovernmentOrganization',
          name: state.officialPortal.name,
          url: state.officialPortal.url,
        },
        areaServed: {
          '@type': 'State',
          name: state.name,
          sameAs: `https://www.wikidata.org/wiki/${state.wikidataId}`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://electionguide2026.org',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${state.name} 2026 Hub`,
            item: `https://electionguide2026.org/states/${state.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: validSpoke.shortTitle,
            item: `https://electionguide2026.org/states/${state.slug}/${validSpoke.topicSlug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={graphSchema} />

      {/* Header */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-slate-400 mb-3 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href={`/states/${state.slug}`} className="hover:text-white">{state.name}</Link>
            <span>/</span>
            <span className="text-amber-300 font-bold">{validSpoke.shortTitle}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-blue-600 text-white font-mono text-xs font-bold rounded">
              {state.postalCode} • Wikidata:{state.wikidataId}
            </span>
            <span className="px-2.5 py-0.5 bg-slate-800 text-slate-300 text-xs font-semibold rounded border border-slate-700">
              Statutory Verification: {state.workLeaveLaw.statuteCitation}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            {content.h1}
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300">
            {content.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Topic Silo Navigation Tabs (Internal Link Sculpting across all 6 Spokes + Hub) */}
        <nav
          aria-label={`${state.name} Election Topics`}
          className="mb-6 bg-white p-3 rounded-xl border border-slate-200 shadow-xs overflow-x-auto"
        >
          <div className="flex items-center gap-2 text-xs font-bold whitespace-nowrap">
            <Link
              href={`/states/${state.slug}`}
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              🏛️ {state.postalCode} Overview Hub
            </Link>
            {TOPIC_SPOKES.map((spoke) => {
              const isActive = spoke.topicSlug === validSpoke.topicSlug;
              return (
                <Link
                  key={spoke.topicSlug}
                  href={`/states/${state.slug}/${spoke.topicSlug}`}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200'
                  }`}
                >
                  {spoke.shortTitle}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Speakable Position #0 Direct Answer Box */}
        <div className="aeo-speakable-summary">
          <DirectAnswerBox
            question={content.directQuestion}
            directAnswer={content.directAnswer}
            supportingText={content.supportingText}
            statuteOrSource={`${state.officialPortal.name} (${state.workLeaveLaw.statuteCitation})`}
            sourceUrl={state.officialPortal.url}
          />
        </div>

        <AdPlacement format="leaderboard" slotId={`spoke-${state.postalCode}-${validSpoke.topicSlug}-top`} />

        {/* Position #0 Featured Snippet Stealer: Structured Comparison HTML Table */}
        <section className="my-8 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-200 bg-slate-50">
            <h2 className="text-lg sm:text-xl font-black text-slate-900">
              {state.name} 2026 Statutory Voting Summary Table
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Official parameters verified for the Tuesday, November 3, 2026 General Midterm Election
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <caption className="sr-only">
                {state.name} 2026 Election Deadlines, Hours, and Statutory Requirements
              </caption>
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-bold text-[11px]">
                <tr>
                  <th className="py-3 px-4">Requirement / Rule</th>
                  <th className="py-3 px-4">{state.name} ({state.postalCode}) Statutory Standard</th>
                  <th className="py-3 px-4">Verification / Citation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Election Day Poll Hours</td>
                  <td className="py-3 px-4 text-blue-700 font-bold">{state.pollingHours} ({state.timezone})</td>
                  <td className="py-3 px-4 text-slate-500">Tuesday, Nov 3, 2026</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Registration Deadline</td>
                  <td className="py-3 px-4 text-slate-800">{state.registrationDeadline.online}</td>
                  <td className="py-3 px-4 text-slate-500">
                    {state.registrationDeadline.sameDayRegistration ? 'Same-Day Allowed' : 'Strict Cutoff'}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Early In-Person Voting</td>
                  <td className="py-3 px-4 text-slate-800">{state.earlyVoting.starts} – {state.earlyVoting.ends}</td>
                  <td className="py-3 px-4 text-slate-500">
                    Sat: {state.earlyVoting.saturdayVoting ? 'Yes' : 'No'} | Sun: {state.earlyVoting.sundayVoting ? 'Yes' : 'No'}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Mail Ballot Request / Return</td>
                  <td className="py-3 px-4 text-slate-800">Return: {state.mailInVoting.returnDeadline}</td>
                  <td className="py-3 px-4 text-slate-500">
                    {state.mailInVoting.excuseRequired ? 'Excuse Required' : 'No-Excuse Allowed'}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Voter ID Classification</td>
                  <td className="py-3 px-4 font-bold text-slate-900">{state.voterId.type}</td>
                  <td className="py-3 px-4 text-slate-500">HAVA Provisional Protected</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Work Time-Off to Vote Law</td>
                  <td className="py-3 px-4 text-emerald-800 font-semibold">{state.workLeaveLaw.hoursAllowed}</td>
                  <td className="py-3 px-4 font-mono text-xs text-slate-600">{state.workLeaveLaw.statuteCitation}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Ballot Selfie Legality</td>
                  <td className="py-3 px-4 text-slate-800">{state.ballotSelfieLaw.allowed}</td>
                  <td className="py-3 px-4 text-slate-500">{state.ballotSelfieLaw.details}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Utility Callout: Employer Leave Notice Generator */}
        <section className="my-8 bg-gradient-to-r from-indigo-950 to-blue-900 text-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              Free Legal Utility Tool
            </span>
            <h3 className="text-lg font-black mt-0.5">
              Need Time Off Work to Vote in {state.name}?
            </h3>
            <p className="text-xs text-blue-100 mt-1 max-w-xl">
              Generate a ready-to-send HR/Manager notice citing <strong>{state.workLeaveLaw.statuteCitation}</strong> ({state.workLeaveLaw.hoursAllowed}) in 10 seconds.
            </p>
          </div>
          <Link
            href={`/tools/employer-voting-leave-notice?state=${state.slug}`}
            className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl shrink-0 transition-colors flex items-center gap-1.5"
          >
            <span>Generate {state.postalCode} Work Leave Notice</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Topic-Specific FAQ Accordion */}
        <section className="my-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>AEO Verified Q&A</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions: {state.name} {validSpoke.shortTitle}
          </h2>
          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AdPlacement format="in-article" slotId={`spoke-${state.postalCode}-${validSpoke.topicSlug}-mid`} />

        {/* Affiliate Toolkit */}
        <AffiliatePartners />

        {/* Lead Capture */}
        <LeadCapture />

        {/* Cross-State Comparison Links for This Exact Topic (Horizontal Silo Linking) */}
        <section className="my-8 pt-6 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            Compare {validSpoke.shortTitle} Across Other States:
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {ALL_STATES_LIST.slice(0, 24).map((st) => (
              <Link
                key={st.slug}
                href={`/states/${st.slug}/${validSpoke.topicSlug}`}
                className={`text-xs px-2.5 py-1 rounded border transition-colors ${
                  st.slug === state.slug
                    ? 'bg-blue-600 text-white border-blue-600 font-bold'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-700'
                }`}
              >
                {st.name} ({st.postalCode})
              </Link>
            ))}
            <Link
              href="/50-state-comparison-matrix"
              className="text-xs px-2.5 py-1 rounded bg-slate-900 text-amber-300 font-bold hover:bg-slate-800"
            >
              View All 50 States + D.C. Matrix →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
