import type { Linter } from 'eslint';

import { typescriptRecommended } from './recommended.js';
import { typescriptStylistic } from './stylistic.js';

export const typescript = [
  ...typescriptRecommended,
  ...typescriptStylistic,
] as const satisfies Linter.Config[];
