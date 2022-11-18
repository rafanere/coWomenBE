const mongoose = require('mongoose')

const adsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Título é obrigatorio'],
        index: true
    },
    description: {
        type: String,
        required: [true, 'Descrição é obrigatória'],
    },
    image: {
        type: String,
    },
    rangeOfPrice: {
        type: String,
        required: [true, 'Faixa de preço é obrigatória']
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    active: {
        type: Boolean, 
        default: true
    },
})

module.exports = mongoose.model('Ads', adsSchema)