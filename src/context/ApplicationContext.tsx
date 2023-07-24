import React, { createContext, useState } from "react";
import {
  ApplicationContextProviderProps,
  ApplicationContextType,
  EmailData,
  LanguageData, 
} from "./types";
import i18n from "i18next"; 

export const ApplicationContext = createContext<ApplicationContextType | null>(
  null
);

export const ApplicationContextProvider: React.FC<
  ApplicationContextProviderProps
> = ({ children }) => {
  const [currentEmail, setCurrentEmail] = useState<string>();
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    localStorage.getItem("language") || "en"
  );

  const setEmail = (newEmail: string) => {
    setCurrentEmail(newEmail);
    localStorage.setItem("currentEmail", newEmail);
  };

  const setLanguage = (newLanguage: string) => {
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const emailData: EmailData = {
    currentEmail,
    setEmail,
  };

  const languageData: LanguageData = { 
    currentLanguage,
    setLanguage,
  };

  const contextValue: ApplicationContextType = {
    email: emailData,
    setEmail: emailData.setEmail,
    language: languageData,
  };

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};
