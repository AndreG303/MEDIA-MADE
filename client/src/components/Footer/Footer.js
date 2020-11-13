import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../app.css";

function Footer() {
  return (
    <div
      className="fixed-bottom"
    >
      <Navbar className="footer" fixed="bottom" style={{ marginTop: "50px" }}>
        <Nav>
          <Nav>
            MADE WITH LOVE &copy;
          </Nav>
        </Nav>
        <Navbar.Brand>
          <img
            alt="logo"
            src="../assets/logo/media-made.png"
            width="60"
            height="40"
            className="d-inline-block"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Footer;
