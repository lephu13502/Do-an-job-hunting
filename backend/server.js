const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const candidateRoute = require("./routes/candidate")
const recruiterRoute = require("./routes/recruiter")
const authRoute = require('./routes/auth') //Login and Register
require("./db/database")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan("common"))

//Auth Routes (login & register)
app.use('/api/auth', authRoute)
// CRUD Candidates
app.use('/api/candidate', candidateRoute)
//ROUTES Recruiters 
app.use('/api/recruiter', recruiterRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on  PORT ${PORT}`)
})