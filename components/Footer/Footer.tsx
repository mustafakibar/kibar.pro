import { HeartPulse } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { FooterProps } from '.';

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={cn(
        'w-full min-w-full max-w-full overflow-hidden py-[2.5rem]',
        className,
      )}>
      <div className="from-1% to-91% flex items-center justify-center gap-1 bg-gradient-to-r from-background/5 to-foreground/100 bg-clip-text p-3 text-transparent transition-all duration-300 ease-linear hover:-skew-y-2 hover:gap-[6px]">
        <span className="font-extrabold tracking-tighter">designed with</span>
        <div className="flex flex-shrink items-center justify-center pb-2 align-middle">
          <HeartPulse className="fill-red-700" size={48} />
          <HeartPulse
            className="absolute animate-ping-slow fill-red-500/60 stroke-gray-500/60"
            size={64}
          />
        </div>
        <span>by</span>
        <span className="tracking-wide">Mustafa KibAr</span>
      </div>
    </footer>
  );
};

export { Footer };
