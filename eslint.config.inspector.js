// @ts-check

import taiymeConfig from '@taiyme/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...taiymeConfig.configs.typescript,
  ...taiymeConfig.configs.react,
];
