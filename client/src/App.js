import React from 'react';
import { Component } from 'react';
import { Container } from 'react-bootstrap';

import Navigation from "./components/Navigation";

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
          Test
      </Container>
    );
  }
}

export default App;