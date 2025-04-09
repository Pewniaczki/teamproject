import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(() => ({
  base: '/',
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://pewniaczki.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
}));
