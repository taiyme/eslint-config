import type { ESLint } from 'eslint';

import { reactConfigs } from './configs/react/index.js';
import { reactRecommendedConfigs } from './configs/react/recommended.js';
import { reactStylisticConfigs } from './configs/react/stylistic.js';
import { typescriptConfigs } from './configs/typescript/index.js';
import { typescriptRecommendedConfigs } from './configs/typescript/recommended.js';
import { typescriptStylisticConfigs } from './configs/typescript/stylistic.js';
import { name, version } from './meta.js';

export default {
  meta: {
    name,
    version,
  },
  configs: {
    /**
     * TypeScript用の基本ルールセット
     * @see {@link https://eslint-config.taiy.me/}
     */
    'typescript/recommended': typescriptRecommendedConfigs,

    /**
     * TypeScript用のスタイル系ルールセット
     * @see {@link https://eslint-config.taiy.me/}
     */
    'typescript/stylistic': typescriptStylisticConfigs,

    /**
     * TypeScript用のルールセット (recommended + stylistic)
     * @see {@link https://eslint-config.taiy.me/}
     */
    typescript: typescriptConfigs,

    /**
     * React用の基本ルールセット
     * @see {@link https://eslint-config.taiy.me/}
     */
    'react/recommended': reactRecommendedConfigs,

    /**
     * React用のスタイル系ルールセット
     * @see {@link https://eslint-config.taiy.me/}
     */
    'react/stylistic': reactStylisticConfigs,

    /**
     * React用のルールセット (recommended + stylistic)
     * @see {@link https://eslint-config.taiy.me/}
     */
    react: reactConfigs,
  },
} as const satisfies ESLint.Plugin;
