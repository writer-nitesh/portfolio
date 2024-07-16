import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://ni30.vercel.app/",
  integrations: [tailwind(), react(), sitemap(), playformCompress({
    JavaScript: true,
    HTML: true,
    CSS: true,
    SVG: true,
    Files: true,
    Images: true
  }), robotsTxt()]
});