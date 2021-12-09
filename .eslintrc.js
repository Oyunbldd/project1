module.exports = {
  root: true,
  env: {
    node: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'prettier', '@react-native-community'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-native',
    'jest',
  ],
  rules: {
    'no-empty-function': 'error',
    'no-var': 'error',
    complexity: [
      'error',
      {
        max: 8,
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-unused-styles': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
