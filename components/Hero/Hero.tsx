import { heroFont } from '@/app/(main)/fonts';
import { Envelope, Github, SocialX } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { HeroProps } from '.';

const ProfileImage = () => {
  return (
    <Image
      className="max-w-[35vw]"
      src="/avatars/me.webp"
      alt="My profile picture"
      width={256}
      height={256}
      placeholder="blur"
      blurDataURL="data:image/webp;base64,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"
    />
  );
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'my-[7vh] flex w-full items-center justify-center',
        className,
      )}>
      <div className="xs:grid-cols-1 xs:grid-rows-2 grid w-5/6 place-items-center gap-3 sm:grid-cols-2 sm:grid-rows-1">
        <div>
          <div className={heroFont.className}>
            <h1 className="pl-2 text-6xl text-primary">Mustafa</h1>
            <h2 className="text-9xl font-extrabold text-secondary">KiBAR</h2>
          </div>

          <div className="my-5 ml-3 flex flex-col gap-5">
            <h4 className="bg-gradient-to-r from-primary from-30% to-secondary to-90% bg-clip-text text-3xl text-transparent">
              I&#39;am{' '}
              <span className="mx-1 text-4xl -tracking-wider underline decoration-secondary/20 decoration-wavy">
                full stack
              </span>{' '}
              developer living in Turkey.
            </h4>

            <div className="flex flex-row items-center gap-8 fill-gray-600 align-middle text-2xl text-gray-600 hover:fill-gray-950 dark:fill-gray-200">
              <div>
                <Envelope />
              </div>

              <div>
                <Github />
              </div>

              <div>
                <SocialX />
              </div>
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
