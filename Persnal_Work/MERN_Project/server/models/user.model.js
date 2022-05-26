const mongoose = require('mongoose');
const ForumSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must have be 2 characters or longer"]
    },

    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be 2 characters or longer"]
    },

    email: {
        type: String,
        required: [true, "Email is required"]
    },

    password: {
        type: String,
        required: [true, "Password is requrired"],
        minlength: [8, "Password must be at least 8 characters long"]
    }
}, {timestamps: true});

module.exports.User = mongoose.model('User', ForumSchema);