import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'; //useSelector - To retrieve the data in components from global redux store

import { createTrip, updateTrip } from '../../../actions/trips';
import { getPlaces } from '../../../actions/places';

// pass in currentId, setCurrentId as props from state in parent App.js
const TripForm = ({ currentId, setCurrentId }) =>  {
  //useState hook
  const [tripData, setTripData] = useState({
    title: '',
    description: '',
    tags: '',
    selectedFile: '',
    startPlace: ''
  });
  
  // get the trip with the current id, if no current id have null
  const trip = useSelector((state) => currentId ? state.trips.find((t) => t._id == currentId) : null);
  // get the places from state
  const places = useSelector((state) => state.places);

  console.log(places);
  
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
      startPlace: ''
    });
  }

  //if no user in local storage
  if(!user?.result?.name) {
    //return card which says cannot create trip
    return(
      <Card className="mt-2">
        <Card.Body>
          <Card.Title>Please Sign In!</Card.Title>
          <Card.Text>
            You must sign in to create a trip and like other users trips.
          </Card.Text>
          <Card.Link as={Link} to='/auth'>Sign In</Card.Link>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Title>{currentId ? 'Edit' : 'Create'} a trip</Card.Title>
        {/* start of Form */}
        {/* onSubmit handler attached to form to execute handleSubmit function when button clicked  */}
        <Form onSubmit={handleSubmit}>
          {/* start of title */}
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
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
            <Form.Label>Starting city</Form.Label>              
              <Form.Control 
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
          {/* start of title */}
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="10"
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
          <Form.Group controlId="selectedFile">
            <FileBase
              type="file"
              multiple={false}
              //callback function to convert image to string and sets it to state value for selectedFile
              onDone={({base64}) => setTripData({ ... tripData, selectedFile: base64 })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button className="ml-2" variant="info" onClick={clear}>
            Clear
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TripForm;