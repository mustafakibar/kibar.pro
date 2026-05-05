import { Body, Mono, Subhead } from '@/components/typography';
import {
  CERTIFICATES_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
  USES_PATH,
} from '@/lib/constants/paths';
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Item = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
};

const ITEMS: readonly Item[] = [
  {
    href: PROJECTS_PATH,
    eyebrow: 'i',
    title: 'Projects',
    description: 'Selected work and open-source.',
  },
  {
    href: CERTIFICATES_PATH,
    eyebrow: 'ii',
    title: 'Certificates',
    description: 'Credentials earned along the way.',
  },
  {
    href: NOTES_PATH,
    eyebrow: 'iii',
    title: 'Notes',
    description: 'Snippets, observations, gists.',
  },
  {
    href: USES_PATH,
    eyebrow: 'iv',
    title: 'Uses',
    description: 'The desk and the tools.',
  },
];

type AboutNavProps = {
  className?: string;
};

const AboutNav = ({ className }: AboutNavProps) => (
  <nav
    aria-label="More about kibar.pro"
    className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4', className)}>
    {ITEMS.map((item, idx) => (
      <Link
        key={item.href}
        href={item.href}
        className={cn(
          'group border-rule duration-fast hover:bg-rule/30 relative flex flex-col gap-2 p-6 transition-colors',
          'border-t',
          idx > 0 && 'sm:border-l',
          idx === 2 && 'sm:border-l-0 lg:border-l',
          'lg:border-l',
          idx === 0 && 'lg:border-l-0',
        )}>
        <Mono className="font-display text-gold text-base italic">
          {item.eyebrow}
        </Mono>
        <Subhead
          as="h3"
          className="text-ink duration-fast group-hover:text-gold not-italic transition-colors">
          {item.title}
        </Subhead>
        <Body size="sm" muted>
          {item.description}
        </Body>
        <ChevronUpRight
          aria-hidden
          className="text-ink-faint duration-normal group-hover:text-gold absolute top-6 right-6 size-4 opacity-0 transition-all ease-out group-hover:translate-x-1 group-hover:-rotate-12 group-hover:opacity-100"
          data-hover-only-arrow
        />
      </Link>
    ))}
  </nav>
);

export { AboutNav };
export type { AboutNavProps };
