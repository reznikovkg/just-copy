import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true
    }
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
