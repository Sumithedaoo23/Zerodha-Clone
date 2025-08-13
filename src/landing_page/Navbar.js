import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logopng from "../landing_page/images/logo (1).png";
import {Link} from "react-router-dom";

function Navba() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border-bottom"
      style={{ backgroundColor: "#fff", marginTop:'-24px',}}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logopng} style={{ width: "19%", marginLeft:'150px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <form>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", marginLeft:'100px', gap:'25px', textDecoration:'none' }}
              navbarScroll
             >
              <Link style={{textDecoration:'none',color:'black', fontSize:'18px',fontFamily:'sans-serif',}} to="/signup">Signup</Link>
              <Link style={{textDecoration:'none',color:'black', fontSize:'18px',fontFamily:'sans-serif',}} to="/about">About</Link>
              <Link style={{textDecoration:'none',color:'black', fontSize:'18px',fontFamily:'sans-serif',}} to="/product">Products</Link>
              <Link style={{textDecoration:'none',color:'black', fontSize:'18px',fontFamily:'sans-serif',}} to="/pricing">Pricing</Link>
              <Link style={{textDecoration:'none',color:'black', fontSize:'18px',fontFamily:'sans-serif',}} to="/support">Support</Link>
            </Nav>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navba;
