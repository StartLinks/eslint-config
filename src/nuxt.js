const { isPackageExists } = import('local-pkg')

export default isPackageExists('nuxt')
  ? {
      extends: ['@nuxt/eslint-config'],
    }
  : {}
