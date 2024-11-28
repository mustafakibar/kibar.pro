import { heroFont } from '@/app/(main)/fonts';
import { cn } from '@/lib/utils';
import React from 'react';
import { HeroProps } from '.';
import { Contact } from '../Contact';
import { ProfileImage } from '../ProfileImage';

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'my-[7vh] flex w-full items-center justify-center',
        className,
      )}>
      <div className="xs:grid-cols-1 xs:grid-rows-2 grid w-5/6 place-items-center gap-3 sm:grid-cols-2 sm:grid-rows-1">
        <div className="flex flex-col gap-8">
          <div className={heroFont.className}>
            <h1 className="pl-2 text-6xl text-primary">Mustafa</h1>
            <h2 className="text-9xl font-extrabold text-secondary">KiBAR</h2>
          </div>

          <div className="ml-4">
            <div>
              <h4 className="bg-gradient-to-r from-primary from-30% to-secondary to-90% bg-clip-text text-3xl text-transparent">
                I&#39;am{' '}
                <span className="mx-1 font-bold -tracking-wider underline decoration-secondary/20 decoration-wavy">
                  full stack
                </span>{' '}
                developer living in Turkey.
              </h4>
            </div>

            <div className="mt-4">
              <Contact />
            </div>
          </div>
        </div>

        <div className="order-first sm:order-last">
          <ProfileImage />
        </div>
      </div>
    </div>
  );
};

export { Hero };
