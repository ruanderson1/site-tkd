import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      '0d28-2804-29b8-5099-4aef-a543-3ac7-e2d4-2c35.ngrok-free.app',
      '753d-2804-29b8-5099-4aef-a07a-838a-b2ef-9edf.ngrok-free.app'
    ]
  }
})
