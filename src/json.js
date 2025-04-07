import JSONC from 'eslint-plugin-jsonc'

export default [
  JSONC.configs['flat/recommended-with-jsonc'],
  {
    rules: {
      'jsonc/sort-array-values': [
        'error',
        {
          pathPattern: '^files$',
          order: { type: 'asc' },
        },
      ],
    },
  },
]
