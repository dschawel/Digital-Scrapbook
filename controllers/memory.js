let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
    res.render('memories/main')
})

router.get('/new', (req, res) => {
    res.render('memories/new')
})

router.get('/:id', (req, res) => {
    res.send('memory by id')
})

router.post('/', (req, res) => {
    db.place.create({
        name: req.body.name,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        description: req.body.description
    })
    res.redirect('/memories/main', { place })
})

module.exports = router 