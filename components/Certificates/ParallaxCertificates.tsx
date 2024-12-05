import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Parallax } from '../Parallax';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { CERTIFICATE_ITEMS } from './constant';

const ParallaxCertificates = () => {
  return (
    <Parallax className={''} durationInMillis={300000} reverse={true}>
      {...[
        CERTIFICATE_ITEMS.map((item) => {
          return (
            <Card
              key={item.title}
              className={cn(
                'relative h-auto max-h-[20rem] w-fit max-w-[20rem] overflow-hidden',
              )}>
              <CardHeader>
                <CardTitle className="text-nowrap">{item.title}</CardTitle>
                <CardDescription className="text-nowrap">
                  {item.description}
                  <span className="mx-1 inline-block">-</span>
                  <span className="font-semibold">{item.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  {item.imageUrl && (
                    <Image
                      className="rounded-md"
                      src={item.imageUrl}
                      alt={item.title}
                      width={256}
                      height={256}
                      placeholder={item.blurDataURL ? 'blur' : 'empty'}
                      blurDataURL={item.blurDataURL}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          );
        }),
      ]}
    </Parallax>
  );
};

export { ParallaxCertificates };
