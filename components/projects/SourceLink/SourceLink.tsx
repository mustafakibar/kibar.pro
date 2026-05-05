'use client';

import { ExternalLink, Github, Gitlab } from '@/lib/icons';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SourceLinkProps = {
  url: string;
  label?: string;
  className?: string;
};

const detect = (url: string): { icon: ReactNode; label: string } => {
  if (url.includes('github'))
    return { icon: <Github className="size-4" />, label: 'View on GitHub' };
  if (url.includes('gitlab'))
    return { icon: <Gitlab className="size-4" />, label: 'View on GitLab' };
  return { icon: <ExternalLink className="size-4" />, label: 'View source' };
};

const SourceLink = ({ url, label, className }: SourceLinkProps) => {
  const detected = detect(url);
  const finalLabel = label ?? detected.label;
  return (
    <button
      type="button"
      aria-label={finalLabel}
      title={finalLabel}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(url, '_blank', 'noopener,noreferrer');
      }}
      className={cn(
        'text-ink-muted duration-fast hover:text-gold focus-visible:ring-gold/60 inline-flex items-center justify-center rounded-sm p-1 transition-colors ease-out focus-visible:ring-2 focus-visible:outline-none',
        className,
      )}>
      {detected.icon}
    </button>
  );
};

export { SourceLink };
export type { SourceLinkProps };
