import React, { createContext, ReactNode, useState } from "react";
import {
  ApplicationContextProviderProps,
  ApplicationContextType,
} from "./types";

export const ApplicationContext = createContext<ApplicationContextType | null>(
  null
);

export const ApplicationContextProvider: React.FC<
  ApplicationContextProviderProps
> = ({ children }) => {
  const [email, setEmail] = useState<string | null>(null);

  const setEmailInContext = (newEmail: string | null) => {
    setEmail(newEmail);
  };

  const contextValue: ApplicationContextType = {
    email,
    setEmail: setEmailInContext,
  };

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};
