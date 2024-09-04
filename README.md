# @taiyme/eslint-config

taiyのためのESLint共有設定です。

## インストール

※ pnpmではない場合は各自で読み替えてください。

次のパッケージをインストールします。

- `eslint`
- `globals`
- `@typescript-eslint/parser`
- `eslint-config-flat-gitignore`
- `@taiyme/eslint-config`

```sh
pnpm add -D eslint globals @typescript-eslint/parser eslint-config-flat-gitignore @taiyme/eslint-config
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

### `eslint.config.js` の設定

`eslint.config.js` を作成し、以下のように構成します。 (`.eslintrc` 形式は非対応)

※ `@taiyme/eslint-config` は `files` を指定していないため、mapメソッドなどを利用して自分で指定してください。

```js
// @ts-check

import taiymeConfig from '@taiyme/eslint-config';
import tsEslintParser from '@typescript-eslint/parser';
import gitignore from 'eslint-config-flat-gitignore';
import globals from 'globals';

const files = ['**/*.{js,jsx,ts,tsx}'];

/** @type {import('eslint').Linter.Config[]} */
export default [
  gitignore(),
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tsEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
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
];
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

※ ESLint Config Inspectorを公開しています: <https://eslint-config.taiy.me/>

`@taiyme/eslint-config` は、次のパッケージ及びプラグインを含むため、追加で記述する必要はありません。

- **configs.typescript**
  - [@typescript-eslint](https://typescript-eslint.io/rules/)
  - [@stylistic/js](https://eslint.style/packages/js)
  - [@stylistic/ts](https://eslint.style/packages/ts)
  - [simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
  - [unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports)
- **configs.react**
  - [react](https://www.npmjs.com/package/eslint-plugin-react)
  - [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
  - [@stylistic/jsx](https://eslint.style/packages/jsx)

`@taiyme/eslint-config` は、次のルールを含むため、指定する必要はありません。

- **configs.typescript**
  - [eslint.configs.recommended](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js)
  - [tsEslint.configs.recommended](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts)
- **configs.react**
  - [reactPlugin.configs['jsx-runtime']](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/jsx-runtime.js)
  - [hooksPlugin.configs.recommended](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js)
  - [jsxA11yPlugin.flatConfigs.recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js)

`@taiyme/eslint-config` は、次のオプションを含むため、指定する必要はありません。

- **configs.react**
  - languageOptions.parserOptions.ecmaFeatures.jsx: `true`
  - settings.react.version: `'detect'`

`@taiyme/eslint-config` は、次の思想を強く支持しているため、抗おうとしないでください。

- Prettierを使わない
- インデントは半角スペース2個
- セミコロンは必須
- 末尾カンマは必須

## ライセンス

[MIT License](./LICENSE)
