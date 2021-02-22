import React from 'react';
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';
import { useDispatch } from "react-redux";

import { deleteTrip, likeTrip } from '../../../actions/trips';

//pass in trip and setCurrentId as props
const Trip = ({ trip, setCurrentId }) =>  {
  const dispatch = useDispatch(); //initialise dispatch variable to = useDispatch hook
  //get user from local storage
  const user = JSON.parse(localStorage.getItem('profile'));

  //for Likes
  const Likes = () => {
    if (trip.likes.length > 0) {
      //check if likes array cotains current id of the logged in user (google or app)
      return trip.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          //dislplay like depending on how many likes the trip already has
          <><i className="bi bi-hand-thumbs-up-fill"></i>&nbsp;{trip.likes.length > 2 ? `You and ${trip.likes.length - 1} others` : `${trip.likes.length} like${trip.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><i className="bi bi-hand-thumbs-up"></i>&nbsp;{trip.likes.length} {trip.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><i className="bi bi-hand-thumbs-up"></i>&nbsp;Like</>;
  };

  return (
    <Card style={{ width: '18rem' }} className="mb-4" >
      <Card.Img variant="top" src={trip.selectedFile} ></Card.Img>
      <Card.Body>
        <Card.Title>{trip.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{trip.tags.map((tag) => `#${tag} ` )}</Card.Subtitle>
        <Card.Text>{trip.description}</Card.Text>
        {/* using the moment library - fromNow() uses the date and says how long since the date, eg, 1 week ago */}
        <Card.Subtitle className="mb-2 text-muted">{moment(trip.createdAt).fromNow()}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{trip.name}</Card.Subtitle>
        {/* //Edit button now stores trip id state */}
        <Button variant="outline-info" className="mr-2" onClick={() => setCurrentId(trip._id)}>
          <i className="bi bi-three-dots"></i>
        </Button>
        <Button variant="light" className="mr-2" disabled={!user?.result} onClick={() => dispatch(likeTrip(trip._id)) }>
          <Likes />
        </Button>
        {/* if user of trip is logged in show delete button for that trip */}
        {(user?.result?.googleId === trip?.user || user?.result?._id === trip?.user) && (
          <Button variant="outline-danger" className="mr-2" onClick={() => dispatch(deleteTrip(trip._id)) }>
            <i className="bi bi-trash"></i>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Trip;