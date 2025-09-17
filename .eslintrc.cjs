/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  rules: {
    'prefer-const': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }]
  }
};
