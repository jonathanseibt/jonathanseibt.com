const path = require('path')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort', 'folders', 'unicorn'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    'no-extra-semi': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: false,
        allowHigherOrderFunctions: false,
        allowDirectConstAssertionInArrowFunctions: false,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'sort-imports': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-implicit-coercion': 'error',
    'eol-last': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-useless-rename': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    'folders/match-regex': ['error', '^[a-z-\\\\]+$', __dirname.split(path.sep).reverse()[0]],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'func-style': ['error', 'declaration'],
  },
  overrides: [
    {
      files: '*.*js',
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['app.config.ts', 'babel.config.js', 'metro.config.js', '.eslintrc*', 'next.config.mjs'],
      rules: {
        'object-curly-newline': [
          'error',
          {
            ObjectExpression: 'always',
            ObjectPattern: {
              multiline: true,
            },
          },
        ],
      },
    },
  ],
}
