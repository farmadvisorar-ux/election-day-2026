import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { JsonLd } from '../components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://electionguide2026.org'),
  title: {
    default: 'Election Day 2026: Official Date, Deadlines, Countdown & Voter Guide',
    template: '%s | ElectionDay2026.org',
  },
  description:
    'Comprehensive non-partisan guide to Election Day 2026 (Tuesday, November 3, 2026). State voter registration deadlines, early voting calendars, voter ID laws, holiday status, and live countdown.',
  keywords: [
    'election day 2026',
    'when is election day 2026',
    'is election day 2026 a federal holiday',
    '2026 midterm elections',
    'voter registration deadlines 2026',
    'early voting 2026 dates',
    '2026 senate elections map',
    'are banks open on election day 2026',
    'are schools closed on election day 2026',
  ],
  authors: [{ name: 'ElectionDay2026 Civic Research Team' }],
  creator: 'ElectionDay2026.org',
  publisher: 'ElectionDay2026 Civic Educational Initiative',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://electionguide2026.org',
    siteName: 'ElectionDay2026.org',
    title: 'Election Day 2026: Date, Deadlines & Voting Guide',
    description:
      'Complete non-partisan voter guide for Tuesday, November 3, 2026. Deadlines, polling hours, voter ID laws, and 50-state resources.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Election Day 2026: Date, Deadlines & Voter Guide',
    description:
      'Official date, voting rules, holiday status, and state-by-state guide for the 2026 U.S. Midterms.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'CivicStructure',
    name: 'ElectionDay2026.org Civic Educational Initiative',
    url: 'https://electionguide2026.org',
    description:
      'An independent, non-partisan educational portal providing accurate statutory election dates, voting regulations, and civic information for the 2026 U.S. Midterm Elections.',
    sameAs: [
      'https://www.vote.gov',
      'https://www.eac.gov',
      'https://www.fec.gov',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Election Day 2026 Guide',
    url: 'https://electionguide2026.org',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://electionguide2026.org/states/{search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://electionguide2026.org" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
