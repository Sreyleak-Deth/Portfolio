import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import app1 from "../assets/img/app1.png";
import app2 from "../assets/img/app2.png";
import app3 from "../assets/img/app3.png";
import app4 from "../assets/img/seav_phov_app.png";
import app5 from "../assets/img/emergency.png";
import app6 from "../assets/img/youtube.png";
import ui1 from "../assets/img/seav_phov.png";
import ui2 from "../assets/img/job_secker.png";
import ui3 from "../assets/img/covid19.png";
import web1 from "../assets/img/healthcare.png";
import backend1 from "../assets/img/swagger.jpg";
import React from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const mobile_app = [
    {
      title: "Google Map",
      description: "Mobile Development",
      imgUrl: app1,
    },
    {
      title: "Doctor App",
      description: "Mobile Development",
      imgUrl: app2,
    },
    {
      title: "E-Robot",
      description: "Mobile Development",
      imgUrl: app3,
    },
    {
      title: "Seav Phov",
      description: "Mobile Development",
      imgUrl: app4,
    },
    {
      title: "Emergency App",
      description: "Mobile Development",
      imgUrl: app5,
    },
    {
      title: "YouTube Api",
      description: "Mobile Development",
      imgUrl: app6,
    },
  ];
  const ui_ux = [
    {
      title: "Seav Phov UI",
      description: "UI/UX Design",
      imgUrl: ui1,
    },
    {
      title: "Job Seeker UI",
      description: "UI/UX Design",
      imgUrl: ui2,
    },
    {
      title: "Covid19 UI",
      description: "UI/UX Design",
      imgUrl: ui3,
    }
  ];
  const web = [
    {
      title: "Healthcare Website",
      description: "Web Development",
      imgUrl: web1,
    },
  ];
  const backend = [
    {
      title: "Swagger API Ui",
      description: "Backend Development",
      imgUrl: backend1,
    },
  ];

  return (
    <section className="project" id="project">
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
                        {
                          mobile_app.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          ui_ux.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          web.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                    <Row>
                        {
                          backend.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
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
