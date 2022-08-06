const router = require('express').Router()
const authController = require('../controllers/authController')

//Candidates
router.post('/candidate/register', authController.registerCandidate)
router.post('/candidate/login', authController.loginCandidate)


//Recruiters 
//@Route POST/register recruiter (/api/auth/recruiter/register) 
router.post("/recruiter/register", authController.registerRecruiter);

//@Route POST/Login recruiter (/api/auth/recruiter/login) 
router.post("/recruiter/login", authController.loginRecruiter);

module.exports = router