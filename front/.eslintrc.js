const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-typescript'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': ['error', { 'code': 120 }],
    'import/prefer-default-export': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'object-curly-newline': ['error', {
      multiline: true,
      minProperties: 1,
    }]
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
        node: {
            paths: [path.resolve(__dirname, 'src')],
        },
    },
  },
  plugins: ['react', '@typescript-eslint', 'import'],
};
