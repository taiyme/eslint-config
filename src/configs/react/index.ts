import type * as ESLint from '../../types/eslint.js';
import { reactRecommended } from './recommended.js';
import { reactStylistic } from './stylistic.js';

export const react = [
  ...reactRecommended,
  ...reactStylistic,
] as const satisfies ESLint.Config[];
