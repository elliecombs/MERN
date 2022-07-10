//Import models
const Joke = require("../models/jokes.models");
//Send from Express with function

//GET ALL 
module.exports.getAllJokes = (req, res) => {
//Promise function
    Joke.find()
        //then success: get all jokes
        .then((allJokes) => res.json(allJokes))
        //catch errors 
        .catch((err) => {
            res.json({ message: 'There is an error', error: err})
});}

//CREATE NEW
module.exports.createNewJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
    .then(brandNewJoke => res.json(brandNewJoke))
    .catch((err) => {
        res.json({ message: 'There is an error', error: err})
});}

//GET BY ID
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id}) 
    .then(findOneJoke => {
        res.json({ joke: this.findOneJoke})
    })
    .catch((err) => {
        res.json({ message: 'There is an error', error: err})
});}

//UPDATE
module.exports.updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateJoke => {
            res.json({ joke: updateJoke })
        })
        .catch((err) => {
            res.json({ message: 'There is an error', error: err })
        });}

//DELETE
module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result})
    })
    .catch((err) => {
        res.json({ message: 'There is an error', error: err})
    });}
