const db = require("../models");
const router = require("express").Router();

  router.get("/api/workouts", async function(req, res) {
    try {
    db.Workout.find({})
    .then(workout => {
      res.json(workout)
    })}
    catch( err ){
      console.log( ' error: ', err );
      res.send( { status: false, message: `Sorry: ${err}` } );
  }
});
  router.post("/api/workouts", async function(req, res) {
    try {
    const workout = req.body
    console.log(workout)
    await db.Workout.create({ workout }).then(response => {
      res.send(response)
    })
  }
    catch( err ){
      console.log( ' error: ', err );
      res.send( { status: false, message: `Sorry: ${err}` } );
  }
});

  router.put("/api/workouts/:id", async function(req, res) {
    let params = req.params.id;
    let body = req.body

    try {
      db.Workouts.findOneAndUpdate( params, {$push: {exercises: body}})
      .then( response => res.json(response))
      }
      catch( err ){
        console.log( ' error: ', err );
        res.send( { status: false, message: `Sorry: ${err}` } );
    }
  });

  router.get("/api/workouts/range", async function(req, res) {
    try {
      db.Workout.find({})
      .then(workout => {
        res.json(workout)
      })}
      catch( err ){
        console.log( ' error: ', err );
        res.send( { status: false, message: `Sorry: ${err}` } );
    }
  });

  module.exports = router;