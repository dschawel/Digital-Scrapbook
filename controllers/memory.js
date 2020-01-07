let router = require('express').Router()
let cloudinary = require('cloudinary')
let db = require('../models')
let isLoggedIn = require('../middleware/isLoggedIn')
let mbxClient = require('@mapbox/mapbox-sdk')
let mbxGeocode = require('@mapbox/mapbox-sdk/services/geocoding')
let multer = require('multer')
let upload = multer({ dest: './uploads/' })

const mb = mbxClient({ accessToken: 'pk.eyJ1IjoiZHNjaGF3ZWwiLCJhIjoiY2s0YWl3ankwMDRkaTNucnVqZGtvNWVrbCJ9._FgRj_tMA-T2lGsQq-nZRA'})
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
    //     // geocode.forwardGeocode({
    //     // g : `${place}`
    //     // })
    //     // .send()
    //     console.log(place)
        res.render('memories/show', { place })
    //     JSON.stringify(place)
    })
    .catch(err => {
        console.log('error', err)
        res.redirect('error')
    })
})

router.put('/:id', isLoggedIn, (req, res) => {
    db.place.update({
        pictureUrl: req.body.pictureUrl,
        userId: req.body.userId
    })
    .then((image) => {
        console.log(pictureUrl)
        res.render('memories/show', { image })
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