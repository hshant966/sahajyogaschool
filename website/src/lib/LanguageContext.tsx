"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "./translations";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LangCtx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("sy_lang") as Lang) || "en";
    }
    return "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("sy_lang", l);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
