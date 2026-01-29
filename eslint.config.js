import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';

// Extract type-checked rules so we can apply them only to TS files
const tsTypeCheckedConfigs =
  tseslint.configs['flat/recommended-type-checked'] || [];
const tsTypeCheckedRules =
  (Array.isArray(tsTypeCheckedConfigs)
    ? tsTypeCheckedConfigs.find(
        (c) => c && c.name && c.name.includes('type-checked')
      )?.rules
    : undefined) || {};

export default defineConfig([
  globalIgnores(['dist']),
  // base JS recommended rules (flat config)
  js.configs.recommended,
  // TypeScript plugin flat config (non-type-checked)
  tseslint.configs['flat/recommended'],
  // Apply type-checked rules only to TS files
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
  // React hooks and react-refresh plugin flat configs
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  // Project-specific overrides (parserOptions for type-aware rules)
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
]);
