import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import './Provider.css';

const Provider = () => {
  return (
    <Container className="provider-section py-5">
      <div className="text-center mb-4">
        <h3>
          Meet Our <span className="text-success">Providers</span>
        </h3>
        <p>
          We provide the most comprehensive orthopaedic care available in Southern Arizona.
        </p>
      </div>

      <Carousel controls={true} indicators={false} interval={3000} pause={false}>
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={3}>
              <Card className="provider-card text-center">
                <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/32.jpg" />
                <Card.Body>
                  <Card.Title>Fofana Raees, OD</Card.Title>
                  <Card.Text>Hip and Knee</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="provider-card text-center">
                <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/42.jpg" />
                <Card.Body>
                  <Card.Title>Fofana Raees, OD</Card.Title>
                  <Card.Text>Shoulder & Elbow</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="provider-card text-center">
                <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/68.jpg" />
                <Card.Body>
                  <Card.Title>Fofana Raees, OD</Card.Title>
                  <Card.Text>Spine & Telehealth</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={3}>
              <Card className="provider-card text-center">
                <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/44.jpg" />
                <Card.Body>
                  <Card.Title>Fofana Raees, OD</Card.Title>
                  <Card.Text>Elbow and Hand</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="provider-card text-center">
                <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/45.jpg" />
                <Card.Body>
                  <Card.Title>Fofana Raees, OD</Card.Title>
                  <Card.Text>Sports Injury</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="provider-card text-center">
                <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/65.jpg" />
                <Card.Body>
                  <Card.Title>Fofana Raees, OD</Card.Title>
                  <Card.Text>Joint Replacement</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Provider;
