import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
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
