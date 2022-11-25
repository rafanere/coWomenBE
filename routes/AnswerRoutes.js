const express = require('express')
const router = express.Router()
const AnswerController = require('../controllers/AnswerController')
const { verifyToken, verifyTokenAndSeller } = require('../routes/VerifyToken')

router.get('/', verifyToken, AnswerController.showAllAnswers)
router.get('/:id', verifyToken, AnswerController.showAnswerByID)
router.post('/', verifyTokenAndSeller, AnswerController.createAnswer)
router.put('/:id', verifyTokenAndSeller, AnswerController.modifyAnswerByID)

module.exports = router