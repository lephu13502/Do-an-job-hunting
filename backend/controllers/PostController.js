const express = require("express")
const Post = require('../models/Post')
const Recruiter = require("../models/Recruiter")
const Candidate = require("../models/Candidate")
const PostController =
{
      AddNewPost: async(req, res) => {
            //const { content, author } = req.body

            // Simple validation
            // if (!req.content)
            //       return res
            //             .status(400)
            //             .json({ success: false, message: 'Content is required' })

            try {
                  const newPost = new Post(
                        req.body
                        //content,
                        //author: req.userId
                        //author
                  )
                  const savePost = await newPost.save()
                  if (req.body.author) {
                        const candidate = Candidate.findById(req.body.author)
                        if(candidate)
                        {
                              await candidate.updateOne({ $push: { posts: savePost._id } })
                        }else 
                        {
                              const recruiter = Recruiter.findById(req.body.author)
                              if(recruiter)
                              {
                                    await recruiter.updateOne({ $push: { posts: savePost._id } })
                              }

                        }
                  }
                  return res.json({ success: true, message: 'New post published!', savePost })
            } catch (error) {
                  return res.status(500).json({success:false, message:'Internal server error'})
            }
      },
      GetPost: async(req, res) => {
            try {
                  const FindPost = await Post.findfindById(req.params.id) //params is ":"
                  if(!FindPost)
                  {
                        return res.status(400).json({success: false, message: "POST NOT FOUND"})
                  }
                  return res.status(200).json(FindPost)
            } catch (error) {
                  return res.status(500).json({success:false, message:'Internal server error'})
            }

      }

}
module.exports = PostController