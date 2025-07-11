import type { Linter } from 'eslint';

import { typescriptRecommendedPlugins, typescriptRecommendedRules } from '@/configs/typescript/recommended.js';
import { typescriptSharedSetup } from '@/configs/typescript/shared.js';
import { typescriptStylisticPlugins, typescriptStylisticRules } from '@/configs/typescript/stylistic.js';
import { widenTypePlugins, widenTypeRules } from '@/utils/widen-types.js';

export const typescriptPlugins = widenTypePlugins({
  ...typescriptRecommendedPlugins,
  ...typescriptStylisticPlugins,
});

export const typescriptRules = widenTypeRules({
  ...typescriptRecommendedRules,
  ...typescriptStylisticRules,
});

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
