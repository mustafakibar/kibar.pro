import { Body, Mono } from '@/components/typography';
import type { Certificate } from '@/lib/data/certificates.data';
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type CredentialsListProps = {
  certificates: readonly Certificate[];
  className?: string;
};

const CredentialsList = ({ certificates, className }: CredentialsListProps) => (
  <ol
    className={cn('divide-rule flex flex-col divide-y', className)}
    role="list">
    {certificates.map((c) => {
      const href = c.imageUrl ?? '#';
      const isLinked = Boolean(c.imageUrl);
      return (
        <li key={c.title}>
          <Link
            href={href}
            target={isLinked ? '_blank' : undefined}
            rel={isLinked ? 'noopener noreferrer' : undefined}
            className={cn(
              'group hover:bg-rule/40 duration-fast relative flex items-baseline gap-4 px-3 py-4 transition-colors ease-out',
              !isLinked && 'pointer-events-none',
            )}>
            <span className="duration-normal flex min-w-0 flex-1 flex-col transition-transform ease-out group-hover:translate-x-1">
              <Body
                title={c.title}
                data-tooltip={c.title}
                className="text-ink duration-fast group-hover:text-gold truncate font-medium transition-colors">
                {c.title}
              </Body>
              <Body
                size="sm"
                muted
                title={c.description}
                data-tooltip={c.description}
                className="mt-0.5 truncate">
                {c.description}
              </Body>
            </span>
            <Mono className="text-ink-faint shrink-0">{c.date}</Mono>
            <ChevronUpRight
              data-hover-only-arrow
              className="text-ink-faint duration-normal group-hover:text-gold size-4 self-center opacity-0 transition-all ease-out group-hover:translate-x-1 group-hover:-rotate-12 group-hover:opacity-100"
            />
          </Link>
        </li>
      );
    })}
  </ol>
);

export { CredentialsList };
export type { CredentialsListProps };
