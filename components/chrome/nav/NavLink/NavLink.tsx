'use client';

import { ChevronUpRight } from '@/lib/icons';
import { duration, easing } from '@/lib/tokens';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

const NavLink = ({
  href,
  label,
  active,
  external,
  className,
  onClick,
}: NavLinkProps) => (
  <Link
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    onClick={onClick}
    aria-current={active ? 'page' : undefined}
    className={cn(
      'group font-body duration-fast relative inline-flex items-center gap-1 px-2 py-1 text-sm transition-colors ease-out',
      active ? 'text-ink pointer-events-none' : 'text-ink-muted hover:text-ink',
      className,
    )}>
    <span className="relative">
      {label}
      {active ? (
        <motion.span
          aria-hidden
          className="bg-gold absolute inset-x-0 -bottom-1 h-px origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: 1,
            opacity: [0, 1, 0.7, 1],
          }}
          transition={{
            scaleX: { duration: duration.slow, ease: easing.out },
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: easing.inOut,
              times: [0, 0.15, 0.6, 1],
              delay: 0.4,
            },
          }}
        />
      ) : (
        <span
          aria-hidden
          className="bg-gold duration-normal absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 transition-transform ease-out group-hover:scale-x-100"
        />
      )}
    </span>
    {external && (
      <ChevronUpRight
        aria-hidden
        data-hover-only-arrow
        className="duration-normal size-3.5 -translate-x-1 opacity-0 transition-all ease-out group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:translate-x-0 motion-reduce:opacity-100"
      />
    )}
  </Link>
);

export { NavLink };
export type { NavLinkProps };
