import type { ESLint, Linter } from 'eslint';

export function widenTypePlugins<T extends Record<string, ESLint.Plugin>>(plugins: T) {
  return plugins as Readonly<{ [K in keyof T]: ESLint.Plugin; }>;
}

export function widenTypeRules<T extends Linter.RulesRecord>(rules: T) {
  return rules as Readonly<Linter.RulesRecord>;
}
