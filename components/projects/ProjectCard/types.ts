export type Project = {
  id: string;
  title: string;
  slug?: string;
  tags?: readonly string[] | null;
  year: number | string;
  description: string;
  images?: readonly { src: string; alt: string }[];
  repoUrl?: string;
  stars?: number;
  forks?: number;
  language?: string | null;
  isFork?: boolean;
  isArchived?: boolean;
  pushedAt?: string;
};
