const Ads = require('../models/adsModel')

module.exports = class AdsController {

    // Buscando todos os usuários 
    static async showAllAds(req, res) {
        try {
            const ads = await Ads.find()
            res.json(ads)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    // Buscando um usuário específico 
    static async showAdsByID(req, res) {
        try {
            const ads = await Ads.findById(req.params.id)
            if (ads == null) {
                return res.status(404).json({ message: 'Cannot find ads'})
            }
            res.json(ads)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    //Modificar dados de um usuário
    static async modifyAdsByID(req, res){
        try{
            const updatedAd = await res.ads.save()
            res.json(updatedAd)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }


    // Criando um usuário
    static async createAd(req, res) {
        const ads = new Ads({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            rangeOfPrice: req.body.rangeOfPrice,
            
        })
        try {
            const newAd = await ads.save()
            res.status(201).json(newAd)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

  

}