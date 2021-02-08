import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
// import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { createTrip } from '../../../actions/trips';

const TripForm = () =>  {
  //useState hook
  const [tripData, setTripData] = useState({
    title: '',
    description: '',
    tags: '',
    selectedFile: ''
  });

  const dispatch = useDispatch();

  // handleSubmit function handler
  const handleSubmit = (e) => {
    e.preventDefault(); //so browser does not refresh

    dispatch(createTrip(tripData)); // dispatch createTrip action & pass in all the trip state
  }

  const clear = () => {

  }

  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Title>Create new trip</Card.Title>
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
              onChange={(e) => setTripData({ ... tripData, tags: e.target.value })}
            />
          </Form.Group>
          {/* <Form.Group controlId="selectedFile">
            <FileBase
              type="file"
              multiple={false}
              //callback function to convert image to string and sets it to state value for selectedFile
              onDone={(base64) => setTripData({ ... tripData, selectedFile: base64 })}
            />
          </Form.Group> */}
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