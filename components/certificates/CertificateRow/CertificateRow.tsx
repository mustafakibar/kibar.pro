import { Caption, Mono, Subhead } from '@/components/typography';
import type { Certificate } from '@/lib/data/certificates.data';
import { ChevronUpRight } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type CertificateRowProps = {
  certificate: Certificate;
  className?: string;
};

const CertificateRow = ({ certificate, className }: CertificateRowProps) => {
  const isLinked = Boolean(certificate.imageUrl);
  const Wrapper: typeof Link | 'div' = isLinked ? Link : 'div';
  const wrapperProps = isLinked
    ? {
        href: certificate.imageUrl ?? '',
        target: '_blank' as const,
        rel: 'noopener noreferrer' as const,
      }
    : ({} as Record<string, never>);

  return (
    <Wrapper
      {...(wrapperProps as { href: string })}
      className={cn(
        'group border-rule duration-fast hover:bg-rule/40 flex items-center gap-4 border-b px-3 py-4 transition-colors',
        !isLinked && 'pointer-events-none',
        className,
      )}>
      <div className="flex min-w-0 flex-1 flex-col">
        <Subhead
          as="h3"
          className="text-ink duration-fast group-hover:text-gold truncate not-italic transition-colors">
          {certificate.title}
        </Subhead>
        <Caption className="truncate">{certificate.description}</Caption>
      </div>

      <Mono className="text-ink-faint">{certificate.date}</Mono>

      <ChevronUpRight
        data-hover-only-arrow
        className="text-ink-faint duration-normal group-hover:text-gold size-4 self-center opacity-0 transition-all ease-out group-hover:translate-x-1 group-hover:-rotate-12 group-hover:opacity-100"
      />
    </Wrapper>
  );
};

export { CertificateRow };
export type { CertificateRowProps };
