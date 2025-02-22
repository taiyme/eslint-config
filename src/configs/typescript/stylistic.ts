import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import type { ESLint, Linter } from 'eslint';

const plugins = {
  '@stylistic/js': stylisticJs as ESLint.Plugin,
  '@stylistic/ts': stylisticTs as ESLint.Plugin,
} as const satisfies Record<string, ESLint.Plugin>;

const rules = {
  ...stylisticJs.configs['disable-legacy'].rules,
  ...stylisticTs.configs['disable-legacy'].rules,

  //#region JavaScript (Stylistic)
  '@stylistic/js/array-bracket-newline': ['warn', 'consistent'],
  '@stylistic/js/array-bracket-spacing': ['warn', 'never'],
  '@stylistic/js/array-element-newline': 'off',
  '@stylistic/js/arrow-parens': ['warn', 'always'],
  '@stylistic/js/arrow-spacing': ['warn', {
    before: true,
    after: true,
  }],
  '@stylistic/js/comma-spacing': ['warn', {
    before: false,
    after: true,
  }],
  '@stylistic/js/comma-style': ['error', 'last'],
  '@stylistic/js/computed-property-spacing': ['warn', 'never'],
  '@stylistic/js/dot-location': ['warn', 'property'],
  '@stylistic/js/eol-last': ['error', 'always'],
  '@stylistic/js/function-call-argument-newline': ['warn', 'consistent'],
  '@stylistic/js/function-paren-newline': ['warn', 'multiline'],
  '@stylistic/js/generator-star-spacing': ['warn', {
    before: true,
    after: true,
    named: 'after',
    anonymous: 'neither',
    method: 'both',
  }],
  '@stylistic/js/implicit-arrow-linebreak': ['error', 'beside'],
  '@stylistic/js/jsx-quotes': ['warn', 'prefer-single'],
  '@stylistic/js/linebreak-style': ['error', 'unix'],
  '@stylistic/js/max-statements-per-line': ['warn', {
    max: 1,
  }],
  '@stylistic/js/new-parens': ['error', 'always'],
  '@stylistic/js/no-floating-decimal': 'error',
  '@stylistic/js/no-mixed-operators': 'error',
  '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/js/no-multi-spaces': 'warn',
  '@stylistic/js/no-tabs': 'error',
  '@stylistic/js/no-trailing-spaces': 'warn',
  '@stylistic/js/no-whitespace-before-property': 'warn',
  '@stylistic/js/nonblock-statement-body-position': ['error', 'beside'],
  '@stylistic/js/one-var-declaration-per-line': ['warn', 'always'],
  '@stylistic/js/operator-linebreak': ['warn', 'before', {
    overrides: {
      '=': 'none',
    },
  }],
  '@stylistic/js/rest-spread-spacing': ['warn', 'never'],
  '@stylistic/js/semi-spacing': ['warn', {
    before: false,
    after: true,
  }],
  '@stylistic/js/semi-style': ['error', 'last'],
  '@stylistic/js/space-in-parens': ['warn', 'never'],
  '@stylistic/js/space-unary-ops': 'warn',
  '@stylistic/js/switch-colon-spacing': ['warn', {
    before: false,
    after: true,
  }],
  '@stylistic/js/template-curly-spacing': ['warn', 'never'],
  '@stylistic/js/template-tag-spacing': ['error', 'never'],
  '@stylistic/js/wrap-iife': ['error', 'inside', {
    functionPrototypeMethods: true,
  }],
  '@stylistic/js/wrap-regex': 'warn',
  '@stylistic/js/yield-star-spacing': ['warn', {
    before: false,
    after: true,
  }],
  //#endregion JavaScript (Stylistic)

  //#region TypeScript (Stylistic)
  '@stylistic/ts/block-spacing': ['warn', 'always'],
  '@stylistic/ts/brace-style': ['error', '1tbs'],
  '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/ts/function-call-spacing': ['error', 'never'],
  '@stylistic/ts/indent': ['warn', 2],
  '@stylistic/ts/key-spacing': ['warn', {
    beforeColon: false,
    afterColon: true,
    mode: 'strict',
  }],
  '@stylistic/ts/keyword-spacing': ['warn', {
    before: true,
    after: true,
  }],
  '@stylistic/ts/lines-between-class-members': ['warn', {
    enforce: [{
      blankLine: 'always',
      prev: 'field',
      next: 'method',
    }, {
      blankLine: 'always',
      prev: 'method',
      next: 'field',
    }, {
      blankLine: 'always',
      prev: 'method',
      next: 'method',
    }],
  }],
  '@stylistic/ts/member-delimiter-style': ['warn', {
    multiline: {
      delimiter: 'semi',
      requireLast: true,
    },
    singleline: {
      delimiter: 'semi',
      requireLast: true,
    },
    multilineDetection: 'brackets',
  }],
  '@stylistic/ts/no-extra-semi': 'error',
  '@stylistic/ts/object-curly-newline': ['warn', {
    multiline: true,
    consistent: true,
  }],
  '@stylistic/ts/object-curly-spacing': ['warn', 'always'],
  '@stylistic/ts/object-property-newline': ['warn', {
    allowAllPropertiesOnSameLine: true,
  }],
  '@stylistic/ts/quote-props': ['warn', 'as-needed'],
  '@stylistic/ts/quotes': ['warn', 'single'],
  '@stylistic/ts/semi': ['error', 'always'],
  '@stylistic/ts/space-before-blocks': ['warn', 'always'],
  '@stylistic/ts/space-before-function-paren': ['warn', {
    anonymous: 'never',
    named: 'never',
    asyncArrow: 'always',
  }],
  '@stylistic/ts/space-infix-ops': 'warn',
  '@stylistic/ts/type-annotation-spacing': ['warn', {
    before: false,
    after: true,
    overrides: {
      arrow: {
        before: true,
        after: true,
      },
    },
  }],
  //#endregion TypeScript (Stylistic)
} as const satisfies Linter.RulesRecord as Linter.RulesRecord; // satisfies T as T は型安全かつ型制限するため

export const typescriptStylistic = [
  {
    name: 'taiyme/typescript/stylistic:setup',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    name: 'taiyme/typescript/stylistic:plugins',
    plugins,
  },
  {
    name: 'taiyme/typescript/stylistic:rules',
    rules,
  },
] as const satisfies Linter.Config[];
