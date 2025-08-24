const chauffeurService = require('../services/chauffeur.service')

const createDriver = async(req, res) => {
    const {nom, prenom, phone, permis, cin, photo} = req.body
    const existingDriver = await chauffeurService.findByCin(cin)
    if(existingDriver) return res.status(400).json({message : "ce chauffeur existe déjà"})
    const driver = await chauffeurService.createDriver(nom, prenom,phone, permis, cin, photo)

    res.status(201).json({
        message : "Nouveau chauffeur ajouté",
        chauffeur : {
            id: driver.id,
            nom: driver.nom,
            prenom: driver.prenom,
            phone: driver.phone,
            permis: driver.permis,
            cin: driver.cin,
            photo: driver.photo
        }
    })
}

module.exports= { createDriver}