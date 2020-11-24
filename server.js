const express = require('express');
const logger = require("morgan")
const path = require("path")
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( express.static('public') );

mongoose.connect(
    process.env.MONGODB_URI || `mongodb://localhost:27017/${process.env.DB_NAME}`,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true, 
        useFindAndModify: false});

module.exports = mongoose;

// for routes
require('./router/apiRoutes.js')(app)

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/stats.html"));
  });

  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
  });
  
};

app.listen(PORT, function() {
    console.log( `Workout App on (database: ${process.env.DB_NAME}) on: http://localhost:${PORT}` );
});

