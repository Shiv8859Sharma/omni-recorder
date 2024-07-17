import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.0.113', // Listen on all network interfaces
    port: 3001, // Specify the port (optional)
  },
});
