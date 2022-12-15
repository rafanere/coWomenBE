const Question = require('../models/questionModel')

module.exports = class QuestionController {

    // Buscando todas as perguntas
    static async showAllQuestions(req, res) {
        try {
            const questions = await Question.find()
            res.json(questions)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    // Buscando uma pergunta específica
    static async showQuestionByID(req, res) {
        try {
            const questions = await Question.findById(req.params.id)
            if (questions == null) {
                return res.status(404).json({ message: 'Cannot find question'})
            }
            res.json(questions)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    //Modificar dados de uma pergunta
    static async modifyQuestionByID(req, res){
        try{
            const updatedQuestion = await Question.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body.edited = true,
                    $set: req.body
                }
            )
            res.json(updatedQuestion)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    // Criando uma pergunta
    static async createQuestion(req, res) {
        const question = new Question({
            question: req.body.question,
            idUser: req.body.idUser,
            idAds: req.body.idAds

        })
        try {
            const newQuestion = await question.save()
            res.status(201).json(newQuestion)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

  

}