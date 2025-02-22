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
import { Card } from '../ui/card';
import { HeroWithLoveSection } from './HeroWithLoveSection';

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn('md:my-[4rem]', className)}>
      <AnimatePresence>
        <motion.div
          className="flex flex-col items-center justify-around gap-4 md:flex-row md:gap-8 lg:justify-between"
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
                'flex gap-2 text-3xl text-nowrap md:text-5xl lg:pt-10 lg:text-7xl',
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

            <div className="flex flex-col gap-2 text-xl max-md:text-center lg:ml-1.5">
              <div className="flex flex-col max-md:items-center md:max-w-4/5 lg:max-w-2/3">
                <span className="flex text-justify">
                  I&apos;m a full stack developer based in Turkey. Having a
                  passion for shipping high-quality software to customers.
                </span>

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
              className="pointer-events-none absolute -top-16 -left-8 hidden size-full scale-x-110 opacity-5 lg:inline-flex dark:invert"
              src="/misc/profile-bg.webp"
              alt="profile image background pattern"
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
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { Hero };
