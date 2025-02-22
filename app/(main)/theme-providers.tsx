'use client';

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    // TODO: Investigate light theme issues on phone devices
    <NextThemesProvider forcedTheme="dark" {...props}>
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
