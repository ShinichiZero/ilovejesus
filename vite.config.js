import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // Use a relative base in production so built files resolve when served
  // from a subpath (GitHub Pages) and also work with local previews.
  base: mode === 'production' ? './' : '/',
}))
