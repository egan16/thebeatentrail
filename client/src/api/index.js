import axios from 'axios'; //used to make api calls

//URL on backend route
const url = 'http://localhost:5000/trips';

//exported function to get trips from backend on another file
export const fetchTrips = () => axios.get(url);