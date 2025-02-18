type Post = {
  id: string;
  slug: string;
  tags?: string[] | null;
  title: string;
  foreword?: string;
  content: string;
  readingTimeMillis?: number;
  published: boolean;
  createdAt: string;
  updatedAt?: string | null | undefined;
};

export type { Post };
