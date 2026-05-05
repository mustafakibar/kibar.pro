import { getHighlighter } from '@/lib/shiki';
import { cn } from '@/lib/utils';
import 'server-only';

type CodeBlockProps = {
  code: string;
  lang?: string;
  className?: string;
};

const CodeBlock = async ({ code, lang = 'tsx', className }: CodeBlockProps) => {
  const highlighter = await getHighlighter();
  const html = highlighter.codeToHtml(code, { lang, theme: 'kibar-luxe' });
  return (
    <div
      className={cn(
        'border-rule bg-canvas my-6 overflow-x-auto rounded-md border font-mono text-sm leading-relaxed [&_pre]:p-4',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export { CodeBlock };
export type { CodeBlockProps };
