import { AuthButton } from "@components/AuthForm/styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  NavContainer,
  NavWrapper,
  NavHeader,
  LanguageButtonNav,
} from "./styles";
import LanguageButton from "@components/LanguageButton";

const NavBar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("main-page");
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const onLogoutClick = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <NavHeader>
      <NavContainer>
        {t("navBar.titleName")}
        <NavWrapper>
          {t("navBar.greetings", {
            username: localStorage.getItem("user"),
          })}
          <AuthButton variant="outlined" onClick={onLogoutClick}>
            {t("navBar.logoutButton")}
          </AuthButton>
          <LanguageButton />
        </NavWrapper>
      </NavContainer>
    </NavHeader>
  );
};

export default NavBar;
