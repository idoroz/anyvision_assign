const path = require('path');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Data = require('./dataModel');

const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, 'build')))

const dbRoute = 'mongodb://idoroz:db123456@ds127954.mlab.com:27954/_anymusic_db';


mongoose.connect(dbRoute, {
    useNewUrlParser: true
});

let db = mongoose.connection;

db.once('open', () => console.log('connected to database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//recieves data from db and groups it by count
app.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({
                success: false,
                error: err
            });
        Data.aggregate()
            .group({
                _id: '$message',
                count: {
                    $sum: 1
                }
            })
            .sort({
                count: -1
            })
            .then(data => {
                res.json(data)
            })
    });

})


app.get('/search/:query', (req, res) => {

    let query = req.params.query;

    var search = new Data();
    search.message = query.toLowerCase();
    search.save()
        .then(() => {
            axios.get('https://itunes.apple.com/search?term=' + query + '&limit=25')
                .then(response => {
                    var searchResults = [];
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