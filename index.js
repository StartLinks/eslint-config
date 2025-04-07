import js from '@eslint/js'
import eslint from '@eslint/js'
import { readGitignoreFiles } from 'eslint-gitignore'
import javascript from './src/javascript.js'
import typescript from './src/typescript.js'
import importConfig from './src/import.js'
import reactNativeConfig from './src/react-native.js'
import packageConfig from './src/package.js'
import tseslint from 'typescript-eslint'
import json from './src/json.js'
import markdown from './src/markdown.js'
import prettier from './src/prettier.js'

const proto = [
  js.configs.recommended,
  // // import lint
  importConfig,
  // // common lint
  javascript,
  typescript,
  // // file lint
  json,
  markdown,
  packageConfig,
  // // format lint
  prettier,
]

/** @type{import('typescript-eslint').Config} */
const more = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
    },
    ignores: readGitignoreFiles(),
  },
]

export const shared = [...proto.flat(), more]
export const reactNative = [...proto.flat(), reactNativeConfig, more]

export function ts(rules) {
  return tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.base,
    ...rules,
  )
}
