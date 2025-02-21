import { navFont } from '@/app/(main)/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { NavItemProps } from '.';

const NavItem: React.FC<NavItemProps> = ({
  className,
  text,
  href,
  blank,
  active,
  onClick,
  ...props
}) => {
  return (
    <Link
      rel="noopener noreferrer"
      target={blank ? '_blank' : undefined}
      href={href}
      className={cn({
        'pointer-events-none cursor-none select-none': active,
      })}>
      <div
        onClick={onClick}
        className={cn(
          'relative flex px-1 transition-all duration-300 ease-in-out hover:rounded-xl',
          className,
          {
            'hover:bg-foreground/10': !active,
          },
        )}
        {...props}>
        <span
          className={cn(
            navFont.className,
            'p-2',
            {
              'text-accent-foreground opacity-90 duration-75 ease-linear':
                active,
            },
            {
              'opacity-40 hover:opacity-95': !active,
            },
          )}>
          {text}
          {active && (
            <div className="absolute bottom-1.5 left-0 hidden h-[3%] w-full md:inline-flex">
              <div className="bg-accent-foreground/80 mx-auto w-1/12 rounded-full" />
            </div>
          )}
        </span>
      </div>
    </Link>
  );
};

export { NavItem };
