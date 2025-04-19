import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(() => ({
  base: '/teamproject/',
  plugins: [react(), svgr(), tailwindcss()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://pewniaczki.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
}));
