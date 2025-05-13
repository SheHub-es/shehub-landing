import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import esTeaser from "@/locales/es/teaser.json";
import enTeaser from "@/locales/en/teaser.json";
import caTeaser from "@/locales/ca/teaser.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { teaser: esTeaser },
      en: { teaser: enTeaser },
      ca: { teaser: caTeaser },
    },
    fallbackLng: "es",
    supportedLngs: ["es", "en", "ca"],
    nonExplicitSupportedLngs: true,
    defaultNS: "teaser",
    ns: ["teaser"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lng",
      caches: ["localStorage"],
      lookupLocalStorage: "shehub-lang",
    },
  });

export default i18n;
