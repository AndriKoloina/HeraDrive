const permisController = require('../controllers/permis.controller')
const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const route = express.Router()

route.post('/newPermis', authMiddleware(['administrateur', 'gestionnaire']), permisController.createPermis)

module.exports = route