var db = require("../models");

module.exports = function(app) {

  app.get("/api/workout", async function(req, res) {
    const result = await db.Workout.find({})
    res.send(result)
  })
  
  app.post("/api/workout", async function(req, res) {
    const newWorkout = await db.Workout.create({})
    res.send(newWorkout)
  })

  app.put("/api/workout", async function(req, res) {
    const update = await db.Workout.findOneAndUpdate({  _id: req.params.id },
    {$push: {exercises: req.body} }, {new:true})
    res.send(update)
  })

  app.get("/api/workout/range", async function(req, res) {
    const result = await db.Workout.find({})
    res.send(result)
  })
}


//   app.get("/api/workout", (req, res) => {
//     db.Workout.find({}).then(dbWorkout => {
//         dbWorkout.forEach(workout => {
//         var total = 0;
//         workout.exercises.forEach(w => {
//           total += w.duration
//         });
//         workout.totalDuration = total;
//       });
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

//   app.post("/api/workout", ({ body }, res) => {

//     db.Workout.create(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

//   app.put("/api/workout/:id", function(req, res) {
//     db.Workout.findOneAndUpdate(
//       { _id: req.params.id }, 
//       { 
//         $inc: {totalDuration:req.body.duration},
//         $push: {exercises: req.body }
//       },
//       {new: true})
//       .then(function(dbWorkout) {
//       res.json(dbWorkout);
//     });
//   });

//   app.get("/api/workout/range", (req, res) => {
    
//     db.Workout.find({}).then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
// };
