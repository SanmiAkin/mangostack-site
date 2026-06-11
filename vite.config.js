import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const pages = ["index", "404", "approach", "contact", "cookies", "howcraft", "ilr-calc",
  "operating", "pelvar", "pipworth", "privacy", "software", "terms", "workforce-atlas"];

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p, resolve(__dirname, `${p}.html`)])),
    },
  },
});
