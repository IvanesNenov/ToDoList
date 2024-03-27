import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";


export default defineConfig({

  base: "./",
  server: {
    port: 3000,
  },
  build: {
    outDir: "build"
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      }
    ]
  }
})
