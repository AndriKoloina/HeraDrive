const lieuService = require('../services/lieu.service');

const createLieu = async (req, res) => {
    const { nom, region } = req.body
    const existingLieu = await lieuService.findLieuByNomAndRegion(nom, region);
    if (existingLieu) {
        return res.status(400).json({ message: 'Un lieu avec ce nom existe déjà dans cette région.' })
    }
    const lieu = await lieuService.createLieu(nom, region);
    res.status(201).json({ message: 'Lieu créé avec succès', lieu })
}

const findAll = async(req, res) => {
    const result = await lieuService.findAll()
    res.status(200).json(result)                                                                                                  
}

module.exports = { createLieu, findAll}