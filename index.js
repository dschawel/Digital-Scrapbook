// Required node modules
require('dotenv').config() // provide access to variables inside .env file
let express = require('express')
let flash = require('connect-flash')
let layouts = require('express-ejs-layouts')
let session = require('express-session')
let methodOverride = require('method-override')

// Declare express app variable
let app = express()

// Include passport configuration
let passport = require('./config/passportConfig')

// Set up and middleware
app.set('view engine', 'ejs')
app.use(layouts)
app.use('/', express.static('static'))
app.use(express.urlencoded({ extended: false }))
// Needed this to parse json info
app.use(express.json())
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(flash()) // Depends on session; must come after it
app.use(passport.initialize()) // Depends on session; must come after it
app.use(passport.session()) // Depends on session; must come after it

// Custom middleware: Add variables to locals for each page
app.use((req, res, next) => {
    res.locals.alerts = req.flash()
    res.locals.user = req.user
    next()
})

// Add any controllers
app.use('/auth', require('./controllers/auth'))
app.use('/profile', require('./controllers/profile'))
app.use('/memory', require('./controllers/memory'))

// Add home or catch-all routes
app.get('/', (req, res) => {
    res.render('home', { mapkey: process.env.MAPBOX_API })
})

// error always goes on bottom
app.get('*', (req, res) => {
    res.render('error')
}) 

app.listen(process.env.PORT || 3000, () => {
    console.log('Good morning!')
}) 