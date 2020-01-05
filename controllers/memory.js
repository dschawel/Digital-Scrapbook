let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
    res.render('memories/main')
})

module.exports = router 