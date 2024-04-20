module.exports = {
  root: true,
  plugins: ['react'],
  extends: ['plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-curly-brace-presence': 'error',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
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
  },
}
