const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [1, "Title must have a character."]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be positive"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description must be at least 5 characters long"]
    }
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);