import React from "react";

import NavbarMenu from "../components/NavbarMenu";
import { Outlet } from "react-router-dom";

import "./index.scss";

const Layout = () => {
  return (
    <div className="container-layout">
      <header>
        <NavbarMenu />
      </header>
      <section>
        <Outlet />
      </section>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
