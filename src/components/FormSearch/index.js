import React from "react";

import "./index.scss";

import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";

const FormSearch = () => {
  return (
    <Form className="form-search-container">
      <Container>
        <Row className="row-text-container">
          <Col>
            <h2>Encuentra tu hotel</h2>
          </Col>
        </Row>
        <Row className="row-form-container">
          <Col md={12} lg={2}>
            <Form.Control type="date" />
          </Col>
          <Col md={12} lg={2}>
            <Form.Control type="date" />
          </Col>
          <Col md={12} lg={4}>
            <Form.Control type="text" placeholder="Search" />
          </Col>
          <Col md={12} lg={2}>
            <Dropdown className="dropdown-room">
              <Dropdown.Toggle>Habitaciones</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>2 Personas, 1 habitación</Dropdown.Item>
                <Dropdown.Item>4 Personas, 3 habitaciones</Dropdown.Item>
                <Dropdown.Item>5 Personas, 4 habitaciones</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={12} lg={1} className="col-button">
            <Button className="button-search-hotel">Buscar</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default FormSearch;
