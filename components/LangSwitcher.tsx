"use client";

import { useLang } from "@/lib/LangContext";

export default function LangSwitcher() {
  const { locale, setLocale } = useLang();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "pl" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/25 transition-all duration-300 text-xs font-medium text-white/80 hover:text-white"
      aria-label="Switch language"
    >
      <span className={locale === "en" ? "opacity-100" : "opacity-40"}>EN</span>
      <span className="text-white/30">|</span>
      <span className={locale === "pl" ? "opacity-100" : "opacity-40"}>PL</span>
    </button>
  );
}
