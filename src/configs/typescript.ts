import eslintJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import tsEslint from 'typescript-eslint';

import { defineConfig } from '@/utils/define-config.js';
import { detectRuntime } from '@/utils/detect-runtime.js';
import { excludeLegacyRules } from '@/utils/exclude-legacy-rules.js';

export function typescript() {
  return defineConfig([
    {
      name: 'taiyme/typescript/setup',
      plugins: {
        '@typescript-eslint': tsEslint.plugin,
        import: importPlugin,
        perfectionist: perfectionistPlugin,
        'unused-imports': unusedImportsPlugin,
      },
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    {
      name: 'taiyme/typescript/rules',
      rules: {
        ...excludeLegacyRules({
          ...eslintJs.configs.recommended.rules,
          ...(Object.assign({}, ...tsEslint.configs.recommended.map((config) => config.rules))),
        }),

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
        //#endregion TypeScript

        //#region import
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import/enforce-node-protocol-usage': ['warn', 'always'],
        'import/no-duplicates': ['warn', {
          'prefer-inline': false,
        }],
        //#endregion import

        //#region perfectionist
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
        //#endregion perfectionist

        //#region unused-imports
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': ['warn', {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        }],
        //#endregion unused-imports
      },
    },
  ]);
}
