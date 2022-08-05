const router = require('express').Router()
const candidateController = require("../controllers/candidateController")
const middlewareController = require("../controllers/middlewareController")

router.get('/', middlewareController.verifyToken, candidateController.getAllCandidates)
router.delete('/:id', middlewareController.verifyTokenAndAdmin, candidateController.deleteCandidate)

module.exports = router