import stylisticPlugin from '@stylistic/eslint-plugin';

import { reactSharedSetup } from '@/configs/react/shared.js';
import { packageName } from '@/const.js';
import { defineConfigList, definePluginMap, defineRuleMap } from '@/utils/eslint.js';

export const reactStylisticPlugins = definePluginMap({
  '@stylistic': stylisticPlugin,
});

export const reactStylisticRules = defineRuleMap({
  '@stylistic/jsx-child-element-spacing': 'warn',
  '@stylistic/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
  '@stylistic/jsx-closing-tag-location': 'warn',
  '@stylistic/jsx-curly-brace-presence': ['warn', {
    props: 'never',
    children: 'ignore',
    propElementValues: 'always',
  }],
  '@stylistic/jsx-curly-newline': ['warn', {
    multiline: 'consistent',
    singleline: 'consistent',
  }],
  '@stylistic/jsx-curly-spacing': ['warn', {
    when: 'never',
    attributes: {
      allowMultiline: true,
    },
    children: true,
    spacing: {
      objectLiterals: 'never',
    },
  }],
  '@stylistic/jsx-equals-spacing': ['warn', 'never'],
  '@stylistic/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
  '@stylistic/jsx-function-call-newline': ['warn', 'multiline'],
  '@stylistic/jsx-indent-props': ['warn', 2],
  '@stylistic/jsx-max-props-per-line': ['warn', {
    maximum: {
      single: 3,
      multi: 1,
    },
  }],
  '@stylistic/jsx-pascal-case': 'warn',
  '@stylistic/jsx-self-closing-comp': 'warn',
  '@stylistic/jsx-tag-spacing': ['warn', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never',
  }],
  '@stylistic/jsx-wrap-multilines': ['warn', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line',
    propertyValue: 'parens-new-line',
  }],
});

export const reactStylisticConfigs = defineConfigList([
  {
    ...reactSharedSetup,
    name: `${packageName}/react/stylistic/setup`,
  },
  {
    name: `${packageName}/react/stylistic/plugins`,
    plugins: reactStylisticPlugins,
  },
  {
    name: `${packageName}/react/stylistic/rules`,
    rules: reactStylisticRules,
  },
]);
