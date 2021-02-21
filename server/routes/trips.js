import express from 'express';

//imports functions from /controllers/trips.js
import { getTrips, createTrip, updateTrip, deleteTrip, likeTrip} from '../controllers/trips.js'
//import auth middleware
import auth from '../middleware/auth.js';

const router = express.Router();

//app.use('/trips', tripRoutes); in index.js changes this to http://localhost:5000/trips
router.get('/', getTrips);
router.post('/', auth, createTrip); //auth middlware checks if token valid before user can create a trip
router.patch('/:id', auth, updateTrip); //auth middlware checks if token valid before user can edit a trip
router.delete('/:id', auth, deleteTrip); //auth middlware checks if token valid before user can delete a trip
router.patch('/:id/likeTrip', auth, likeTrip); //auth middlware checks if token valid before user can like a trip

export default router;