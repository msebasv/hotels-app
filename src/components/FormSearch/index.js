import React from "react";

import "./index.scss";

import { Form, NavDropdown } from "react-bootstrap";

const FormNavbar = () => {
  return (
    <Form className="form-navbar-container">
      <Form.Group className="form-container-date">
        <Form.Control type="date" />
        <span>-</span>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Search" />
      </Form.Group>
      <Form.Group>
        <NavDropdown title="Huéspedes">
          <NavDropdown.Item>2 personas, 1 habitacion</NavDropdown.Item>
        </NavDropdown>
      </Form.Group>
    </Form>
  );
};

export default FormNavbar;
