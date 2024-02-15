import { navFont } from '@/app/fonts';
import { cn } from '@/lib/utils';
import { LandPlot } from 'lucide-react';
import React from 'react';
import { NavItemProps } from '.';

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ text, href, className, active, onClick }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={cn(
          className,
          navFont.className,
          'inline-flex items-center rounded-sm px-3 py-2 opacity-40 transition-all duration-300 ease-in-out hover:rounded-xl hover:bg-foreground/10 hover:underline hover:opacity-95 lg:px-6 lg:py-3',
          {
            'pointer-events-none cursor-none select-none px-8 py-4 font-bold text-accent-foreground/80 opacity-90 sm:p-2':
              active,
          },
        )}>
        {active && <LandPlot className="mr-1" size={24} />}
        {text}
      </a>
    );
  },
);

NavItem.displayName = 'NavItem';

export { NavItem };
