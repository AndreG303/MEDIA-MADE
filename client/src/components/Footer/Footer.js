import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function Footer() {

  return (
    <>
      <Navbar fixed="bottom">
        <Navbar.Brand href="#home">
          {/* <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block"
          />{' '} */}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="mailto:andreamgamez@gmail.com">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default Footer;