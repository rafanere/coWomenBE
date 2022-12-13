const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    lastname: {
        type: String,
        required: [true, 'Sobrenome é obrigatório'],
    },
    cpfcnpj: {
        type: String,
        required: [true, 'CPF/CNPJ é obrigatório']
    },
    email: { 
        type: String,
        required: [true, 'E-mail é obrigatório']
    },
    password: {
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
        default: true
    }
})

module.exports = mongoose.model('User', UserSchema)