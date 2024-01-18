'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider enableSystem defaultTheme='system' attribute='class'>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
