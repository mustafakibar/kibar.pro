import { RESUME_PATH } from '@/lib/constants/paths';
import { Envelope, FileText, Github, Linkedin } from '@/lib/icons';
import type { ComponentType, SVGProps } from 'react';

export type Social = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  external?: boolean;
};

export const EMAIL_ADDRESS = 'mustafa@kibar.pro';

export const SOCIALS: readonly Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/mustafakibar',
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mustafakibar',
    icon: Linkedin,
    external: true,
  },
  { label: 'Resume', href: RESUME_PATH, icon: FileText, external: true },
] as const;

export const EMAIL_SOCIAL: Social = {
  label: EMAIL_ADDRESS,
  href: `mailto:${EMAIL_ADDRESS}`,
  icon: Envelope,
};
