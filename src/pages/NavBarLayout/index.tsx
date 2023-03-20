import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@components/NavBar";

const NavBarLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default NavBarLayout;
