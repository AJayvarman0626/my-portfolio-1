import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const fullStackProjects = [
    {
      title: "Jokaela E-commerce",
      description: "React & Tailwind CSS",
      imgUrl: projImg1,
      link: "https://github.com/AJayvarman0626/ecom-Jokaela"
    },
    {
      title: "We-Chat 2.0",
      description: "React & Daisy UI",
      imgUrl: projImg2,
      link: "https://github.com/AJayvarman0626/We-Chat-2.0"
    },
  ];

  const frontendProjects = [
    {
      title: "Coming Soon",
      description: "Frontend Project",
      imgUrl: projImg3,
      link: ""
    },
    {
      title: "Coming Soon",
      description: "Frontend Project",
      imgUrl: projImg3,
      link: ""
    },
    {
      title: "Coming Soon",
      description: "Frontend Project",
      imgUrl: projImg3,
      link: ""
    },
  ];

  const backendProjects = [
    {
      title: "Coming Soon",
      description: "Backend Project",
      imgUrl: projImg3,
      link: ""
    },
    {
      title: "Coming Soon",
      description: "Backend Project",
      imgUrl: projImg3,
      link: ""
    },
    {
      title: "Coming Soon",
      description: "Backend Project",
      imgUrl: projImg3,
      link: ""
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I've worked on. Click any to view the code on GitHub.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full-Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Front-End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Back-End</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {fullStackProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {frontendProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {backendProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
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
      <img className="background-image-right" src={colorSharp2} alt="decoration" />
    </section>
  );
};
