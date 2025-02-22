import { fixupPluginRules } from '@eslint/compat';
import type { ESLint, Linter } from 'eslint';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

const plugins = {
  react: fixupPluginRules(reactPlugin) as ESLint.Plugin,
  'react-hooks': fixupPluginRules(hooksPlugin) as ESLint.Plugin,
  'jsx-a11y': fixupPluginRules(jsxA11yPlugin) as ESLint.Plugin,
} as const satisfies Record<string, ESLint.Plugin>;

const rules = {
  ...reactPlugin.configs.recommended.rules,
  ...reactPlugin.configs['jsx-runtime'].rules,
  ...hooksPlugin.configs.recommended.rules,
  ...jsxA11yPlugin.flatConfigs.recommended.rules,

  //#region React
  'react/prop-types': 'off',
  'react/display-name': 'off',
  //#endregion React
} as const satisfies Linter.RulesRecord as Linter.RulesRecord; // satisfies T as T は型安全かつ型制限するため

export const reactRecommended = [
  {
    name: 'taiyme/react/recommended:setup',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'taiyme/react/recommended:plugins',
    plugins,
  },
  {
    name: 'taiyme/react/recommended:rules',
    rules,
  },
] as const satisfies Linter.Config[];
