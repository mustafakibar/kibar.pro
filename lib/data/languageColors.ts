const LANG_COLORS: Readonly<Record<string, string>> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Rust: '#dea584',
  Go: '#00add8',
  Python: '#3572a5',
  Kotlin: '#a97bff',
  Dart: '#00b4ab',
  Swift: '#f05138',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Shell: '#89e051',
  C: '#555555',
  'C++': '#f34b7d',
  Java: '#b07219',
  Ruby: '#701516',
  PHP: '#4f5d95',
  MDX: '#fcb32c',
};

const LANGUAGE_FALLBACK = '#9f8a6a';

const getLanguageColor = (language?: string | null): string => {
  if (!language) return LANGUAGE_FALLBACK;
  return LANG_COLORS[language] ?? LANGUAGE_FALLBACK;
};

export { getLanguageColor };
