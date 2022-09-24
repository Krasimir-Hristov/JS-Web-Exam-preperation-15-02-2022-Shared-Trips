const { getAllTrips } = require('../services/trip');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/trips', async (req, res) => {
    const trips = await getAllTrips();
    res.render('catalog', { title: 'Shared Trips', trips });
});




module.exports = router;