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

    window.addEventListener("scroll", onScroll);
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
            <h1 style={{ color: '#FFFFFF' }}>SREYLEAK</h1>
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
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon-group">
                <a href="https://github.com/Sreyleak-Deth" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <div className="social-icon">
                    <img src={github} alt="GitHub" />
                  </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100090944314911&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <div className="social-icon">
                    <img src={facebook} alt="Facebook" />
                  </div>
                </a>
                <a href="https://instagram.com/se_jeongdev?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <div className="social-icon">
                    <img src={instagram} alt="Instagram" />
                  </div>
                </a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd">
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
