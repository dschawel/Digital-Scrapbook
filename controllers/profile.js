let router = require('express').Router()
let isAdminLoggedIn = require('../middleware/isAdminLoggedIn')
let isLoggedIn = require('../middleware/isLoggedIn')
let db = require('../models')

router.get('/', isLoggedIn, (req, res) => {
    res.render('profile/main')
})

router.put('/', isLoggedIn, (req, res) => {
    db.user.update(
        {photoUrl: req.body.photoUrl},
        {where: { id: req.user.id }}
    )
    .then(() => {
        console.log('SUCCESS')
        res.send({'message': 'success'})
    })
    .catch(err => {
        console.log('Error', err)
        res.send({'message': 'error'})
    })
})

router.get('/admin', isAdminLoggedIn, (req, res) => {
    res.render('profile/admin')
})

module.exports = router 