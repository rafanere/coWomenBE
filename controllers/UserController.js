const Users = require('../models/UserModel')

module.exports = class userController {

    // Buscando todos os usuários 
    static async showAllUsers(req, res) {
        try {
            const users = await Users.find()
            res.json(users)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    // Buscando um usuário específico 
    static async showUserByID(req, res) {
        try {
            const users = await Users.findById(req.params.id)
            if (users == null) {
                return res.status(404).json({ message: 'Cannot find user'})
            }
            res.json(users)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    //Modificar dados de um usuário
    static async modifyUserByID(req, res){
        try{
            const updatedUser = await res.user.save()
            res.json(updatedUser)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }


    // Criando um usuário
    static async createUser(req, res) {
        const user = new Users({
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            cellphone: req.body.cellphone,
            image: req.body.image,
            password: req.body.password,
        })
        try {
            const newUser = await user.save()
            res.status(201).json(newUser)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

  

}