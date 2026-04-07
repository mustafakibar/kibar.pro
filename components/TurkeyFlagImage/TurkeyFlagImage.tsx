import {
  TURKEY_FLAG_IMAGE_ALT,
  TURKEY_FLAG_IMAGE_BLUR_DATA_URL,
  TURKEY_FLAG_IMAGE_SRC,
} from '@/lib/constants/image';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export type TurkeyFlagImageProps = {
  className?: string;
  width?: number;
  height?: number;
};

const TurkeyFlagImage: React.FC<TurkeyFlagImageProps> = ({
  className,
  width = 48,
  height = 48,
}) => {
  return (
    <Image
      className={cn('inline-flex', className)}
      src={TURKEY_FLAG_IMAGE_SRC}
      alt={TURKEY_FLAG_IMAGE_ALT}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={TURKEY_FLAG_IMAGE_BLUR_DATA_URL}
    />
  );
};

export { TurkeyFlagImage };
