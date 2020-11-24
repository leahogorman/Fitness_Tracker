const express = require('express');
const mongoose = require('mongoose');
const html = require('./router/htmlRoutes.js');
const api = require('./router/apiRoutes.js')

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( express.static('public') );

mongoose.connect(
    process.env.MONGODB_URI || `mongodb://localhost/workout`,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true, 
        useFindAndModify: false});

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err);
    process.exit(1);
});

// for routes
app.use(html)
app.use(api)

app.listen(PORT, function() {
    console.log( `Workout App on: http://localhost:${PORT}` );
});