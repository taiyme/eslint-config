import taiymeConfig from '@taiyme/eslint-config';
import type { Linter } from 'eslint';

export default [
  ...taiymeConfig.configs.typescript,
  ...taiymeConfig.configs.react,
] as const satisfies Linter.Config[];
