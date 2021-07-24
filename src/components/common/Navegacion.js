import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import ConfigRegional from "../ConfigRegional";
import logo from "../../images/logo.webp";

const Navegacion = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img id="logo" src={logo} alt="Logo" /> Busca Vuelos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ConfigRegional></ConfigRegional>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
