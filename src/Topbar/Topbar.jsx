import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Topbar() {
  return (
    <div>
      <div className="header">
        <div className="title">
          <h1>
            {" "}
            <b> Siddaganga Spun Concrete Pipes Co. Pvt. Ltd</b>
            <h6 className="sub">
              Hosahalli, Tumkur - Koratagere Road, Obalapura Post, Tumkur - 572
              106
            </h6>
          </h1>
          <h6 className="sub-heading">
            Mfg. of R.C.C SPUN PIPES, COLLARS, DUST BINS, PUMP HOUSE & CISTERNS
          </h6>
        </div>
      </div>

      <Navbar className="navbar" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className="navigation"
              as={Link}
              to="/"
              activeClassName="active"
              style={{ fontSize: "1.5rem", color: "white", fontWeight: "bold" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="navigation"
              as={Link}
              to="/History"
              activeClassName="active"
              style={{ fontSize: "1.5rem", color: "white", fontWeight: "bold" }}
            >
              History
            </Nav.Link>
            <Nav.Link
              className="navigation"
              as={Link}
              to="/Customers"
              activeClassName="active"
              style={{ fontSize: "1.5rem", color: "white", fontWeight: "bold" }}
            >
              Customers
            </Nav.Link>
            <Nav.Link
              className="navigation"
              as={Link}
              to="/TechSpec"
              activeClassName="active"
              style={{ fontSize: "1.5rem", color: "white", fontWeight: "bold" }}
            >
              Tech Spec.
            </Nav.Link>
            <Nav.Link
              className="navigation"
              as={Link}
              to="/ContactUs"
              activeClassName="active"
              style={{ fontSize: "1.5rem", color: "white", fontWeight: "bold" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
