type Project = {
  title: string;
  slug: string;
  tags?: string[] | null;
  year: number;
  description: string;
  images?: { src: string; alt: string }[];
  repoUrl?: string;
};

export type { Project };
