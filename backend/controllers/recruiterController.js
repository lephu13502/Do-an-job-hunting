const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Recruiter = require("../models/Recruiter")
const recruiterController = {
      GetAllRecruiter: async(req, res) => {
            try {
                const recruiters = await Recruiter.find({})
                if(!recruiters)
                {
                  return res.status(400).json({success:false, message:"There are no User exist to show"})
                }
                res.status(200).json(recruiters)
            }catch (err) {
                res.status(500).json({success:false, message:'Internal server error'})
            }
      },
      GetOneRecruiter: async(req,res) =>{
            try{
                  const OneRecruiter = await Recruiter.findById(req.params.id) //params is ":"
                  if(!OneRecruiter)
                  {
                        return res.status(400).json({success: false, message: "ID NOT FOUND"})
                  }
                  return res.status(200).json(OneRecruiter)

            }catch(err){
                  return res.status(500).json({success:false, message:'Internal server error'})

            }
      },
      UpdateRecruiter: async(req, res) => {
            
            try {
                  const {username, email} = req.body
                  const recruiter = await Recruiter.findById(req.params.id) //params is ":"
    
                  if (!recruiter) {
                        return res.status(400).json({success: false,message: 'ID non-existent' })
                  }
                  if(username)
                  {
                        const FindExistedRecruiter = await Recruiter.findOne({username})
                        if(FindExistedRecruiter)
                        {
                              return res.status(400).json({success: false, message:"Username already exists"})
                        }
                  }
                  if(email)
                  {
                        const FindExistedRecruiter = await Recruiter.findOne({email})
                        if(FindExistedRecruiter)
                        {
                              return res.status(400).json({success: false, message:"email already exists"})
                        }
                  }
                  /* if(username&&email)
                  {
                        const FindExistedUsername = await Recruiter.findOne({username})
                        if(FindExistedUsername)
                        {
                              return res.status(400).json({success: false, message:"Username already exists"})
                        }
                        const FindExistedEmail = await Recruiter.findOne({email})
                        if(FindExistedEmail)
                        {
                              return res.status(400).json({success: false, message:"email already exists"})
                        }
                  }  */
                  //ALL GOOD
                  await recruiter.updateOne({$set:req.body})
                  return res.status(200).json({success: true, message:"Updated successfully", recruiter})
            }catch (err) {
                  return res.status(500).json({success:false, message:'Internal server error'})
            }
      },
      DeleteRecruiter: async(req, res) => {
            try {
                  const recruiter = await Recruiter.findByIdAndDelete(req.params.id)

                  if (!recruiter) {
                        return res.status(400).json({success: false, message:"No recruiter found!"})
                  }
                  //All good
                  return res.status(200).json({success: true, message:"Delete successfully"})
            }catch (err) {
                  return res.status(500).json({success:false, message:'Internal server error'})
      }
      }
};
module.exports = recruiterController;