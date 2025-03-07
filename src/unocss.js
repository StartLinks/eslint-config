const { isPackageExists } = import('local-pkg')

export default isPackageExists('unocss')
  ? {
      extends: ['@unocss/eslint-config'],
    }
  : {}
