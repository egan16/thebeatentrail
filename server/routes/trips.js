import express from 'express';

const router = express.Router();

//arrow function will run when http://localhost:5000/ is run
//app.use('/trips', tripRoutes); in index.js changes this to http://localhost:5000/trips
router.get('/', (req, res) => {
    res.send('THIS WORKS');
});

export default router;