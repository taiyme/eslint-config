import { typescriptRecommendedPlugins, typescriptRecommendedRules } from '@/configs/typescript/recommended.js';
import { typescriptSharedSetup } from '@/configs/typescript/shared.js';
import { typescriptStylisticPlugins, typescriptStylisticRules } from '@/configs/typescript/stylistic.js';
import { packageName } from '@/const.js';
import { defineConfigList, definePluginMap, defineRuleMap } from '@/utils/eslint.js';

export const typescriptPlugins = definePluginMap({
  ...typescriptRecommendedPlugins,
  ...typescriptStylisticPlugins,
});

export const typescriptRules = defineRuleMap({
  ...typescriptRecommendedRules,
  ...typescriptStylisticRules,
});

export const typescriptConfigs = defineConfigList([
  {
    ...typescriptSharedSetup,
    name: `${packageName}/typescript/setup`,
  },
  {
    name: `${packageName}/typescript/plugins`,
    plugins: typescriptPlugins,
  },
  {
    name: `${packageName}/typescript/rules`,
    rules: typescriptRules,
  },
]);
