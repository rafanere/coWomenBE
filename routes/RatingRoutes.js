const express = require('express')
const router = express.Router()
const RatingController = require('../controllers/RatingController')
const { verifyToken, verifyTokenAndBuyer} = require('../routes/VerifyToken')

router.get('/', verifyToken, RatingController.showAllRatings)
router.get('/:id', verifyToken, RatingController.showRatingByID)
router.post('/', verifyTokenAndBuyer, RatingController.createRating)
router.put('/:id', verifyTokenAndBuyer, RatingController.modifyRatingByID)

module.exports = router