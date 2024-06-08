const mongoose = require("mongoose");
const fconnect = mongoose.connect("mongodb://localhost:27017/Login-tut");



fconnect.then(() => {
    console.log("Database connected successfully ");
})
    .catch(() => {
        console.log("Database cannot be connected ");
    });

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
});

const feedbackcollection = new mongoose.model("feedback", feedbackSchema);
module.exports = feedbackcollection;