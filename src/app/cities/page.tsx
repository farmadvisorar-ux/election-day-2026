import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CITIES_2026_LIST } from '../../data/cities2026';
import { CityElectionSearch } from '../../components/CityElectionSearch';
import { SITE_URL } from '../../lib/siteConfig';
import { Building2, AlertTriangle, Bus, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: `Top ${CITIES_2026_LIST.length} U.S. Cities Election Day 2026 Voting Guide, Split-County Resolver & Poll Hours`,
  description: `Where do I vote in my city on Tuesday, November 3, 2026? Instant city-to-county election board resolver, early voting sites, split-county rules (NYC 5 boroughs, Houston, Chicago, Atlanta, Dallas), and free Election Day public transit across ${CITIES_2026_LIST.length} major U.S. cities.`,
  keywords: [
    'where to vote in my city 2026',
    'what county is my city in for voting',
    'new york city election day 2026',
    'chicago early voting 2026',
    'houston voting locations 2026',
    'los angeles vote centers 2026',
    'atlanta fulton vs dekalb county voting',
    'dallas early voting 2026',
    'phoenix voting centers 2026',
    'free transit on election day 2026',
  ],
  alternates: {
    canonical: `${SITE_URL}/cities`,
  },
};

export default function CitiesDirectoryPage() {
  const splitCities = CITIES_2026_LIST.filter((c) => c.isSplitCounty);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: `Top ${CITIES_2026_LIST.length} U.S. Cities 2026 Midterm Election & Split-County Voting Directory`,
        url: `${SITE_URL}/cities`,
        description: `City-by-city 2026 general election directory mapping ${CITIES_2026_LIST.length} major American cities to their administering county election boards, congressional districts, Vote Center rules, and Election Day public transit policies.`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why does my city span multiple counties for voting on Election Day 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In the United States, general elections are administered at the county level (or by independent municipal election boards in cities like Chicago, St. Louis, Baltimore, Virginia independent cities, and New England towns). Major cities like New York City (5 counties/boroughs), Houston (Harris, Fort Bend, Montgomery), Atlanta (Fulton and DeKalb), Dallas (5 counties), Austin (3 counties), and Kansas City (4 counties) cross county lines. You must vote at a polling place or Vote Center operated by the specific county where your residential street address is registered.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do public transit agencies offer free rides on Election Day 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Dozens of major municipal transit agencies—including LA Metro, Houston METRO, DART (Dallas), CapMetro (Austin), VIA (San Antonio), IndyGo (Indianapolis), COTA (Columbus), RTC Southern Nevada (Las Vegas), and RideKC—provide 100% fare-free bus and rail rides on Election Day (Tuesday, November 3, 2026) or operate zero-fare year-round (such as ABQ RIDE in Albuquerque, Sun Tran in Tucson, GRTC in Richmond, and GoDurham).',
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

      {/* Hero Section */}
      <section className="bg-slate-950 text-white pt-12 pb-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-extrabold uppercase tracking-wider mb-5">
            <Building2 className="w-3.5 h-3.5" />
            <span>{CITIES_2026_LIST.length} Major U.S. Municipal Voting Hubs • Split-County Resolver</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Where to Vote in Your City:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300">
              2026 U.S. Cities Election Directory
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed mb-8">
            Voters search by <strong>city name</strong>, not county FIPS code—and in cities like{' '}
            <strong className="text-white">New York City (5 boroughs)</strong>,{' '}
            <strong className="text-white">Houston (3 counties)</strong>,{' '}
            <strong className="text-white">Chicago (City BOE vs. Suburban Cook)</strong>,{' '}
            <strong className="text-white">Atlanta (Fulton vs. DeKalb)</strong>, and{' '}
            <strong className="text-white">Dallas (5 counties)</strong>, crossing a street can change which county election board runs your ballot. Find your city’s exact county election office, Vote Center rules, and free Election Day transit below.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
              <div className="text-xs text-slate-400 font-semibold uppercase">Major Cities Indexed</div>
              <div className="text-2xl font-black text-white mt-0.5">{CITIES_2026_LIST.length} Cities</div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">All 50 States + D.C.</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
              <div className="text-xs text-slate-400 font-semibold uppercase">Multi-County Cities</div>
              <div className="text-2xl font-black text-amber-400 mt-0.5">{splitCities.length} Split Hubs</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Boundary Alerts Included</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
              <div className="text-xs text-slate-400 font-semibold uppercase">Election Day</div>
              <div className="text-2xl font-black text-blue-400 mt-0.5">Nov 3, 2026</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Local Poll Hours Mapped</div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
              <div className="text-xs text-slate-400 font-semibold uppercase">Transit To Polls</div>
              <div className="text-2xl font-black text-emerald-400 mt-0.5">100% Mapped</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Free Ride Policies Listed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-12">
        <CityElectionSearch />

        {/* Split-County Explainer Banner */}
        <section className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-amber-900 font-black text-lg mb-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <h2>Watch Out for Split-County City Boundaries on Election Day 2026</h2>
          </div>
          <p className="text-sm text-amber-950 leading-relaxed mb-5">
            Showing up at a polling place in the wrong county is one of the top reasons provisional ballots get rejected. Even if your mailing address says <strong>&quot;Houston, TX&quot;</strong>, <strong>&quot;Atlanta, GA&quot;</strong>, <strong>&quot;Dallas, TX&quot;</strong>, <strong>&quot;Austin, TX&quot;</strong>, or <strong>&quot;Kansas City, MO&quot;</strong>, your ballot is strictly controlled by the <strong>county where your property tax parcel is located</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {splitCities.slice(0, 9).map((sc) => (
              <Link
                key={sc.slug}
                href={`/cities/${sc.slug}`}
                className="bg-white rounded-2xl p-4 border border-amber-200 hover:border-amber-500 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-black text-slate-900 text-sm">
                    {sc.cityName}, {sc.stateAbbr}
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                    {sc.counties.length} Counties
                  </span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">{sc.splitCountyNote}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
