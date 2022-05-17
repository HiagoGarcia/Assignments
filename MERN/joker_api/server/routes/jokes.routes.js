const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:_id", JokeController.findOneSingleJoke);
    app.get("/api/jokes/random", JokeController.randomJoke);
    app.put("/api/jokes/update/:_id", JokeController.updateExistingJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.delete("/api/jokes/delete/:_id", JokeController.deleteExistingJoke);
};