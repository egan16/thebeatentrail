import React from 'react';
import { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return (
        <Navbar bg="light" expand="lg" className="mb-5">
        <Navbar.Brand href="#home">
            <img
                src="logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="The Beaten Trail"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Item className="ml-auto">
            <Nav.Link>Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Nav.Link>Logout</Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;