import type { Linter } from 'eslint';

import { reactConfigs } from '@/configs/react/index.js';
import { reactRecommendedConfigs } from '@/configs/react/recommended.js';
import { reactStylisticConfigs } from '@/configs/react/stylistic.js';
import { typescriptConfigs } from '@/configs/typescript/index.js';
import { typescriptRecommendedConfigs } from '@/configs/typescript/recommended.js';
import { typescriptStylisticConfigs } from '@/configs/typescript/stylistic.js';
import { packageName, packageVersion } from '@/const.js';

type TaiymeConfig = {
  readonly meta: {
    readonly name: string;
    readonly version: string;
  };
  readonly configs: {
    /**
     * TypeScript用の基本ルールセット
     * @see {@link https://eslint-config.taiy.me/}
     */
    readonly 'typescript/recommended': Linter.Config[];
    /**
     * TypeScript用のスタイル系ルールセット
     * @see {@link https://eslint-config.taiy.me/}
     */
    readonly 'typescript/stylistic': Linter.Config[];
    /**
     * TypeScript用のルールセット (recommended + stylistic)
     * @see {@link https://eslint-config.taiy.me/}
     */
    readonly typescript: Linter.Config[];
    /**
     * React用の基本ルールセット
     * @see {@link https://eslint-config.taiy.me/}
     */
    readonly 'react/recommended': Linter.Config[];
    /**
     * React用のスタイル系ルールセット
     * @see {@link https://eslint-config.taiy.me/}
     */
    readonly 'react/stylistic': Linter.Config[];
    /**
     * React用のルールセット (recommended + stylistic)
     * @see {@link https://eslint-config.taiy.me/}
     */
    readonly react: Linter.Config[];
  };
};

const taiymeConfig: TaiymeConfig = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: {
    'typescript/recommended': typescriptRecommendedConfigs,
    'typescript/stylistic': typescriptStylisticConfigs,
    typescript: typescriptConfigs,
    'react/recommended': reactRecommendedConfigs,
    'react/stylistic': reactStylisticConfigs,
    react: reactConfigs,
  },
};

export default taiymeConfig;
