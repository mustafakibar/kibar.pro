import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { FooterProps } from '.';

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('w-full', className)}>
      <div className="flex flex-row items-center justify-center p-3">
        designed with{' '}
        <div className="mx-1 flex flex-shrink items-center justify-center pb-2 align-middle">
          <Heart className="fill-red-400" />
          <Heart
            className="absolute animate-ping-slow fill-red-100 stroke-gray-400"
            size={32}
          />
        </div>{' '}
        by Mustafa Kibar
      </div>
    </footer>
  );
};

export { Footer };
