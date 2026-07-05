// @ts-check

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { defaultLang, languages } from "./src/i18n/ui";

// https://astro.build/config
export default defineConfig({
  site: "https://herbievine.com",
  trailingSlash: "never",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: Object.keys(languages),
    defaultLocale: defaultLang,
  },
});
