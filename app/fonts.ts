import { Fraunces, Geist, Geist_Mono } from 'next/font/google';

const displayFont = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz', 'SOFT'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const bodyFont = Geist({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
});

const monoFont = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
});

export { bodyFont, displayFont, monoFont };
