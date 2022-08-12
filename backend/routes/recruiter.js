const router = require('express').Router()
const recruiterController = require("../controllers/recruiterController")
const middlewareController = require("../controllers/middlewareController")
const PostController = require("../controllers/postController")

//@Route GET ALL recruiter (/recruiter/) 
//router.get('/',middlewareController.verifyToken, recruiterController.GetAllRecruiter);
//TEST 
//
router.get('/', recruiterController.GetAllRecruiter)

//@Route GET A recruiter (/recruiter/:id) 
router.get('/:id',recruiterController.GetOneRecruiter);

//@Route PUT update a recruiter (/recruiter/:id) 
router.put('/:id',recruiterController.UpdateRecruiter);

//@Route DELETE a recruiter (/recruiter/:id) 
//router.delete('/:id',middlewareController.verifyTokenAndAdmin,recruiterController.DeleteRecruiter);
//TEST
//
router.delete('/:id',recruiterController.DeleteRecruiter);
//Post
router.post('/AddPost',PostController.AddNewPost);
router.get('/GetPost/:id',PostController.GetPost);
module.exports = router;