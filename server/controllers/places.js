//this file is for the handlers for routes
import mongoose from 'mongoose';

//gives access to place model
import Place from '../models/place.js';

//arrow function will run when http://localhost:5000/places is run
export const getPlaces = async (req, res) => {
    try {
        //get all places
        const place = await Place.find();
        //log the places
        console.log(place);
        //respond with OK status and return JSON object of all places
        res.status(200).json(place);
    } catch (error) {
        //if error: respond with error status and return error message
        res.status(404).json({ message: error.message });
    }
}

//createPlace controller
export const createPlace = async (req, res) => {
    //post requests have access to request.body
    const place = req.body;

    try {
        await place.save();
        //when save is successful:
        //respond with 201 creation success status and send new trip in as json
        res.status(201).json(place);
    } catch (error) {
        //if unsuccessful when creating new trip
        res.status(409).json({ message: error.message });
    }
}