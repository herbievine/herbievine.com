import { defaultLang, ui } from "./ui";

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");

  if (!lang) {
    return defaultLang;
  } else if (lang in ui) {
    return lang as Lang;
  }

  return defaultLang;
}

export function getPathWithoutLang(pathname: string): string {
  const [, maybeLang, ...rest] = pathname.split("/");

  if (maybeLang && maybeLang in ui && maybeLang !== defaultLang) {
    return `/${rest.join("/")}`;
  }

  return pathname;
}

export function getLocalizedPath(pathname: string, lang: Lang): string {
  const basePath = getPathWithoutLang(pathname) || "/";

  if (lang === defaultLang) {
    return basePath;
  }

  return `/${lang}${basePath === "/" ? "" : basePath}`;
}

export function useTranslations(lang: Lang) {
  return function t<K extends keyof (typeof ui)[typeof defaultLang]>(key: K) {
    return (ui[lang][key] ||
      ui[defaultLang][key]) as (typeof ui)[typeof defaultLang][K];
  };
}
