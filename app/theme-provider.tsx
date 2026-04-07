'use client';

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes';

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  // Light theme is intentionally disabled — it has rendering issues on some
  // mobile devices and the site is designed dark-first.
  return (
    <NextThemesProvider forcedTheme="dark" {...props}>
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
