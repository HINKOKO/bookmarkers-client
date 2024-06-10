import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adding jsdom to vite for testing
  test: {
    // Making import from vitest as `global` to avoid cumbersome manual imports
    globals: true,
    environment: 'jsdom',
    setUpFiles: './src/tests/setup.js',
  },
});
