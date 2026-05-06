import { FooterStamp } from '@/components/chrome/FooterStamp';
import { Caption, Mono } from '@/components/typography';
import { cn } from '@/lib/utils';

const SiteFooter = ({ className }: { className?: string }) => {
  const year = new Date().getFullYear();
  return (
    <footer
      className={cn(
        'border-rule text-ink-subtle mt-32 w-full border-t py-12',
        className,
      )}>
      <div className="container flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <FooterStamp />
          <Caption>Crafted by Mustafa KiBAR.</Caption>
        </div>
        <Mono className="text-ink-faint">© {year} · KiBAR</Mono>
      </div>
    </footer>
  );
};

export { SiteFooter };
