import React, { useState, useEffect } from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import { useDispatch } from 'react-redux'; //hook to dispatch an action

import { getTrips } from '../../actions/trips';

import TripForm from '../Form/TripForm/TripForm';
import Trips from '../Trips/Trips';

const Home = () => {
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
    )
}

export default Home;