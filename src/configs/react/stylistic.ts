import { fixupPluginRules } from '@eslint/compat';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
import type { ESLint, Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';

import { reactSharedSetup } from './shared.js';

export const reactStylisticPlugins = {
  react: fixupPluginRules(reactPlugin) as ESLint.Plugin,
  '@stylistic/jsx': stylisticJsx as ESLint.Plugin,
} as const satisfies Record<string, ESLint.Plugin>;

export const reactStylisticRules = {
  ...stylisticJsx.configs['disable-legacy'].rules,

  //#region JSX (Stylistic)
  '@stylistic/jsx/jsx-child-element-spacing': 'warn',
  '@stylistic/jsx/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
  '@stylistic/jsx/jsx-closing-tag-location': 'warn',
  '@stylistic/jsx/jsx-curly-brace-presence': ['warn', {
    props: 'never',
    children: 'ignore',
    propElementValues: 'always',
  }],
  '@stylistic/jsx/jsx-curly-newline': ['warn', {
    multiline: 'consistent',
    singleline: 'consistent',
  }],
  '@stylistic/jsx/jsx-curly-spacing': ['warn', {
    when: 'never',
    attributes: {
      allowMultiline: true,
    },
    children: true,
    spacing: {
      objectLiterals: 'never',
    },
  }],
  '@stylistic/jsx/jsx-equals-spacing': ['warn', 'never'],
  '@stylistic/jsx/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
  '@stylistic/jsx/jsx-function-call-newline': ['warn', 'multiline'],
  '@stylistic/jsx/jsx-indent-props': ['warn', 2],
  '@stylistic/jsx/jsx-max-props-per-line': ['warn', {
    maximum: {
      single: 3,
      multi: 1,
    },
  }],
  '@stylistic/jsx/jsx-pascal-case': 'warn',
  '@stylistic/jsx/jsx-props-no-multi-spaces': 'warn',
  '@stylistic/jsx/jsx-self-closing-comp': 'warn',
  '@stylistic/jsx/jsx-tag-spacing': ['warn', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never',
  }],
  '@stylistic/jsx/jsx-wrap-multilines': ['warn', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line',
    propertyValue: 'parens-new-line',
  }],
  //#endregion JSX (Stylistic)
} as const satisfies Linter.RulesRecord as Linter.RulesRecord; // satisfies T as T は型安全かつ型制限するため

export const reactStylisticConfigs = [
  {
    ...reactSharedSetup,
    name: 'taiyme/react/stylistic/setup',
  },
  {
    name: 'taiyme/react/stylistic/plugins',
    plugins: reactStylisticPlugins,
  },
  {
    name: 'taiyme/react/stylistic/rules',
    rules: reactStylisticRules,
  },
] as const satisfies Linter.Config[];
