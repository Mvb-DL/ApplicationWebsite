import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteGltfPlugin from 'vite-plugin-gltf';

export default defineConfig({
  plugins: [
    react(),
    ViteGltfPlugin({
      include: [/\.glb$/],
    }),
  ],
  base: "/ApplicationWebsite/",
  build: {
   
    cssCodeSplit: true,
    brotliSize: true,
    chunkSizeWarningLimit: 500,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three'],
  },
});
