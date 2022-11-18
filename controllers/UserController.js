const bcrypt = require("bcrypt")
const User = require('../models/userModel')

module.exports = class UserController {

    // Criando um usuário
    static async createUser(req, res) {
        const userInicial = ({
            nickname: req.body.nickname,
            name: req.body.name,
            lastname: req.body.lastname,
            image: req.body.image,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        })
        console.log("CreateUser")
        try {
            const nicknameExists = await User.findOne({nickname: userInicial.nickname})
            // verifica a existência do nickname 
            
            if (nicknameExists) {
                return res.status(422).json({msg: "Nickname já foi utilizado. Por gentileza, utilize outro."})
            }

            // verifica a existência do usuario utilizando o email 
            const userExists = await User.findOne({email: userInicial.email})
            if (userExists) {
                return res.status(422).json({msg: "E-mail já encontra-se na base de dados."})
            }

            // verifica se a senha e a senha de confirmação são iguais
            if (userInicial.password != userInicial.confirmpassword){
                return res.status(422)
                .json({msg: "A senha e a confirmação da senha precisam ser iguais!"})
            } 

            // cria a senha
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(userInicial.password, salt)
            const confirmationPasswordHash = await bcrypt.hash(userInicial.confirmpassword, salt)
            
            /*console.log(user, salt, passwordHash)*/
            // cria o usuário
            const userFinal = new User({
                nickname: req.body.nickname,
                name: req.body.name,
                lastname: req.body.lastname,
                image: req.body.image,
                email: req.body.email,
                password: passwordHash,
                confirmpassword: confirmationPasswordHash
            }) 
            await userFinal.save()
            res.status(201).json(userFinal)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

    // Private Route
    static async getUser(req, res) {
        const id = req.params.id;
    // check if user exists
        const user = await User.findById(id, "-password");
        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }
        res.status(200).json({ user });
    }

        // Buscando todos os usuários 
    static async showAllUsers(req, res) {
        try {
            const users = await User.find()
            res.status(200).json(users)
            console.log(users)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    // Buscando um usuário específico 
    static async showLoginById(req, res) {
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

}