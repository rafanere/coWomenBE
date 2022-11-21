const express = require('express')
const router = express.Router()
const AdsController = require('../controllers/AdsController')

router.get('/', AdsController.showAllAds)
router.get('/:id', AdsController.showAdsByID)
router.post('/', AdsController.createAd)
router.put('/:id', AdsController.modifyAdsByID)

module.exports = router