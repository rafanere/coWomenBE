const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require('../models/userModel')

module.exports = class AuthController {

    static async loginWithEmail(req, res) {
        const login = ({
            email: req.body.email,
            password: req.body.password
        })

        const user = await User.findOne({ email: login.email })
        // verifica a existência do email  
        if (!user) {
            return res.status(422).json({ msg: "O e-mail é obrigatório." })
        }

        const checkPassword = await bcrypt.compare(login.password, user.password)
        // compara a senha inserida com a senha do user
        if (!checkPassword) {
            return res.status(422).json({ msg: "Senha inválida" })
        }

        try {
            const secret = process.env.SECRET;

            const token = jwt.sign(
                {
                    id: user._id,
                },
                secret
            )

            res.status(200).json({ msg: "Autenticação realizada", token })
        } catch (error) {
            res.status(500).json({ msg: error })
        }

    }

}