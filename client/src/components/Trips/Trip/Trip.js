import React from 'react';
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';

//pass in trip as props
const Trip = ({ trip }) =>  {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={trip.selectedFile} ></Card.Img>
      <Card.Body>
        <Card.Title>{trip.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{trip.tags.map((tag) => `#${tag} ` )}</Card.Subtitle>
        <Card.Text>{trip.description}</Card.Text>
        {/* using the moment library - fromNow() uses the date and says how long since the date, eg, 1 week ago */}
        <Card.Subtitle className="mb-2 text-muted">{moment(trip.createdAt).fromNow()}</Card.Subtitle>
        <Button variant="primary" onClick={() => {} }>Edit?</Button>
        <Button variant="primary" onClick={() => {} }>Like {trip.likeCount}</Button>
        <Button variant="primary" onClick={() => {} }>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Trip;