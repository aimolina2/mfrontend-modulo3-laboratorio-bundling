import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    compression({
      algorithms: ["gzip"],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    compression({
      algorithms: ["brotliCompress"],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  build: {
    modulePreload: { polyfill: false },
  },
});
