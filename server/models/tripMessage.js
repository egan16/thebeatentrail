import mongoose from 'mongoose';

//create mongoose schema for trips
const tripSchema = mongoose.Schema({
    name: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//turn schema into a model
const TripMessage = mongoose.model('TripMessage', tripSchema)

export default TripMessage;