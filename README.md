# @taiyme/eslint-config

[![License](https://img.shields.io/npm/l/%40taiyme%2Feslint-config?style=flat)](./LICENSE)
[![Version](https://img.shields.io/npm/v/%40taiyme%2Feslint-config?style=flat)](https://www.npmjs.com/package/@taiyme/eslint-config)

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

### ピア依存関係の修正

peerDependenciesに関する警告を解消するには、`package.json` に `pnpm.overrides` フィールドを追加します。

```jsonc
{
  "pnpm": {
    "overrides": {
      "eslint": "$eslint"
    }
  }
}
```

依存関係を再インストールします。

```sh
pnpm install
```

## 使い方

### `eslint.config.ts` の設定

`eslint.config.ts` を作成し、以下のように構成します。

※ `@taiyme/eslint-config` は `files` を指定していないため、mapメソッドなどを利用して自分で指定してください。

```js
import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
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
    ...taiymeConfig.configs.react,
  ].map((config) => ({
    ...config,
    files,
  })),
  // ...
] as const satisfies Linter.Config[];
```

### `package.json` の `scripts` を更新

`package.json` に、ESLintを実行するスクリプトを追加します。

```jsonc
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
  }
}
```

### VS Codeで自動修正を有効にする

[ESLintの拡張機能](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) をインストールし、 `.vscode/settings.json` を作成して以下のように構成します。

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

### 思想

`@taiyme/eslint-config` は、次の思想を強く支持しているため、抗おうとしないでください。

- Prettierを使わない
- インデントは半角スペース2個
- セミコロンは必須
- 末尾カンマは必須

## ライセンス

[MIT License](./LICENSE)
