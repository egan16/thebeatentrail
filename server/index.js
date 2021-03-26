// require('dotenv').config()
import dotenv from 'dotenv';// to use .env file for database variables
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { PythonShell } from 'python-shell'; //to allow python to work with node


//import for trips routes
import tripRoutes from './routes/trips.js';
//import for user routes
import userRoutes from './routes/user.js';
//import for place routes
import placeRoutes from './routes/places.js';

//to use .env file
dotenv.config();

//initialise this application
const app = express();

//setting up body parser to send successful requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//setting up cors
app.use(cors());

//express middleware to connect trips.js to application
//this changes the route from 'http://localhost:5000/' to 'http://localhost:5000/trips'
app.use('/trips', tripRoutes);
//user routes
app.use('/user', userRoutes);
//place routes
app.use('/places', placeRoutes);


//PythonShell RS INTEGRATION ->

// PythonShell.run('./RS.py', null, function (err) {
//     if (err) throw err;
//     // result is an array consisting of messages collected  
//     // during execution of script.
//     console.log('finished');
//   });

PythonShell.runString('x=1+1;print(x)', null, function (err, result) {
    if (err) throw err;
    // result is an array consisting of messages collected  
    //during execution of script.
    console.log('finished: result of x is ' + result);
  });


//CHILD PROCCESS RS INTEGRATION ->

// app.get('/name', callName);
// function callName(req, res) { 
      
//     // Use child_process.spawn method from  
//     // child_process module and assign it 
//     // to variable spawn 
    // const spawn = require('child_process').spawn;
      
//     // Parameters passed in spawn - 
//     // 1. type_of_script 
//     // 2. list containing Path of the script 
//     //    and arguments for the script  
      
//     // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
//     // so, first name = Mike and last name = Will 
    // const process = spawn('python3',["./RS.py"]); 
  
//     // Takes stdout data from script which executed 
//     // with arguments and send this data to res object 
    // process.stdout.on('data', data => { 
    //     // res.send(data.toString());
    //     console.log(data.toString());
    // }); 
// } 

//MongoDB Atlas connection
const CONNECTION_URL = process.env.DB_HOST;
// PORT for running application
// const PORT = process.env.PORT;

//To connect DB to application
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    //above returns a promise, need a .then with arrow function for a successful connection
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    //.catch with arrow function for an unsuccessful connection
    .catch((error) => console.log(error.message));

//takes care of potential warnings in console 
mongoose.set('useFindAndModify', false);