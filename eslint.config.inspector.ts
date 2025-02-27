import taiymeConfig from '@taiyme/eslint-config';
import type { Linter } from 'eslint';

export default [
  ...taiymeConfig.configs['typescript/recommended'],
  ...taiymeConfig.configs['typescript/stylistic'],
  ...taiymeConfig.configs.typescript,
  ...taiymeConfig.configs['react/recommended'],
  ...taiymeConfig.configs['react/stylistic'],
  ...taiymeConfig.configs.react,
] as const satisfies Linter.Config[];
