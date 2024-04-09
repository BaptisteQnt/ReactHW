import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../asset/css/navbar.css'

const Header = () => {
    return (
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img
                alt="Mexicain qui joue de la guitare"
                src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
                className="d-inline-block align-top navbar-img"
            />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <nav className="d-inline-block justify-content-end">
                    <ul className="d-inline-block">
                        <li className="d-inline-block me-3"><a href="/">Accueil</a></li>
                    </ul>
                </nav>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;