const Ratings = require('../models/ratingModel')

module.exports = class RatingController {

    // Buscando todas as avaliações
    static async showAllRatings(req, res) {
        try {
            const ratings = await Ratings.find()
            res.json(ratings)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    // Buscando uma avaliação específica
    static async showRatingByID(req, res) {
        try {
            const ratings = await Ratings.findById(req.params.id)
            if (ratings == null) {
                return res.status(404).json({ message: 'Cannot find rating'})
            }
            res.json(ratings)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    //Modificar dados de uma avaliação
    static async modifyRatingByID(req, res){
        try{
            const updatedRating = await Ratings.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body.edited = true,
                    $set: req.body
                }
            )
            res.json(updatedRating)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    // Criando uma avaliação
    static async createRating(req, res) {
        const rating = new Ratings({
            overview: req.body.overview,
            description: req.body.description,
            stars: req.body.stars,
        })
        try {
            const newRating = await rating.save()
            res.status(201).json(newRating)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

  

}