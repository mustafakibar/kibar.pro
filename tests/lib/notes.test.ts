import { parseNoteFrontmatter, sortNotes } from '@/lib/notes';
import { describe, expect, it } from 'bun:test';

describe('parseNoteFrontmatter', () => {
  it('extracts title, description, date, tags, published', () => {
    const raw = `---
title: My note
description: A short description
date: 2026-04-12
tags: [typescript, mdx]
published: true
---

# Body
`;
    const result = parseNoteFrontmatter('test-slug', raw);
    expect(result.slug).toBe('test-slug');
    expect(result.frontmatter.title).toBe('My note');
    expect(result.frontmatter.description).toBe('A short description');
    expect(result.frontmatter.date).toBe('2026-04-12');
    expect(result.frontmatter.tags).toEqual(['typescript', 'mdx']);
    expect(result.frontmatter.published).toBe(true);
    expect(result.content.trim().startsWith('# Body')).toBe(true);
  });

  it('defaults published to true when missing', () => {
    const raw = `---
title: T
description: D
date: 2026-04-01
tags: []
---

x
`;
    const { frontmatter } = parseNoteFrontmatter('s', raw);
    expect(frontmatter.published).toBe(true);
  });
});

describe('sortNotes', () => {
  it('sorts by date descending', () => {
    const a = {
      slug: 'a',
      frontmatter: {
        title: 'A',
        description: '',
        date: '2026-01-01',
        tags: [],
        published: true,
      },
      content: '',
    };
    const b = {
      slug: 'b',
      frontmatter: {
        title: 'B',
        description: '',
        date: '2026-06-01',
        tags: [],
        published: true,
      },
      content: '',
    };
    const c = {
      slug: 'c',
      frontmatter: {
        title: 'C',
        description: '',
        date: '2026-03-01',
        tags: [],
        published: true,
      },
      content: '',
    };
    const result = sortNotes([a, b, c]);
    expect(result.map((n) => n.slug)).toEqual(['b', 'c', 'a']);
  });

  it('filters unpublished', () => {
    const a = {
      slug: 'a',
      frontmatter: {
        title: 'A',
        description: '',
        date: '2026-01-01',
        tags: [],
        published: false,
      },
      content: '',
    };
    const b = {
      slug: 'b',
      frontmatter: {
        title: 'B',
        description: '',
        date: '2026-06-01',
        tags: [],
        published: true,
      },
      content: '',
    };
    const result = sortNotes([a, b]);
    expect(result.map((n) => n.slug)).toEqual(['b']);
  });
});
