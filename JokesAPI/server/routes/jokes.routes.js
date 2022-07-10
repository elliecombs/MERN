const JokeController = require("../controllers/jokes.controller");
const Joke = require("../models/jokes.models");

//Routes that go to controller 
module.exports = (app) => {
    //Get all- Get
    app.get("/api/jokes", JokeController.getAllJokes);

    //Create new- Post
    app.post("/api/jokes", JokeController.createNewJoke);

    //Get one- Get
    app.get("/api/jokes/:id", JokeController.findOneJoke);

    //Update- Put
    app.put("/api/jokes/:id", JokeController.updateOneJoke);

    //Delete- post
    app.post("/api/jokes/:id", JokeController.deleteOneJoke);
};
