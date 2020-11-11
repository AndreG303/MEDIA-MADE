import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "./Footer.css";

function Footer() {

  return (
    <div className="fixed-bottom"style={{display:"flex", justifyContent:"center"}}>
      <Navbar className="footer" fixed="bottom" style={{marginTop: "50px"}}>
        <Navbar.Brand>
          <img
            alt="logo"
            src="../assets/logo/media-made.png"
            width="60"
            height="40"
            className="d-inline-block"
          />{' '}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/aboutUs">MADE WITH LOVE ❤️</Nav.Link>
        </Nav>
      </Navbar>
      </div>
  )
}

export default Footer;