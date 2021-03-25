import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { useDispatch } from "react-redux";

import { deleteTrip, likeTrip } from '../../../actions/trips';

import './Trip.css';

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
          <><i className="bi bi-hand-thumbs-up-fill icon-color"></i>&nbsp;{trip.likes.length > 2 ? `You and ${trip.likes.length - 1} others` : `${trip.likes.length} like${trip.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><i className="bi bi-hand-thumbs-up icon-color"></i>&nbsp;{trip.likes.length} {trip.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><i className="bi bi-hand-thumbs-up"></i>&nbsp;Like</>;
  };

  return (
    <Card style={{ width: '20rem' }} className="mb-4" >
      <Card.Img variant="top" src={trip.selectedFile} ></Card.Img>
      <Card.Body>
        <Row className="mb-2">
          <Col>
            <Card.Title>{trip.title}</Card.Title>
          </Col>
          <Row>
            <Col>
              <Card.Subtitle className="pt-2 mr-2 icon-color">{trip.tags.map((tag) => `#${tag} ` )}</Card.Subtitle>
            </Col>
          </Row>
        </Row>
        <Card.Text>{trip.description}</Card.Text>
        <Card.Text className="ml-4 mt-4">{trip.startPlace}</Card.Text>
        <Row>
          <Card.Title className="ml-5 icon-color"><i className="bi bi-arrow-down-circle"></i></Card.Title>
          <Card.Subtitle className="pt-2 ml-1 icon-color">3 stops</Card.Subtitle>
          <Card.Text className="ml-1">Ber, Ams, Dub</Card.Text>
        </Row>
        <Card.Text className="ml-4 mb-5">{trip.endPlace}</Card.Text>
        <Row className="mb-2">
          <Col>
            <Card.Subtitle className="mb-2 text-muted">{trip.name}</Card.Subtitle>
          </Col>
          <Row>
            <Col>
              {/* using the moment library - fromNow() uses the date and says how long since the date, eg, 1 week ago */}
              <Card.Subtitle className="mb-2 mr-2 text-muted">{moment(trip.createdAt).fromNow()}</Card.Subtitle>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col>
            <Button variant="light" className="mr-2 border-color border-btn" disabled={!user?.result} onClick={() => dispatch(likeTrip(trip._id)) }>
              <Likes />
            </Button>
          </Col>
          <Row>
            <Col>
            {(user?.result?.googleId === trip?.user || user?.result?._id === trip?.user) && (
              <Button className="mr-2 edit-btn" onClick={() => setCurrentId(trip._id)}>
                <i className="bi bi-three-dots"></i>
              </Button>
            )}
            {/* if user of trip is logged in show delete button for that trip */}
            {(user?.result?.googleId === trip?.user || user?.result?._id === trip?.user) && (
              <Button variant="outline-danger" className="mr-2 border-btn" onClick={() => dispatch(deleteTrip(trip._id)) }>
                <i className="bi bi-trash"></i>
              </Button>
            )}
            </Col>
          </Row>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Trip;