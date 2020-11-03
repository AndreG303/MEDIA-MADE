import React, {Fragment, useContext} from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import UserContext from "../../utils/UserContext";
import './Navbar.css';



function NavBar() {

  const {username, loggedIn} = useContext(UserContext);

  return( 

<Navbar className="navbar" expand="lg">
  <Navbar.Brand className="brand-title" href="/">MEDIA MADE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto navbar-body">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="">TV Shows</Nav.Link>
      <Nav.Link href="">About Us</Nav.Link>
    { ( () => {
      if(loggedIn){
        return(
        <Fragment>
          <NavDropdown title={username} id="basic-nav-dropdown">
          <NavDropdown.Item href="/">My Closet</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Fragment>
      )
      }
      else{
        return(
          <Nav.Link href="/login" variant="secondary" size="lg">
          Login
          </Nav.Link>
        )
      }
      
      })()}

    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default NavBar;


