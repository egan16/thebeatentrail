import React , { useEffect } from 'react'; //useEffect is used for componentDidMount/componentWillUpdate methods
import { 
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { useDispatch } from 'react-redux'; //hook to dispatch an action

import Navigation from "./components/Navigation";
import TripForm from './components/Form/TripForm/TripForm';
import Trips from './components/Trips/Trips';

import './css/App.css';

const App = () => {
  //Define the dispatch to be equal to useDispatch() hook
  const dispatch = useDispatch();
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