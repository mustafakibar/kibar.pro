import { Tilt } from '@/components/motion/Tilt';
import { Caption, Subhead } from '@/components/typography';
import type { Certificate } from '@/lib/data/certificates.data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type CertificateCardProps = {
  certificate: Certificate;
  className?: string;
};

const CertificateCard = ({ certificate, className }: CertificateCardProps) => {
  const href = certificate.imageUrl ?? '';
  const isLinked = Boolean(href);
  const Wrapper: typeof Link | 'div' = isLinked ? Link : 'div';
  const wrapperProps = isLinked
    ? { href, target: '_blank', rel: 'noopener noreferrer' as const }
    : ({} as Record<string, never>);

  return (
    <Tilt
      max={5}
      glare={isLinked}
      className={cn('relative', !isLinked && 'pointer-events-none', className)}>
      <Wrapper
        {...(wrapperProps as { href: string })}
        className={cn(
          'group border-rule bg-elevated duration-normal relative block overflow-hidden rounded-lg border transition-all ease-out',
          isLinked &&
            'hover:border-gold/40 hover:shadow-[0_12px_36px_-12px_oklch(0.05_0_0/0.7)]',
        )}>
        {certificate.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              className="duration-slow h-full w-full scale-125 object-cover object-left-top grayscale transition-all ease-out group-hover:-translate-y-1 group-hover:scale-100 group-hover:grayscale-0"
              src={certificate.imageUrl}
              alt={certificate.title}
              width={512}
              height={384}
              sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
              placeholder={certificate.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={certificate.blurDataURL}
            />
          </div>
        )}
        <header className="border-rule bg-canvas/90 absolute bottom-0 left-0 flex flex-col gap-0.5 rounded-tr-lg border-t border-r px-3 py-1.5 shadow-md backdrop-blur-sm">
          <Caption className="text-xs">
            {certificate.description} · {certificate.date}
          </Caption>
          <Subhead className="text-ink duration-normal text-base not-italic transition-transform ease-out group-hover:-skew-y-1">
            {certificate.title}
          </Subhead>
        </header>
      </Wrapper>
    </Tilt>
  );
};

export { CertificateCard };
export type { CertificateCardProps };
