'use client';

import { cn } from '@/lib/utils';
import { TypeAnimation } from 'react-type-animation';

const DETAILS_TEXT = `My name is Mustafa KiBAR. I am a full-stack developer since 2011, specializing in crafting scalable, responsive, efficient, and maintainable robust software systems.\n\nProficient in Rust, Kotlin, React, React Native, and Flutter.\n\nI enjoy making applications that make users' daily tasks easier and continuously push the boundaries of innovation in blockchain, AI, and systems programming, always striving to create high-quality software products efficiently with adapting to latest technology trends.`;

const ProfileDetails: React.FC = () => {
  const classNameOfDetailsText =
    'pointer-events-none flex touch-none antialiased whitespace-pre-line py-2';

  return (
    <div className="relative">
      <TypeAnimation
        sequence={[DETAILS_TEXT]}
        speed={95}
        className={cn('absolute', classNameOfDetailsText)}
        repeat={0}
        omitDeletionAnimation={true}
        cursor={false}
      />

      <span className={cn('opacity-0', classNameOfDetailsText)}>
        {DETAILS_TEXT}
      </span>
    </div>
  );
};

export { ProfileDetails };
