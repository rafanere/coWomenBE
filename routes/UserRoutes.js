const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken");
const UserController = require('../controllers/UserController')
const AuthController = require('../controllers/AuthController')

console.log("Chegou no UserRoutes")


router.post('/login', AuthController.loginWithEmail)
router.get('/:id', UserController.getUser)
router.post('/create', UserController.createUser)
router.get('/', UserController.showAllUsers)
router.patch('/:id', UserController.modifyUserByID)

module.exports = router