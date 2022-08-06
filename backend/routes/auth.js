const router = require('express').Router()
const authControllerCandidate = require('../controllers/authController')
const authControllerRecruiter = require('../controllers/authController')
//Candidates
router.post('/candidate/register', authControllerCandidate.registerUser)
router.post('/candidate/login', authControllerCandidate.loginUser)
//Recruiters
router.post('/recruiter/register', authControllerRecruiter.registerUser)
router.post('/recruiter/login', authControllerRecruiter.loginUser)

module.exports = router