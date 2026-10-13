import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LANGUAGES, type Dictionary, type Language } from "./types";
import { en } from "./en";
import { tr } from "./tr";
import { de } from "./de";
import { it } from "./it";
import { es } from "./es";
import { ja } from "./ja";
import { zh } from "./zh";

export * from "./types";

const DICTIONARIES: Record<Language, Dictionary> = { en, tr, de, it, es, ja, zh };
const STORAGE_KEY = "finly-language";
const HTML_LANG: Record<Language, string> = { en: "en", tr: "tr", de: "de", it: "it", es: "es", ja: "ja", zh: "zh-Hans" };

function isLanguage(value: string | null | undefined): value is Language {
  return !!value && (LANGUAGES as readonly string[]).includes(value);
}

/** ?lang=de, then the saved choice, then the browser languages, then English. */
function detect(): Language {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(query)) return query;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // Storage can be unavailable (private mode); fall through.
  }
  for (const preferred of navigator.languages ?? [navigator.language]) {
    const base = preferred.toLowerCase().split("-")[0];
    if (isLanguage(base)) return base;
  }
  return "en";
}

interface LanguageContextValue {
  language: Language;
  t: Dictionary;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detect);
  const t = DICTIONARIES[language];

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language];
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
  };

  return <LanguageContext.Provider value={{ language, t, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
