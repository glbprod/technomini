import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';

const tsTypeCheckedConfigs =
  tseslint.configs['flat/recommended-type-checked'] || [];
const tsTypeCheckedRules =
  (Array.isArray(tsTypeCheckedConfigs)
    ? tsTypeCheckedConfigs.find(
        (c) => c && c.name && c.name.includes('type-checked')
      )?.rules
    : undefined) || {};

export default defineConfig([
  globalIgnores([
    'node_modules/',
    'dist/',
    'public/',
    'backups/',
    'package-lock.json',
    'package.json',
    '*.md',
    'tsconfig*.json',
    'scripts/',
    'src/content/md/',
  ]),
  js.configs.recommended,
  tseslint.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: tsTypeCheckedRules,
  },
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  // Override for config files and scripts (flat config: use languageOptions globals)
  {
    files: [
      '*.config.js',
      '*.config.cjs',
      'tailwind.config.js',
      'vite.config.*',
      'scripts/**',
    ],
    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'script',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },
]);
