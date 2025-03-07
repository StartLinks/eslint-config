const { isPackageExists } = import('local-pkg')

export default isPackageExists('prettier')
  ? {
      extends: ['plugin:prettier/recommended'],
    }
  : {}
