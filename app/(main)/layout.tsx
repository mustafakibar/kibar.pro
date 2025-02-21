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
    <html lang="en" suppressHydrationWarning>
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
