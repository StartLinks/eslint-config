import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import ImportConfig from 'eslint-plugin-import-x'
// import nodePlugin from 'eslint-plugin-n'
import globals from 'globals'

export default [
  eslintPluginUnicorn.configs.recommended,
  ImportConfig.flatConfigs.recommended,
  // nodePlugin.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
    },
    rules: {
      // 'n/global-require': 'off',
      'unicorn/no-null': 'off', // allow null value
      'unicorn/prefer-module': 'off', // support common module
      'unicorn/filename-case': 'off', // force file name
      'unicorn/prevent-abbreviations': 'off', // force variable name
      'unicorn/no-await-expression-member': 'off', // access await expression
      'unicorn/no-anonymous-default-export': 'off', // allow anonymous export
      'unicorn/no-object-as-default-parameter': 'off', // allow empty object
      'unicorn/no-array-reduce': 'off', // allow array reduce
      'unicorn/prefer-ternary': 'off', // allow ternary operator for readability
    },
  },
]
