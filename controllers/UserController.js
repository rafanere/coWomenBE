const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require('../models/userModel')

module.exports = class UserController {

    // Criando um usuário
    static async createUser(req, res) {
        const userInicial = ({
            name: req.body.name,
            lastname: req.body.lastname,
            cpfcnpj: req.body.cpfcnpj,
            email: req.body.email,
            password: req.body.password,
        })
        try {

            // verifica a existência do usuario utilizando o cpf ou cnpj
            const cpfcnpjExists = await User.findOne({email: userInicial.cpfcnpj})
            if (cpfcnpjExists) {
                return res.status(422).json({msg: "CPF/CNPJ inválido."})
            }

            // verifica a existência do usuario utilizando o email 
            const userExists = await User.findOne({email: userInicial.email})
            if (userExists) {
                return res.status(422).json({msg: "E-mail inválido."})
            }

            // cria a senha
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(userInicial.password, salt)

            // cria o usuário
            const userFinal = new User({
                name: req.body.name,
                lastname: req.body.lastname,
                cpfcnpj: req.body.cpfcnpj,
                email: req.body.email,
                password: passwordHash,
            }) 
                const secret = process.env.SECRET;
                const accessToken = jwt.sign(
                    {
                        id: userFinal._id,
                        email: userFinal.email
                    },
                    secret
                )
                await userFinal.save()
                res.status(201).json({ msg: "Usuário criado e autenticação realizada", userFinal, accessToken })

            } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }


    static async loginWithEmail (req, res) {
        const login = ({
            email: req.body.email,
            password: req.body.password
        })
        const user = await User.findOne({ email: login.email })
        // verifica a existência do email  
        if (!user) {
            return res.status(422).json({ msg: "E-mail inválido." })
        }
        const checkPassword = await bcrypt.compare(login.password, user.password)
        // compara a senha inserida com a senha do user
        if (!checkPassword) {
            return res.status(422).json({ msg: "Senha inválida" })
        }
        try {
            const secret = process.env.SECRET;
            const accessToken = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isSeller: user.isSeller,
                    isBuyer: user.isBuyer
                },
                secret
            )
            res.status(200).json({ msg: "Autenticação realizada", accessToken })
        } catch (error) {
            res.status(500).json({ msg: error })
        }
    }


    
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
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    // Buscando um usuário específico 
    static async showLoginBy(req, res) {
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