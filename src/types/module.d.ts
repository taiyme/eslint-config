declare module 'eslint-plugin-jsx-a11y' {
  const plugin: Readonly<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    & Omit<import('./eslint.js').Plugin, 'configs'>
    & {
      flatConfigs: {
        recommended: {
          // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          rules: import('./eslint.js').Rules;
        };
      };
    }
  >;
  export default plugin;
}

declare module 'eslint-plugin-react' {
  const plugin: Readonly<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    & Omit<import('./eslint.js').Plugin, 'configs'>
    & {
      configs: {
        recommended: {
          // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          rules: import('./eslint.js').Rules;
        };
        'jsx-runtime': {
          // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          rules: import('./eslint.js').Rules;
        };
      };
    }
  >;
  export default plugin;
}

declare module 'eslint-plugin-react-hooks' {
  const plugin: Readonly<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    & Omit<import('./eslint.js').Plugin, 'configs'>
    & {
      configs: {
        recommended: {
          // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          rules: import('./eslint.js').Rules;
        };
      };
    }
  >;
  export default plugin;
}
