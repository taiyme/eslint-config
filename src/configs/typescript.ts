import eslintJs from '@eslint/js';
import { importX as importXPlugin } from 'eslint-plugin-import-x';
import nPlugin from 'eslint-plugin-n';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import tsEslint from 'typescript-eslint';

import { defineConfig } from '@/utils/define-config.js';
import { detectRuntime } from '@/utils/detect-runtime.js';

export function typescript() {
  return defineConfig([
    {
      name: 'taiyme/typescript/setup',
      plugins: {
        '@typescript-eslint': tsEslint.plugin,
        'import-x': importXPlugin,
        n: nPlugin,
        perfectionist: perfectionistPlugin,
        'unused-imports': unusedImportsPlugin,
      },
    },
    {
      name: 'taiyme/typescript/plugin-recommended-rules',
      rules: {
        ...eslintJs.configs.recommended.rules,
        ...(Object.assign({}, ...tsEslint.configs.recommended.map((config) => config.rules))),
        ...nPlugin.configs['flat/recommended'].rules,
      },
    },
    {
      name: 'taiyme/typescript/customize-rules',
      rules: {
        // #region builtin
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
        // #endregion builtin

        // #region @typescript-eslint
        '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
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
        // #endregion @typescript-eslint

        // #region import-x
        'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import-x/no-duplicates': ['warn', {
          'prefer-inline': false,
        }],
        // #endregion import-x

        // #region n
        'n/prefer-node-protocol': 'warn',
        'n/no-missing-import': 'off', // tscで対応
        'n/no-missing-require': 'off', // tscで対応
        // #endregion n

        // #region perfectionist
        'perfectionist/sort-exports': 'warn',
        'perfectionist/sort-imports': ['warn', {
          newlinesBetween: 0,
          groups: [
            'type-builtin', 'builtin',
            { newlinesBetween: 1 },
            'type-external', 'external',
            { newlinesBetween: 1 },
            'type-internal', 'internal',
            { newlinesBetween: 1 },
            'type-parent', 'type-sibling', 'type-index',
            'parent', 'sibling', 'index',
            { newlinesBetween: 1 },
            'type-ts-equals-import', 'ts-equals-import',
            { newlinesBetween: 1 },
            'unknown',
          ],
          environment: detectRuntime(),
        }],
        'perfectionist/sort-named-exports': 'warn',
        'perfectionist/sort-named-imports': 'warn',
        // #endregion perfectionist

        // #region unused-imports
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': ['warn', {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        }],
        // #endregion unused-imports
      },
    },
  ]);
}
