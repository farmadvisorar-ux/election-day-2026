import { MetadataRoute } from 'next';
import { STATES_DATA, TOPIC_SPOKES } from '../data/states';
import { COUNTIES_BY_STATE } from '../data/counties';
import { ALL_DISTRICTS_LIST } from '../data/districts';
import { COMPREHENSIVE_QUERY_MATRIX } from '../data/queries';
import { CITIES_2026_LIST } from '../data/cities2026';
import { SITE_URL } from '../lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sample-ballot-2026`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.99,
    },
    {
      url: `${baseUrl}/poll-closing-times-2026`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/ballot-problem-solver`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/majority-calculator-2026`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/cities`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/ballot-measures-2026`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/first-time-voter-guide-2026`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.96,
    },
    {
      url: `${baseUrl}/voter-id-validator-2026`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/find-my-district`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/widgets`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/advertise`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/candidate-portal`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/line-rights-2026`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/military-overseas-voting-2026`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.97,
    },
    {
      url: `${baseUrl}/early-voting-calendar-2026`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/ballot-drop-boxes-2026`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.97,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ask`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/my-voting-plan`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/news-and-pulse-2026`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/counties`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/districts`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/primary-calendar-2026`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/voter-eligibility-guide`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/50-state-comparison-matrix`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/employer-voting-leave-notice`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/is-it-a-holiday`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/countdown`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/voter-questions`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-to-vote-2026`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/dia-de-las-elecciones-2026`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/races/senate-2026`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/races/governor-2026`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/editorial-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // 46 Dedicated Long-Tail, Shorthand & Ungrammatical Voter Question Pages
  const questionRoutes: MetadataRoute.Sitemap = COMPREHENSIVE_QUERY_MATRIX.map((q) => ({
    url: `${baseUrl}/voter-questions/${q.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 51 State & DC Hub Pages (English)
  const stateHubRoutes: MetadataRoute.Sitemap = Object.keys(STATES_DATA).map((slug) => ({
    url: `${baseUrl}/states/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 51 State & DC Hub Pages (Spanish /es/estados/[state])
  const spanishStateRoutes: MetadataRoute.Sitemap = Object.keys(STATES_DATA).map((slug) => ({
    url: `${baseUrl}/es/estados/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.88,
  }));

  // 306 State x Topic Spoke Pages (51 Jurisdictions x 6 High-Intent Topics)
  const stateTopicSpokeRoutes: MetadataRoute.Sitemap = [];
  for (const slug of Object.keys(STATES_DATA)) {
    for (const spoke of TOPIC_SPOKES) {
      stateTopicSpokeRoutes.push({
        url: `${baseUrl}/states/${slug}/${spoke.topicSlug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    }
  }

  // 153 Major U.S. Cities Election & Split-County Hub Pages
  const cityRoutes: MetadataRoute.Sitemap = CITIES_2026_LIST.map((city) => ({
    url: `${baseUrl}/cities/${city.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 436 Congressional District Pages (435 U.S. House Seats + DC-AL)
  const districtRoutes: MetadataRoute.Sitemap = ALL_DISTRICTS_LIST.map((d) => ({
    url: `${baseUrl}/districts/${d.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 3,143 County-by-County Election Jurisdiction Pages (All 50 States + D.C.)
  const countyRoutes: MetadataRoute.Sitemap = [];
  for (const [stateSlug, counties] of Object.entries(COUNTIES_BY_STATE)) {
    for (const county of counties) {
      countyRoutes.push({
        url: `${baseUrl}/states/${stateSlug}/counties/${county.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return [
    ...staticRoutes,
    ...questionRoutes,
    ...stateHubRoutes,
    ...spanishStateRoutes,
    ...stateTopicSpokeRoutes,
    ...cityRoutes,
    ...districtRoutes,
    ...countyRoutes,
  ];
}
