import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projectsData";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from "react";

export const Projects = () => {
  const { mobile_app, ui_ux, web, backend } = projectsData;

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here is a comprehensive list of the projects I've undertaken, encompassing both self-directed learning endeavors and internship engagements through school. I am pleased to note that each of these projects has been successfully completed, showcasing my commitment and dedication to honing my skills and knowledge.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI/UX</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">Backend</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {mobile_app.map((project, index) => (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {ui_ux.map((project, index) => (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            githubUrl={project.githubUrl}
                          />
                        ))}
                      </Row>                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {web.map((project, index) => (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            githubUrl={project.githubUrl}
                          />
                        ))}
                      </Row>                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <Row>
                        {backend.map((project, index) => (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            githubUrl={project.githubUrl}
                          />
                        ))}
                      </Row>                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
