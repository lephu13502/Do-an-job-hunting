const mongoose = require('mongoose')
const Candidate = require('./Candidate')
const Recruiter = require('./Recruiter')

const postSchema = new mongoose.Schema({
    publishedDate: {
        type: String
    },
    content: {
        type: String
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