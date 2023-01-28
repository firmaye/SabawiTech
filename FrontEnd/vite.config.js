import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: '8081' 
//   },
// })
export default defineConfig({

  plugins: [reactRefresh()],
  mode: "development",
  build: {
    minify: false,
  },
  server: {
    port: '8081'
  },
});