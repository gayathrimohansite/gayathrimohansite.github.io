import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://gayathrimohansite.github.io",
  base: isProd ? "/gayathrimohansite" : "/",
  integrations: [mdx()],
});
