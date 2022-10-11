const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    socialname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    cellphone: {
        type: String,
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Users', userSchema)