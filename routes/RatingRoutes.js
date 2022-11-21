const express = require('express')
const router = express.Router()
const RatingController = require('../controllers/RatingController')

router.get('/', RatingController.showAllRatings)
router.get('/:id', RatingController.showRatingByID)
router.post('/', RatingController.createRating)
router.put('/:id', RatingController.modifyRatingByID)

module.exports = router