/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSameLine: true,
  endOfLine: 'auto',
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
};

export default config;
