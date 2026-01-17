import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://gayathrimohansite.github.io",
  base: isProd ? "/gayathrimohansite" : "/",
  integrations: [mdx(), react(), tailwind()],
});
