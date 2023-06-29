import { useContext } from "react";
import { ApplicationContext } from "context/ApplicationContext";
import { ApplicationContextType } from "context/types";
import { useTranslation } from "react-i18next";

export const useEmailContext = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);
  const { t } = useTranslation();

  if (!context) {
    console.error(t("navBar.error-get-email"));
    return { email: null, setEmail: () => { } };
  }

  return context;
};
