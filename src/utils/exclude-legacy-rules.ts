import type { Linter } from 'eslint';
import stylisticPlugin from '@stylistic/eslint-plugin';

const LEGACY_RULE_LIST = Object.keys(stylisticPlugin.configs['disable-legacy'].rules ?? {});

export function excludeLegacyRules(rules: Partial<Linter.RulesRecord>): Partial<Linter.RulesRecord> {
  return Object.fromEntries(
    Object.entries(rules)
      .filter(([ruleName]) => !LEGACY_RULE_LIST.includes(ruleName)),
  );
}
