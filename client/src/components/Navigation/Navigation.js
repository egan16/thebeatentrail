import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {

  //set user state from localstorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  console.log(user);

  //automatically re-navigate 
  useEffect(() => {
    //if token exists send to token variable
    const token = user?.token;

    //manual sign up token (JWS) here when done

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

  return (
      <Navbar bg="light" expand="lg" className="mb-5">
        <Navbar.Brand as={Link} to='/'>
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
          <Nav.Item>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav.Item>
          {user === null &&
          <Nav.Item className="ml-auto">
            <Nav.Link as={Link} to='/auth'>Sign In</Nav.Link>
          </Nav.Item>}
          {user !== null &&
            <Navbar.Brand href="#home">
                <img
                    src="logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="user name"
                />
            </Navbar.Brand>}
            {user !== null &&
          <Nav.Item>
            <Nav.Link>Logout</Nav.Link>
          </Nav.Item>}
          <Nav.Item>
              {/* <Nav.Link><Image alt={user.result.name} src={user.result.imageUrl} roundedCircle>{user.result.name.charAt(0)}</Image></Nav.Link> */}
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Navigation;