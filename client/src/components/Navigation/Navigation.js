import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import './Nav.css';

const Navigation = () => {

  //set user state from localstorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();  
  const history = useHistory();
  const location = useLocation();

  //logout fuction to call logout action
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    //push to auth form when user logs out
    history.push('/auth');
    //set user = null
    setUser(null);
  };

  //automatically re-navigate 
  useEffect(() => {
    //if token exists send to token variable
    const token = user?.token;

    //if token exists...
    if(token) {
      //decode the token
      const decodedToken = decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    // when location changes set the user
    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line
  }, [location]);

  return (
      <Navbar expand="lg" className="mb-5 bg-color">
        <Navbar.Brand as={Link} to='/'>
            <img
                src="logowhite.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="The Beaten Trail"
            />{' '}
            <img
                src="namelogowhite.svg"
                width="150"
                height="30"
                className="d-inline-block align-top"
                alt="The Beaten Trail"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav.Item>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav.Item> */}
          {user === null &&
          <Nav.Item className="ml-auto">
            <Nav.Link as={Link} to='/auth' className="item-color">Sign In</Nav.Link>
          </Nav.Item>}
          {user !== null &&
            <Navbar.Brand className="ml-auto">
                <img
                    src={user?.result.imageUrl}
                    width="30"
                    height="30"
                    className="d-inline-block align-top profileImg"
                    alt={user?.result.name.charAt(0)}
                />
            </Navbar.Brand>}
          {user !== null && 
            <Navbar.Text className="nav-text">
              {user?.result.name}
            </Navbar.Text>
          }
            {user !== null &&
          <Nav.Item>
            <Nav.Link onClick={logout} className="item-color">Logout</Nav.Link>
          </Nav.Item>}
          {/* <Nav.Item> */}
              {/* <Nav.Link><Image alt={user.result.name} src={user.result.imageUrl} roundedCircle>{user.result.name.charAt(0)}</Image></Nav.Link> */}
          {/* </Nav.Item> */}
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Navigation;