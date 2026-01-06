import type { Linter } from 'eslint';

export const typescriptSharedSetup = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
} satisfies Linter.Config;
