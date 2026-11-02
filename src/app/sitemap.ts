import { MetadataRoute } from 'next';
import { STATES_DATA, TOPIC_SPOKES } from '../data/states';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://electionguide2026.org';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
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

  // 51 State & DC Hub Pages
  const stateHubRoutes: MetadataRoute.Sitemap = Object.keys(STATES_DATA).map((slug) => ({
    url: `${baseUrl}/states/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
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

  return [...staticRoutes, ...stateHubRoutes, ...stateTopicSpokeRoutes];
}
