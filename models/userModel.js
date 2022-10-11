const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nome é obrigatório!'],
    },
    socialname: {
        type: String,
    },
    email: {
        type: String,
        index: true,
        required: [true, 'E-mail é obrigatório'],
    },
    nickname: {
        type: String,
        index: true,
        required: [true, 'NickName é obrigatório'],
    },
    cellphone: {
        type: String,
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        required: [true, 'Senha é obrigatória']
    },
})

module.exports = mongoose.model('Users', userSchema)