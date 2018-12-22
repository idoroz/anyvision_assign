const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const bodyParser = require('body-parser')
const Data = require('./dataModel');
const User = require('./userModel');




const port = process.env.PORT || 8080;



const dbRoute = 'mongodb://idoroz:db12345@ds131814.mlab.com:31814/_anymusic_dev';

mongoose.connect(dbRoute, {
    useNewUrlParser: true
});

let db = mongoose.connection;

db.once('open', () => console.log('connected to database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', express.static(path.join(__dirname, 'public')))

// Go to registration page
app.get('/register', (req, res) => {
    res.render('register');
});

// Post registration
app.post('/register', (req, res) => {
    User.register(new User({
        username: req.body.username,
        password: req.body.name
    }), req.body.password, function(err, user) {
        if (err) {
            return res.render('register', {
                user: user
            });
        }

        passport.authenticate('local')(req, res, function() {
            res.redirect('/home');
        });
    });
});


// Go to login page
app.get('/login', (req, res) => {
    res.render('login');
});


// Post login
app.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/',
}));



app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


//recieves data from db and groups it by count and limits to 10
app.get('/getTopTen', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({
                success: false,
                error: err
            });
        Data.aggregate()
            .group({
                _id: '$message',
                count: {
                    $sum: 1,
                },
            })
            .sort({
                count: -1,
            })
            .limit(10)
            .then(data => {
                res.json(data)
            })
    });

})

app.get('/search/:query', (req, res) => {

    let query = req.params.query;
    let search = new Data();
    search.message = query.toLowerCase();
    search.save()
        .then(() => {
            axios.get('https://itunes.apple.com/search?term=' + query + '&limit=25')
                .then(response => {
                    let searchResults = [];
                    let results = response.data.results
                    res.send(results);
                })
                .catch(function(error) {
                    // handle error
                    console.log(error);
                })
        })
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))