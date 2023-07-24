import { useContext } from "react";
import { ApplicationContext } from "context/ApplicationContext";
import { ApplicationContextType } from "context/types";

export const useLanguageContext = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error("useLanguageContext must be used within an ApplicationContextProvider");
  }

  const setLanguage = (newLanguage: string) => {
    context.language.setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); 
    window.location.reload(); 
  };

  return { ...context, language: { ...context.language, setLanguage } };
};
