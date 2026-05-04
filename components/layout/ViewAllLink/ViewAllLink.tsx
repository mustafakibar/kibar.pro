import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

type ViewAllLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const ViewAllLink = ({ href, children, className }: ViewAllLinkProps) => (
  <Link
    href={href}
    className={cn(
      'group text-ink-muted duration-fast hover:text-gold inline-flex items-center gap-1 text-sm underline-offset-4 transition-colors ease-out',
      className,
    )}>
    <span>{children}</span>
    <ChevronUpRight
      className="duration-normal size-4 transition-transform ease-out group-hover:translate-x-1 group-hover:-rotate-12"
      strokeWidth={2}
    />
  </Link>
);

export { ViewAllLink };
export type { ViewAllLinkProps };
