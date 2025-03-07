export default {
  extends: ['plugin:jsonc/recommended-with-jsonc'],
  rules: {
    'jsonc/sort-array-values': [
      'error',
      {
        pathPattern: '^files$',
        order: { type: 'asc' },
      },
    ],
  },
}
