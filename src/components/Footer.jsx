import React from 'react';
import { Link } from 'react-router-dom'; 
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';  // Ajout de Row et Col

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <Container fluid>
        <Row>
          {/* Section avec du texte */}
          <Col md={6} className="mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>
          </Col>

          <Col md={3} sm={12} className="mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li><Link to="#!">Link 1</Link></li>
              <li><Link to="#!">Link 2</Link></li>
              <li><Link to="#!">Link 3</Link></li>
              <li><Link to="#!">Link 4</Link></li>
            </ul>
          </Col>

          <Col md={3} sm={12} className="mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li><Link to="#!">Link 1</Link></li>
              <li><Link to="#!">Link 2</Link></li>
              <li><Link to="#!">Link 3</Link></li>
              <li><Link to="#!">Link 4</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Copyright section */}
      <div className="footer-copyright text-center py-3">
        © 2025 Copyright: <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;