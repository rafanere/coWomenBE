const express = require('express')
const router = express.Router()
const AdsController = require('../controllers/AdsController')
const { verifyToken, verifyTokenAndSeller } = require('../routes/VerifyToken')

router.get('/', verifyToken, AdsController.showAllAds)
router.get('/:id', verifyToken, AdsController.showAdsByID)
router.post('/', verifyTokenAndSeller, AdsController.createAd)
router.put('/:id', verifyTokenAndSeller, AdsController.modifyAdsByID)

module.exports = router