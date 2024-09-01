import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: {
          navbar: {
            home: "Home",
            about: "about",
            projects: "Projects",
            resume: "Resume",
            skills: "Skills",
            contact: "Contact",
          },
          sectionOne: {
            mern: " Stack",
            developer: "Developer",
            resume: "CV Resume",
            hire: "Available for Hire",
          },
        },
      },
      uz: {
        translation: {
          navbar: {
            home: "Asosiy",
            about: "Men haqimda",
            projects: "Loyiha",
            resume: "Resume",
            skills: "Skills",
            contact: "Aloqa",
          },
          sectionOne: {
            mern: " Stack",
            developer: "Developer",
            resume: "CV Rezyume",
            hire: "Yonlash uchun mavjud",
          },
        },
      },
    },
  });

export default i18n;
