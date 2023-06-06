import { AuthButton } from "@components/AuthForm/styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { NavContainer, NavWrapper, NavHeader } from "./styles";
import { useRenderLogin } from "@components/AuthForm/hooks/useUserAuth";

const NavBar = () => {
  const { login } = useRenderLogin();

  const navigate = useNavigate();
  const { t } = useTranslation("main-page");

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
            username: login,
          })}
          <AuthButton variant="outlined" onClick={onLogoutClick}>
            {t("navBar.logoutButton")}
          </AuthButton>
        </NavWrapper>
      </NavContainer>
    </NavHeader>
  );
};

export default NavBar;
