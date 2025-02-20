import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ),
  {
    plugins: {
      'unused-imports': unusedImports,
      prettier,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
];

export default eslintConfig;
