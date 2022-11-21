const express = require('express')
const router = express.Router()
const QuestionController = require('../controllers/QuestionController')

router.get('/', QuestionController.showAllQuestions)
router.get('/:id', QuestionController.showQuestionByID)
router.post('/', QuestionController.createQuestion)
router.put('/:id',QuestionController.modifyQuestionByID)

module.exports = router