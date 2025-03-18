import React from 'react';
import { Link } from 'react-router-dom'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';
import { Button, Carousel, Card } from 'react-bootstrap'; // Ajout de l'importation de Card et Carousel
import { Row, Col } from 'react-bootstrap';






const Accueil = () => {
  return (
    <>
    <div
      className="image-container position-relative"
      style={{ height: '50vh', overflow: 'hidden' }}
    >
      {/* L'image occupe toute la largeur et hauteur */}
      <img
        src="/assets/images/image5.jpg"
        alt="image description"
        className="img-fluid"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Contenu superposé à l'image avec arrière-plan semi-transparent */}
      <div
        className="text-center text-white position-absolute top-50 start-50 translate-middle"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <h1>BAMBOU <br />AGIR POUR LE VIETNAM</h1>
        <h3>PARRAINEZ UN ENFANT - ACCOMPAGNER UNE VIE</h3>

        {/* Conteneur pour les boutons */}
        <div className="d-flex justify-content-center mt-4">
          <Button href="#" className="mx-2">PARRAINEZ UN ENFANT</Button>
          <Button href="#" className="mx-2">FAIRE UN DON</Button>
          <Button href="#" className="mx-2">ADHÉRER</Button>
        </div>
      </div>
    </div>
  

      <h3 className='text-center mt-3' >PARRAINEZ UN ENFANT AU VIETNAM</h3>
      <div className="container mt-5">
        <Row className="align-items-center">
          {/* Colonne pour l'image */}
          <Col md={6}>
            <img src="/assets/images/image6.jpg" alt="image description" className="img-fluid mb-2" />
          </Col>

          {/* Colonne pour le texte */}
          <Col md={6}>
            <p className='mb-1'>
              C'est soulager financièrement une famille pour permettre à son enfant de rester scolarisé le plus longtemps possible.
              C'est donner les moyens à un enfant de suivre une scolarité normale et régulière jusqu'au terme de son projet de vie.
              C'est accéder à la connaissance, c'est s'ouvrir sur le monde et participer plus activement au développement de son pays.
              C'est diriger un enfant vers un métier valorisant et mieux rémunéré.
              C'est le soutenir dans les moments difficiles, l'encourager et le féliciter via des courriers ou internet.
              C'est réaliser un geste de solidarité car tous les enfants du monde sont égaux.
            </p>
          </Col>
        </Row>
      </div>
<div className='mt-5 mb-5'>
      {/* Carousel */}
      <Carousel data-bs-theme="dark mt-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/image2.jpg" // Remplace par le chemin correct
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Ecole Mai Lihn</h5>
            <p>Photos 2025.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/image3.jpg" // Remplace par le chemin correct
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Ecole Mai Lihn</h5>
            <p>Photos 2025.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/image4.jpg" // Remplace par le chemin correct
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Ecole Mai Lihn</h5>
            <p>Photos 2025.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

  
      <Row className="g-4">
      {/* Carte 1 */}
      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="/assets/images/image4.jpg" />
          <Card.Body>
            <Card.Title>350</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Carte 2 */}
      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="/assets/images/image4.jpg" />
          <Card.Body>
            <Card.Title>500</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Carte 3 */}
      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="/assets/images/image4.jpg" />
          <Card.Body>
            <Card.Title>90 %</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Carte 4 */}
      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="/assets/images/image4.jpg" />
          <Card.Body>
            <Card.Title>DISPENSAIRE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Carte 5 */}
      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="/assets/images/image4.jpg" />
          <Card.Body>
            <Card.Title>Réalisations</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  );
};

export default Accueil;