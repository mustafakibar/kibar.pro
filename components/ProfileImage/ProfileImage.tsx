import { ProfileImageProps } from '@/components/ProfileImage/type';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

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
      layout="responsive"
      width={width || 512}
      height={height || 512}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
    />
  );
};

export { ProfileImage };
