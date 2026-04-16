import fs from 'node:fs/promises';
import { resolve } from 'node:path';

import type { ESLint } from 'eslint';
import type { Promisable } from 'type-fest';
import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import { builtinRules } from 'eslint/use-at-your-own-risk';

async function interopDefault<T>(mod: Promisable<T>): Promise<T extends { default: infer U; } ? U : T> {
  const resolved = await mod;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (resolved as any)?.default ?? resolved;
}

async function getPlugins() {
  const plugins: Record<string, ESLint.Plugin> = {
    '': { rules: Object.fromEntries(builtinRules.entries()) },
    '@typescript-eslint': (await interopDefault(import('typescript-eslint'))).plugin,
    'import-x': (await interopDefault(import('eslint-plugin-import-x'))),
    n: (await interopDefault(import('eslint-plugin-n'))),
    perfectionist: (await interopDefault(import('eslint-plugin-perfectionist'))),
    'unused-imports': (await interopDefault(import('eslint-plugin-unused-imports'))),
    '@stylistic': (await interopDefault(import('@stylistic/eslint-plugin'))),
    ...(await interopDefault(import('@eslint-react/eslint-plugin'))).configs.all.plugins,
  };

  return { plugins } as const;
}

async function main() {
  const cwd = resolve(import.meta.dirname, '..');

  const { plugins } = await getPlugins();

  const dts = await flatConfigsToRulesDTS([{ plugins }], {
    includeAugmentation: false,
  });

  await fs.mkdir(resolve(cwd, 'codegen'), { recursive: true });
  await fs.writeFile(resolve(cwd, 'codegen', 'eslint-typegen.ts'), dts);
}

await main();
