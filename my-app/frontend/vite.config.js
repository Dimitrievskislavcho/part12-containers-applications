import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for docker
    hmr: {
      clientPort: 8080, // This should match your nginx exposed port
      host: 'localhost',
    },
  },
  plugins: [react()],
})
