/** @type {import('eslint-define-config').ESLintConfig} */
export default {
  overrides: [
    {
      files: ['**/package.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'private',
              'keywords',
              'categories',
              'description',
              'license',
              'author',
              'contributors',
              'funding',
              'homepage',
              'repository',
              'unpkg',
              'jsdelivr',
              'type',
              'main',
              'module',
              'types',
              'typesVersions',
              'exports',
              'bin',
              'icon',
              'files',
              'sideEffects',
              'packageManager',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'bundleDependencies',
              'optionalDependencies',
              'engines',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'lint-staged',
              'simple-git-hooks',
              'prettier',
              'stylelint',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|bundled|optional)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
        ],
        'jsonc/sort-array-values': [
          'error',
          {
            pathPattern: '^files$',
            order: { type: 'asc' },
          },
        ],
      },
    },
  ],
}
