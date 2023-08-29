# @fzf404/eslint-config

[![npm](https://img.shields.io/npm/v/@fzf404/eslint-config?color=f03e3e)](https://npmjs.com/package/@fzf404/eslint-config)
[![star](https://img.shields.io/github/stars/fzf404/eslint-config?color=1c7ed6)](https://github.com/fzf404/eslint-config)
[![license](https://img.shields.io/npm/l/@fzf404/eslint-config?color=37b24d)](https://github.com/fzf404/eslint-config/blob/main/LICENSE)
[![language](https://img.shields.io/badge/language-简体中文-f76707)](https://github.com/fzf404/eslint-config)

My personal ESLint config ( 我的 ESLint 配置 )

## Features ( 特性 )

- Support ESM module ( 支持 ESM 模块 )
- Compatible with Prettier 3 ( 兼容 Prettier 3 )
- Support `package.json` order ( 支持 `packge.json` 排序 )
- Support Vue 3 and TypeScirpt ( 支持 Vue 3 和 TypeScript )
- Ignore `.gitignore` included files ( 忽略 `.gitignore` 包含的文件 )

## Plugins ( 插件 )

- Imports validate ( Import 验证 ) [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- Powerful ESLint rules ( 实用 ESLint 规则 ) [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Install ( 安装 )

```bash
npm i -D eslint @fzf404/eslint-config
```

## Usage ( 使用 )

Edit `package.json` ( 编辑 `package.json` )

```jsonc
// script
"scripts": {
  "lint": "eslint --cache --fix ."
}

// config
"eslintConfig": {
  "extends": [
    "@fzf404/eslint-config"
  ]
}
```
