import { cn } from '@/lib/utils';
import Image from 'next/image';

type PortraitProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
  priority?: boolean;
  grayscale?: boolean;
  tint?: boolean;
  className?: string;
  sizes?: string;
  objectPosition?: string;
};

const Portrait = ({
  src,
  alt,
  width = 512,
  height = 512,
  blurDataURL,
  priority = false,
  grayscale = false,
  tint = false,
  className,
  sizes = '(min-width: 1024px) 384px, 256px',
  objectPosition,
}: PortraitProps) => (
  <div
    className={cn(
      'relative overflow-hidden',
      tint &&
        'after:bg-gold/10 after:absolute after:inset-0 after:mix-blend-overlay',
      className,
    )}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
      priority={priority}
      sizes={sizes}
      className={cn('h-full w-full object-cover', grayscale && 'grayscale')}
      style={objectPosition ? { objectPosition } : undefined}
    />
  </div>
);

export { Portrait };
export type { PortraitProps };
