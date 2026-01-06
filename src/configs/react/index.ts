import { reactRecommendedPlugins, reactRecommendedRules } from '@/configs/react/recommended.js';
import { reactSharedSetup } from '@/configs/react/shared.js';
import { reactStylisticPlugins, reactStylisticRules } from '@/configs/react/stylistic.js';
import { defineConfigList, definePluginMap, defineRuleMap } from '@/utils/eslint.js';

export const reactPlugins = definePluginMap({
  ...reactRecommendedPlugins,
  ...reactStylisticPlugins,
});

export const reactRules = defineRuleMap({
  ...reactRecommendedRules,
  ...reactStylisticRules,
});

export const reactConfigs = defineConfigList([
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
]);
