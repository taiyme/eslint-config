import type { ESLint, Linter } from 'eslint';
import type { SetRequired } from 'type-fest';

import type { RuleOptions } from '@/codegen/eslint-typegen.js';

type PluginMap = Record<string, ESLint.Plugin>;

export function definePluginMap<T extends PluginMap>(plugins: T) {
  return plugins as PluginMap;
}

type RuleMap = Record<string, Linter.RuleEntry>;

export function defineRuleMap<T extends RuleMap & RuleOptions>(rules: T) {
  return rules as RuleMap;
}

type ConfigList = SetRequired<Linter.Config, 'name'>[];

export function defineConfigList<T extends ConfigList>(configs: T) {
  return configs as ConfigList;
}
