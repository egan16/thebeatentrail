import mongoose from 'mongoose';

const ratingSchema = mongoose.Schema({
    
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    place_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Place'
    }
});

const Rating = mongoose.model('Rating', ratingSchema );

export default Rating;