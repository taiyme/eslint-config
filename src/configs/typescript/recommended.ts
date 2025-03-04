import eslint from '@eslint/js';
import type { ESLint, Linter } from 'eslint';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import tsEslint from 'typescript-eslint';

import { typescriptSharedSetup } from './shared.js';

export const typescriptRecommendedPlugins = {
  '@typescript-eslint': tsEslint.plugin as ESLint.Plugin,
  'simple-import-sort': simpleImportSortPlugin as ESLint.Plugin,
  'unused-imports': unusedImportsPlugin as ESLint.Plugin,
} as const satisfies Record<string, ESLint.Plugin>;

export const typescriptRecommendedRules = {
  ...eslint.configs.recommended.rules,
  ...(Object.assign({}, ...tsEslint.configs.recommended.map((config) => config.rules))),

  //#region JavaScript
  eqeqeq: ['error', 'always', {
    null: 'ignore',
  }],
  'no-new-wrappers': 'error',
  'no-restricted-imports': 'off',
  'no-self-compare': 'error',
  'no-undef': 'error',
  'no-unused-vars': 'off', // unused-importsで対応
  'one-var': ['warn', 'never'],
  'prefer-template': 'warn',
  'sort-imports': 'off',
  //#endregion JavaScript

  //#region TypeScript
  '@typescript-eslint/consistent-type-imports': ['error', {
    prefer: 'type-imports',
    fixStyle: 'inline-type-imports',
    disallowTypeAnnotations: true,
  }],
  '@typescript-eslint/dot-notation': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-inferrable-types': 'warn',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'warn',
  '@typescript-eslint/no-unused-vars': 'off', // unused-importsで対応
  '@typescript-eslint/no-use-before-define': ['error', {
    functions: false,
    classes: true,
    variables: true,
    allowNamedExports: false,
    enums: true,
    typedefs: true,
    ignoreTypeReferences: true,
  }],
  '@typescript-eslint/prefer-optional-chain': 'warn',
  //#endregion TypeScript

  //#region simple-import-sort
  'simple-import-sort/exports': 'warn',
  'simple-import-sort/imports': 'warn',
  //#endregion simple-import-sort

  //#region unused-imports
  'unused-imports/no-unused-imports': 'warn',
  'unused-imports/no-unused-vars': ['warn', {
    vars: 'all',
    varsIgnorePattern: '^_',
    args: 'after-used',
    argsIgnorePattern: '^_',
  }],
  //#endregion unused-imports
} as const satisfies Linter.RulesRecord as Linter.RulesRecord; // satisfies T as T は型安全かつ型制限するため

export const typescriptRecommendedConfigs = [
  {
    ...typescriptSharedSetup,
    name: 'taiyme/typescript/recommended/setup',
  },
  {
    name: 'taiyme/typescript/recommended/plugins',
    plugins: typescriptRecommendedPlugins,
  },
  {
    name: 'taiyme/typescript/recommended/rules',
    rules: typescriptRecommendedRules,
  },
] as const satisfies Linter.Config[];
