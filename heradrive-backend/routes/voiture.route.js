const voitureController = require('../controllers/voiture.controller')
const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const route = express.Router()

route.post('/register',authMiddleware(['administrateur','gestionnaire']), voitureController.createCar)

module.exports = route