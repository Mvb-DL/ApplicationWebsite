import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteGltfPlugin from 'vite-plugin-gltf';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteGltfPlugin({
      include: [/\.glb$/],
    })
  ],
  base: "/ApplicationWebsite/",
  build: {
    rollupOptions: {
      output: {
        // Define manual chunks for code-splitting
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', 'three/examples/jsm/loaders/GLTFLoader'],
          // Add other libraries or chunks as needed
          'vendor': ['react', 'react-dom', 'three'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Enable Brotli compression
    brotliSize: true,
    // Adjust the chunk size warning limit if necessary
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
  },
});
