import 'server-only';
import {
  createHighlighter,
  type Highlighter,
  type ThemeRegistrationRaw,
} from 'shiki';
import theme from './shiki/kibar-luxe.json';

const LANGS = [
  'typescript',
  'tsx',
  'javascript',
  'jsx',
  'css',
  'html',
  'json',
  'bash',
  'shell',
  'rust',
  'go',
  'sql',
  'kotlin',
  'dart',
  'markdown',
  'mdx',
  'yaml',
  'toml',
  'diff',
] as const;

let highlighterPromise: Promise<Highlighter> | null = null;

const getHighlighter = (): Promise<Highlighter> => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [theme as unknown as ThemeRegistrationRaw],
      langs: [...LANGS],
    });
  }
  return highlighterPromise;
};

export { getHighlighter };
