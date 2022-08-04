const Candidate = require('../models/candidate')

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
    }
}

module.exports = authController