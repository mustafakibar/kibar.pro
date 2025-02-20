import { heroFont } from '@/app/(main)/fonts';
import {
  HERO_PROFILE_IMAGE_ALT,
  HERO_PROFILE_IMAGE_BLUR_DATA_URL,
  HERO_PROFILE_IMAGE_SRC,
} from '@/common/image';
import { ProfileImage } from '@/components/ProfileImage';
import { TurkeyFlagImage } from '@/components/TurkeyFlagImage';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
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
          className="flex flex-col items-center justify-evenly gap-8 md:flex-row md:gap-4"
          layout
          variants={{
            hidden: { opacity: 0 },
            visible: { y: [16, 0], opacity: [0, 1] },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 3, ease: 'easeInOut' }}>
          <div className="flex flex-col gap-8 text-center antialiased md:text-start">
            <div className={cn('text-nowrap lg:pt-10', heroFont.className)}>
              <h1 className="text-3xl text-primary opacity-75 sm:pl-2 lg:text-5xl">
                Mustafa
              </h1>
              <h2 className="ml-1 text-6xl font-extrabold text-secondary opacity-95 lg:text-8xl">
                K
                <span className="mx-1 inline-flex scale-75 text-primary">
                  i
                </span>
                BAR
              </h2>
            </div>

            <div className="sm:ml-3">
              <div>
                <h4 className="text-2xl">
                  I&#39;am full stack developer{' '}
                  <span className="text-nowrap">
                    living in{' '}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <TurkeyFlagImage className="mb-2 border-4 border-black/5 dark:border-white/10" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Turkey</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                </h4>
              </div>

              <div className="mt-2 tracking-widest">
                <HeroWithLoveSection />
              </div>

              <Contact className="mt-8 flex" />
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <Image
              className="pointer-events-none absolute -left-16 -top-16 hidden size-full scale-x-110 opacity-5 dark:invert lg:inline-flex"
              src="/misc/profile-bg.webp"
              alt="profile background"
              width={256}
              height={256}
            />

            <ProfileImage
              className="pointer-events-none relative max-w-96 rounded-md border-2 border-gray-100 dark:border-gray-900 dark:grayscale-[50%] max-lg:max-w-48 md:hover:shadow-md"
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
