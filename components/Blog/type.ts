type Post = {
  id: string;
  slug: string;
  tags?: string[];
  title: string;
  content: string;
  readingTimeMillis?: number;
  published: boolean;
  createdAt: string;
  updatedAt?: string | null | undefined;
};

export type { Post };
