import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    proxy: {
      // with RegEx: http://localhost:3000//contas-casa/ -> https://contas-casa.vercel.app/
      '^/projetos/contas-casa/.*': {
        target: 'https://contas-casa.vercel.app',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/projetos\/contas-casa/, '')
      }
    }
  }
});
