import mongoose from 'mongoose';

const placeSchema = mongoose.Schema({
    
    title: { 
        type: String, 
        required: true, 
        unique: true 
    }
});

const Place = mongoose.model('Place', placeSchema );

export default Place;