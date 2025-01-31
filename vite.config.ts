import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  root: './', // Ensure this points to the correct root directory
  build: {
    outDir: 'dist', // Ensure the output directory is correct
    rollupOptions: {
      input: {
        main: './index.html', // Ensure the entry point is correct
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Ensure the alias is correct
    },
  },
  plugins: [react()],
});