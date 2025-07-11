import type { Linter } from 'eslint';

import { reactRecommendedPlugins, reactRecommendedRules } from '@/configs/react/recommended.js';
import { reactSharedSetup } from '@/configs/react/shared.js';
import { reactStylisticPlugins, reactStylisticRules } from '@/configs/react/stylistic.js';
import { widenTypePlugins, widenTypeRules } from '@/utils/widen-types.js';

export const reactPlugins = widenTypePlugins({
  ...reactRecommendedPlugins,
  ...reactStylisticPlugins,
});

export const reactRules = widenTypeRules({
  ...reactRecommendedRules,
  ...reactStylisticRules,
});

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
