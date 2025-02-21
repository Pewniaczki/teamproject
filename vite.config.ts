import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/team_project_frontend/',
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
