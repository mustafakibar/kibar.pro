import { getRandomInt } from '@/lib/utils';
import React from 'react';
import { FaAws, FaDocker, FaReact, FaRust } from 'react-icons/fa';
import { TbBrandFlutter, TbBrandKotlin } from 'react-icons/tb';
import { Parallax } from '../Parallax';
import { ParallaxSkillsProps } from './type';

const ParallaxSkills: React.FC<ParallaxSkillsProps> = ({
  className,
  iconSize = 64,
  iconOpacity = 0.9,
  animationReverse = (getRandomInt(0, 10) % 2) / 2 == 0,
  animationDurationInMillis = 50_000,
}) => {
  return (
    <Parallax
      className={className}
      durationInMillis={animationDurationInMillis}
      reverse={animationReverse}>
      <FaRust size={iconSize} color="#CE422B" opacity={iconOpacity} />
      <TbBrandKotlin size={iconSize} color="#B125EA" opacity={iconOpacity} />
      <TbBrandFlutter size={iconSize} color="#027DFD" opacity={iconOpacity} />
      <FaReact size={iconSize} color="#61dbfb" opacity={iconOpacity} />
      <FaAws size={iconSize} color="#FF9900" opacity={iconOpacity} />
      <FaDocker size={iconSize} color="#0db7ed" opacity={iconOpacity} />
    </Parallax>
  );
};

export { ParallaxSkills };
