const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../routes/VerifyToken')

router.post('/login', UserController.loginWithEmail)
router.get('/:id', verifyTokenAndAuthorization, UserController.getUser)
router.post('/create', UserController.createUser)
router.get('/', verifyTokenAndAdmin, UserController.showAllUsers)
router.patch('/:id', verifyToken, UserController.modifyUserByID)


module.exports = router