import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/youtube-playlist-wizard/', // Replace 'your-repo-name' with your actual repository name
  plugins: [react()],
});