import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import github from '../assets/img/github.svg';
import facebook from '../assets/img/nav-icon2.svg';
import instagram from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <h1>SREYLEAK</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('home')}
                aria-label="Home"
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('skills')}
                aria-label="Skills"
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('projects')}
                aria-label="Projects"
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/leak17" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100090944314911&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://instagram.com/se_jeongdev?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd" aria-label="Let's Connect">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
