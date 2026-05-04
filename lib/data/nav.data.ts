import {
  ABOUT_PATH,
  CERTIFICATES_PATH,
  CONTACT_PATH,
  NOTES_PATH,
  PROJECTS_PATH,
  RESUME_PATH,
  USES_PATH,
} from '@/lib/constants/paths';

export type NavEntry = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV_ENTRIES: readonly NavEntry[] = [
  { label: 'About', href: ABOUT_PATH },
  { label: 'Projects', href: PROJECTS_PATH },
  { label: 'Notes', href: NOTES_PATH },
  { label: 'Uses', href: USES_PATH },
  { label: 'Certificates', href: CERTIFICATES_PATH },
  { label: 'Contact', href: CONTACT_PATH },
  { label: 'Resume', href: RESUME_PATH, external: true },
] as const;
