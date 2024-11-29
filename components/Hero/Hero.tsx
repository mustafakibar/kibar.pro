import { heroFont } from '@/app/(main)/fonts';
import { HeroShapes } from '@/components/Hero/HeroShapes';
import { ProfileImage } from '@/components/ProfileImage';
import { TurkeyFlagImage } from '@/components/TurkeyFlagImage';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import React from 'react';
import { HeroProps } from '.';
import { Contact } from '../Contact';

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'my-[2rem] flex w-full items-center justify-center sm:my-[7rem]',
        className,
      )}>
      <div className="xs:grid-cols-1 xs:grid-rows-2 grid w-5/6 place-items-center justify-center gap-10 sm:grid-cols-2 sm:grid-rows-1 md:gap-3">
        <div className="flex flex-col gap-8 sm:-mt-[2rem] xl:-mt-[4rem]">
          <div className={cn('text-nowrap', heroFont.className)}>
            <h1 className="pl-2 text-6xl text-primary opacity-75">Mustafa</h1>
            <h2 className="text-9xl font-extrabold text-secondary opacity-95">
              K
              <span className="inline-flex animate-bounce text-8xl text-secondary/85 delay-500 duration-1000 ease-in-out fill-mode-forwards repeat-[2]">
                !
              </span>
              BAR
            </h2>
          </div>

          <div className="ml-4">
            <div>
              <h4 className="bg-gradient-to-t from-primary from-0% to-secondary to-100% bg-clip-text text-3xl leading-[3rem] text-transparent">
                I&#39;am{' '}
                <span className="mx-1 font-bold -tracking-wider underline decoration-secondary/5 decoration-wavy">
                  full stack
                </span>
                developer{' '}
                <span className="whitespace-nowrap">
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

            <div className="mt-4">
              <Contact />
            </div>
          </div>
        </div>

        <div className="relative order-first sm:order-last">
          <div className="absolute left-0 top-0 hidden h-full w-full sm:inline-flex">
            <HeroShapes />
          </div>

          <div className="group relative">
            <ProfileImage className="pointer-events-none rounded-md border-8 border-white/70 shadow-sm duration-300 ease-in-out group-hover:rotate-0 dark:border-white/10 md:group-hover:scale-110 md:group-hover:shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
