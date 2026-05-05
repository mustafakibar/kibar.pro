import { Caption } from '@/components/typography';
import {
  ABOUT_DESK_IMAGE_ALT,
  ABOUT_DESK_IMAGE_SRC,
} from '@/lib/constants/image';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type DeskBandProps = {
  caption?: string;
  className?: string;
};

const DeskBand = ({
  caption = 'The desk, 2026.',
  className,
}: DeskBandProps) => (
  <figure className={cn('relative isolate flex flex-col gap-3', className)}>
    <div className="ring-rule relative aspect-[3/2] w-full overflow-hidden rounded-lg ring-1">
      <Image
        src={ABOUT_DESK_IMAGE_SRC}
        alt={ABOUT_DESK_IMAGE_ALT}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="from-canvas/80 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"
      />
      <div
        aria-hidden
        className="bg-glow-gold pointer-events-none absolute inset-0 mix-blend-overlay"
      />
    </div>
    <figcaption>
      <Caption className="italic">{caption}</Caption>
    </figcaption>
  </figure>
);

export { DeskBand };
export type { DeskBandProps };
