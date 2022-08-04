const Candidate = require("../models/candidate")

const candidateController = {
    addCandidate: async(req, res) => {
        const candidate = new Candidate(req.body)
        try {
            await candidate.save()
            res.status(200).json(candidate)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    getCandidates: async(req, res) => {
        try {
            const candidates = await Candidate.find({})
            res.status(200).json(candidates)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getCandidateById: async(req, res) => {
        try {
            const candidate = await Candidate.findById(req.params.id)

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
    }
}

module.exports = candidateController