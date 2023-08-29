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
            <div className="social-icon">
              <a href="https://github.com/leak17" target='_blank' ><img src={github} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100090944314911&mibextid=ZbWKwL" target='_blank'><img src={facebook} alt="Icon" /></a>
              <a href="https://instagram.com/se_jeongdev?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank'><img src={instagram} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
