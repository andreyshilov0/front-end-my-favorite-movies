import { createContext, useContext, useState } from "react";
import { EmailContextType, EmailProviderProps } from "./types";
import { useTranslation } from "react-i18next";

const EmailContext = createContext<EmailContextType | null>(null);

export const useEmail = () => {
  const { t, i18n } = useTranslation("main-page");

  const context = useContext(EmailContext);
  if (!context) {
    console.error(t("navBar.error-email-provider") as string);
  }
  return context;
};

export const EmailProvider: React.FC<EmailProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string | null>(null);

  const contextValue: EmailContextType = {
    email,
    setEmail: (newEmail) => setEmail(newEmail),
  };

  return (
    <EmailContext.Provider value={contextValue}>
      {children}
    </EmailContext.Provider>
  );
};
