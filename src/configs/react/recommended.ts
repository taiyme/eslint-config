import type { ESLint, Linter } from 'eslint';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { reactSharedSetup } from '@/configs/react/shared.js';
import { excludeLegacyRules } from '@/utils/exclude-legacy-rules.js';

export const reactRecommendedPlugins = {
  react: reactPlugin as ESLint.Plugin,
  'react-hooks': reactHooksPlugin as ESLint.Plugin,
  'jsx-a11y': jsxA11yPlugin as ESLint.Plugin,
} as const satisfies Record<string, ESLint.Plugin>;

export const reactRecommendedRules = {
  ...excludeLegacyRules({
    ...reactPlugin.configs.flat.recommended?.rules,
    ...reactPlugin.configs.flat['jsx-runtime']?.rules,
    ...reactHooksPlugin.configs['recommended-latest'].rules,
    ...jsxA11yPlugin.flatConfigs.recommended.rules,
  }),

  //#region React
  'react/prop-types': 'off',
  'react/display-name': 'off',
  //#endregion React
} as const satisfies Linter.RulesRecord as Linter.RulesRecord; // satisfies T as T は型安全かつ型制限するため

export const reactRecommendedConfigs = [
  {
    ...reactSharedSetup,
    name: 'taiyme/react/recommended/setup',
  },
  {
    name: 'taiyme/react/recommended/plugins',
    plugins: reactRecommendedPlugins,
  },
  {
    name: 'taiyme/react/recommended/rules',
    rules: reactRecommendedRules,
  },
] as const satisfies Linter.Config[];
