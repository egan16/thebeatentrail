import express from 'express';

//imports functions from /controllers/trips.js
import { getTrips , createTrip, deleteTrip, likeTrip} from '../controllers/trips.js'

const router = express.Router();

//app.use('/trips', tripRoutes); in index.js changes this to http://localhost:5000/trips
router.get('/', getTrips);
router.post('/', createTrip);
// router.patch('/:id', updateTrip);   //DONT FORGET TO IMPORT updateTrip up top
router.delete('/:id', deleteTrip);
router.patch('/:id/likeTrip', likeTrip);

export default router;