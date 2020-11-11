import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "./Footer.css";

function Footer() {

  return (
    <div className="fixed-bottom">
      <Navbar className="footer" fixed="bottom" style={{marginTop: "50px"}}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block"
          />{' '}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/aboutUs">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
      </div>
  )
}

export default Footer;