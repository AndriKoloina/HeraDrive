const voitureService = require('../services/voiture.service')

const createCar = async(req, res) => {
    const {marque, modele, immatriculation} = req.body
    const existingCar = await voitureService.findByImmatriculation(immatriculation)
    if(existingCar) return res.status(400).json({message : "cette voiture existe déja"})
    const car = await voitureService.createCar(marque, modele, immatriculation)
    res.status(201).json({
        message : "Voiture créée",
        voiture: {
            id: car.id,
            marque : car.marque,
            modele: car.modele,
            immatriculation : car.immatriculation
        }
    })
}

module.exports = {createCar}