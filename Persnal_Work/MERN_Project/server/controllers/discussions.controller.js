const jwt = require('jsonwebtoken')
const Discussion = require('../models/disscussion.model')
const {User} = require('../models/user.model')
console.log(Discussion);

module.exports = {
    createDiscussion: async (req, res) => {
        const {userId} = req.params;
        console.log(userId)
        const newDiscussion = new Discussion(req.body);
        const user = await User.findById(userId);
        console.log(user)
        // Discussion.create(req.body)
        user.discussion.push(newDiscussion)
        await user.save()
        newDiscussion.creator = user
        newDiscussion.save()
            .then(discussion => {
                res.json({ msg: "Success!", discussion: discussion});
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            });
    },

    getAllDiscussions: async (req, res) => {
        let allDiscussions = await Discussion.find()
        res.json(allDiscussions);
    },

    getDiscussion: async (req, res) => {
        let oneDiscussion = await Discussion.find({title: req.params.title});
        res.json(oneDiscussion)
    }
}