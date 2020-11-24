require( 'dotenv' ).config();
const logger = require("morgan")
const path = require("path")

const mongoose = require('mongoose')
const PORT = process.env.PORT || 8080;

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( express.static('public') );

// for routes
require('./app/router/apiRoutes.js')(app)
require('./app/router/htmlRoutes.js')(app)

// == process-wide error handling
process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err);
    process.exit(1);
});

app.listen(PORT, function() {
    console.log( `Workout App on (database: ${process.env.DB_NAME}) on: http://localhost:${PORT}` );
});
