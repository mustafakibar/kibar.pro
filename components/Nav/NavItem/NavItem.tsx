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
          'inline-flex items-center rounded-sm px-3 py-2 opacity-60 transition-all duration-300 ease-in-out hover:underline hover:opacity-95 lg:px-6 lg:py-3',
          {
            'pointer-events-none cursor-none select-none px-8 py-4 text-accent-foreground opacity-90 bg-blend-multiply shadow-sm shadow-primary sm:p-2':
              active,
          },
        )}>
        {active && <LandPlot className="mx-2" />}
        {text}
      </a>
    );
  },
);

NavItem.displayName = 'NavItem';

export { NavItem };
