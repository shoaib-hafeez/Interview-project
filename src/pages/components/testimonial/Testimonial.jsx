import './testimonial.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
const Testimonial = () => {
  return (
    <section className="testimonials-section py-5">
      <Container>
        <h3 className="text-center mb-5">Testimonials</h3>
        <Row className="justify-content-center">
          {/* Testimonial 1 */}
          <Col md={4} className="mb-4 d-flex">
            <Card className="testimonial-card">
              <Card.Body>
                <div className="quote-icon">“</div>
                <Card.Text className="small">
                  We had to visit for a neck injury from sports and I am so thankful for this walk-in clinic! We were seen very quickly and left with a neck brace within a very reasonable time period. Everyone that we had contact with was extremely nice and helpful. Highly recommended!
                </Card.Text>
                <Card.Footer className="bg-transparent border-0 mt-3">
                  <p className="mb-0 fw-bold small">So much better than ER or regular urgent care</p>
                  <p className="mb-0">Trish D</p>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Testimonial 2 (highlighted) */}
          <Col md={4} className="mb-4 d-flex">
            <Card className="testimonial-card av highlight-card text-white bg-success ">
              <Card.Body>
                <div className="quote-icon">“</div>
                <Card.Text className="small">
                  I was pleased with the service I received from Esco Esquivel in Patient Accounts. She helped me with activating my Medicare card for traveling out of state. She was very pleasant, very informative and patient about how to activate my passport on my Medicare.
                </Card.Text>
                <Card.Footer className="bg-transparent border-0 mt-3">
                  <p className="mb-0 fw-bold small">Wonderful Service</p>
                  <p className="mb-0">Jerlina E., Esco</p>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Testimonial 3 */}
          <Col md={4} className="mb-4 d-flex">
            <Card className="testimonial-card">
              <Card.Body>
                <div className="quote-icon">“</div>
                <Card.Text className="small">
                  Just wanted to take a couple of minutes of your time to tell you how wonderful you have been to me and my husband. You are such a calming force when everything seems out of control. Thank you for always listening and being there.
                </Card.Text>
                <Card.Footer className="bg-transparent border-0 mt-3">
                  <p className="mb-0 fw-bold small">Our Angel</p>
                  <p className="mb-0">Laura & Dave P., Esco</p>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Dots */}
        <div className="text-center mt-4">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial