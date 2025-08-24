const chauffeurController = require('../controllers/chauffeur.controller')
const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const route = express.Router()

route.post('/newDriver', authMiddleware(['administrateur','gestionnaire']), chauffeurController.createDriver)

module.exports = route