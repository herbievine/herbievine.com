// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { defaultLang, languages } from "./src/i18n/ui";

// https://astro.build/config
export default defineConfig({
  site: "https://herbievine.com",
  integrations: [tailwind()],
  i18n: {
    locales: Object.keys(languages),
    defaultLocale: defaultLang,
  },
});
