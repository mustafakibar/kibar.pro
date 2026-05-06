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
  caption = 'Mustafa KiBAR, 2026.',
  className,
}: PortraitBandProps) => (
  <figure
    className={cn(
      'relative mx-auto flex w-full max-w-[320px] flex-col gap-3 sm:max-w-[360px]',
      className,
    )}>
    <div className="relative isolate">
      <div
        aria-hidden
        className="bg-glow-gold pointer-events-none absolute -inset-8 -z-10 rounded-2xl opacity-40 blur-3xl"
      />
      <Portrait
        src={HERO_PROFILE_IMAGE_SRC}
        alt={HERO_PROFILE_IMAGE_ALT}
        blurDataURL={HERO_PROFILE_IMAGE_BLUR_DATA_URL}
        width={714}
        height={955}
        grayscale
        tint
        objectPosition="center 0%"
        sizes="360px"
        className="ring-rule aspect-[4/5] w-full rounded-lg ring-1 shadow-[0_30px_80px_-30px_oklch(0_0_0/0.6)]"
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
