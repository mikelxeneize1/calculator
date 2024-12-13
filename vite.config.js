// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // La raíz del proyecto sigue siendo la carpeta actual
  publicDir: 'public', // Carpeta donde se encuentra el `index.html`
  build: {
    outDir: 'dist', // Carpeta de salida para el build
    rollupOptions: {
      input: 'public/index.html', // Especifica la ruta del `index.html`
    },
  },
});
