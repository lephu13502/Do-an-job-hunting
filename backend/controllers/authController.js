const argon2 = require('argon2')
const jwt = require('jsonwebtoken')


const Candidate = require('../models/Candidate')
const Recruiter = require("../models/Recruiter")


const authController = {
    //@CANDIDATE
    // REGISTER
    registerCandidate: async(req, res) => {
        try {
            const newUser = await new Candidate({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            })

            const user = await newUser.save()
            res.status(200).json(user) 
        }catch(error) {
            res.status(500).json(error)
        }
    },
    //LOGIN
    loginCandidate: async(req, res) => {
        try {
            const user = await Candidate.findOne({ username: req.body.username })
            if (!user) {
                res.status(404).json('Wrong username!')
            } else if (req.body.password !== user.password) {
                res.status(404).json('Wrong password!')
            } else {
                const accessToken = jwt.sign(
                    {
                        id: user.id
                    },
                    process.env.JWT_ACCESS_KEY,
                    { expiresIn: "24h"}
                )
                res.status(200).json({user, accessToken})
            }
        }catch(error) {
            res.status(500).json(error)
        }
    },

    //@RECRUITER
    //REGISTER
    //@POST Add/register recruiter 
    registerRecruiter: async(req,res)=>{
        const { recruiterName, username, password, email} = req.body
        //simple validation
        if (!recruiterName || !username || !password|| !email)
        {
            return res.status(400).json({success: false, message:'Missing username, password, name or email'})
        }
        try{
            //check for existing user
            const newRecruiter = await Recruiter.findOne({username, email})
            if(newRecruiter)
            {
                return res.status(400).json({success: false, message:"An account with the username or email already existed"})
            }
            //all good
            const hashedPassword = await argon2.hash(password)
            const newUser = await new Recruiter({
                recruiterName,
                username,
                email, 
                password: hashedPassword})
            const SavedNewUser = await newUser.save()
            //return web token
            const accessToken = jwt.sign(
                {
                id: newUser._id
                }, 
                process.env.JWT_ACCESS_KEY)
            return res.status(200).json({success: true, message: 'User created successfully', accessToken,SavedNewUser})
            //return res.status(200).json(savedUser)
            
        }catch(err){
            return res.status(500).json({success:false, message:'Internal server error'})
        }
    },
  //LOGIN
  //@POST Login recruiter
    loginRecruiter: async(req,res)=>{
        const {username, password} = req.body
        //simple validation
        if (!username || !password)
        {
            return res.status(400).json({success: false, message:'Missing username or password'})
        }
        try{
            //Check for existing user
            const recruiter = await Recruiter.findOne({username})
            if(!recruiter) return res.status(400).json({success: false, message: "incorrect username"})
            //Username found
            const PasswordValid = await argon2.verify(recruiter.password,password)
            if(!PasswordValid) return res.status(400).json({success: false, message: "incorrect password"})
            //All good, return token
            const accessToken = jwt.sign(
                {
                userId: recruiter._id
                }, 
                process.env.JWT_ACCESS_KEY)
            return res.status(200).json({success: true, message: 'Logged in successfully', accessToken})
        }
        catch(err){
            return res.status(500).json({success:false, message:'Internal server error'})
        }
    }
}
module.exports = authController