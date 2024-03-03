const path = require('path')

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import', 'simple-import-sort', 'folders', 'unicorn'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'next'],
  env: {
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'no-extra-semi': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    'react/self-closing-comp': 'error',
    'react/jsx-curly-brace-presence': 'error',
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
    'no-restricted-syntax': [
      'error',
      {
        selector: "ImportDeclaration[source.value='react'] > ImportSpecifier[imported.name='FC']",
        message:
          "Don't use 'FC' as a type. Use explicit types for props and return. You must manually create a custom interface for props and use 'JSX.Element' for the return.",
      },
      {
        selector: "ImportDeclaration[source.value='react'] > ImportDefaultSpecifier[local.name='React']",
        message: "Starting from React 17, it is not necessary to import 'React' anymore.",
      },
      {
        selector: "TSQualifiedName[left.name='React']",
        message: "Import directly from 'react' instead.",
      },
    ],
    'folders/match-regex': ['error', '^[a-z-\\\\]+$', __dirname.split(path.sep).reverse()[0]],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
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
      files: ['next.config.mjs', '.eslintrc.cjs'],
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
