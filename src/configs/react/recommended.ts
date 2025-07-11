import type { ESLint, Linter } from 'eslint';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { reactSharedSetup } from '@/configs/react/shared.js';
import { excludeLegacyRules } from '@/utils/exclude-legacy-rules.js';
import { widenTypePlugins, widenTypeRules } from '@/utils/widen-types.js';

export const reactRecommendedPlugins = widenTypePlugins({
  react: reactPlugin,
  'react-hooks': reactHooksPlugin,
  'jsx-a11y': jsxA11yPlugin as ESLint.Plugin,
});

export const reactRecommendedRules = widenTypeRules({
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
});

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
