const lieuController = require('../controllers/lieu.controller')
const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const route = express.Router()

route.post('/newLieu', authMiddleware(['administrateur','gestionnaire']), lieuController.createLieu )

module.exports = route