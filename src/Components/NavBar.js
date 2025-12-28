import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style/Navbar.css"

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-transparent">
        <Container>
          <Navbar.Brand href="#home"> <img src="/images/logo.png"  alt="Logo" style={{height:"19px", width:"100%"}} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="Home nav-link txt" style={{color:"#2C3AD1"}} to="/">
                Home
              </Link>
              <Link to="/about"   style={{color:"#2C3AD1"}} className="nav-link txt">
               Services
              </Link>
              <NavDropdown title="How It Works"  id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/dry-cleaning"  style={{color:"#2C3AD1"}} className="txt">
                  Dry Cleaning
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sneaker-cleaning"  style={{color:"#2C3AD1"}}className="txt">
                  Sneaker Cleaning
                </NavDropdown.Item>
                <NavDropdown.Item as={Link}  style={{color:"#2C3AD1"}} to="/price-details" className="txt">
                  Price Details
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link}   style={{color:"#2C3AD1"}} to="/contact-us" className="txt" >
                  Contact us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
