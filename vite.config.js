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
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Sépare les dépendances pour un meilleur caching
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react']
        }
      }
    },
    // Optimise la taille des chunks
    chunkSizeWarningLimit: 500,
    // Active la compression
    cssCodeSplit: true,
    sourcemap: false,
    // Réduction de la taille des assets
    assetsInlineLimit: 4096,
    // Optimisation du code
    target: 'es2015',
    cssMinify: true
  },
  // Optimise les dépendances
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    exclude: []
  },
  // Performance
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    drop: ['console', 'debugger']
  }
})
