import { cn } from '@/lib/utils';
import { FooterProps } from '.';

const Footer: React.FC<FooterProps> = ({ className }) => {
  return <footer className={cn('sticky bottom-0', className)}>Footer</footer>;
};

export default Footer;
