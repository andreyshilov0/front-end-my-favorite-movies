import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavContainer, NavHeader } from "./styles";

const NavBar = () => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <NavHeader>
      <NavContainer>
        Мои избранные фильмы Привет, {localStorage.getItem("user")}!
        <Button variant="outlined" onClick={onLogoutClick}>
          Выйти
        </Button>
      </NavContainer>
    </NavHeader>
  );
};

export default NavBar;
