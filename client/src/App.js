import React , { useEffect } from 'react'; //useEffect is used for componentDidMount/componentWillUpdate methods
import { 
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { useDispatch } from 'react-redux'; //hook to dispatch an action

import { getTrips } from './actions/trips';
import Navigation from "./components/Navigation";
import TripForm from './components/Form/TripForm/TripForm';
import Trips from './components/Trips/Trips';

import './css/App.css';

const App = () => {
  //Define the dispatch to be equal to useDispatch() hook
  const dispatch = useDispatch();

  //used for componentDidMount/componentWillUpdate methods
  //inside method: callback function and empty array
  useEffect(() => {
    //dispatch an action
    dispatch(getTrips());
  }, [dispatch]);

    return (
      <Container>
          <Navigation mb="5" />
        <Row>
          <Col sm={8}><Trips/></Col>
          <Col sm={4}><TripForm/></Col>
        </Row>
      </Container>
    );
}

export default App;