// vite.config.ts - sebagai fallback
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/trackaml-carbonSensingAI/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});