const { response } = require('express');
const{Product} = require('../models/products.model');

module.exports.index = (req, res) => {
    response.json({
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
    .catch(err => response.json(err));
}