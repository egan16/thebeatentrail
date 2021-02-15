//this file is for the handlers for routes

import mongoose from 'mongoose';

//gives access to trip model
import TripOverView from '../models/tripOverView.js';

//arrow function will run when http://localhost:5000/trips is run
export const getTrips = async (req, res) => {
    try {
        //get all trips
        const tripOverViews = await TripOverView.find();
        //log the trips
        console.log(tripOverViews);
        //respond with OK status and return JSON object of all trips
        res.status(200).json(tripOverViews);
    } catch (error) {
        //if error: respond with error status and return error message
        res.status(404).json({ message: error.message });
    }
}

//createTrip controller
export const createTrip = async (req, res) => {
    //post requests have access to request.body
    const trip = req.body;
    //create new post
    const newTrip = new TripOverView(trip);
    try {
        await newTrip.save();
        //when save is successful:
        //respond with 201 creation success status and send new trip in as json
        res.status(201).json(newTrip);
    } catch (error) {
        //if unsuccessful when creating new trip
        res.status(409).json({ message: error.message });
    }
}

// do edit function here


//deleteTrip controller
export const deleteTrip = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No trip with that id');

    await TripOverView.findByIdAndRemove(id);

    console.log('Deleted trip');

    res.json({ message: 'Trip deleted successfully' });
}

//likeTrip controller
export const likeTrip = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No trip with that id');

    //return trip by id
    const trip = await TripOverView.findById(id);
    //update trip by id, second param is where the updates are passed in (likeCount object increment by 1), third param sets the object new to true
    const updatedTrip = await TripOverView.findByIdAndUpdate(id, { likeCount: trip.likeCount + 1 }, { new: true });

    res.json(updatedTrip);

}