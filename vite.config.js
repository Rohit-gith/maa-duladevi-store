import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webpPlugin } from './scripts/webp.js'

export default defineConfig({
  // webpPlugin: any .jpg/.jpeg/.png put in public/ becomes .webp and the original is deleted
  plugins: [react(), webpPlugin()],
  resolve: {
    // `@/` always points to `src/`, e.g. import Navbar from '@/components/layout/Navbar'
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: {
    open: true, // `npm run dev` opens the site in the browser automatically
  },
})
