const User = require('../models/User')

const authController = {
    // REGISTER
    registerUser: async(req, res) => {
        try {
            const newUser = await new User({
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
            const user = await User.findOne({ username: req.body.username })
            if (!user) {
                res.status(404).json('Wrong username!')
            } else if (req.body.password !== user.password) {
                res.status(404).json('Wrong password!')
            } else res.status(200).json(user)
        }catch(error) {
            res.status(500).json(error)
        }
    }
}

module.exports = authController