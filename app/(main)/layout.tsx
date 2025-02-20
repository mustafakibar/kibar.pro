import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { TopProgressBar } from '@/components/TopProgressBar';
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
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground [&::-webkit-scrollbar-thumb]:rounded-s-full [&::-webkit-scrollbar-thumb]:bg-secondary [&::-webkit-scrollbar-thumb]:hover:bg-primary/80 [&::-webkit-scrollbar]:w-1.5',
          textFont.className,
        )}>
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          <TopProgressBar />
          <Header />
          <div className="container grow">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
