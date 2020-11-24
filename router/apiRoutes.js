var db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", async function(req, res) {
    const result = await db.Workouts.find({})
    res.send(result)
  })

  app.post("/api/workouts", async function(req, res) {
    const newWorkout = await db.Workouts.create({})
    res.send(newWorkout)
  })

  app.put("/api/workouts", async function(req, res) {
    let params = JSON.parse(req.params)
    let body = JSON.parse(req.body)
    console.log(`PUT req.params._id=${params}, req.body=${body}`)
    const update = await db.Workouts.findOneAndUpdate({_id: req.params.id }, {exercises: req.body})
    res.send(update)
  });

  app.get("/api/workouts/range", async function(req, res) {
    const result = await db.Workouts.find({})
    res.send(result)
  })
}
// const db = require("../models");

// module.export = function (app) {

//   app.get("/api/workouts", (req, res) => {

//     db.Workouts.find({}).then(dbWorkout => {
//         dbWorkout.forEach(workouts => {
//           var total = 0;
//           workouts.exercises.forEach(e => {
//           total += e.duration
//         });
//         workouts.totalDuration = total;
//       });
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

//   app.post("/api/workouts", ({ body }, res) => {

//     db.Workouts.create(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

//   app.put("/api/workouts/:id", function(req, res) {
//     db.Workouts.findOneAndUpdate(
//       { _id: req.params.id }, 
//       { 
//         $inc: {totalDuration:req.body.duration},
//         $push: {exercises: req.body }
//       },
//       {new: true})
//       .then(function(dbWorkout) {
//       res.json(dbWorkout);
//     }).catch(err => {
//       res.json(err);
//     });
//   });

//   app.get("/api/workouts/range", (req, res) => {
    
//     db.Workouts.find({}).then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

// }
