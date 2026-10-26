import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  // Vercel serves at the domain root; GitHub Pages uses the repository path.
  base: mode === 'github-pages' ? '/portfolio/' : '/',
  plugins: [react()],
}));
