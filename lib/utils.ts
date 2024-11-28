import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const openInNewTab = (url: string) => {
  window.open(url, '_blank', 'noopener, noreferrer');
};

export { cn, openInNewTab };
