import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";
import github from "../assets/img/github.svg";
import facebook from "../assets/img/nav-icon2.svg";
import instagram from "../assets/img/nav-icon3.svg";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col sm={12} className="text-center">
            <div className="social-icon-group">
              <a 
                href="https://github.com/Sreyleak-Deth" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="social-icon-link"
              >
                <div className="social-icon">
                  <img src={github} alt="GitHub" />
                </div>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100090944314911&mibextid=ZbWKwL" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="social-icon-link"
              >
                <div className="social-icon">
                  <img src={facebook} alt="Facebook" />
                </div>
              </a>
              <a 
                href="https://instagram.com/se_jeongdev?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="social-icon-link"
              >
                <div className="social-icon">
                  <img src={instagram} alt="Instagram" />
                </div>
              </a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
