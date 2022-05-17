const { db } = require('../models/jokes.model');
const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => res.json({jokes: allDaJokes}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneSingleJoke => res.json({joke: oneSingleJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

//Try and figure out the random get

// module.exports.randomJoke = (req, res) => {
//     const allJokes = db.collection('jokes');
//     let query = {}
//     let jokeId = allJokes.find(query)
//     let rnd;
//     allJokes.count(function(count){
//         rnd = Math.floor(Math.random()*count);
//         jokeId.sort({_id: -1});
//         jokeId.skip(rnd);
//         jokeId.limit(1);

//         jokeId.each(function(doc) {
//             if(doc==null){
//                 return db.close();
//             }
//             console.dir(doc);
//         });
//     });
    // console.log(rnd);
    // Joke.randomJoke({rnd})
    //     .then(randomJoke => res.json({joke: randomJoke}))
    //     .catch(err => res.json({message: "Something went wrong", error: err}))
// };

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({joke: newlyCreatedJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};