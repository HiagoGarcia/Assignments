const mongoose = require('mongoose')
const Schema= mongoose.Schema;

let DiscussionSchema = new Schema({
    title: {
        type: String
    },

    description: {
        type: String
    },

    content: {
        type: String
    },

    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

module.exports = mongoose.model("Discussion", DiscussionSchema)