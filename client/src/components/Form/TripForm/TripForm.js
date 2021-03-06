import React, { useState, useEffect } from 'react';
import axios from 'axios'; //used to make api calls
import { Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'; //useSelector - To retrieve the data in components from global redux store

import { createTrip, updateTrip } from '../../../actions/trips';
import { getPlaces } from '../../../actions/places';

import './TripForm.css';

//Recommender system api url
const apiRS = "http://127.0.0.1:7000/apiRS";

// pass in currentId, setCurrentId as props from state in parent App.js
const TripForm = ({ currentId, setCurrentId }) =>  {
  //useState hook
  const [tripData, setTripData] = useState({
    title: '',
    description: '',
    tags: '',
    selectedFile: '',
    startPlace: '',
    endPlace: ''
  });

  //useState hook to set the data gotten from the RS api
  const [rsData, setRsData] = useState({});
  
  // get the trip with the current id, if no current id have null
  const trip = useSelector((state) => currentId ? state.trips.find((t) => t._id == currentId) : null);
  // get the places from state
  const places = useSelector((state) => state.places);

  console.log(places);

  //for recommend alert
  const [show, setShow] = useState(false);
  
  //dispatch for trip
  const dispatch = useDispatch();
  //dispatch for place
  const dispatchPlace = useDispatch();
  //gets the user from local storage
  const user = JSON.parse(localStorage.getItem('profile'));

  //useEffect to populate values of form if there is a current id
  //useEffect has 2 param: callback function and dependecy array
  //when trip value changes from null to a trip run the callback function
  useEffect(() => {
    if(trip) setTripData(trip);
  }, [trip]) 

  //useEffect to get places by dispatching getTrips action
  useEffect(() => {
    console.log(getPlaces());
    //dispatch an action
    dispatchPlace(getPlaces());
  }, [dispatchPlace]);

  //useEffect to get Recommendation
  useEffect(() => {
    getRecommendation();
  }, []);

  //function to run api axios call
  const getRecommendation = async () => {
    //COMMENTED OUT: TRYING TO FIX CORS ISSUE
    // const options = {
    //     method: 'GET',
    //     mode: 'no-cors'
    // };
    // const headers = {
    //   "Access-Control-Allow-Headers" : "Content-Type",
    //   "Access-Control-Allow-Origin": "http://localhost:5000",
    //   "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE"
    // };

    const response = await axios.get(apiRS);
    setRsData(response.data);
    // const response = await fetch(apiRS);
    // const jsonData = await response.json();
    // setRsData(jsonData);
  };

  // handleSubmit function handler
  const handleSubmit = (e) => {
    e.preventDefault(); //so browser does not refresh

    //if statement to check if there is trip id in state.
    if(currentId) {
      //make form update current trip, with the same users name
      dispatch(updateTrip(currentId, { ...tripData, name: user?.result?.name }));
    } else {
      //if there is no trip id...
      // dispatch createTrip action & pass in all the trip state with the current users name
      dispatch(createTrip({ ...tripData, name: user?.result?.name }));
    }
    clear();
  }

  const clear = () => {
    //reset trip id to null
    setCurrentId(0);
    //reset trip data to empty strings
    setTripData({
      title: '',
      description: '',
      tags: '',
      selectedFile: '',
      startPlace: '',
      endPlace: ''
    });
  }

  //if no user in local storage
  if(!user?.result?.name) {
    //return card which says cannot create trip
    return(
      <Card className="mt-2 no-border">
        <Card.Body>
          <Card.Title>Please Sign In</Card.Title>
          <Card.Text>
            You must sign in to create a trip and like other users trips.
          </Card.Text>
          <Button as={Link} to='/auth' className="purple-btn">
            Sign In
          </Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="mt-2 no-border">
      <Card.Body>
        <Card.Title>{currentId ? 'Edit' : 'Create'} a trip</Card.Title>
        {/* start of Form */}
        {/* onSubmit handler attached to form to execute handleSubmit function when button clicked  */}
        <Form onSubmit={handleSubmit}>
          {/* start of title */}
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              className="mt-1 input-box"
              required
              name="title"
              type="text"
              placeholder="Enter title of trip"
              //tripData is state object
              value={tripData.title}
              //event callback function to set the trip data for title to the input value
              // ... tripData, title: e.target.value <- this only changes specified state of the trip object
              onChange={(e) => setTripData({ ... tripData, title: e.target.value })}
            />
          </Form.Group>
          {/* start of startPlace */}
          <Form.Group controlId="startPlace">
            <Row>
              <Col>
                <Form.Label>Starting city</Form.Label>
              </Col>
              <Row>
                <Col>
                  <>
                    <Alert show={show} className="alert-box">
                      <Alert.Heading>City Recommendation</Alert.Heading>
                      <p>
                        Start your vacation in style, We think that you would love...
                      </p>
                      <p className="text-center mb-3">{rsData}</p>
                      <p>
                        Why not try it out?
                      </p>
                      <hr />
                      <div className="d-flex justify-content-end">
                        <Button className="purple-btn" onClick={() => setShow(false)}>
                          Close
                        </Button>
                      </div>
                    </Alert>

                    {!show && <Button className="mr-2 mb-2 rs-btn" onClick={() => setShow(true)}>Need a hint?</Button>}
                  </>
                </Col>
              </Row>
            </Row>            
              <Form.Control
                className="mt-2 input-box"
                as="select"
                defaultValue="Choose..."
                type="text"
                name="startPlace"
                onChange={(e) => setTripData({ ... tripData, startPlace: e.target.value })}
              >
                {/* loop through places */}
                {places.map((place) => (
                  <option 
                    key={place._id}
                    value={place._id}
                  >
                    {place.title}
                  </option>
                ))}
              </Form.Control>
          </Form.Group>
          {/* start of endPlace */}
          <Form.Group controlId="endPlace">
            <Form.Label>Final city</Form.Label>              
              <Form.Control
                className="mt-1 input-box"
                as="select"
                defaultValue="Choose..."
                type="text"
                name="endPlace"
                onChange={(e) => setTripData({ ... tripData, endPlace: e.target.value })}
              >
                {/* loop through places */}
                {places.map((place) => (
                  <option 
                    key={place._id}
                    value={place._id}
                  >
                    {place.title}
                  </option>
                ))}
              </Form.Control>
          </Form.Group>
          {/* start of title */}
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              className="mt-1 input-box"
              required
              as="textarea"
              rows="3"
              name="description"
              type="description"
              placeholder="Enter description of trip"
              value={tripData.description}
              onChange={(e) => setTripData({ ... tripData, description: e.target.value })}
            />
          </Form.Group>
          {/* start of tags */}
          <Form.Group controlId="tags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              className="mt-1 input-box"
              required
              name="tags"
              type="tags"
              placeholder="Enter tags of trip"
              value={tripData.tags}
              onChange={(e) => setTripData({ ... tripData, tags: e.target.value.split(',') })}
            />
            <Form.Text className="text-muted">
              Hint: Adventure,Beach (comma between hashtags with no spaces)
            </Form.Text>
          </Form.Group>
          <Form.Group className="mt-1 mb-4" controlId="selectedFile">
            <FileBase
              type="file"
              multiple={false}
              //callback function to convert image to string and sets it to state value for selectedFile
              onDone={({base64}) => setTripData({ ... tripData, selectedFile: base64 })}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mr-2 mt-2 purple-btn">
            Submit
          </Button>
          <Button className="mt-2 green-btn" variant="info" onClick={clear}>
            Clear
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TripForm;