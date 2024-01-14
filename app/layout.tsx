import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/Footer';

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
    <html lang='en'>
      <body className={cn(inter.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
