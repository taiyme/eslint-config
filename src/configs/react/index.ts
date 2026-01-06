import { reactRecommendedPlugins, reactRecommendedRules } from '@/configs/react/recommended.js';
import { reactSharedSetup } from '@/configs/react/shared.js';
import { reactStylisticPlugins, reactStylisticRules } from '@/configs/react/stylistic.js';
import { packageName } from '@/const.js';
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
    name: `${packageName}/react/setup`,
  },
  {
    name: `${packageName}/react/plugins`,
    plugins: reactPlugins,
  },
  {
    name: `${packageName}/react/rules`,
    rules: reactRules,
  },
]);
