const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Data = require('./dataModel');


const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, 'public')))

const dbRoute = 'mongodb://idoroz:db12345@ds131814.mlab.com:31814/_anymusic_dev';

mongoose.connect(dbRoute, {
    useNewUrlParser: true
});

let db = mongoose.connection;

db.once('open', () => console.log('connected to database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


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