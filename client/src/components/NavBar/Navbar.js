import React, { Fragment, useContext } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import UserContext from "../../utils/UserContext";
import '../../app.css';
import { Link } from "react-router-dom";

function NavBar() {

  const { username, loggedIn } = useContext(UserContext);

  return (

    <Navbar className="navbar" expand="lg">
      <Navbar.Brand className="brand-title"><Link to="/">MEDIA MADE</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-body">
          <Link to="/">Home</Link>
          <Link to="/outfits">TV Shows</Link>
          <Link to="/aboutus">About Us</Link>
          {(() => {
            if (loggedIn) {
              return (
                <Fragment>
                    <Link to="/closet">Closet</Link>
                    <Link to="/logout">Log Out</Link>
                </Fragment>
              )
            }
            else {
              return (
                <Link to="/login" variant="secondary" size="lg">
                  Login
                </Link>
              )
            }

          })()}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;


