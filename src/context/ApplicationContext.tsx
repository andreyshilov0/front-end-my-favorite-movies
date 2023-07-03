import React, { createContext, useState } from "react";
import {
  ApplicationContextProviderProps,
  ApplicationContextType,
  EmailData,
} from "./types";

export const ApplicationContext = createContext<ApplicationContextType | null>(
  null
);

export const ApplicationContextProvider: React.FC<
  ApplicationContextProviderProps
> = ({ children }) => {
  const [currentEmail, setCurrentEmail] = useState<string | null>(null);

  const setEmail = (newEmail: string | null) => {
    setCurrentEmail(newEmail);
  };

  const emailData: EmailData = {
    currentEmail,
    setEmail,
  };

  const contextValue: ApplicationContextType = {
    email: emailData,
    setEmail: emailData.setEmail,
  };

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};
