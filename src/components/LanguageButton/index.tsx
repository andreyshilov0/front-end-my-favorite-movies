import React, { useState } from "react";
import { LanguageButtonStyle } from "@components/AuthForm/styles";
import { useTranslation } from "react-i18next";

const LanguageButton = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <LanguageButtonStyle onClick={() => changeLanguage("en")}>
        EN
      </LanguageButtonStyle>
      <LanguageButtonStyle onClick={() => changeLanguage("ru")}>
        RU
      </LanguageButtonStyle>
    </>
  );
};

export default LanguageButton;
