import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  // const user = null;
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
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Nav.Link>Logout</Nav.Link>
          </Nav.Item>
          
            <Navbar.Brand href="#home">
                <img
                    src="logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="The Beaten Trail"
                />
            </Navbar.Brand>
            <Nav.Item>
              {/* <Nav.Link><Image alt={user.result.name} src={user.result.imageUrl} roundedCircle>{user.result.name.charAt(0)}</Image></Nav.Link> */}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Register</Nav.Link>
            </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Navigation;