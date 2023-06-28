import { AuthButton } from "@components/AuthForm/styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { NavContainer, NavWrapper, NavHeader } from "./styles";
import { useEmail } from "context/EmailContext";

const NavBar = () => {
  const email = useEmail();
  const navigate = useNavigate();
  const { t } = useTranslation("main-page");

  const onLogoutClick = () => {
    navigate("/");
  };

  return (
    <NavHeader>
      <NavContainer>
        {t("navBar.titleName")}
        <NavWrapper>
          {t("navBar.greetings", {
            email: email?.email,
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
