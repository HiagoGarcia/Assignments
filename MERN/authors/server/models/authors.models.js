const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [3, "Last name must be at least 3 long"]
    },
    rating: {
        type: Number,
        required: [true, "A rating must be chosen"]
    }
}, {timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema);