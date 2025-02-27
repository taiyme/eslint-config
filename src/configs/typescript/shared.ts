import type { Linter } from 'eslint';

export const typescriptSharedSetup = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
} as const satisfies Linter.Config;
