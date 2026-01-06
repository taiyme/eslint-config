import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { reactSharedSetup } from '@/configs/react/shared.js';
import { defineConfigList, definePluginMap, defineRuleMap } from '@/utils/eslint.js';
import { excludeLegacyRules } from '@/utils/exclude-legacy-rules.js';

export const reactRecommendedPlugins = definePluginMap({
  react: reactPlugin,
  'react-hooks': reactHooksPlugin,
  'jsx-a11y': jsxA11yPlugin,
});

export const reactRecommendedRules = defineRuleMap({
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

export const reactRecommendedConfigs = defineConfigList([
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
]);
