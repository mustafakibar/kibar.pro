import { cn } from '@/lib/utils';
import { FooterHeartIcon, FooterProps } from '.';

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={cn(
        'w-full max-w-full overflow-hidden py-[2.5rem]',
        className,
      )}>
      <div className="from-1% to-91% flex items-center justify-center gap-1 bg-gradient-to-r from-background/5 to-foreground/100 bg-clip-text p-3 text-transparent transition-all duration-300 ease-linear hover:-skew-y-2 hover:gap-[6px]">
        <span className="font-extrabold tracking-tighter">designed with</span>
        <FooterHeartIcon className="mx-2 pb-1" size={64} color="text-red-700" />
        <span>by</span>
        <span className="tracking-wide">Mustafa KiBAR</span>
      </div>
    </footer>
  );
};

export { Footer };
