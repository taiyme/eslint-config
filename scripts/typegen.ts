import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

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
  const plugins = {
    '': { rules: Object.fromEntries(builtinRules.entries()) },
    '@typescript-eslint': (await interopDefault(import('typescript-eslint'))).plugin,
    import: (await interopDefault(import('eslint-plugin-import'))),
    perfectionist: (await interopDefault(import('eslint-plugin-perfectionist'))),
    'unused-imports': (await interopDefault(import('eslint-plugin-unused-imports'))),
    react: (await interopDefault(import('eslint-plugin-react'))),
    'react-hooks': (await interopDefault(import('eslint-plugin-react-hooks'))) as ESLint.Plugin,
    'jsx-a11y': (await interopDefault(import('eslint-plugin-jsx-a11y'))),
    '@stylistic': (await interopDefault(import('@stylistic/eslint-plugin'))),
  } satisfies Record<string, ESLint.Plugin>;

  return { plugins } as const;
}

async function main() {
  const cwd = fileURLToPath(new URL('..', import.meta.url));

  const { plugins } = await getPlugins();

  const dts = await flatConfigsToRulesDTS([{ plugins }], {
    includeAugmentation: false,
  });

  await fs.mkdir(resolve(cwd, 'codegen'), { recursive: true });
  await fs.writeFile(resolve(cwd, 'codegen', 'eslint-typegen.ts'), dts);
}

await main();
