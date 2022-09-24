const preload = require('../middleware/preload');
const { getAllTrips } = require('../services/trip');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/trips', async (req, res) => {
    const trips = await getAllTrips();
    res.render('catalog', { title: 'Shared Trips', trips });
});

router.get('/trips/:id', preload(true), (req, res) => {
    res.render('details', { title: 'Trip Details' });
});


module.exports = router;