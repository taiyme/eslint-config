import { react } from './configs/react.js';
import { typescript } from './configs/typescript.js';
import type * as ESLint from './types/eslint.js';

export default {
  configs: {
    typescript,
    react,
  },
} as const satisfies ESLint.Plugin;
