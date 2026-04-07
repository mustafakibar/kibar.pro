import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export type ProfileImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
};

const ProfileImage: React.FC<ProfileImageProps> = ({
  className,
  width,
  height,
  src,
  alt,
  blurDataURL,
}) => {
  return (
    <Image
      className={cn(className)}
      src={src}
      alt={alt}
      width={width || 512}
      height={height || 512}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
    />
  );
};

export { ProfileImage };
