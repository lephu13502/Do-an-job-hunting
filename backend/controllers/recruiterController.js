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
            const updates = Object.keys(req.body)
            const allowedUpdates = ['recruiterName','username', 'password', 'email']
            const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
            if (!isValidOperation) {
                  return res.status(400).json({success: false,message: 'Invalid updates!' })
            }
    
            try {
                  const recruiter = await Recruiter.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
                  if (!recruiter) {
                        return res.status(400).json({success: false, message:"No recruiter found!"})
                  }
    
                  return res.status(200).json(recruiter)
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