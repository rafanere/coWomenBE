const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: [true, 'Nickname é obrigatorio'],
        index: true
    },
    name: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    lastname: {
        type: String,
        required: [true, 'Sobrenome é obrigatório'],
    },
    image: {
        type: String,
    },
    email: { 
        type: String,
        required: [true, 'E-mail é obrigatório']
    },
    password: {
        type: String,
        required: [true, 'Senha é obrigatória']
    },
    confirmpassword: {
        type: String,
        required: [true, 'Senha é obrigatória']
    }, 
    isSeller: {
        type: Boolean,
        default: false
    },
    isBuyer: {
        type: Boolean,
        default: false 
    }, 
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', UserSchema)