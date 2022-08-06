const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Recruiter = require("../models/Recruiter")
const recruiterController = {
      //Add/register recruiter 
      addRecruiter: async(req,res)=>{
            const { recruiterName, username, password, email} = req.body
            //simple validation
            if (!recruiterName || !username || !password|| !email)
            {
                  return res.status(400).json({success: false, message:'Missing username, password, name or email'})
            }
            try{
                  //check for existing user
                  const recruiter = await Recruiter.findOne({username, email})
                  if(recruiter)
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
                  const savedUser = await newUser.save()
                  return res.status(200).json(savedUser)
                  //return web token
                  const accessToken = jwt.sign(
                        {
                        userId: newUser._id
                        }, 
                        process.env.ACCESS_TOKEN)
                  return res.status(200).json({success: true, message: 'User created successfully', accessToken})
            }catch(err){
                  return res.status(500).json({success:false, message:'Internal server error'})
            }
      },
};
module.exports = recruiterController;