import { Portrait } from '@/components/media/Portrait';
import { Caption } from '@/components/typography';
import {
  ABOUT_PROFILE_IMAGE_ALT,
  ABOUT_PROFILE_IMAGE_BLUR_DATA_URL,
  ABOUT_PROFILE_IMAGE_SRC,
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
  <figure className={cn('flex flex-col gap-3', className)}>
    <Portrait
      src={ABOUT_PROFILE_IMAGE_SRC}
      alt={ABOUT_PROFILE_IMAGE_ALT}
      blurDataURL={ABOUT_PROFILE_IMAGE_BLUR_DATA_URL}
      width={1600}
      height={1066}
      grayscale
      tint
      sizes="(min-width: 1024px) 100vw, 100vw"
      className="ring-rule aspect-[3/2] w-full rounded-lg ring-1"
    />
    <figcaption>
      <Caption className="text-ink-muted italic">{caption}</Caption>
    </figcaption>
  </figure>
);

export { PortraitBand };
export type { PortraitBandProps };
