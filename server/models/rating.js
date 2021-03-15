import mongoose from 'mongoose';

const ratingSchema = mongoose.Schema({
    
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Place'
    }
});

const Rating = mongoose.model('Rating', ratingSchema );

export default Rating;