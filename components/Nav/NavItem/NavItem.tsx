import { navFont } from '@/app/(main)/fonts';
import { cn } from '@/lib/utils';
import React from 'react';
import { NavItemProps } from '.';

const NavItem: React.FC<NavItemProps> = (
  { text, href, className, active, onClick },
  ref,
) => {
  return (
    <div className="relative inline-flex items-center transition-all duration-300 ease-in-out hover:rounded-xl hover:bg-foreground/10 md:px-1">
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={cn(
          className,
          navFont.className,
          'opacity-40 hover:opacity-95',
          {
            'pointer-events-none scale-110 cursor-none select-none opacity-90 duration-75 ease-linear':
              active,
          },
        )}>
        {text}
        {active && (
          <div className="absolute bottom-3 left-0 hidden h-[3%] w-full sm:inline-flex">
            <div className="mx-auto w-1/4 rounded-full bg-foreground/80"></div>
          </div>
        )}
      </a>
    </div>
  );
};

export { NavItem };
