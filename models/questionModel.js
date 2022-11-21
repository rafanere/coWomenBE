const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Pergunta é obrigatória'],
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    active: {
        type: Boolean, 
        default: true
    },
    edited: {
        type: Boolean, 
        default: false
    },
    idUser: {
        type: String,
    }, 
    idAds: {
        type: String,
    }
})

module.exports = mongoose.model('Question', questionSchema)