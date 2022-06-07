const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;
let UserSchema = new Schema({
    _id: Schema.Types.ObjectId,

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
        required: [true, "Email is required"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Password is requrired"],
        minlength: [8, "Password must be at least 8 characters long"]
    },

    discussion: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Discussion"
    }]
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set(value => this.confirmPassword = value);


UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

// ForumSchema.pre('validate', function(next){
//     .find()
// })

// this should go after 
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});


module.exports.User = mongoose.model('User', UserSchema);