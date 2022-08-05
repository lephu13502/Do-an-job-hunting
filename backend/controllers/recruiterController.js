const {recruiter} = require("../models/Recruiter")
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const recruiterController = {
      //Add/register recruiter 
      addRecruiter: async(req,res)=>{
            //simple validation
            //if(!username || !password|| !email || !recruiterName) return res.status(400).json({success: false, message:'Missing username, password, name or email'})
            try{
                  //check for existing user
                  //const user = await recruiter.findOne({email})
                  //if(user) return res.status(400).json({success: false, message:"An account with the email already existed"})
                  //all good
                  const hashedPassword = await argon2.hash(password)
                  const newUser = await new recruiter({
                        name: req.body.name,
                        username: req.body.username,
                        email: req.body.email, 
                        password: hashedPassword})
                  const savedUser = await newUser.save()
                  res.status(200).json(savedUser)
                  //return web token
                  const accessToken = jwt.sign({userId: newUser._id}, process.env.ACCESS_TOKEN)
                  res.json({success: true, message: 'User created successfully', accessToken})
                  //simple test
                  /* const newUser = new recruiter(req.body)
                  const savedUser = await newUser.save()
                  res.status(200).json(savedUser) */
            }catch(err){
                  console.log(error)
                  res.status(500).json({success:false, message:'Internal server error'})
            }
      },
};
module.exports = recruiterController;