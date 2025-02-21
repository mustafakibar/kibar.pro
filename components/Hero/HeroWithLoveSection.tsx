'use client';

import { TypeAnimation } from 'react-type-animation';

const duration = 1500;
const HeroWithLoveSection: React.FC = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        'with ❤️ Rust 🦀',
        duration,
        'with ❤️ Kotlin',
        duration,
        'with ❤️ React',
        duration,
        'with ❤️ React Native',
        duration,
        'with ❤️ Flutter',
        duration,
        'with ❤️ Docker',
        duration,
        'with ❤️ AWS',
        duration,
      ]}
      speed={60}
      className="pointer-events-none touch-none text-lg text-nowrap whitespace-nowrap antialiased"
      repeat={Infinity}
      omitDeletionAnimation={true}
      cursor={false}
    />
  );
};

export { HeroWithLoveSection };
