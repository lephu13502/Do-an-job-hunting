const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookies = require('cookie-parser')
const cors = require("cors")    
const candidateRoute = require("./routes/candidate")
const recruiterRoute = require("./routes/recruiter")
const authRoute = require('./routes/auth') //Login and Register
require("./db/database")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan("common"))
app.use(cookies())
app.use(cors())


//Auth Routes (login & register)
app.use('/auth', authRoute)
// CRUD Candidates
app.use('/candidate', candidateRoute)
//ROUTES Recruiters 
app.use('/recruiter', recruiterRoute)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server started on  PORT ${PORT}`)
})