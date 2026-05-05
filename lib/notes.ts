import matter from 'gray-matter';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import readingTime from 'reading-time';
import 'server-only';

export type NoteFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: readonly string[];
  published: boolean;
};

export type Note = {
  slug: string;
  frontmatter: NoteFrontmatter;
  content: string;
};

export type NoteSummary = {
  slug: string;
  frontmatter: NoteFrontmatter;
  readingTimeMinutes: number;
};

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes');

const toDateString = (value: unknown): string => {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === 'string' && value.length > 0) return value;
  return '1970-01-01';
};

const parseNoteFrontmatter = (slug: string, raw: string): Note => {
  const parsed = matter(raw);
  const fm = parsed.data as Partial<NoteFrontmatter> & { date?: unknown };
  return {
    slug,
    frontmatter: {
      title: fm.title ?? 'Untitled',
      description: fm.description ?? '',
      date: toDateString(fm.date),
      tags: Array.isArray(fm.tags) ? (fm.tags as string[]) : [],
      published: fm.published ?? true,
    },
    content: parsed.content,
  };
};

const sortNotes = (notes: readonly Note[]): readonly Note[] =>
  notes
    .filter((n) => n.frontmatter.published)
    .slice()
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

const listAllNotes = async (): Promise<readonly Note[]> => {
  let files: string[] = [];
  try {
    files = await fs.readdir(NOTES_DIR);
  } catch {
    return [];
  }
  const mdxFiles = files.filter((f) => f.endsWith('.mdx'));
  const notes = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = await fs.readFile(path.join(NOTES_DIR, file), 'utf8');
      return parseNoteFrontmatter(slug, raw);
    }),
  );
  return sortNotes(notes);
};

const summariseNote = (note: Note): NoteSummary => ({
  slug: note.slug,
  frontmatter: note.frontmatter,
  readingTimeMinutes: Math.max(
    1,
    Math.round(readingTime(note.content).minutes),
  ),
});

const listNoteSummaries = async (): Promise<readonly NoteSummary[]> => {
  const notes = await listAllNotes();
  return notes.map(summariseNote);
};

const getNote = async (slug: string): Promise<Note | null> => {
  try {
    const raw = await fs.readFile(path.join(NOTES_DIR, `${slug}.mdx`), 'utf8');
    return parseNoteFrontmatter(slug, raw);
  } catch {
    return null;
  }
};

const getNoteSlugs = async (): Promise<readonly string[]> => {
  const notes = await listAllNotes();
  return notes.map((n) => n.slug);
};

export {
  getNote,
  getNoteSlugs,
  listAllNotes,
  listNoteSummaries,
  parseNoteFrontmatter,
  sortNotes,
  summariseNote,
};
