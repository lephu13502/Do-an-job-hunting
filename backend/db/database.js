const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Connect Database
dotenv.config()
mongoose.connect((process.env.MongoDB_URL), (err) => {
    if (!err) return console.log("Connected database")
    else return console.log("Unconnected database")
})
