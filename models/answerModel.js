const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: [true, 'Resposta para a pergunta é obrigatória'],
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
    }, 
    idQuestion: {
        type: String
    }        
})

module.exports = mongoose.model('Answer', answerSchema)