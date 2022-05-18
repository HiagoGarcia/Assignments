const { response, request } = require('express');
const{Product} = require('../models/products.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Product Manager"
    })
};

module.exports.createPruduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.getOneProduct =(req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updateProduct => res.json(updateProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}