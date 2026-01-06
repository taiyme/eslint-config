import type { Linter } from 'eslint';
import stylisticPlugin from '@stylistic/eslint-plugin';

import { typescriptSharedSetup } from '@/configs/typescript/shared.js';
import { widenTypePlugins, widenTypeRules } from '@/utils/widen-types.js';

export const typescriptStylisticPlugins = widenTypePlugins({
  '@stylistic': stylisticPlugin,
});

export const typescriptStylisticRules = widenTypeRules({
  '@stylistic/array-bracket-newline': ['warn', 'consistent'],
  '@stylistic/array-bracket-spacing': ['warn', 'never'],
  '@stylistic/array-element-newline': 'off',
  '@stylistic/arrow-parens': ['warn', 'always'],
  '@stylistic/arrow-spacing': ['warn', {
    before: true,
    after: true,
  }],
  '@stylistic/block-spacing': ['warn', 'always'],
  '@stylistic/brace-style': ['error', '1tbs'],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/comma-spacing': ['warn', {
    before: false,
    after: true,
  }],
  '@stylistic/comma-style': ['error', 'last'],
  '@stylistic/computed-property-spacing': ['warn', 'never'],
  '@stylistic/curly-newline': ['warn', {
    multiline: true,
    consistent: true,
  }],
  '@stylistic/dot-location': ['warn', 'property'],
  '@stylistic/eol-last': ['error', 'always'],
  '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
  '@stylistic/function-call-spacing': ['error', 'never'],
  '@stylistic/function-paren-newline': ['warn', 'multiline-arguments'],
  '@stylistic/generator-star-spacing': ['warn', {
    before: true,
    after: true,
    named: 'after',
    anonymous: 'neither',
    method: 'both',
  }],
  '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
  '@stylistic/indent': ['warn', 2, {
    SwitchCase: 1,
  }],
  '@stylistic/jsx-quotes': ['warn', 'prefer-single'],
  '@stylistic/key-spacing': ['warn', {
    beforeColon: false,
    afterColon: true,
    mode: 'strict',
  }],
  '@stylistic/keyword-spacing': ['warn', {
    before: true,
    after: true,
  }],
  '@stylistic/linebreak-style': ['error', 'unix'],
  '@stylistic/lines-between-class-members': ['warn', {
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
  '@stylistic/max-statements-per-line': ['warn', {
    max: 1,
  }],
  '@stylistic/member-delimiter-style': ['warn', {
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
  '@stylistic/new-parens': ['error', 'always'],
  '@stylistic/no-confusing-arrow': 'warn',
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/no-mixed-operators': 'error',
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multi-spaces': 'warn',
  '@stylistic/no-multiple-empty-lines': ['warn', {
    max: Infinity,
    maxBOF: 0,
    maxEOF: 0,
  }],
  '@stylistic/no-tabs': 'error',
  '@stylistic/no-trailing-spaces': 'warn',
  '@stylistic/no-whitespace-before-property': 'warn',
  '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
  '@stylistic/object-curly-newline': ['warn', {
    multiline: true,
    consistent: true,
  }],
  '@stylistic/object-curly-spacing': ['warn', 'always'],
  '@stylistic/object-property-newline': ['warn', {
    allowAllPropertiesOnSameLine: true,
  }],
  '@stylistic/one-var-declaration-per-line': ['warn', 'always'],
  '@stylistic/operator-linebreak': ['warn', 'before', {
    overrides: {
      '=': 'none',
      '+=': 'none',
      '-=': 'none',
      '*=': 'none',
      '/=': 'none',
      '%=': 'none',
      '**=': 'none',
      '<<=': 'none',
      '>>=': 'none',
      '>>>=': 'none',
      '&=': 'none',
      '^=': 'none',
      '|=': 'none',
      '&&=': 'none',
      '||=': 'none',
      '??=': 'none',
    },
  }],
  '@stylistic/padding-line-between-statements': [
    'warn',
    { blankLine: 'always', prev: ['directive', 'import', 'cjs-import'], next: '*' },
    { blankLine: 'always', prev: '*', next: ['directive', 'import', 'cjs-import'] },
    { blankLine: 'any', prev: 'directive', next: 'directive' },
    { blankLine: 'any', prev: 'import', next: 'import' },
    { blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' },
  ],
  '@stylistic/quote-props': ['warn', 'as-needed'],
  '@stylistic/quotes': ['warn', 'single'],
  '@stylistic/rest-spread-spacing': ['warn', 'never'],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/semi-spacing': ['warn', {
    before: false,
    after: true,
  }],
  '@stylistic/semi-style': ['error', 'last'],
  '@stylistic/space-before-blocks': ['warn', 'always'],
  '@stylistic/space-before-function-paren': ['warn', {
    anonymous: 'never',
    named: 'never',
    asyncArrow: 'always',
  }],
  '@stylistic/space-in-parens': ['warn', 'never'],
  '@stylistic/space-infix-ops': 'warn',
  '@stylistic/space-unary-ops': 'warn',
  '@stylistic/switch-colon-spacing': ['warn', {
    before: false,
    after: true,
  }],
  '@stylistic/template-curly-spacing': ['warn', 'never'],
  '@stylistic/template-tag-spacing': ['error', 'never'],
  '@stylistic/type-annotation-spacing': ['warn', {
    before: false,
    after: true,
  }],
  '@stylistic/type-generic-spacing': 'off', // @stylistic/keyword-spacing と衝突する
  '@stylistic/type-named-tuple-spacing': 'warn',
  '@stylistic/wrap-iife': ['error', 'inside', {
    functionPrototypeMethods: true,
  }],
  '@stylistic/wrap-regex': 'warn',
  '@stylistic/yield-star-spacing': ['warn', {
    before: false,
    after: true,
  }],
});

export const typescriptStylisticConfigs = [
  {
    ...typescriptSharedSetup,
    name: 'taiyme/typescript/stylistic/setup',
  },
  {
    name: 'taiyme/typescript/stylistic/plugins',
    plugins: typescriptStylisticPlugins,
  },
  {
    name: 'taiyme/typescript/stylistic/rules',
    rules: typescriptStylisticRules,
  },
] as const satisfies Linter.Config[];
