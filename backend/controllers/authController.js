const Candidate = require('../models/Candidate')
const jwt = require('jsonwebtoken')

const authController = {
    // REGISTER
    registerUser: async(req, res) => {
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
    loginUser: async(req, res) => {
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
    }
}

module.exports = authController