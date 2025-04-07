import react from 'eslint-plugin-react'
import ReactNative from 'eslint-plugin-react-native'
import ImportConfig from 'eslint-plugin-import-x'

import { FlatCompat } from '@eslint/eslintrc'

const __dirname = import.meta.dirname

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ImportConfig.flatConfigs.react,
  compat.extends('plugin:react/recommended'),
  {
    plugins: { react, 'react-native': ReactNative.configs.all },
    rules: {
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      'react/react-in-jsx-scope': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
    settings: {
      'import/ignore': ['node_modules/react-native/index\\.js$', '.*\\.svg$'],
    },
  },
]
