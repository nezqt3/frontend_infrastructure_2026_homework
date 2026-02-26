import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    curly: 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^react-', '^redux', '^redux-', '^@reduxjs/'],
          ['^@?\\w'],
          ['^@', '^'],
          ['^\\.\\./?'],
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'off',
  },
  ignores: [
    'build/**',
    'dist/**',
    'tools/**',
    '**/*.cjs',
    'package-lock.json',
    '.eslintignore',
    '.lintstagedrc.js',
    '.prettierrc.js',
    'eslint.config.js',
    'vite.config.js',
  ],
};