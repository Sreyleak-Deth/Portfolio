import { Col, Row } from "react-bootstrap";
import React from "react";
import '../styles/Newsletter.css'; 

export const Newsletter = ({ status }) => {
  return (
    <Col lg={12}>
      <div className="quote-container">
        <div className="quote-bx">
          <div className="quote-mark left">“</div>
          <div className="quote-content">
            <h3>
              Dream in color, work in detail, and never stop learning — 
              <span className="highlight"> that's how you turn vision into reality</span>.
            </h3>
          </div>
          <div className="quote-mark right">”</div>
        </div>
      </div>
    </Col>
  )
}
