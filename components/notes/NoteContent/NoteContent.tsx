import { Callout } from '@/components/notes/Callout';
import { CodeBlock } from '@/components/notes/CodeBlock';
import { Demo } from '@/components/notes/Demo';
import { Body, Heading, Mono, Subhead } from '@/components/typography';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { ReactNode } from 'react';

const components = {
  h1: ({ children }: { children: ReactNode }) => (
    <Heading as="h1">{children}</Heading>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <Subhead as="h2" className="text-ink mt-10 not-italic">
      {children}
    </Subhead>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <Subhead as="h3" className="mt-6">
      {children}
    </Subhead>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <Body className="my-3">{children}</Body>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="marker:text-gold my-3 list-disc pl-6">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="marker:text-gold my-3 list-decimal pl-6">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="font-body text-ink my-1">
      <Body>{children}</Body>
    </li>
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-gold/50 text-ink-muted my-6 border-l-2 pl-4 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <Mono className="bg-elevated text-gold rounded px-1 py-0.5">
      {children}
    </Mono>
  ),
  pre: ({
    children,
  }: {
    children: { props: { children: string; className?: string } };
  }) => {
    const child = children.props;
    const lang = child.className?.replace(/^language-/, '') ?? 'tsx';
    return <CodeBlock code={String(child.children).trim()} lang={lang} />;
  },
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-gold underline-offset-4 hover:underline">
      {children}
    </a>
  ),
  Callout,
  Demo,
};

type NoteContentProps = {
  source: string;
};

const NoteContent = async ({ source }: NoteContentProps) => {
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: false },
    components,
  });
  return <article className="prose-luxe">{content}</article>;
};

export { NoteContent };
export type { NoteContentProps };
