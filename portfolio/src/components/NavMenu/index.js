import React from "react";
import "./style.css";
import { Navbar, Nav} from "react-bootstrap";

function NavMenu() {
  return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="text-light" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-light" href="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="text-light" href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="text-light" href="/resume">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavMenu;
