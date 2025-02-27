import type { ESLint, Linter } from 'eslint';

import { reactRecommendedPlugins, reactRecommendedRules } from './recommended.js';
import { reactSharedSetup } from './shared.js';
import { reactStylisticPlugins, reactStylisticRules } from './stylistic.js';

export const reactPlugins = {
  ...reactRecommendedPlugins,
  ...reactStylisticPlugins,
} as const satisfies Record<string, ESLint.Plugin>;

export const reactRules = {
  ...reactRecommendedRules,
  ...reactStylisticRules,
} as const satisfies Linter.RulesRecord as Linter.RulesRecord; // satisfies T as T は型安全かつ型制限するため

export const reactConfigs = [
  {
    ...reactSharedSetup,
    name: 'taiyme/react/setup',
  },
  {
    name: 'taiyme/react/plugins',
    plugins: reactPlugins,
  },
  {
    name: 'taiyme/react/rules',
    rules: reactRules,
  },
] as const satisfies Linter.Config[];
