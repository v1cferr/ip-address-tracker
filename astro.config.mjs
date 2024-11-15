// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  outDir: "./dist",
  site: "https://v1cferr.github.io/ip-address-tracker/",
  adapter: node({
    mode: "standalone",
  }),
});
