import type * as ESLint from '../../types/eslint.js';
import { typescriptRecommended } from './recommended.js';
import { typescriptStylistic } from './stylistic.js';

export const typescript = [
  ...typescriptRecommended,
  ...typescriptStylistic,
] as const satisfies ESLint.Config[];
