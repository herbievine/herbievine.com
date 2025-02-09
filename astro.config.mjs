// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { defaultLang, languages } from "./src/i18n/ui";

// https://astro.build/config
export default defineConfig({
  site: "https://herbievine.com",
  trailingSlash: "never",
  integrations: [tailwind(), sitemap()],
  i18n: {
    locales: Object.keys(languages),
    defaultLocale: defaultLang,
  },
});
