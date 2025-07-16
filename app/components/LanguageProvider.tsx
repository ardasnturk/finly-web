import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "tr" | "de" | "es" | "it" | "ja" | "ch";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  getScreenshotPath: (number: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Load saved language from localStorage
    try {
      const savedLanguage = localStorage.getItem("finly-language") as Language;
      if (savedLanguage) {
        setLanguageState(savedLanguage);
      }
    } catch (error) {
      console.warn("localStorage not available:", error);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (isClient) {
      try {
        localStorage.setItem("finly-language", lang);
      } catch (error) {
        console.warn("localStorage not available:", error);
      }
    }
  };

  const getScreenshotPath = (number: number) => {
    const langMap: Record<Language, string> = {
      en: "EN",
      tr: "TR",
      de: "DE",
      es: "ES",
      it: "IT",
      ja: "JA",
      ch: "CH",
    };

    const langFolder = langMap[language];
    // Dosya isimleri 1.png, 2.png vs. şeklinde, padStart kullanmıyoruz
    return `/assets/Screenshots/${langFolder}/${number}.png`;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, getScreenshotPath }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
