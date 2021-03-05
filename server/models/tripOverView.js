import mongoose from 'mongoose';

//create mongoose schema for trips
const tripSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    //users first & last name
    name: String,
    // users id
    user: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    startPlace: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Place'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//turn schema into a model
const TripOverView = mongoose.model('TripOverView', tripSchema)

export default TripOverView;