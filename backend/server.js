const express = require('express')
const bodyParser = require('body-parser')
const candidateRoute = require("./routes/candidate")
const authRoute = require('./routes/auth')
require("./db/database")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CRUD Candidates
// app.use('/', authRoute)
app.use('/', candidateRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on  PORT ${PORT}`)
})