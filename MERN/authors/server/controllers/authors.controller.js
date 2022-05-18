const {response, request} = require('express');
const{Author} = require('../models/authors.models');

module.exports.index = (req, res) => {
    res.json( {
        message: "Favorite authors"
    })
};

module.exports.createAuthor = (req, res) => {
    const {firstName, lastName} = req.body;
    Author.create({
        firstName,
        lastName
    })
    .then(author => req.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}