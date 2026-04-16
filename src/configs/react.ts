import eslintReactPlugin from '@eslint-react/eslint-plugin';

import { defineConfig } from '@/utils/define-config.js';

export function react() {
  const {
    rules: eslintReactRules = {},
    ...eslintReactConfig
  } = eslintReactPlugin.configs.recommended;

  return defineConfig([
    {
      ...eslintReactConfig,
      name: 'taiyme/react/setup',
    },
    {
      name: 'taiyme/react/plugin-recommended-rules',
      rules: {
        ...eslintReactRules,
      },
    },
  ]);
}
