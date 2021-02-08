import mongoose from 'mongoose';

//create mongoose schema for trips
const tripSchema = mongoose.Schema({
    title: String,
    description: String,
    user: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//turn schema into a model
const TripOverView = mongoose.model('TripOverView', tripSchema)

export default TripOverView;