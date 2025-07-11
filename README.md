# @taiyme/eslint-config

[![Version](https://img.shields.io/npm/v/%40taiyme%2Feslint-config?style=flat)](https://www.npmjs.com/package/@taiyme/eslint-config)
[![License](https://img.shields.io/npm/l/%40taiyme%2Feslint-config?style=flat)](./LICENSE)
[![Donate](https://img.shields.io/badge/donate-%3C3-f96854?style=flat)](https://taiy.me/to/donate)

taiyのためのESLint共有設定です。

## インストール

※ pnpmではない場合は各自で読み替えてください。

次のパッケージをインストールします。

- `eslint`
- `jiti`
- `globals`
- `@typescript-eslint/parser`
- `eslint-config-flat-gitignore`
- `@taiyme/eslint-config`

```sh
pnpm add -D eslint jiti globals @typescript-eslint/parser eslint-config-flat-gitignore @taiyme/eslint-config
```

## セットアップ

### `eslint.config.ts` の設定

`eslint.config.ts` を作成し、次のように構成します。

※ `@taiyme/eslint-config` は `files` を指定していないため、必ず自分で指定してください。

```ts
import type { Linter } from 'eslint';
import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import gitignore from 'eslint-config-flat-gitignore';
import globals from 'globals';

const files = ['**/*.{js,jsx,ts,tsx}'];

export default [
  gitignore(),
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tsEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files,
  },
  ...[
    ...taiymeConfig.configs.typescript,
    // Reactの場合は次の行を追加
    // ...taiymeConfig.configs.react,
  ].map((config) => ({
    ...config,
    files,
  })),
  // ...
] as const satisfies Linter.Config[];
```

### `tsconfig.json` の設定

`tsconfig.json` に、次のオプションを必要に応じて追記します。

```jsonc
{
  "compilerOptions": {
    "strict": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noUncheckedIndexedAccess": true,
    "checkJs": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
  },
}
```

### `package.json` の設定

`package.json` に、次のスクリプトを必要に応じて追記します。

```jsonc
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
  }
}
```

### `.vscode/settings.json` の設定

`.vscode/settings.json` に、次の設定を必要に応じて追記します。

※ [ESLintの拡張機能](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) をインストールする必要があります。

```jsonc
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never",
    "source.removeUnusedImports": "never",
    "source.sortImports": "never",
  },
  "eslint.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
  "typescript.tsdk": "./node_modules/typescript/lib",
}
```

## 仕様

ESLint Config Inspectorを参照してください: <https://eslint-config.taiy.me/>

## ライセンス

[MIT License](./LICENSE)
