import { Envelope, Github, SocialX } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ContactProps } from '.';
import { ContactItemProps } from './type';

const contacts: ContactItemProps[] = [
  {
    icon: Envelope,
    href: 'mailto:mustafa@kibar.pro',
    className: 'inline-flex lg:hidden',
  },
  { icon: Github, href: 'https://github.com/mustafakibar' },
  { icon: SocialX, href: 'https://x.com/kibarpro' },
];

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex flex-row items-center gap-8 align-middle text-4xl',
        className,
      )}>
      <p className="group hidden cursor-pointer items-center text-xl lg:inline-flex">
        <Envelope
          size={24}
          className="mr-2 -rotate-12 duration-300 ease-in-out group-hover:rotate-0"
        />{' '}
        mustafa@kibar.pro
      </p>

      {contacts.map(({ icon: Icon, className, href }, idx) => (
        <Link href={href} target="_blank" key={idx}>
          <Icon
            className={cn(
              'transition-transform duration-100 hover:scale-110 hover:text-gray-800 dark:hover:text-gray-200',
              className,
            )}
          />
        </Link>
      ))}
    </div>
  );
};

export { Contact };
