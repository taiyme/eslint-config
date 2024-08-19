// @ts-check

import tsEslintParser from '@typescript-eslint/parser';
import gitignore from 'eslint-config-flat-gitignore';
import globals from 'globals';

import taiymeConfig from './dist/index.js';

const files = ['**/*.{js,ts}'];

/** @type {import('eslint').Linter.Config[]} */
export default [
  gitignore(),
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tsEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files,
  },
  ...taiymeConfig.configs.typescript.map((config) => ({
    ...config,
    files,
  })),
];
