const router = require('express').Router()
const candidateController = require("../controllers/candidateController")

router.post('/register/candidate', candidateController.addCandidate)
router.get('/login/candidate/:id', candidateController.getCandidateById)
router.patch('/update/candidate/:id', candidateController.updateCandidate)
router.delete('/delete/candidate/:id', candidateController.deleteCandidate)

module.exports = router