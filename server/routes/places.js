import express from 'express';

//imports functions from /controllers/Places.js
import { getPlaces, createPlace } from '../controllers/Places.js';

const router = express.Router();

//app.use('/Places', placeRoutes); in index.js changes this to http://localhost:5000/Places
router.get('/', getPlaces);
router.post('/', createPlace);

export default router;