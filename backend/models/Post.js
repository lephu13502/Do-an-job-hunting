const mongoose = require('mongoose')
const Candidate = require('./Candidate')
const Recruiter = require('./Recruiter')
const Schema = mongoose.Schema

const postSchema = new Schema({
    publishedDate: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Candidate",
        ref:"Recruiter"
    },

}, {
    collation: 'post'
})

module.exports = mongoose.model("Post", postSchema)