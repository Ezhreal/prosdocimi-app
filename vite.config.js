import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Site na raiz do domínio (ex.: KingHost public_html). Para subpasta, use por exemplo base: '/pasta/'
  base: '/',
})