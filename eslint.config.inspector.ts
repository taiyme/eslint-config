import type { Linter } from 'eslint';
import taiymeConfig from '@taiyme/eslint-config';

export default [
  ...taiymeConfig.configs['typescript/recommended'],
  ...taiymeConfig.configs['typescript/stylistic'],
  ...taiymeConfig.configs.typescript,
  ...taiymeConfig.configs['react/recommended'],
  ...taiymeConfig.configs['react/stylistic'],
  ...taiymeConfig.configs.react,
] as const satisfies Linter.Config[];
