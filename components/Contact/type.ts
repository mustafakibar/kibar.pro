import { IconType } from 'react-icons/lib';

type ContactProps = {
  className?: string;
};

type ContactItemProps = {
  icon: IconType;
  href: string;
};

export type { ContactItemProps, ContactProps };
