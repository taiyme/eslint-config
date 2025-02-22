import type { Linter } from 'eslint';

import { reactRecommended } from './recommended.js';
import { reactStylistic } from './stylistic.js';

export const react = [
  ...reactRecommended,
  ...reactStylistic,
] as const satisfies Linter.Config[];
