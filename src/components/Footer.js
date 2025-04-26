import { Container, Row, Col } from "react-bootstrap";
import { TicTacToe } from "./TicTacToe";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/linkedin.png';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/instagram.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <TicTacToe />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ajayvarman-26x/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/AJayvarman0626"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/ice.man_32?igsh=MWIxeGhpZDV4dHFwMA=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p> Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
