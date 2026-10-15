import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-config-prettier/flat'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

/** @type {import("eslint").Linter.Config[]} */
export default defineConfig(
  {
    ignores: [
      ...[
        // SECTION:&k9FB Don't forget to keep .gitignore (SECTION:8!c6A) and .prettierignore (SECTION:72&Qg) in sync.
        '**/node_modules/**',
        '**/.agents/**',
        '**/.turbo/**',
        '**/dist/**',
        '**/.next/**',
        '**/.expo/**',
        '**/.vercel/**',
        '**/*.log',
        '**/*.tsbuildinfo',
        '**/.DS_Store',
        '**/out/**',
        '**/build/**',
        '**/next-env.d.ts',
        '**/expo-env.d.ts',
        '**/uniwind-types.d.ts',
        '**/ios/**',
        '**/android/**',
      ],
      ...[
        // SECTION:!j6Np Don't forget to keep .prettierignore (SECTION:9@CsC) in sync.
        '**/pnpm-lock.yaml',
        '**/skills-lock.json',
        '**/.cursor/**',
      ],
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^\\u0000', '^node:', '^@?\\w', '^@/', '^', '^\\.']],
        },
      ],
      'simple-import-sort/exports': 'error',
      'object-shorthand': ['error', 'always'],
      'no-useless-rename': 'error',
    },
  },
)

/**
 * App framework overlays (Expo, Next.js). Spread after framework configs so
 * prettier disables conflicting stylistic rules from those presets.
 */
export const app = defineConfig(
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { react },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/jsx-newline': ['error', { prevent: true }],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    },
  },
  prettier,
)
