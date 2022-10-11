const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.showAllUsers)
router.get('/:id', UserController.showUserByID)
router.post('/', UserController.createUser)
router.patch('/:id', UserController.modifyUserByID)

module.exports = router