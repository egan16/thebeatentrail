import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//initialise this application
const app = express();

//setting up body parser to send successful requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//setting up cors
app.use(cors());

//MongoDB Atlas connection
const CONNECTION_URL = 'mongodb+srv://mikeTBT:secret123@cluster0.9hada.mongodb.net/<dbname>?retryWrites=true&w=majority';
// PORT for running application

//To connect DB to application
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    //above returns a promise, need a .then with arrow function for a successful connection
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    //.catch with arrow function for an unsuccessful connection
    .catch((error) => console.log(error.message));

//takes care of potential warnings in console 
mongoose.set('useFindAndModify', false);