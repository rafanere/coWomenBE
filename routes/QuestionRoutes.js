const express = require('express')
const router = express.Router()
const QuestionController = require('../controllers/QuestionController')
const { verifyToken, verifyTokenAndBuyer } = require('../routes/VerifyToken')

router.get('/', verifyToken, QuestionController.showAllQuestions)
router.get('/:id', verifyToken, QuestionController.showQuestionByID)
router.post('/', verifyTokenAndBuyer, QuestionController.createQuestion)
router.put('/:id', verifyTokenAndBuyer, QuestionController.modifyQuestionByID)

module.exports = router