import { Body } from '@/components/typography';
import type { Social } from '@/lib/data/socials.data';
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type SocialRowProps = {
  social: Social;
  className?: string;
};

const SocialRow = ({ social, className }: SocialRowProps) => {
  const Icon = social.icon;
  return (
    <Link
      href={social.href}
      target={social.external ? '_blank' : undefined}
      rel={social.external ? 'noopener noreferrer' : undefined}
      className={cn(
        'group border-rule duration-fast hover:border-gold/40 flex items-center justify-between gap-4 border-b px-3 py-4 transition-colors',
        className,
      )}>
      <span className="flex items-center gap-4">
        <Icon className="text-ink-muted duration-fast group-hover:text-gold size-5 transition-colors" />
        <Body className="text-ink">{social.label}</Body>
      </span>
      <ChevronUpRight
        data-hover-only-arrow
        className="text-ink-faint duration-normal group-hover:text-gold size-4 transition-all group-hover:translate-x-1 group-hover:-rotate-12"
      />
    </Link>
  );
};

export { SocialRow };
export type { SocialRowProps };
