import express from 'express';

//imports functions from /controllers/trips.js
import { getTrips } from '../controllers/trips.js'

const router = express.Router();

//app.use('/trips', tripRoutes); in index.js changes this to http://localhost:5000/trips
router.get('/', getTrips);

export default router;