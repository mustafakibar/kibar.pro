import { Lilita_One, Outfit, Ubuntu, Yesteryear } from 'next/font/google';

const brandFont = Yesteryear({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const titleFont = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const textFont = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const navFont = Outfit({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export { brandFont, navFont, textFont, titleFont };
