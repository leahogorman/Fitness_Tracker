const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workout = new Schema({
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
            type: Number
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

module.exports = mongoose.model("post", Workout);
