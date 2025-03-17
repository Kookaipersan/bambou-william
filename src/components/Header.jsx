import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Importation du composant Link

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        {/* Utilisation du logo avec lien */}
        <Navbar.Brand as={Link} to="/">Bambou "Agir pour le Vietnam"</Navbar.Brand> 

        {/* Toggle pour les petits écrans */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu de navigation qui s'affiche sur les écrans plus larges */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex justify-content-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title="Nos Actions" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/Actions/Action1">Action 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Actions/Action2">Action 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Actions/Action3">Action 3</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/Noussommes">Qui sommes-nous ?</Nav.Link>
            <Nav.Link as={Link} to="/Actualites">Actualités</Nav.Link>
            <Nav.Link as={Link} to="/Don">Faire un Don</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

