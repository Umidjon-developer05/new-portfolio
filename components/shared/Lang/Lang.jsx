import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  uz: { nativeName: "Uzbek" },
};

const Lang = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleChangeLanguage = () => {
    const languages = Object.keys(lngs);
    const currentIndex = languages.indexOf(selectedLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLanguage = languages[nextIndex];

    setSelectedLanguage(nextLanguage);
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div>
      <span
        className={`fi fi-${
          selectedLanguage === "en"
            ? "gb"
            : selectedLanguage === "uz"
            ? "uz"
            : selectedLanguage
        } w-12 h-10 cursor-pointer rounded-md border hover:border-red-500 p-2 `}
        onClick={handleChangeLanguage}
      ></span>
    </div>
  );
};

export default Lang;
