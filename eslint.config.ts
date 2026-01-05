import type { Linter } from 'eslint';
import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import gitignore from 'eslint-config-flat-gitignore';
import globals from 'globals';

const files = ['**/*.{js,ts}'];

export default [
  gitignore(),
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tsEslintParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files,
  },
  {
    files: ['./src/const.ts'],
    languageOptions: {
      globals: {
        __PACKAGE_NAME__: 'readonly',
        __PACKAGE_VERSION__: 'readonly',
      },
    },
  },
  ...taiymeConfig.configs.typescript.map((config) => ({
    ...config,
    files,
  })),
] as const satisfies Linter.Config[];
