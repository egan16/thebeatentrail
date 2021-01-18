import express from 'express';

const router = express.Router();

//arrow function will run when http://localhost:5000/ is run
router.get('/', (req, res) => {
    res.send('THIS WORKS');
});

export default router;