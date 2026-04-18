import { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations.js';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t, translations }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}