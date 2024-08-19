import { react } from './configs/react.js';
import { typescript } from './configs/typescript.js';
import type * as ESLint from './types/eslint.js';

export const configs = {
  typescript,
  react,
} as const satisfies Record<string, ESLint.Config[]>;

export default {
  configs,
} as const satisfies Pick<ESLint.Plugin, 'configs'>;
