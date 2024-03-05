module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@wemake-services/typescript/recommended',
    '@wemake-services/javascript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "unicorn/filename-case": "off",
    'space-in-parens': ['error', 'always'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
