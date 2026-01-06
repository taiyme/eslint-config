import type { ESLint, Linter } from 'eslint';
import type { SetRequired } from 'type-fest';

type PluginMap = Record<string, ESLint.Plugin>;

export function definePluginMap<T extends PluginMap>(plugins: T) {
  return plugins as { [K in keyof T]: ESLint.Plugin; };
}

type RuleMap = Record<string, Linter.RuleEntry>;

export function defineRuleMap<T extends RuleMap>(rules: T) {
  return rules as RuleMap;
}

type ConfigList = SetRequired<Linter.Config, 'name'>[];

export function defineConfigList<T extends ConfigList>(configs: T) {
  return configs as ConfigList;
}
