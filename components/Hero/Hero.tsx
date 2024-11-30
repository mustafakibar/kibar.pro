import { heroFont } from '@/app/(main)/fonts';
import { ProfileImage } from '@/components/ProfileImage';
import { TurkeyFlagImage } from '@/components/TurkeyFlagImage';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { HeroProps } from '.';
import { Contact } from '../Contact';
import { HeroWithLoveSection } from './HeroWithLoveSection';

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'my-[2rem] flex w-full items-center justify-center sm:my-[7rem]',
        className,
      )}>
      <div className="xs:grid-cols-1 xs:grid-rows-2 grid w-5/6 place-items-center justify-center gap-10 sm:grid-cols-2 sm:grid-rows-1 md:gap-3 xl:w-full">
        <div className="flex flex-col gap-8 sm:-mt-[2rem] xl:-mt-[4rem]">
          <div className={cn('text-nowrap', heroFont.className)}>
            <h1 className="pl-2 text-5xl text-primary opacity-75">Mustafa</h1>
            <h2 className="text-9xl font-extrabold text-secondary opacity-95">
              K
              <span className="mx-1 inline-flex -translate-y-4 text-8xl">
                i
              </span>
              BAR
            </h2>
          </div>

          <div className="ml-4">
            <div>
              <h4 className="text-3xl">
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

            <div className="mt-8">
              <Contact />
            </div>
          </div>
        </div>

        <div className="relative order-first sm:order-last">
          <Image
            src="/misc/profile-bg.webp"
            alt="profile background"
            width={256}
            height={256}
            className="pointer-events-none absolute -left-16 -top-16 hidden h-full w-full scale-x-110 opacity-5 xl:inline-flex"
          />

          <ProfileImage className="border-gray/70 dark:border-gray/10 pointer-events-none relative max-w-[24rem] rounded-md border-8 shadow-sm md:hover:shadow-md" />
        </div>
      </div>
    </div>
  );
};

export { Hero };
