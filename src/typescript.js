import TSESLint from 'typescript-eslint'
import ImportConfig from 'eslint-plugin-import-x'

import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'

const x = [
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
        }),
      ],
    },
  },
]

export default [
  TSESLint.configs.eslintRecommended,
  ...x,
  {
    files: ['*.ts', '*.tsx'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off', // allow require
      '@typescript-eslint/no-explicit-any': 'off', // allow any type
      '@typescript-eslint/no-require-imports': 'off'
    },
  },
]
