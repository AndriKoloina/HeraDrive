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

module.exports = {createLieu}