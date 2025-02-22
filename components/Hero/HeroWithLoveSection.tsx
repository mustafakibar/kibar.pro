'use client';

import { cn } from '@/lib/utils';
import { TypeAnimation } from 'react-type-animation';

const duration = 1500;
const HeroWithLoveSection: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        'Coding Rust 🦀',
        duration,
        'Coding Kotlin',
        duration,
        'Coding React',
        duration,
        'Coding React Native',
        duration,
        'Coding Flutter',
        duration,
        'Using Docker',
        duration,
        'Using AWS',
        duration,
      ]}
      speed={50}
      className={cn('pointer-events-none touch-none text-nowrap', className)}
      repeat={Infinity}
      omitDeletionAnimation={false}
      cursor={true}
    />
  );
};

export { HeroWithLoveSection };
