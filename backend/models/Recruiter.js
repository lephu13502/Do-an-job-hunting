const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const Post = require('./Post')

const RecruiterSchema = new Schema({
      recruiterName: {
            type:String,
            required: true,
      },
      username: {
            type: String,
            required: true,
            unique: true,
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
            unique: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid')
                }
            }
      },
      admin: {
            type: Boolean,
            default: false
      },
      type: {
            type: String,
            default: "recruiter"
      },
      posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ]
},{

      collection:'recruiter'
      
})
module.exports = mongoose.model('recruiter',RecruiterSchema)