const Candidate = require("../models/Candidate")
const Post = require('../models/Post')

const candidateController = {
    getAllCandidates: async(req, res) => {
        try {
            const candidates = await Candidate.find({})
            res.status(200).json(candidates)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getCandidateById: async(req, res) => {
        try {
            const candidate = await Candidate.findById(req.params.id).populate("posts")

            if (!candidate) {
                return res.status(404).json()
            }

            res.send(candidate)
        } catch (error) {
            res.status(500).json()
        }
    },
    updateCandidate: async(req, res) => {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['username', 'password', 'email']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return res.status(400).json({ error: 'Invalid updates!' })
        }

        try {
            const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

            if (!candidate) {
                return res.status(404).json()
            }

            res.json(candidate)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    deleteCandidate: async(req, res) => {
        try {
            const candidate = await Candidate.findByIdAndDelete(req.params.id)

            if (!candidate) {
                return res.status(404).json()
            }

            res.json(candidate)
        } catch (e) {
            res.status(500).json()
        }
    },
    addPost: async(req, res) => {
        try {
            const newPost = new Post(req.body)
            const savePost = await newPost.save()
            if (req.body.author) {
                const candidate = Candidate.findById(req.body.author)
                await candidate.updateOne({ $push: { posts: savePost._id } })
            }
            res.status(200).json(savePost)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    getPost: async(req, res) => {
        try {
            const post = await Post.findById(req.params.id)
            if (!post) {
                return res.status(404).json()
            }

            res.send(post)
        } catch (error) {
            res.status(500).json()
        }
    },
    getAllPost: async(req, res) => {
        try {
            const posts = await Post.find({})
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updatePost: async(req, res) => {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['content']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return res.status(400).json({ error: 'Invalid updates!' })
        }

        try {
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

            if (!post) {
                return res.status(404).json()
            }

            res.json(post)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    deletePost: async(req, res) => {
        try {
            const post = await Post.findByIdAndDelete(req.params.id)

            if (!post) {
                return res.status(404).json()
            }
            res.json(post)
        } catch (e) {
            res.status(500).json()
        }
    }
}

module.exports = candidateController