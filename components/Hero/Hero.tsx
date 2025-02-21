import { heroFont } from '@/app/(main)/fonts';
import {
  HERO_PROFILE_IMAGE_ALT,
  HERO_PROFILE_IMAGE_BLUR_DATA_URL,
  HERO_PROFILE_IMAGE_SRC,
} from '@/common/image';
import { ProfileImage } from '@/components/ProfileImage';

import { cn } from '@/lib/utils';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import React from 'react';
import { HeroProps } from '.';
import { Contact } from '../Contact';
import { HeroWithLoveSection } from './HeroWithLoveSection';

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn('my-[1rem] md:my-[8rem]', className)}>
      <AnimatePresence>
        <motion.div
          className="flex flex-col items-center justify-around gap-4 md:flex-row lg:justify-between lg:gap-8"
          layout
          variants={{
            hidden: { opacity: 0 },
            visible: { y: [16, 0], opacity: [0, 1] },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 3, ease: 'easeInOut' }}>
          <div className="flex flex-col justify-center gap-4 antialiased max-md:items-center">
            <div
              className={cn(
                'flex gap-2 text-5xl text-nowrap lg:pt-10 lg:text-7xl',
                heroFont.className,
              )}>
              <span className="text-primary opacity-75">Mustafa</span>
              <span className="text-secondary ml-1 font-extrabold opacity-95">
                K
                <span className="text-primary mx-1 inline-flex scale-75">
                  i
                </span>
                BAR
              </span>
            </div>

            <div className="ml-1.5 max-md:text-center">
              <div className="flex flex-col gap-2 text-2xl">
                <span>I&apos;m a full stack developer based in Turkey.</span>
                <span>
                  I have a passion for shipping high-quality software to
                  customers.{' '}
                </span>
              </div>

              <div className="mt-2 tracking-widest">
                <HeroWithLoveSection />
              </div>

              <Contact className="mt-8 flex" />
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <Image
              className="pointer-events-none absolute -top-16 -left-8 hidden size-full scale-x-110 opacity-5 lg:inline-flex dark:invert"
              src="/misc/profile-bg.webp"
              alt="profile image background pattern"
              width={256}
              height={256}
            />

            <ProfileImage
              className="pointer-events-none relative max-w-96 rounded-md border-2 border-gray-100 max-lg:max-w-48 md:hover:shadow-md dark:border-gray-900 dark:grayscale-[50%]"
              src={HERO_PROFILE_IMAGE_SRC}
              alt={HERO_PROFILE_IMAGE_ALT}
              blurDataURL={HERO_PROFILE_IMAGE_BLUR_DATA_URL}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { Hero };
