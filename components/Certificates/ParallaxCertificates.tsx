import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Parallax } from '../Parallax';
import { Card } from '../ui/card';
import { CERTIFICATE_ITEMS } from './constant';

const ParallaxCertificates = () => {
  return (
    <Parallax durationInMillis={900000} reverse={true}>
      {...[
        CERTIFICATE_ITEMS.map((item) => {
          return (
            <Card
              key={item.title}
              className={cn(
                'relative h-[15rem] max-h-[15rem] w-[20rem] max-w-[20rem] overflow-hidden',
              )}>
              {item.imageUrl && (
                <Image
                  className="absolute top-0 left-0 size-full rounded-md object-cover p-4"
                  src={item.imageUrl}
                  alt={item.title}
                  width={128}
                  height={128}
                  placeholder={item.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={item.blurDataURL}
                />
              )}

              <div className="bg-background/85 absolute bottom-0 flex w-full flex-col gap-1 rounded-lg px-2 py-1">
                <span className="text-foreground/90 inline-flex max-w-[90%] text-lg text-nowrap text-ellipsis">
                  {item.title}
                </span>

                <span className="inline-flex text-sm font-bold tracking-wide">
                  {item.description}
                </span>
              </div>
            </Card>
          );
        }),
      ]}
    </Parallax>
  );
};

export { ParallaxCertificates };
