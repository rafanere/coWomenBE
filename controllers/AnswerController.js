const Answer = require('../models/answerModel')

module.exports = class AnswerController {

    // Buscando todas as respostas
    static async showAllAnswers(req, res) {
        try {
            const answers = await Answer.find()
            res.json(answers)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    // Buscando uma resposta específica
    static async showAnswerByID(req, res) {
        try {
            const answers = await Answer.findById(req.params.id)
            if (answers == null) {
                return res.status(404).json({ message: 'Cannot find answer'})
            }
            res.json(answers)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    //Modificar dados de uma resposta
    static async modifyAnswerByID(req, res){
        try{
            const updatedAnswer = await Answer.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body.edited = true,
                    $set: req.body
                }
            )
            res.json(updatedAnswer)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    // Criando uma resposta
    static async createAnswer(req, res) {
        const answer = new Answer({
            answer: req.body.answer
        })
        try {
            const newAnswer = await answer.save()
            res.status(201).json(newAnswer)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

  

}