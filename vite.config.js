import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: './', // Ensure the base path is set correctly for GitHub Pages
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        entryFileNames: 'assets/index.js', // Set a predictable name for the entry file
        chunkFileNames: 'assets/[name].js', // Set a predictable name for chunk files
        assetFileNames: 'assets/[name].[ext]' // Set a predictable name for asset files
      }
    },
    chunkSizeWarningLimit: 1000 // Adjust the chunk size warning limit if needed
  }
});