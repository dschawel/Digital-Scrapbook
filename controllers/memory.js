let router = require('express').Router()
let db = require('../models')
let mbxClient = require('@mapbox/mapbox-sdk')
let mbxGeocode = require('@mapbox/mapbox-sdk/services/geocoding')

// Route to view memories
router.get('/', (req, res) => {
    res.render('memories/main')
})

// Route to create a new memory
router.get('/new', (req, res) => {
    res.render('memories/new')
})

// Route to view one memory
router.get('/:id', (req, res) => {
    res.send('memory by id')
})

// Route to create and post a memory
router.post('/', (req, res) => {
    db.place.create({
        name: req.body.name,
        date: req.body.date,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        description: req.body.description
    })
    .then(place => {
    res.redirect('memories/main')
    })
    .catch(err => {
    console.log('error, err')
    res.redirect('error')
    })
})

module.exports = router 