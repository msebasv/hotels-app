import React from "react";

import "./index.scss";

import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";

const NavbarMenu = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="65"
            height="60"
            className="d-inline-block align-top"
            alt="Hotels"
          />
        </Navbar.Brand>
        <Nav className="nav-container">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link>About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
