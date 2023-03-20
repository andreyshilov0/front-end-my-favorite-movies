import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavContainer, NavWrapper, NavHeader } from "./styles";

const NavBar = () => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <NavHeader>
      <NavContainer>
        Мои избранные фильмы
        <NavWrapper>
          Привет, {localStorage.getItem("user")}!
          <Button variant="outlined" onClick={onLogoutClick}>
            Выйти
          </Button>
        </NavWrapper>
      </NavContainer>
    </NavHeader>
  );
};

export default NavBar;
