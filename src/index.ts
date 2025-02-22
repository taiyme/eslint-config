import type { ESLint } from 'eslint';

import { react } from './configs/react/index.js';
import { reactRecommended } from './configs/react/recommended.js';
import { reactStylistic } from './configs/react/stylistic.js';
import { typescript } from './configs/typescript/index.js';
import { typescriptRecommended } from './configs/typescript/recommended.js';
import { typescriptStylistic } from './configs/typescript/stylistic.js';

export default {
  configs: {
    typescript,
    'typescript/recommended': typescriptRecommended,
    'typescript/stylistic': typescriptStylistic,
    react,
    'react/recommended': reactRecommended,
    'react/stylistic': reactStylistic,
  },
} as const satisfies ESLint.Plugin;
