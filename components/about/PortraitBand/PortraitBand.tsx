import { Portrait } from '@/components/media/Portrait';
import { Caption } from '@/components/typography';
import {
  HERO_PROFILE_IMAGE_ALT,
  HERO_PROFILE_IMAGE_BLUR_DATA_URL,
  HERO_PROFILE_IMAGE_SRC,
} from '@/lib/constants/image';
import { cn } from '@/lib/utils';

type PortraitBandProps = {
  caption?: string;
  className?: string;
};

const PortraitBand = ({
  caption = 'Mustafa Kibar, Istanbul, 2026.',
  className,
}: PortraitBandProps) => (
  <figure className={cn('relative flex flex-col gap-3', className)}>
    <div className="relative isolate">
      <div
        aria-hidden
        className="bg-glow-gold pointer-events-none absolute -inset-8 -z-10 rounded-2xl opacity-40 blur-3xl"
      />
      <Portrait
        src={HERO_PROFILE_IMAGE_SRC}
        alt={HERO_PROFILE_IMAGE_ALT}
        blurDataURL={HERO_PROFILE_IMAGE_BLUR_DATA_URL}
        width={1600}
        height={900}
        grayscale
        tint
        objectPosition="center 12%"
        sizes="(min-width: 1024px) 100vw, 100vw"
        className="ring-rule aspect-[16/9] w-full rounded-lg ring-1 shadow-[0_30px_80px_-30px_oklch(0_0_0/0.6)]"
      />
      <div
        aria-hidden
        className="from-canvas via-canvas/40 pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-lg bg-gradient-to-t to-transparent"
      />
    </div>
    <figcaption>
      <Caption className="text-ink-muted italic">{caption}</Caption>
    </figcaption>
  </figure>
);

export { PortraitBand };
export type { PortraitBandProps };
