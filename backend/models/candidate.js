const mongoose = require('mongoose')
const validator = require('validator')

const candidateSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        validate(value) {
            if (value.includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
}, {
    collection: 'candidates'
})

module.exports = mongoose.model("Candidate", candidateSchema) 