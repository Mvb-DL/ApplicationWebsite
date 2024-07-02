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
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('three')) {
              return 'three-vendor';
            }
            // Add other libraries or chunks as needed
            return 'vendor';
          }
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
