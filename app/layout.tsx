import { PlausibleAnalytics } from '@/components/Analytics';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { TopProgressBar } from '@/components/TopProgressBar';
import env from '@/env';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import React from 'react';
import { textFont } from './fonts';
import './globals.css';
import ThemeProvider from './theme-provider';

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
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: '@mustafakibar',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'light dark',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
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
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const nonce = (await headers()).get('x-nonce') ?? undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <PlausibleAnalytics nonce={nonce} />
      </head>
      <body
        className={cn(
          '[&::-webkit-scrollbar-thumb]:bg-secondary [&::-webkit-scrollbar-thumb]:hover:bg-primary/80 bg-background text-foreground min-h-screen min-w-screen overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-s-full',
          textFont.className,
        )}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <div className="flex min-h-screen min-w-screen flex-col">
            <TopProgressBar />
            <Header />
            <div className="container">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
