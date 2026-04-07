export type Project = {
  id: string;
  title: string;
  slug?: string;
  tags?: string[] | null;
  year: number | string;
  description: string;
  images?: { src: string; alt: string }[];
  repoUrl?: string;
};
