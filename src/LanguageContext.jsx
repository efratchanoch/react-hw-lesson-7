import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("hebrew");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const translate = async (text) => {
    if (language === "hebrew") return text;
    const target = language === "english" ? "en" : "fr";

    try {
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=he|${target}`);
      const data = await res.json();
      return data.responseData.translatedText;
    } catch (err) {
      console.error("Translation error:", err);
      return text;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
