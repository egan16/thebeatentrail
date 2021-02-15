import React , { useState, useEffect } from 'react'; //useEffect is used for componentDidMount/componentWillUpdate methods
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
  const [currentId, setCurrentId] = useState(null); //initialise variable to = useState hook
  //Define the dispatch to be equal to useDispatch() hook
  const dispatch = useDispatch();

  //used for componentDidMount/componentWillUpdate methods
  //inside method: callback function and empty array
  useEffect(() => {
    //dispatch an action
    dispatch(getTrips());
  }, [currentId, dispatch]);

    return (
      <Container>
          <Navigation mb="5" />
        <Row>
          <Col sm={8}>
            <Trips
              //pass in state to be used as props
              setCurrentId = {setCurrentId}
            />
          </Col>
          <Col sm={4}>
            <TripForm 
              //pass in state to be used as props
              currentId={currentId}
              setCurrentId = {setCurrentId}
            />
          </Col>
        </Row>
      </Container>
    );
}

export default App;