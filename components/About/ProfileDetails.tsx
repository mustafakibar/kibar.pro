'use client';

import { TypeAnimation } from 'react-type-animation';

const ProfileDetails: React.FC = () => {
  return (
    <TypeAnimation
      style={{ whiteSpace: 'pre-line', display: 'block' }}
      sequence={[
        `I am a full-stack developer since 2011, specializing in crafting scalable, responsive, efficient, and maintainable robust software systems.\n\nProficient in Rust, Kotlin, React, React Native, and Flutter.\n\nI enjoy making applications that make users' daily tasks easier and continuously push the boundaries of innovation in blockchain, AI, and systems programming, always striving to create high-quality software products efficiently with adapting to latest technology trends.`,
      ]}
      speed={80}
      className="pointer-events-none touch-none antialiased"
      repeat={0}
      omitDeletionAnimation={true}
      cursor={false}
    />
  );
};

export { ProfileDetails };
