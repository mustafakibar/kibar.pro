import { AmbientBackground } from '@/components/chrome/AmbientBackground';
import { CommandPaletteLazy } from '@/components/chrome/CommandPalette';
import { CursorTracker, CustomCursor } from '@/components/chrome/cursor';
import { InteractionGuards } from '@/components/chrome/InteractionGuards';
import { ScrollProgress } from '@/components/chrome/ScrollProgress';
import { ScrollToTop } from '@/components/chrome/ScrollToTop';
import { SideStamp } from '@/components/chrome/SideStamp';
import { SiteFooter } from '@/components/chrome/SiteFooter';
import { SiteHeader } from '@/components/chrome/SiteHeader';
import { SmoothScroll } from '@/components/chrome/SmoothScroll';
import env from '@/env';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import React from 'react';
import { bodyFont, displayFont, monoFont } from './fonts';
import './globals.css';

const SITE_NAME = 'Mustafa KiBAR';
const SITE_TITLE = 'Mustafa KiBAR — Senior Full-Stack Engineer';
const SITE_DESCRIPTION =
  'Senior full-stack engineer based in Istanbul. I design and ship reliable, performant products across the web stack — from API to UI.';

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s · Mustafa KiBAR',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: env.SITE_URL }],
  creator: SITE_NAME,
  keywords: [
    'Mustafa KiBAR',
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
        <a
          href="#main-content"
          className="focus:bg-gold focus:text-canvas sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded-md focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:tracking-widest focus:uppercase">
          Skip to main content
        </a>
        <SmoothScroll />
        <CursorTracker />
        <InteractionGuards />
        <AmbientBackground />
        <SideStamp />
        <div className="flex min-h-screen min-w-full flex-col">
          <ScrollProgress />
          <CommandPaletteLazy />
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <ScrollToTop />
        </div>
        <CustomCursor />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
