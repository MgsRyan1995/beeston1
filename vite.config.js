import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/', // Make sure this matches your deployment base URL (if you're deploying to the root or a subdirectory)
  build: {
    outDir: 'dist', // Ensure build output goes into 'dist'
  },
  plugins: [react(), svgr()],
})
