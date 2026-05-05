import { CommandPaletteLazy } from '@/components/chrome/CommandPalette';
import { ScrollProgress } from '@/components/chrome/ScrollProgress';
import { SiteFooter } from '@/components/chrome/SiteFooter';
import { SiteHeader } from '@/components/chrome/SiteHeader';
import env from '@/env';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import React from 'react';
import { bodyFont, displayFont, monoFont } from './fonts';
import './globals.css';

const SITE_NAME = 'Mustafa Kibar';
const SITE_TITLE = 'Mustafa Kibar — Senior Full-Stack Engineer';
const SITE_DESCRIPTION =
  'Senior full-stack engineer based in Istanbul. I design and ship reliable, performant products across the web stack — from API to UI.';

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s · Mustafa Kibar',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: env.SITE_URL }],
  creator: SITE_NAME,
  keywords: [
    'Mustafa Kibar',
    'Full-Stack Engineer',
    'Senior Software Engineer',
    'TypeScript',
    'Next.js',
    'React',
    'Node.js',
    'Istanbul',
    'Turkey',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${env.SITE_URL}/#person`,
      name: SITE_NAME,
      url: env.SITE_URL,
      jobTitle: 'Senior Full-Stack Engineer',
      description: SITE_DESCRIPTION,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Istanbul',
        addressCountry: 'TR',
      },
      sameAs: [
        'https://github.com/mustafakibar',
        'https://www.linkedin.com/in/mustafakibar',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${env.SITE_URL}/#website`,
      url: env.SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${env.SITE_URL}/#person` },
      inLanguage: 'en',
    },
  ],
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const nonce = (await headers()).get('x-nonce') ?? undefined;

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          'bg-canvas text-ink font-body min-h-screen min-w-full overflow-x-hidden antialiased',
          bodyFont.variable,
          displayFont.variable,
          monoFont.variable,
        )}>
        <div className="flex min-h-screen min-w-full flex-col">
          <ScrollProgress />
          <CommandPaletteLazy />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
