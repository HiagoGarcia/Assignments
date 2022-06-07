const jwt = require("jsonwebtoken");
const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
console.log(User);

module.exports = {
    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if (!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    },

    register: (req, res) => {
        console.log(req.body)
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY);
                res.cookie("usertoken", userToken, process.env.SECRET_KEY, {
                    httpOnly: true
                })
                    .json({ msg: "success!", user: user });
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            });
    },

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },

    getUser: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },

    getAllUsers: (req, res) => {
        User.find({})
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },

    updateUser: (req, res) => {
        User.findOneAndUpdate = ({ _id: req.params.id }, req.body, { new: true })
            .then(updateUser => res.json(updateUser))
            .catch(err => res.json(err))
    },

    deleteUser: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json(err))
    },

    getLoggedUser: (req, res) => {
        const userToken = res.locals.payload;
        console.log(userToken)
        User.findOne({ _id: userToken.id })
            .then(loggedUser => {
                res.json(loggedUser)
            })
            .catch(err => res.json(err))
    },

    //Users with discussions
    getAllDiscussions: async (req, res) => {
        let foundUser = await User.find({email: req.params.email}).populate("discussions");
        res.json(foundUser)
    }
}

module.exports.index = (req, res) => {
    res.json({
        message: "Forum Board"
    })
};

// module.exports.createUser = (req, res) => {
//     const { firstName, lastName, email, password } = req.body;
//     User.create({
//         firstName,
//         lastName,
//         email,
//         password
//     })
//         .then(user => res.json(user))
//         .catch(err => res.status(400).json(err));
// }