const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
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
      }
},{

      collection:'recruiter'
      
})
module.exports = mongoose.model('recruiter',RecruiterSchema)