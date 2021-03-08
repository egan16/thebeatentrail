//this file is for the handlers for routes
import mongoose from 'mongoose';

//gives access to trip model
import TripOverView from '../models/tripOverView.js';
// import Place from '../models/place.js';

//arrow function will run when http://localhost:5000/trips is run
export const getTrips = async (req, res) => {
    try {
        //get all trips
        const tripOverViews = await TripOverView.find({})
                                                // .populate('startPlace', 'title')
                                                // .populate('endPlace', 'title')
                                                // .exec();
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
    //create new post with users id created with the trip
    const newTrip = new TripOverView({ ...trip, user: req.userId, createdAt: new Date().toISOString() });
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

export const updateTrip = async (req, res) => {
    const { id: _id } = req.params;
    const trip = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No trip with that id');

    //update trip by id, second param is the trip, third param sets the object new to true
    const updatedTrip = await TripOverView.findByIdAndUpdate(_id, { ...trip, _id }, { new: true });

    res.json(updatedTrip);

}

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

    //check if user is authenicated
    if(!req.userId) return res.json({ message: 'Unauthenticated' });

    //check is the trip that the user wants to like valid
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No trip with that id');

    //return trip by id
    const trip = await TripOverView.findById(id);

    //check if users id is already in the liked section or not
    const index = trip.likes.findIndex((id) => id === String(req.userId));
    //if above returns true users id has already liked the post

    if(index === -1) {
        //like the trip (add users id to likes array)
        trip.likes.push(req.userId);
    } else {
        //unlike the trip (remove users id from likes array)
        trip.likes = trip.likes.filter((id) => id !== String(req.userId)); //loops through all ids in array and filter out users id
    }

    //update trip by id, second param is where the updates are passed in (update the whole trip), third param sets the object new to true
    const updatedTrip = await TripOverView.findByIdAndUpdate(id, trip, { new: true });

    res.json(updatedTrip);

}