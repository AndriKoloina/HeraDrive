const permisService = require('../services/permis.service')

const createPermis = async (req, res) => {
    const {nom , description} = req.body
    const permis = await permisService.createPermis(nom, description)
    res.status(201).json({message : "Type crée avec succès"})
}

module.exports = { createPermis }