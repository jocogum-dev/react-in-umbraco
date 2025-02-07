import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths({projects: [resolve(__dirname, 'tsconfig.json')]})
  ],
  build: {
    outDir: resolve(__dirname, '../UmbracoWeb/wwwroot/demo-assets'),
    rollupOptions: {
      input: resolve(__dirname, 'src/scripts/main.tsx'),
      output: {
        entryFileNames: 'main.min.js'
      },
    },
  },
});
