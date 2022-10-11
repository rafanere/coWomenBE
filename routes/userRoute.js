const express = require('express')
const router = express.Router()
const Users = require('../models/userModel')

// Buscando todos os usuários 
router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

// Buscando um usuário específico 
router.get('/:id', async (req, res) => {
    try{
        const users = await Users.findById()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



// Criando um usuário
router.post('/', async(req, res) => {
    const user = new Users({
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
        cellphone: req.body.cellphone,
        image: req.body.image,
        password: req.body.password,
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router
