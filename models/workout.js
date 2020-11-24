const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: { 
      type: Date, 
      default: Date.now 
    },
  exercises: [
    {
        type: { 
            type: String, 
            required: true,
            trim: true, 
        },
        name: { 
            type: String, 
            required: true,
            trim: true 
        },
        duration: { 
            type: Number,
            required: true,
        },
        weight: { 
            type: Number, 
            default: 0
        },
        reps: { 
            type: Number, 
            default: 0
        },
        sets: { 
            type: Number, 
            default: 0
        },
        distance: { 
            type: Number, 
            default: 0
        }
    }
],
    totalDuration: {
        type: Number,
        default:0
    }
});

Workout = mongoose.model("workouts", workoutSchema);
module.exports = Workout;
