import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react"; // HMR

export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
  build: {
    modulePreload: { polyfill: false },
  },
});
