import { cn } from '@/lib/utils';
import React from 'react';
import { FooterHeartIcon } from './FooterHeartIcon';

export type FooterProps = {
  className?: string;
};

export type FooterHeartIconProps = {
  className?: string;
  size?: number;
  color: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'text-foreground/70 w-full max-w-full overflow-hidden py-10 text-sm',
        className,
      )}>
      <div className="flex items-center justify-center gap-2 p-3">
        <span>Crafted with</span>
        <FooterHeartIcon className="ml-0.5" color="text-red-700" />
        <span>by Mustafa Kibar · © {year}</span>
      </div>
    </footer>
  );
};

export { Footer };
