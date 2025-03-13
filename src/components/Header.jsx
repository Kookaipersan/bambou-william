import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Importation du composant Link

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand> {/* Lien vers la page d'accueil */}
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Lien vers l'accueil */}
        <Nav.Link as={Link} to="/Actions">Nos Actions</Nav.Link> {/* Lien vers la page des actions */}
        <Nav.Link as={Link} to="/Noussommes">Qui sommes nous ?</Nav.Link> {/* Lien vers "Qui sommes nous ?" */}
        <Nav.Link as={Link} to="/Actualites">Actualités</Nav.Link> {/* Lien vers les actualités */}
        <Nav.Link as={Link} to="/Don">Faire un Don</Nav.Link> {/* Lien vers faire un don */}
        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link> {/* Lien vers la page de contact */}
      </Nav>
    </Container>
  </Navbar>
   
  );
} 

export default Header;
