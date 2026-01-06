import taiymeConfig from '@taiyme/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  taiymeConfig.configs.typescript,
  taiymeConfig.configs.react,
  taiymeConfig.configs.stylistic,
]);
