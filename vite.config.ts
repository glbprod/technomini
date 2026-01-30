import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), markdown({ mode: [Mode.HTML] })],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});
