//this file is for the handlers for routes

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

export const createTrip = (req, res) => {
    res.send('??');
}