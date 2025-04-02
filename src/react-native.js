const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('react-native')
  ? {
      plugins: ['react', 'react-native'],
      rules: {
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react/react-in-jsx-scope': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
      extends: ['plugin:react/recommended'],
      settings: {
        'import/ignore': [
          'node_modules/react-native/index\\.js$',
          '**/*\\.svg$',
        ],
      },
    }
  : {}
