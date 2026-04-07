import { heroFont } from '@/app/fonts';
import { ProfileImage } from '@/components/ProfileImage';
import {
  HERO_PROFILE_IMAGE_ALT,
  HERO_PROFILE_IMAGE_BLUR_DATA_URL,
  HERO_PROFILE_IMAGE_SRC,
} from '@/lib/constants/image';

import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import React from 'react';
import { Contact } from '../Contact';
import { Card } from '../ui/card';
import { HeroWithLoveSection } from './HeroWithLoveSection';

export type HeroProps = {
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <motion.div
      className={cn(
        'flex flex-col items-center justify-around gap-6 md:my-16 md:flex-row md:gap-10 lg:justify-between',
        className,
      )}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}>
      <div className="flex flex-col justify-center gap-4 antialiased max-md:items-center">
        <h1
          className={cn(
            'flex gap-2 text-3xl text-nowrap md:text-5xl lg:pt-10 lg:text-7xl',
            heroFont.className,
          )}>
          <span className="text-primary opacity-75">Mustafa</span>
          <span className="text-secondary ml-1 font-extrabold opacity-95">
            K<span className="text-primary mx-1 inline-flex scale-75">i</span>
            BAR
          </span>
        </h1>

        <div className="flex flex-col gap-2 text-xl max-md:text-center lg:ml-1.5">
          <div className="flex flex-col max-md:items-center md:max-w-4/5 lg:max-w-2/3">
            <p className="text-foreground/85 text-pretty">
              Senior full-stack engineer based in Istanbul. I design and ship
              reliable, performant products end-to-end — clean architecture,
              strong developer experience.
            </p>

            <Card className="bg-accent/5 my-4 -ml-1 max-h-8 min-h-8 w-fit min-w-16 object-none px-3 py-0.5">
              <HeroWithLoveSection className="text-primary/75 font-black" />
            </Card>
          </div>

          <Card className="bg-primary/5 py-2 md:hidden">
            <Contact className="rounded-xl" />
          </Card>

          <Contact className="hidden md:flex" />
        </div>
      </div>

      <div className="relative order-first lg:order-last">
        <Image
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-8 hidden size-full scale-x-110 opacity-5 lg:inline-flex dark:invert"
          src="/misc/profile-bg.webp"
          alt=""
          width={512}
          height={512}
        />

        <ProfileImage
          className="pointer-events-none relative max-w-96 rounded-md border-2 border-gray-100 max-lg:max-w-48 md:hover:shadow-md dark:border-gray-900 dark:grayscale-[50%]"
          src={HERO_PROFILE_IMAGE_SRC}
          alt={HERO_PROFILE_IMAGE_ALT}
          blurDataURL={HERO_PROFILE_IMAGE_BLUR_DATA_URL}
          width={512}
          height={512}
          priority
        />
      </div>
    </motion.div>
  );
};

export { Hero };
