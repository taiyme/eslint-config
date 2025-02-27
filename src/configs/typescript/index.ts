import type { ESLint, Linter } from 'eslint';

import { typescriptRecommendedPlugins, typescriptRecommendedRules } from './recommended.js';
import { typescriptSharedSetup } from './shared.js';
import { typescriptStylisticPlugins, typescriptStylisticRules } from './stylistic.js';

export const typescriptPlugins = {
  ...typescriptRecommendedPlugins,
  ...typescriptStylisticPlugins,
} as const satisfies Record<string, ESLint.Plugin>;

export const typescriptRules = {
  ...typescriptRecommendedRules,
  ...typescriptStylisticRules,
} as const satisfies Linter.RulesRecord as Linter.RulesRecord; // satisfies T as T は型安全かつ型制限するため

export const typescriptConfigs = [
  {
    ...typescriptSharedSetup,
    name: 'taiyme/typescript/setup',
  },
  {
    name: 'taiyme/typescript/plugins',
    plugins: typescriptPlugins,
  },
  {
    name: 'taiyme/typescript/rules',
    rules: typescriptRules,
  },
] as const satisfies Linter.Config[];
