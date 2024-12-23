import {
  Chango,
  Inconsolata,
  Kelly_Slab,
  Lilita_One,
  Outfit,
} from 'next/font/google';

const brandFont = Chango({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const textFont = Inconsolata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const headingFont = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const heroFont = Kelly_Slab({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const titleFont = textFont;

const navFont = Outfit({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export { brandFont, headingFont, heroFont, navFont, textFont, titleFont };
