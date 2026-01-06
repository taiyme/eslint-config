import type { Linter } from 'eslint';
import type { SetRequired } from 'type-fest';

import type { RuleOptions } from '@/codegen/eslint-typegen.js';

type TypedLinterConfig = (
  & SetRequired<Linter.Config, 'name'>
  & {
    rules?: RuleOptions;
  }
);

export function defineConfig(configs: TypedLinterConfig[]) {
  return configs as Linter.Config[];
}
