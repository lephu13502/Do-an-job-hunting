const router = require('express').Router()
const recruiterController = require("../controllers/recruiterController")


//@Route POST/Add recruiter (/api/recruiter/register) 
router.post("/register", recruiterController.addRecruiter);

//@Route POST/Login recruiter (/api/recruiter/login) 
router.post("/login", recruiterController.loginRecruiter);



module.exports = router;