import mongoose from 'mongoose';

//create mongoose schema for trips
const tripSchema = mongoose.Schema({
    title: String,
    description: String,
    user: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//turn schema into a model
const TripOverView = mongoose.model('TripOverView', tripSchema)

export default TripOverView;