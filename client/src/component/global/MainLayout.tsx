import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <AppNavbar />
      </header>
      <Outlet />
    </>
  );
};

export default MainLayout;
