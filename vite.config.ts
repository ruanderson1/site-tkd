import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      '753d-2804-29b8-5099-4aef-a07a-838a-b2ef-9edf.ngrok-free.app'
    ]
  }
})
