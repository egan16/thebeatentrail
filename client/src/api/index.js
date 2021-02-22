import axios from 'axios'; //used to make api calls

//URL on backend route
const API = axios.create({ baseURL: 'http://localhost:5000' });

//EXPORTING trip API REQUESTS
export const fetchTrips = () => API.get('/trips'); //exported function to get trips from backend on another file
export const createTrip = (newTrip) => API.post('/trips', newTrip); //exported function to create trip
export const updateTrip = (id, updatedTrip) => API.patch(`/trips/${id}`, updatedTrip); //exported function to update a trip by id
export const deleteTrip = (id) => API.delete(`/trips/${id}`); //exported function to delete trip by id
export const likeTrip = (id) => API.patch(`/trips/${id}/likeTrip`); //exported function to update likes on a trip by id

//EXPORTING user API REQUESTS
export const signIn = (formData) => API.post('/users/sigin', formData);
export const signUp = (formData) => API.post('/users/sigup', formData);