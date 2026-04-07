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
        'Shipping TypeScript',
        duration,
        'Shipping React & Next.js',
        duration,
        'Shipping Node.js APIs',
        duration,
        'Crafting Rust',
        duration,
        'Crafting Kotlin',
        duration,
        'Building React Native',
        duration,
        'Building Flutter',
        duration,
        'Designing systems',
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
