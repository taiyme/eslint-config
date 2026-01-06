import { typescriptRecommendedPlugins, typescriptRecommendedRules } from '@/configs/typescript/recommended.js';
import { typescriptSharedSetup } from '@/configs/typescript/shared.js';
import { typescriptStylisticPlugins, typescriptStylisticRules } from '@/configs/typescript/stylistic.js';
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
]);
