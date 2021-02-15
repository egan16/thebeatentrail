import axios from 'axios'; //used to make api calls

//URL on backend route
const url = 'http://localhost:5000/trips';

//EXPORTING API REQUESTS
export const fetchTrips = () => axios.get(url); //exported function to get trips from backend on another file
export const createTrip = (newTrip) => axios.post(url, newTrip); //exported function to create trip
// export const updateTrip = (id, updatedTrip) => axios.patch(`${url}/${id}`, updatedTrip); //exported function to update a trip by id
export const deleteTrip = (id) => axios.delete(`${url}/${id}`); //exported function to delete trip by id
export const likeTrip = (id) => axios.patch(`${url}/${id}/likeTrip`); //exported function to update likes on a trip by id