import type { Linter } from 'eslint';

import { react } from '@/configs/react.js';
import { stylistic } from '@/configs/stylistic.js';
import { typescript } from '@/configs/typescript.js';
import { packageName, packageVersion } from '@/const.js';

type TaiymeConfig = {
  readonly meta: {
    readonly name: string;
    readonly version: string;
  };
  readonly configs: {
    /**
     * TypeScript 推奨ルール
     * @see {@link https://eslint-config.taiy.me/}
     */
    readonly typescript: Linter.Config[];
    /**
     * React 推奨ルール
     * @see {@link https://eslint-config.taiy.me/}
     */
    readonly react: Linter.Config[];
    /**
     * TypeScript/JSX 文体ルール
     * @see {@link https://eslint-config.taiy.me/}
     */
    readonly stylistic: Linter.Config[];
  };
};

const taiymeConfig: TaiymeConfig = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: {
    typescript: typescript(),
    react: react(),
    stylistic: stylistic(),
  },
};

export default taiymeConfig;
