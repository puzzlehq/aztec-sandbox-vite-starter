import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path, { dirname } from 'path';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const wasmPath = `${dirname(require.resolve(`@aztec/circuits.js`)).replace(
    /\/dest$/,
    '',
  )}/resources/aztec3-circuits.wasm`;

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve('src'),
    }
  },
	plugins: [
    react(),
    viteStaticCopy({
      targets: [{
        src: wasmPath,
        dest: ''
      }]
    }),
    nodePolyfills({
      include: ['path','stream','events','string_decoder','util'],
    })
  ],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
});