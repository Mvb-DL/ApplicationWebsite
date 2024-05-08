import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteGltfPlugin from 'vite-plugin-gltf';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    ViteGltfPlugin({
      include: [/\.glb$/],  
    })],
    base: "/ApplicationWebsite/"
});
