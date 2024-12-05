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

const ParallaxCertificates = () => {
  return (
    <Parallax className={''} durationInMillis={50000} reverse={true}>
      <Card className={cn('relative h-auto w-fit')}>
        <CardHeader>
          <CardTitle>Android Deployment</CardTitle>
          <CardDescription>
            Kariyer Mimari - <span className="font-black opacity-75">2014</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Image
              className="rounded-md"
              src={'/workspace/desk.webp'}
              alt={'My sweet desk'}
              width={256}
              height={256}
            />
          </div>
        </CardContent>
      </Card>
    </Parallax>
  );
};

export { ParallaxCertificates };
