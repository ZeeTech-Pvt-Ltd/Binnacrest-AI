import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Preact production aliases: ~3x smaller runtime than React, same API surface.
    // Same proven setup as the Rendaven and Gewinode Raven projects.
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/client': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  server: {
    port: 5187,
    strictPort: true,
  },
});
