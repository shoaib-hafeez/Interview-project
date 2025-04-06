import React from 'react';
import { Button, Row, Col, Image } from 'react-bootstrap';
import './Banner.css'; 
import team1 from "../../../assets/images/banner-images/team1.png"
import team2 from "../../../assets/images/banner-images/team2.png"
import team3 from "../../../assets/images/banner-images/team3.png"
import team4 from "../../../assets/images/banner-images/team4.png"
import drimage1 from "../../../assets/images/banner-images/dr-1.png"
import drimage2 from "../../../assets/images/banner-images/dr-2.jpg"

const Banner = () => {
  return (
    <div className="py-5 banner">
      <div className='wrapper-banner'>
        <Row className="align-items-center">
          <Col xs={12} md={5} className='p-4 height-100 text-center text-md-start'>
            <h1 className='banner-heading'><strong>30</strong> <span className="text-success">Years</span></h1>
            <h4><span className="mb-3 bg-dark text-white px-2 py-1 m-1">1994 - 2024</span></h4>
            <p className='banner-title'>Southern Arizona's Largest and Most Advanced Multi-Specialty Orthopaedic Group</p>
            <Button variant="dark" className='mb-4 mb-md-0'>More Info</Button>
          </Col>
          <Col xs={12} md={7} className="text-center position-relative">
            <div className="dr-images-container">
              <Image src={drimage1} className='dr-img1 ' alt="Doctor 1"/>
              <Image src={drimage2} className='dr-img2 ' alt="Doctor 2"/>
            </div>
            <div className="team-container">
              <div className="bg-white rounded p-2 d-inline-block team">
                <strong>Meet Our Providers</strong>
                <div className="d-flex align-items-center mt-2 flex-wrap justify-content-center">
                  <Image src={team1} className='team-img ' alt="Team member 1"/>
                  <Image src={team2} className='team-img ' alt="Team member 2"/>
                  <Image src={team3} className='team-img ' alt="Team member 3"/>
                  <Image src={team4} className='team-img ' alt="Team member 4"/>
                  <span className="ms-2">33+</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;