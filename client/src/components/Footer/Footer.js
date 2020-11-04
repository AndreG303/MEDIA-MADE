import React from "react";
import {Navbar, Nav} from 'react-bootstrap';




function Footer() {

  return( 

<>
  <Navbar >
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="">Coctact Us</Nav.Link>
    </Nav>
  </Navbar>
</>

)
}

export default Footer;