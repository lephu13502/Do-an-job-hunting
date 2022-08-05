const router = require('express').Router()
const recruiterController = require("../controllers/recruiterController")

//Route POST/Add recruiter (/api/recruiter/register) 
router.post("/register", recruiterController.addRecruiter);
module.exports = router;