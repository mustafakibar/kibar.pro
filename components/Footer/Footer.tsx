import { cn } from '@/lib/utils';
import { FooterProps } from '.';
import { Heart } from 'lucide-react';

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('w-full sticky bottom-0', className)}>
      <div className='flex flex-row items-center justify-center p-3'>
        designed with{' '}
        <div className='mx-1 pb-2 flex flex-shrink justify-center align-middle items-center'>
          <Heart className='fill-red-400' />
          <Heart
            className='absolute fill-red-100 stroke-gray-400 animate-ping-slow'
            size={32}
          />
        </div>{' '}
        by Mustafa Kibar
      </div>
    </footer>
  );
};

export default Footer;
