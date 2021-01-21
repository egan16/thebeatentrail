import React from 'react';
import { Component } from 'react';
import { Container } from 'react-bootstrap';

import Navigation from "./components/Navigation";
import TripForm from './components/Form/TripForm/TripForm';
import Trip from './components/Trips/Trip/Trip';
import Trips from './components/Trips/Trips';

import './css/App.css';

class App extends Component {
  // For storing state
  constructor(props) {
    // call super constructor in parent class (Component class)
    super(props);
    // bind property called this.state - ("this." refers to object created from the class template)
    this.state = {
        
    };
  }

  render() {
    return (
      <Container>
          <Navigation/>
          <TripForm/>
          <Trips/>
          <Trip/>
      </Container>
    );
  }
}

export default App;