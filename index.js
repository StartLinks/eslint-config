const { readGitignoreFiles } = require('eslint-gitignore')

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    // import lint
    './src/import.js',
    // common lint
    './src/javascript.js',
    './src/typescript.js',
    // framework lint
    './src/nuxt.js',
    './src/vue.js',
    './src/react.js',
    // style lint
    './src/unocss.js',
    './src/tailwindcss.js',
    // file lint
    './src/json.js',
    './src/package.js',
    './src/markdown.js',
    // format lint
    './src/prettier.js',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  ignorePatterns: readGitignoreFiles(),
}
