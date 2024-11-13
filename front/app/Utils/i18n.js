import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en.json";
import de from "./languages/de.json";
// import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React otomatik olarak XSS koruması sağlar
  },
  // debug: true,
});

export default i18n;

