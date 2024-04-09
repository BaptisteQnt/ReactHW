import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.webp";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Mexicain qui joue de la guitare"
            src={logo}
            className="d-inline-block align-top navbar-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/"><NavLink className="nav-link" to="/">Accueil</NavLink></Nav.Link>
            <Nav.Link href="/a-propos"><NavLink className="nav-link" to="/a-propos">à propos</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
