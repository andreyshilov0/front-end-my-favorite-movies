import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomContainer, CustomDiv, CustomHeader } from "./styles";

const NavBar = () => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    navigate("/");
    localStorage.clear()
  };

  return (
    <CustomHeader>
      <CustomContainer>
          My Favorite Movies
        <CustomDiv>
          Hello, {localStorage.getItem("user")}!
          <Button variant="outlined" onClick={onLogoutClick}>Log out</Button>
        </CustomDiv>
      </CustomContainer>
    </CustomHeader>
  );
};

export default NavBar;
