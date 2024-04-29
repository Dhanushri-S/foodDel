import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/foodDel/"
  plugins: [
    { enforce: 'pre', ...mdx() },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
})
