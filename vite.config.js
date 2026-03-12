import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/prosdocimi-app/', // MUITO IMPORTANTE para GitHub Pages
})