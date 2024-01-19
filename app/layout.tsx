import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/Footer';
import Providers from './providers';

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
    <html lang='en' suppressHydrationWarning>
      <body className={cn(inter.className, 'overflow-hidden bg-foreground')}>
        <Providers>
          <div className='kbr-main-background bg-background'>
            <div className='kbr-main-container md:container flex flex-col min-h-screen'>
              <Header />
              <div className='flex-grow'>{children}</div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
