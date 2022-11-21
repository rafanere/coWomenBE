const express = require('express')
const router = express.Router()
const AnswerController = require('../controllers/AnswerController')

router.get('/', AnswerController.showAllAnswers)
router.get('/:id', AnswerController.showAnswerByID)
router.post('/', AnswerController.createAnswer)
router.put('/:id', AnswerController.modifyAnswerByID)

module.exports = router