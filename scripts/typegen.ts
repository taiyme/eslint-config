import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Linter } from 'eslint';
import taiymeConfig from '@taiyme/eslint-config';
import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import { builtinRules } from 'eslint/use-at-your-own-risk';

async function main() {
  const cwd = fileURLToPath(new URL('..', import.meta.url));

  const configs = [
    ...Object.values(taiymeConfig.configs as Record<string, Linter.Config[]>).flat(1),
    {
      plugins: {
        '': {
          rules: Object.fromEntries(builtinRules.entries()),
        },
      },
    },
  ] satisfies Linter.Config[];

  const dts = await flatConfigsToRulesDTS(configs, {
    includeAugmentation: false,
  });

  await fs.mkdir(resolve(cwd, 'src', 'codegen'), { recursive: true });
  await fs.writeFile(resolve(cwd, 'src', 'codegen', 'eslint-typegen.ts'), dts);
}

await main();
