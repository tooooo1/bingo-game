import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'assets',
        replacement: resolve(__dirname, 'src/assets'),
      },
      {
        find: 'components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: 'hooks',
        replacement: resolve(__dirname, 'src/hooks'),
      },
      {
        find: 'pages',
        replacement: resolve(__dirname, 'src/pages'),
      },
    ],
  },
});
