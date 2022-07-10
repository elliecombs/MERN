const mongoose = require("mongoose");

//Create Schema 
//Time stamps are object in schema
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
},
{ timestamps: true}
);

//Define model
const Joke = mongoose.model("Joke", JokeSchema);

//Export model
module.exports = Joke;