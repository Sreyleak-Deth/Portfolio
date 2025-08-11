import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Sreyleak's work on our mobile app was exceptional. Delivered on time and exceeded expectations.",
      name: "John Doe",
      role: "CEO at TechCorp"
    },
    {
      text: "One of the most professional developers I've worked with. Highly recommended for UI/UX projects.",
      name: "Jane Smith",
      role: "Design Lead at Creative Inc"
    }
  ];

  return (
    <section className="testimonial" id="testimonials">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Testimonials</h2>
                <div className="testimonial-wrapper">
                  {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                      <p className="testimonial-text">"{testimonial.text}"</p>
                      <div className="testimonial-author">
                        <h5>{testimonial.name}</h5>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
