import { cn, getRandomInt } from '@/lib/utils';
import React from 'react';
import { FaAws, FaDocker, FaReact, FaRust } from 'react-icons/fa';
import { TbBrandFlutter, TbBrandKotlin } from 'react-icons/tb';
import { Parallax } from '../Parallax';
import { ParallaxSkillsProps } from './type';

const ParallaxSkills: React.FC<ParallaxSkillsProps> = ({
  className,
  iconSize = 32,
  iconOpacity = 0.8,
  animationReverse = (getRandomInt(0, 10) % 2) / 2 == 0,
  animationDurationInMillis = 50_000,
}) => {
  return (
    <Parallax
      className={cn(
        'transition-normal duration-500 hover:grayscale-100',
        className,
      )}
      durationInMillis={animationDurationInMillis}
      reverse={animationReverse}>
      <FaRust size={iconSize} opacity={iconOpacity} />
      <TbBrandKotlin size={iconSize} opacity={iconOpacity} />
      <TbBrandFlutter size={iconSize} opacity={iconOpacity} />
      <FaReact size={iconSize} opacity={iconOpacity} />
      <FaAws size={iconSize} opacity={iconOpacity} />
      <FaDocker size={iconSize} opacity={iconOpacity} />
    </Parallax>
  );
};

export { ParallaxSkills };
