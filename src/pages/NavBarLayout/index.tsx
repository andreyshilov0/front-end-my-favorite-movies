import { Outlet } from "react-router-dom";
import NavBar from "@components/NavBar";
import { EmailProvider } from "context/EmailContext";

const NavBarLayout = () => {
  return (
    <EmailProvider>
      <NavBar />
      <Outlet />
    </EmailProvider>
  );
};

export default NavBarLayout;
