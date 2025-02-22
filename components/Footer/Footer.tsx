import { cn } from '@/lib/utils';
import { FooterHeartIcon, FooterProps } from '.';

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={cn(
        'w-full max-w-full overflow-hidden py-[2.5rem]',
        className,
      )}>
      <div className="from-background/5 to-foreground/100 flex items-center justify-center gap-1 bg-linear-to-r from-1% to-91% bg-clip-text p-3 text-transparent transition-all duration-500 ease-out hover:gap-[0.1rem]">
        <span>designed [with</span>
        <FooterHeartIcon className="-pb-0.5 ml-1" color="text-red-700" />
        <span>] by</span>
        <span>Mustafa KiBAR</span>
      </div>
    </footer>
  );
};

export { Footer };
