import ESLintImport from 'eslint-plugin-import-x'
import SimpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  ESLintImport.flatConfigs.recommended,
  {
    plugins: { 'simple-import-sort': SimpleImportSort, imports: ESLintImport },
    rules: {
      'import/named': 'off', // verified import (not support vue)
      'import/no-unresolved': 'off', // resolved import (not support vite)
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^node:'], [`^@?\\w`], ['^'], [`^\\.`], [`^\u0000`]],
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src/'],
        },
      },
    }
  },
]
