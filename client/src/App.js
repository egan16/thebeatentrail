import React from 'react';
import { Component } from 'react';
import { 
  Container,
  Row,
  Col
} from 'react-bootstrap';

import Navigation from "./components/Navigation";
import TripForm from './components/Form/TripForm/TripForm';
import Trips from './components/Trips/Trips';

import './css/App.css';

const App = () => {
    return (
      <Container>
          <Navigation/>
        <Row>
          <Col sm={8}><Trips/></Col>
          <Col sm={4}><TripForm/></Col>
        </Row>
      </Container>
    );
}

export default App;