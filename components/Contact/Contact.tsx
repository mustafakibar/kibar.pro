import { Envelope, Github, SocialX } from '@/lib/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ContactProps } from '.';
import { ContactItemProps } from './type';

const contactItemList: ContactItemProps[] = [
  {
    icon: Envelope,
    href: 'mailto:mustafa@kibar.pro',
    className: 'inline-flex md:hidden',
  },
  { icon: Github, href: 'https://github.com/mustafakibar' },
  { icon: SocialX, href: 'https://x.com/kibarpro' },
];

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'group/container flex shrink-0 transform-gpu flex-row items-center gap-16 align-middle text-4xl transition-all lg:gap-8',
        className,
      )}>
      <p className="group/mail hidden cursor-pointer items-center text-xl hover:!opacity-100 group-hover/container:opacity-35 md:inline-flex">
        <Envelope
          size={24}
          className="mr-2 -rotate-12 duration-500 ease-in-out group-hover/mail:rotate-0 group-hover/mail:scale-125"
        />{' '}
        <span className="duration-300 group-hover/mail:translate-x-1">
          mustafa@kibar.pro
        </span>
      </p>

      {contactItemList.map(({ icon: Icon, className, href }, idx) => (
        <Link href={href} target="_blank" key={idx}>
          <Icon
            className={cn(
              'transition-transform duration-100 hover:scale-110 hover:text-gray-800 hover:!opacity-100 group-hover/container:opacity-35 dark:hover:text-gray-200',
              className,
            )}
          />
        </Link>
      ))}
    </div>
  );
};

export { Contact };
