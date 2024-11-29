import { getRandomInt, shuffle } from '@/lib/utils';
import Image from 'next/image';

const shapeImageList = [
  '/misc/shape-circle.webp',
  '/misc/shape-cross-8.webp',
  '/misc/shape-pinwheel.webp',
  '/misc/shape-x.webp',
];

const directions = ['top', 'right', 'bottom', 'left'];

const HeroShapes = () => {
  const result = [];
  const shuffledShapeImageList = shuffle(shapeImageList);

  for (let i = 0; i < shapeImageList.length; i++) {
    const image = shuffledShapeImageList[i % shuffledShapeImageList.length];
    const direction = directions[i % directions.length];
    const positionPercent = getRandomInt(40, 50);

    let rotate: string;
    const decisionOfRotate = getRandomInt(0, 7);
    if (decisionOfRotate == 0) {
      rotate = `rotate(${getRandomInt(0, 360)}deg)`;
    } else if (decisionOfRotate == 1) {
      rotate = `rotate(-${getRandomInt(0, 360)}deg)`;
    } else {
      rotate = '';
    }

    result.push(
      <Image
        key={`hero-shape-${i}`}
        src={image}
        alt={`Hero Shape ${i}`}
        width={256}
        height={256}
        className="pointer-events-none absolute h-[2rem] w-[2rem] md:h-[6rem] md:w-[6rem] xl:h-[8rem] xl:w-[8rem]"
        style={{
          [direction]: `-${positionPercent}%`,
          transform: `${rotate}`,
          filter: `hue-rotate(${getRandomInt(0, 360)}deg)`,
          opacity: `${getRandomInt(10, 15) / 100}`,
        }}
      />,
    );
  }

  return result;
};

export { HeroShapes };
