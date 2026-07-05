"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/lib/translations/en.json";
import pl from "@/lib/translations/pl.json";

type Locale = "en" | "pl";
type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, pl };

interface LangContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LangContext = createContext<LangContextType>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage first (returning user)
    const stored = localStorage.getItem("bezliny-lang") as Locale | null;
    if (stored && (stored === "en" || stored === "pl")) {
      setLocaleState(stored);
    } else {
      // Auto-detect from browser
      const browserLang = navigator.language || (navigator as any).userLanguage || "en";
      const detected: Locale = browserLang.startsWith("pl") ? "pl" : "en";
      setLocaleState(detected);
      localStorage.setItem("bezliny-lang", detected);
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("bezliny-lang", newLocale);
  };

  // Prevent hydration mismatch — render with "en" on server, then switch client-side
  const t = translations[locale];

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LangContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
