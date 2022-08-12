const router = require('express').Router()
const candidateController = require("../controllers/candidateController")
const middlewareController = require("../controllers/middlewareController")
const PostController = require("../controllers/postController")
router.get('/', candidateController.getAllCandidates)
router.get('/:id', candidateController.getCandidateById)
router.delete('/:id', candidateController.deleteCandidate)
router.post('/post', candidateController.addPost)
router.get('/allpost', candidateController.getAllPost)
router.get('/getpost/:id', candidateController.getPost)

module.exports = router