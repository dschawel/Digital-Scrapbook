let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
    res.render('memories/main')
})

router.get('/:id', (req, res) => {
    res.send('memory by id')
})

module.exports = router 