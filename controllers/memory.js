let router = require('express').Router()
let cloudinary = require('cloudinary')
let db = require('../models')
let isLoggedIn = require('../middleware/isLoggedIn')
let mbxClient = require('@mapbox/mapbox-sdk')
let mbxGeocode = require('@mapbox/mapbox-sdk/services/geocoding')
let multer = require('multer')
let upload = multer({ dest: './uploads/' })

const mb = mbxClient({ accessToken: process.env.MAPBOX_API})
const geocode = mbxGeocode(mb)

// Route to view memories
router.get('/', isLoggedIn, (req, res) => {
    db.place.findAll({
        where: {
            userId: req.user.id
        }
    })
    .then(places => {
        res.render('memories/main', { places })
    })  
    .catch(err => {
        console.log('error', err)
        res.redirect('error')
    })
})

// Route to create a new memory
router.get('/new', isLoggedIn, (req, res) => {
    db.user.findOne({
        where: {
            id: req.user.id
        }
    })
    .then(user => {
        res.render('memories/new', { user })
    })
    .catch(err => {
        console.log('error', err)
        res.redirect('error')
    })
})

// Route to view one memory
router.get('/:id', isLoggedIn, (req, res) => {
    db.place.findOne({
        where: { 
            id: req.params.id
        }
    })
    .then((place) => {
        geocode.forwardGeocode({
        query : `${place.city}, ${place.state}, ${place.country}`,
        types: ['place'],
        countries: ['us']
        })
        .send()
        .then(result => {
            console.log(place.city, place.state, place.country)
            console.log(result.body.features[0].center)
            let results = {
                lat: result.body.features[0].center[1],
                long: result.body.features[0].center[0]
            }
            console.log(results)
            res.render('memories/show', { place, mapkey: process.env.MAPBOX_API, results })
        })
        .catch(err => {
            console.log('error', err)
            res.redirect('error')
        })
    })
})

// Route to add a picture to a memory and update the place table
router.put('/:id', isLoggedIn, (req, res) => {
    db.place.update(
        {imgUrl: req.body.imgUrl},
        {where: { id: req.params.id }}
    )
    .then(() => {
        // console.log('SUCCESS')
        res.send({'message': 'success'})
    })
    .catch(err => {
        console.log('error', err)
        res.redirect('error')
    })
})


// Route to create and post a memory
router.post('/', isLoggedIn, (req, res) => {
    db.place.create({
        name: req.body.name,
        date: req.body.date,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        description: req.body.description,
        userId: req.body.userId
    })
    .then(places => {
        console.log('Hit the promise, trying to hit redirect')
        res.redirect('/memory')
    })
    .catch(err => {
        console.log('error', err)
        res.redirect('error')
    })
})

module.exports = router 