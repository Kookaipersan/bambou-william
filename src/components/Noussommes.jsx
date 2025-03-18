
import React from 'react';
import { Link } from 'react-router-dom'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Button, Carousel, Card } from 'react-bootstrap'; // Ajout de l'importation de Card et Carousel
import { Row, Col } from 'react-bootstrap';

const Noussommes = () => {
  return (
    <>
    <div 
      className="image-container-fluid  position-relative"
      style={{ height: '50vh', overflow: 'hidden' }}
    >
      {/* L'image occupe toute la largeur et hauteur */}
      <img
        src="/assets/images/image12.jpg"
        alt="image description"
        className="img-fluid"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
</div>
<div>
  <h3 className='text-center mt-4'>L'EQUIPE BAMBOU</h3>
</div>

 <Row className="g-4 mt-5 text-center">
      {/* Carte 1 */}
      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '80%' }}>
          <Card.Img variant="top" src="/assets/images/jacques.JPG" />
          <Card.Body>
            <Card.Title>JACQUES HARMAND <br />Président</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Carte 2 */}
      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '80%' }}>
          <Card.Img variant="top" src="/assets/images/danielle.JPG" />
          <Card.Body>
            <Card.Title>DANIELLE HARMAND <br />Secrétaire-Trésorière</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Carte 3 */}
      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '80%' }}>
          <Card.Img variant="top" src="/assets/images/maryse.JPG" />
          <Card.Body>
            <Card.Title>MARYSE VEAU <br />Administratrice</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Carte 4 */}
      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '80%' }}>
          <Card.Img variant="top" src="/assets/images/william.JPG" />
          <Card.Body>
            <Card.Title>WILLIAM GERMAIN <br />Administrateur</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Carte 5 */}
      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '80%' }}>
          <Card.Img variant="top" src="/assets/images/michele.jpg" />
          <Card.Body>
            <Card.Title>MICHELE LEGAVE <br />Administratrice</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={4} md={6} sm={12}>
        <Card style={{ width: '80%' }}>
          <Card.Img variant="top" src="/assets/images/nhan.JPG" />
          <Card.Body>
            <Card.Title>NHAN VAN DANG <br />Administrateur</Card.Title>
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

export default Noussommes;