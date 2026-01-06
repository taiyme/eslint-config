import type { ESLint } from 'eslint';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { defineConfig } from '@/utils/define-config.js';
import { excludeLegacyRules } from '@/utils/exclude-legacy-rules.js';

export function react() {
  return defineConfig([
    {
      name: 'taiyme/react/setup',
      plugins: {
        react: reactPlugin,
        'react-hooks': reactHooksPlugin as ESLint.Plugin,
        'jsx-a11y': jsxA11yPlugin,
      },
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
      name: 'taiyme/react/rules',
      rules: {
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
      },
    },
  ]);
}
