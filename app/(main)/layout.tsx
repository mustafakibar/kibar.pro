import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import React from 'react';
import { textFont } from './fonts';
import './globals.css';
import ThemeProvider from './theme-providers';

// todo seo
export const metadata: Metadata = {
  title: 'Mustafa KiBAR',
  description: 'I am a software engineer based in Istanbul, Turkey.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'overflow-x-hidden bg-foreground text-foreground',
          textFont.className,
        )}>
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          <div className="kbr-main-background bg-background">
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="kbr-main-container container flex-grow">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
