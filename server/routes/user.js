import express from 'express';

//imports functions from /controllers/users.js
import { signin, signup } from '../controllers/user.js'

const router = express.Router();

//app.use('/user', userRoutes); in index.js changes this to http://localhost:5000/user

//post request to send user data to the back end from the form
router.post('/signin', signin);
router.post('/signup', signup);

export default router;