/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module 'eslint-plugin-jsx-a11y' {
  const plugin: Readonly<
    & Omit<import('eslint').ESLint.Plugin, 'configs'>
    & {
      flatConfigs: {
        recommended: {
          rules: import('eslint').Linter.RulesRecord;
        };
      };
    }
  >;
  export default plugin;
}

declare module 'eslint-plugin-react-hooks' {
  const plugin: Readonly<
    & Omit<import('eslint').ESLint.Plugin, 'configs'>
    & {
      configs: {
        recommended: {
          rules: import('eslint').Linter.RulesRecord;
        };
      };
    }
  >;
  export default plugin;
}
