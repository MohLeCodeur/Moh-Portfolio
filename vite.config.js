import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Optimisations de build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les console.log en production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Sépare les grosses dépendances
          'framer-motion': ['framer-motion'],
          'react-vendor': ['react', 'react-dom']
        }
      }
    },
    // Optimise la taille des chunks
    chunkSizeWarningLimit: 1000,
    // Active la compression
    cssCodeSplit: true,
    sourcemap: false // Désactive les sourcemaps en production
  },
  // Optimise les dépendances
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
})
