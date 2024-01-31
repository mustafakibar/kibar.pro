import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from './theme-providers';

export const metadata: Metadata = {
  title: 'Mustafa Kibar',
  description: 'I am a software engineer based in Istanbul, Turkey.',
};

const inter = Inter({ subsets: ['latin'] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'overflow-auto bg-foreground')}>
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          <div className="kbr-main-background bg-background">
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="kbr-main-container container  flex-grow">
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
