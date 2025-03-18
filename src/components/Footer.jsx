import React from 'react';
import { Link } from 'react-router-dom'; 
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';  // Ajout de Row et Col
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return (
    <footer className="page-footer bg-black text-white pt-4 mt-5  ">
      <Container fluid>
        <Row>
          {/* Section avec du texte */}
          <Col md={6} className="mt-md-0 mt-2 mb-3">
            <h5 className="text-uppercase">Bambou.</h5>
            <p>PARRAINEZ UN ENFANT - ACCOMPAGNER UNE VIE.</p>
            <Image src="/assets/images/bambou.png" rounded />
          </Col>

          <Col md={3} sm={12} className="mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled ">
              <li><Link to="#!">Accueil</Link></li>
              <li><Link to="#!">Nos Actions</Link></li>
              <li><Link to="#!">Parrainage</Link></li>
              <li><Link to="#!">Voyages</Link></li>
            </ul>
          </Col>

          <Col md={3} sm={12} className="mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li><Link to="#!">Faire un Don</Link></li>
              <li><Link to="#!">A propos</Link></li>
              <li><Link to="#!">Actualités</Link></li>
              <li><Link to="#!">Contact</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Copyright section */}
      <div className="footer-copyright text-center py-3">
        © 2025 Copyright: <a href="https://mdbootstrap.com/">William Germain</a>
      </div>
    </footer>
  );
};

export default Footer;