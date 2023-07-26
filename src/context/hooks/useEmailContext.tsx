import { useContext } from "react";
import { ApplicationContext } from "context/ApplicationContext";
import { ApplicationContextType } from "context/types";

export const useEmailContext = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);

  if (!context) {
    return {
      email: { currentEmail: "", setEmail: () => { } },
      setEmail: () => { },
    };
  }

  return context;
};
