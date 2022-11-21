const mongoose = require('mongoose')

const ratingSchema   = new mongoose.Schema({
    overview: {
        type: String,
        required: [true, 'Título é obrigatorio'],
        index: true
    },
    description: {
        type: String,
        required: [true, 'Descrição é obrigatória'],
    },
    stars: {
        type: String,
        required: [true, 'Nota é obrigatória'],
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

module.exports = mongoose.model('Ratings', ratingSchema)