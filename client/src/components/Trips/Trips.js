import React from 'react';
import { useSelector } from 'react-redux';//To retrieve the data in components from global redux store
import { Col, Container, Row, Spinner } from "react-bootstrap";

import Trip from './Trip/Trip';

const Trips = () =>  {
  //initialise useSelector as hook
  //inside of useSelector() there is a callback function
  //state is a parameter of the callbacback function to get access to state (global redux store)
  //then return the trips in state (called trips in combined reducers)
  const trips = useSelector((state) => state.trips);

  console.log(trips);

    return (
      // if there are no trips show a spinner, if there are trips show trips
      !trips.length ? <Spinner animation="border" variant="dark" /> : (
        <Container>
          <Row xs={1} md={2} lg={3} xl={4}>
            {/* to loop over trips */}
            {trips.map((trip) => (
              <Col key={trip._id}>
                <Trip trip={trip} />
              </Col>
            ))} 
          </Row>
        </Container>
      )
      
      
      // <div>
      //     <h1>Trips</h1>
      //     <Trip/>
      // </div>
    );
};

export default Trips;