const {response, request} = require('express');
const{User} = require('../models/user.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Forum Board"
    })
};

module.exports.createUser = (req,res) => {
    const {firstName, lastName, email, password} = req.body;
    User.create({
        firstName,
        lastName,
        email,
        password
    })
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
}

module.exports.getUser = (req, res) => {
    User.findOne({_id: req.params.id})
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.getAllUsers = (req, res) => {
    User.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate = ({_id: req.params.id}, req.body, {new: true})
    .then(updateUser => res.json(updateUser))
    .catch(err => res.json(err))
}

module.exports.deleteUser= (req, res) => {
    User.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}