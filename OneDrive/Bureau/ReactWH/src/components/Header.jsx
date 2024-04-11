import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.webp";
import { NavLink } from 'react-router-dom';
import { CartContext } from "../utils/context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext)

  const getQuantity = () => {
    console.log(cart);
    let totalQuantity = 0;
    cart.forEach(dish => {
      totalQuantity+=dish.quantity
      return totalQuantity;
    });
  }
  
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
            <NavLink className="nav-link" to="/">Accueil</NavLink>
            <NavLink className="nav-link" to="/a-propos">à propos</NavLink>
            <NavLink className="nav-link" to="/panier">Panier({getQuantity()})</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
