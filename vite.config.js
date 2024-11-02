import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Remove the external options to ensure dependencies are bundled
    rollupOptions: {
      // No external dependencies should be specified here
      // external: ['react-router-dom', 'emailjs-com'], 
    },
  },
});
