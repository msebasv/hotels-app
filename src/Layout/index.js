import React from "react";

import NavbarMenu from "../components/NavbarMenu";

import "./index.scss";

const Layout = () => {
  return (
    <div className="container-layout">
      <header>
        <NavbarMenu />
      </header>
      <section>Section</section>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
