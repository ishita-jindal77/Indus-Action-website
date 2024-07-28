import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import language JSON files
import enTranslation from "./locales/en/translation.json";
import knTranslation from "./locales/kn/translation.json"; // Kannada
import mlTranslation from "./locales/ml/translation.json"; // Malayalam
import hiTranslation from "./locales/hn/translation.json"; // Hindi

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    kn: {
      translation: knTranslation, // Kannada
    },
    ml: {
      translation: mlTranslation, // Malayalam
    },
    hi: {
      translation: hiTranslation, // Hindi
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;