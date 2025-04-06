import React from 'react';
import { Button, Row, Container, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      
      <div className="footer-top-banner py-2 px-3 d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <span className="text-white small text-center text-sm-start mb-2 mb-sm-0">
          TOI Now Offers Free Virtual Care for <span className="fw-bold">Orthopaedic Injuries</span>
        </span>
        <Button variant="dark" size="sm" className="ms-sm-2">CLICK HERE TO LEARN MORE</Button>
      </div>

      <div className="footer-main text-white py-5">
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5>LOGO HERE</h5>
              <p className="small mt-3">
                Tucson Orthopaedic Institute complies with applicable federal civil rights laws and
                does not discriminate on the basis of race, color, national origin, age, disability, or sex.
              </p>
            </Col>

            <Col lg={2} md={6} className="mb-4 mb-md-0">
              <h6 className="fw-bold">Services</h6>
              <ul className="list-unstyled small">
                <li>After Hours Clinic</li>
                <li>Athletic Training</li>
                <li>Diagnostic Services</li>
                <li>HURT App</li>
                <li>Laser Therapy</li>
                <li>Telehealth</li>
                <li>Sports Physicals</li>
                <li>Workers' Camp</li>
              </ul>
              <h6 className="fw-bold mt-3">Physical Therapy</h6>
              <ul className="list-unstyled small">
                <li>Physical Therapy</li>
                <li>Physical Therapists</li>
              </ul>
            </Col>

            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h6 className="fw-bold">Specialties</h6>
              <ul className="list-unstyled small">
                <li>Elbow, Hand, Shoulder</li>
                <li>Foot & Ankle</li>
                <li>General Orthopaedics</li>
                <li>Hip Arthroscopy</li>
                <li>Regenerative Medicine</li>
                <li>Sports Medicine</li>
              </ul>

              <h6 className="fw-bold mt-3">Providers</h6>
              <ul className="list-unstyled small">
                <li>Doctors</li>
                <li>Physical Therapists</li>
                <li>Physician Assistants</li>
              </ul>
            </Col>

            <Col lg={4} md={6}>
              <h6 className="fw-bold">Location/Contact</h6>
              <ul className="list-unstyled small">
                <li>Careers</li>
                <li>Media & Sponsorship</li>
                <li>East Office</li>
                <li>Green Valley Clinic</li>
                <li>Oro Valley Office</li>
                <li>SilverBell Clinic</li>
              </ul>
            </Col>
          </Row>

          <hr className="border-secondary my-4" />

          <Row className="text-center text-md-start">
            <Col md={6} className="small mb-3 mb-md-0">
              © 2022 Esco Orthopaedic Institute. All Rights Reserved.
            </Col>
            <Col md={6} className="text-md-end small">
              <a href="#" className="text-white text-decoration-none me-3">Terms & Conditions</a>
              <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;