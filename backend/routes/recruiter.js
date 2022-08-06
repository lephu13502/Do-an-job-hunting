const router = require('express').Router()
const recruiterController = require("../controllers/recruiterController")
const middlewareController = require("../controllers/middlewareController")


//@Route GET ALL recruiter (/api/recruiter/) 
router.get('/',middlewareController.verifyToken, recruiterController.GetAllRecruiter);
//TEST 
//router.get('/', recruiterController.GetAllRecruiter)

//@Route GET A recruiter (/api/recruiter/:id) 
router.get('/:id',recruiterController.GetOneRecruiter);

//@Route PUT update recruiter (/api/recruiter/:id) 
router.put('/:id',recruiterController.UpdateRecruiter);

//@Route DELETE recruiter (/api/recruiter/:id) 
router.delete('/:id',middlewareController.verifyTokenAndAdmin,recruiterController.DeleteRecruiter);
//TEST
//router.delete('/:id',recruiterController.DeleteRecruiter);
module.exports = router;